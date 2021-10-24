import {
  Amplifier,
  AmplifierDescriptor,
  Context,
  Entity,
  EntityBase,
  EntitySubType,
  EntityType,
  HqtfD,
  IdentifierAttributeGroup,
  Modifier,
  SicElements,
  StandardIdentity,
  Status,
  SYMBOL_DATA,
  SymbolSet,
} from "../jmsml/types";

export class Sic implements SicElements {
  version: string;
  context: string;
  standardIdentity: string;
  symbolSet: string;
  status: string;
  hqtfd: string;
  amplifier: string;
  amplifierDescriptor: string;
  entity: string;
  entityType: string;
  entitySubType: string;
  modifierOne: string;
  modifierTwo: string;

  constructor(private sic: string) {
    this.version = sic.substr(0, 2);
    this.context = sic.substr(2, 1);
    this.standardIdentity = sic.substr(3, 1);
    this.symbolSet = sic.substr(4, 2);
    this.status = sic.substr(6, 1);
    this.hqtfd = sic.substr(7, 1);
    this.amplifier = sic.substr(8, 1);
    this.amplifierDescriptor = sic.substr(9, 1);
    this.entity = sic.substr(10, 2);
    this.entityType = sic.substr(12, 2);
    this.entitySubType = sic.substr(14, 2);
    this.modifierOne = sic.substr(16, 2);
    this.modifierTwo = sic.substr(18, 2);
  }

  toString() {
    return (
      this.version +
      this.context +
      this.standardIdentity +
      this.symbolSet +
      this.status +
      this.hqtfd +
      this.amplifier +
      this.amplifierDescriptor +
      this.entity +
      this.entityType +
      this.entitySubType +
      this.modifierOne +
      this.modifierTwo
    );
  }
}

export class SicObject {
  sic!: Sic;
  context?: Context;
  standardIdentity?: StandardIdentity;
  symbolSet?: SymbolSet;
  status!: Status;
  hqtfd!: HqtfD;
  amplifier!: Amplifier;
  amplifierDescriptor!: AmplifierDescriptor;
  entity!: Entity | null;
  entityType!: EntityType | null;
  entitySubType!: EntitySubType | null;
  modifierOne!: Modifier;
  modifierTwo!: Modifier;
  currentEntity!: EntityBase | null;
  specialFn!: string;
  entityFn!: string;
  frameFn!: string;
  statusFn!: string;
  hqtfdFn!: string;
  amplifierFn!: string;
  modifierOneFn!: string;
  modifierTwoFn!: string;

  constructor(
    sic: string | Sic,
    public alternativeAmplifiers = false,
    public useCivilianFrame = false
  ) {
    if (typeof sic === "string") {
      if (sic.length !== 20) {
        console.error("Invalid SIC length", sic);
        return;
      }
      this.sic = new Sic(sic);
    } else {
      this.sic = sic;
    }

    this.extractObjects(this.sic);
    // Get main icon
    this.currentEntity = this.entitySubType || this.entityType || this.entity;
    this.getFilePaths();
  }

  private extractObjects(sic: Sic) {
    this.context = findSymbolObject(SYMBOL_DATA.contexts, sic.context);
    this.standardIdentity = findSymbolObject(
      SYMBOL_DATA.standardIdentities,
      sic.standardIdentity
    );
    this.symbolSet = findSymbolObject(SYMBOL_DATA.symbolSets, sic.symbolSet);
    this.status = findSymbolObject(SYMBOL_DATA.statuses, sic.status);
    this.hqtfd = findSymbolObject(SYMBOL_DATA.hqtfDummies, sic.hqtfd);
    this.amplifier = findSymbolObject(SYMBOL_DATA.amplifiers, sic.amplifier);
    if (this.amplifier) {
      this.amplifierDescriptor = findSymbolObject(
        this.amplifier.descriptors,
        sic.amplifierDescriptor
      );
    } else {
      this.amplifierDescriptor = null;
    }

    this.entity = findSymbolObject(this.symbolSet.entities, sic.entity);

    if (sic.entityType !== "00") {
      this.entityType = findSymbolObject(
        this.entity.entityTypes,
        sic.entityType
      );
      if (sic.entitySubType !== "00") {
        var subtypes;
        if (this.symbolSet.specialEntitySubTypes) {
          subtypes = this.entityType.entitySubTypes.concat(
            this.symbolSet.specialEntitySubTypes
          );
        } else {
          subtypes = this.entityType.entitySubTypes;
        }
        if (subtypes.length > 0) {
          this.entitySubType = findSymbolObject(subtypes, sic.entitySubType);
        } else {
          this.entitySubType = null;
        }
      } else {
        this.entitySubType = null;
      }
    } else {
      this.entityType = null;
    }
    this.modifierOne = findSymbolObject(
      this.symbolSet.sectorOneModifiers,
      sic.modifierOne
    );
    this.modifierTwo = findSymbolObject(
      this.symbolSet.sectorTwoModifiers,
      sic.modifierTwo
    );
    // Get main icon
    this.currentEntity = this.entitySubType || this.entityType || this.entity;
  }

  private getFilePaths() {
    if (this.currentEntity && this.currentEntity.icon == "SPECIAL") {
      this.specialFn = PathService.getEntityFilePath(this) || BLANK_PATH;
      this.currentEntity = this.entityType;
    } else {
      this.specialFn = BLANK_PATH;
    }
    this.entityFn = PathService.getEntityFilePath(this) || BLANK_PATH;
    // Get frame
    if (!this.context) {
      return;
    }
    let contextId = this.context.id;
    let siId = this.standardIdentity.id;
    let entity = this.currentEntity;

    if (entity && entity.id == "OWN_SHIP") {
      this.frameFn = BLANK_PATH;
    } else {
      this.frameFn = PathService.getFrameFilePath(this) || BLANK_PATH;
    }
    this.hqtfdFn = PathService.getHqtfdFilePath(this) || BLANK_PATH;
    this.statusFn = PathService.getStatusFilePath(this) || BLANK_PATH;
    this.amplifierFn = PathService.getAmplifierFilePath(this) || BLANK_PATH;
    this.modifierOneFn = PathService.getModifierOneFilePath(this) || BLANK_PATH;
    this.modifierTwoFn = PathService.getModifierTwoFilePath(this) || BLANK_PATH;
  }
}

/**
 * Do a binary search for a symbol object
 */
function findSymbolObject(
  arr: IdentifierAttributeGroup[],
  digits: string
): IdentifierAttributeGroup | undefined {
  let beginning = 0,
    end = arr.length,
    target;
  if (!end) {
    return;
  }
  while (true) {
    target = (beginning + end) >> 1;
    if (
      (target === end || target === beginning) &&
      arr[target].digits !== digits
    ) {
      return;
    }
    if (arr[target].digits > digits) {
      end = target;
    } else if (arr[target].digits < digits) {
      beginning = target;
    } else {
      return arr[target];
    }
  }
}

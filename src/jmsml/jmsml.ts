/**
 * Typescript wrapper of the Joint Military Symbolic Markup Language (JMSML)
 */

const config = {
    BLANK_PATH: "assets/img/blank.png",
    SVG_PATH: "svg/MIL_STD_2525D_Symbols/"
};

export type GeometryType = "NA" | "POINT" | "LINE" | "AREA" | "MIXED";

export type IconType = "NA" | "MAIN" | "MAIN_1" | "MAIN_2" | "FULL_OCTAGON" | "FULL_FRAME" | "SPECIAL";

interface IdentifierAttributeGroup {
    id: string;
    label?: string;
    labelAlias?: string;
    description?: string;
    remarks?: string;
}

interface FramedGraphicIdentifierAttributeGroup extends IdentifierAttributeGroup {
    graphic?: string;
    alternativeGraphic?: string;
    circleGraphic?: string;
    cloverGraphic?: string;
    CurveGraphic?: string;
    diamondGraphic?: string;
    rectangleGraphic?: string;
    squareGraphic?: string;
    drawRuleID?: string;
    drawNote?: string;
    icon?: IconType;
    isCivilian?: boolean;
    standard?: string;
    IsAlignable: boolean;
}

export interface SymbolSet extends IdentifierAttributeGroup {
    digits: string;
    dimensionId: string;
    geometry: GeometryType;
    entities: Entity[];
    specialEntitySubTypes: EntitySubType[];
    sectorOneModifiers: Modifier[];
    sectorTwoModifiers: Modifier[];
    graphicFolder: {};
}

interface EntityBase extends FramedGraphicIdentifierAttributeGroup {
    digits: string;
    geometryType: GeometryType;
}

export interface Entity extends EntityBase {
    entityTypes: EntityType[]
}

export interface EntityType extends EntityBase {
    entitySubTypes: EntitySubType[];
}

export interface EntitySubType extends EntityBase {
    /* Not used yet
     entityCode?: string;
     entityTypeCode?: string;
     */
};

export interface Modifier extends IdentifierAttributeGroup {
    digits: string;
    graphic?: string;
}

export interface Amplifier extends IdentifierAttributeGroup {
    digits: string;
    descriptors: {}[]
}

export interface StandardIdentity extends IdentifierAttributeGroup {
    digits: string;
}

export interface Context extends IdentifierAttributeGroup {
    digits: string;
}

export interface HqtfD extends IdentifierAttributeGroup {
    digits: string;
    graphics: EntityBase[];
}

export interface Status extends IdentifierAttributeGroup {
    digits: string;
    graphic: string;
    graphics: {}[];
}

export interface AmplifierDescriptor extends IdentifierAttributeGroup {

    graphics: EntityBase[];
}

export interface SymbolData {
    standardIdentities: StandardIdentity[];
    symbolSets: SymbolSet[];
    contexts: Context[];
    statuses: Status[];
    hqtfDummies: HqtfD[];
    amplifiers: Amplifier[];
    affiliations: {}[];
    dimensions: any;
    standardIdentityGroupMapping: any;
}

export interface FramesData {
    dimensions?: any;
    standardIdentities?: StandardIdentity[];
    contexts?: Context[];
}

interface SicElements {
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
}

export class Sic implements SicElements {
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
}


var standardIdentityMap = {
    "0": "cloverGraphic",
    "1": "cloverGraphic",
    "2": "rectangleGraphic",
    "3": "rectangleGraphic",
    "4": "squareGraphic",
    "5": "diamondGraphic",
    "6": "diamondGraphic"
};

var standardIdentityMap2 = {
    "SI_PENDING": "cloverGraphic",
    "SI_UNKNOWN": "cloverGraphic",
    "SI_ASSUMED_FRIEND": "rectangleGraphic",
    "SI_FRIEND": "rectangleGraphic",
    "SI_NEUTRAL": "squareGraphic",
    "SI_SUSPECT_JOKER": "diamondGraphic",
    "SI_HOSTILE_FAKER": "diamondGraphic"
};



/**
 * Do a binary search for a symbol object
 */
function findSymbolObject(arr: Array<any>, digits: string) {
    var beginning = 0, end = arr.length,
        target;
    if (!end) {
        return null
    }
    while (true) {
        target = ((beginning + end) >> 1);
        if ((target === end || target === beginning) && arr[target].digits !== digits) {
            return null;
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

export class SicObject {
    sic: Sic;
    context: Context;
    standardIdentity: StandardIdentity;
    symbolSet: SymbolSet;
    statusObj: Status;
    hqtfdObj: HqtfD;
    amplifier: Amplifier;
    amplifierDescriptorObj: AmplifierDescriptor;
    entity: Entity;
    entityType: EntityType;
    entitySubType: EntitySubType;
    modifierOne: Modifier;
    modifierTwo: Modifier;
    currentEntity: EntityBase;
    specialFn: string;
    entityFn: string;
    frameFn: string;
    statusFn: string;
    hqtfdFn: string;
    amplifierFn: string;
    modifierOneFn: string;
    modifierTwoFn: string;

    constructor(sic: string, public alternativeAmplifiers = false, public useCivilianFrame = false) {
        if (sic.length !== 20) {
            console.error("Invalid SIC length", sic)
        }
        this.sic = new Sic(sic);
        this.extractObjects(this.sic);
        // Get main icon
        this.currentEntity = this.entitySubType || this.entityType || this.entity;
        this.getFilePaths();


        //this.standardIdentityObj = findSymbolObject(symbolData.standardIdentities, this.standardIdentity);
    }

    private extractObjects(sic: Sic) {
        this.context = findSymbolObject(symbolData.contexts, sic.context);
        this.standardIdentity = findSymbolObject(symbolData.standardIdentities, sic.standardIdentity);
        this.symbolSet = findSymbolObject(symbolData.symbolSets, sic.symbolSet);
        this.statusObj = findSymbolObject(symbolData.statuses, sic.status);
        this.hqtfdObj = findSymbolObject(symbolData.hqtfDummies, sic.hqtfd);
        this.amplifier = findSymbolObject(symbolData.amplifiers, sic.amplifier);
        if (this.amplifier) {
            this.amplifierDescriptorObj = findSymbolObject(this.amplifier.descriptors, sic.amplifierDescriptor);
        } else {
            this.amplifierDescriptorObj = null;
        }

        this.entity = findSymbolObject(this.symbolSet.entities, sic.entity);

        if (sic.entityType !== '00') {
            this.entityType = findSymbolObject(this.entity.entityTypes, sic.entityType);
            if (sic.entitySubType !== '00') {
                var subtypes;
                if (this.symbolSet.specialEntitySubTypes) {
                    subtypes = this.entityType.entitySubTypes.concat(this.symbolSet.specialEntitySubTypes);
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
        this.modifierOne = findSymbolObject(this.symbolSet.sectorOneModifiers, sic.modifierOne);
        this.modifierTwo = findSymbolObject(this.symbolSet.sectorTwoModifiers, sic.modifierTwo);
        // Get main icon
        this.currentEntity = this.entitySubType || this.entityType || this.entity;
    }

    private getFilePaths() {
        if (this.currentEntity && this.currentEntity.icon == 'SPECIAL') {
            this.specialFn = PathService.getEntityFilePath(this) || config.BLANK_PATH;
            this.currentEntity = this.entityType;

        } else {
            this.specialFn = config.BLANK_PATH;
        }
        this.entityFn = PathService.getEntityFilePath(this) || config.BLANK_PATH;
        // Get frame
        if (!this.context) {
            return;
        }
        let contextId = this.context.id;
        let siId = this.standardIdentity.id;
        let entity = this.currentEntity;


        if (entity && entity.id == 'OWN_SHIP') {
            this.frameFn = config.BLANK_PATH;
        } else {
            this.frameFn = PathService.getFrameFilePath(this) || config.BLANK_PATH;
        }
        this.hqtfdFn = PathService.getHqtfdFilePath(this) || config.BLANK_PATH;
        this.statusFn = PathService.getStatusFilePath(this) || config.BLANK_PATH;
        this.amplifierFn = PathService.getAmplifierFilePath(this) || config.BLANK_PATH;
        this.modifierOneFn = PathService.getModifierOneFilePath(this) || config.BLANK_PATH;
        this.modifierTwoFn = PathService.getModifierTwoFilePath(this) || config.BLANK_PATH;
    }
}


export class PathService {
    static getEntityFilePath(sic: SicObject): string {
        var fn = "";
        let entity = sic.currentEntity;
        if (entity) {
            if (entity.icon === 'FULL_FRAME' || sic.currentEntity.icon === 'SPECIAL') {
                fn = sic.currentEntity[standardIdentityMap2[sic.standardIdentity.id]];
            } else {
                if (sic.alternativeAmplifiers) {
                    fn = entity.alternativeGraphic || entity.graphic;
                } else {
                    fn = sic.currentEntity.graphic;
                }
            }
        }
        return fn ? config.SVG_PATH + sic.symbolSet.graphicFolder["entities"] + "/" + fn : null;
    }

    static getFrameFilePath(sic: SicObject): string {
        let dimensionId = sic.symbolSet.dimensionId,
            fn = "";
        let contextId = sic.context.id;
        let standardIdentityId = sic.standardIdentity.id;
        if (dimensionId && contextId && standardIdentityId) {
            let a1 = symbolData.affiliations[contextId];
            if (a1) {
                let a2 = a1[dimensionId];
                if (a2 && a2[standardIdentityId]) {
                    let a3 = a2[standardIdentityId];
                    if (sic.statusObj.id && sic.statusObj.digits == "1") {
                        if (sic.useCivilianFrame && a3.plannedCivilianGraphic) {
                            fn = a3.plannedCivilianGraphic;
                        } else {
                            if (a3.plannedGraphic) {
                                fn = a3.plannedGraphic;
                            } else {
                                console.warn('Missing plannedGraphics. Using graphic instead.');
                                fn = a3.graphic;
                            }
                        }
                    } else {
                        if (sic.useCivilianFrame && a3.civilianGraphic) {
                            fn = a3.civilianGraphic;
                        } else {
                            fn = a3.graphic;
                        }
                    }
                }
            }
        }
        return fn ? config.SVG_PATH + fn : null;
    }

    static getHqtfdFilePath(sic: SicObject) {
        var dimensionId = sic.symbolSet.dimensionId,
            fn = "";
        let standardIdentityId = sic.standardIdentity.id;
        if (dimensionId && sic.hqtfdObj && standardIdentityId && sic.hqtfdObj.graphics) {
            var sig = sic.hqtfdObj.graphics[symbolData.standardIdentityGroupMapping[standardIdentityId]];
            if (sig) {
                var dim = sig[dimensionId];
                fn = dim ? dim.graphic : null;
            }
        }
        return fn ? config.SVG_PATH + fn : null;
    }

    static getStatusFilePath(sic: SicObject) {
        let dimensionId = sic.symbolSet.dimensionId,
            fn = "";
        if (sic.alternativeAmplifiers) {
            if (dimensionId && sic.statusObj && sic.standardIdentity.id && sic.statusObj.graphics) {
                var sig = sic.statusObj.graphics[symbolData.standardIdentityGroupMapping[sic.standardIdentity.id]];
                if (sig) {
                    var dim = sig[dimensionId];
                    fn = dim ? dim.graphic : null;
                }
            }
        } else {
            fn = sic.statusObj.graphic;
        }
        return fn ? config.SVG_PATH + fn : null;
    }

    static getAmplifierFilePath(sic: SicObject) {
        var fn = "";
        if (sic.symbolSet.geometry == "MIXED") {
            return null;
        }
        if (sic.standardIdentity.id && sic.amplifierDescriptorObj && sic.amplifierDescriptorObj.graphics) {
            var sig = sic.amplifierDescriptorObj.graphics[symbolData.standardIdentityGroupMapping[sic.standardIdentity.id]];
            fn = sig ? sig.graphic : null;
        }
        return fn ? config.SVG_PATH + fn : null;
    }


    static getModifierOneFilePath(sic: SicObject) {
        let fn = sic.modifierOne ? sic.modifierOne.graphic : "";
        return fn ? config.SVG_PATH + sic.symbolSet.graphicFolder["modifierOnes"] + "/" + fn : null;
    }


    static getModifierTwoFilePath(sic: SicObject) {
        var fn = sic.modifierTwo ? sic.modifierTwo.graphic : "";
        return fn ? config.SVG_PATH + sic.symbolSet.graphicFolder["modifierTwos"] + "/" + fn : null;
    }

    static getBoundingOctagonFilePath(symbolSetObj: SymbolSet) {
        if (symbolSetObj.id == "SS_AIR_MISSILE" || symbolSetObj.id == "SS_SPACE_MISSILE") {
            return "assets/img/BoundingOctagonVertical.svg";
        } else {
            return "assets/img/BoundingOctagonHorizontal.svg";
        }

    }

}


export const symbolData = <SymbolData>require("./jmsml.json");



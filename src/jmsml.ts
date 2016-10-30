/**
 * Typescript wrapper of the Joint Military Symbolic Markup Language (JMSML)
 */

const config = {
    BLANK_PATH: "assets/img/blank.png",
    SVG_PATH: "svg/MIL_STD_2525D_Symbols/"
}

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
    specialEntitySubTypes: SpecialEntitySubType[];
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

export interface SpecialEntitySubType extends EntitySubType { };

export interface Modifier extends IdentifierAttributeGroup {
    graphic?: string;
}

export interface Amplifier extends EntityBase {
    descriptors: {}[]
}

export interface StandardIdentity {
    digits: string;
    label: string;
    id: string;
}

export interface Context extends EntityBase {

}

export interface HqtfD extends EntityBase {
    graphics: EntityBase[];
}

export interface Status extends EntityBase {
    graphics: EntityBase[];
}

export interface AmplifierDescriptor extends EntityBase {
    graphics: EntityBase[];
}

export interface SymbolData {
    standardIdentities: StandardIdentity[];
    symbolSets: SymbolSet[];
    contexts: Context[];
    statuses: Status[];
    hqtfDummies: HqtfD[];
    amplifiers: Amplifier[];
    affiliations: {}[]
    standardIdentityGroupMapping: any;
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
function findSymbolObject(arr, digits) {
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
    contextObj: Context;
    standardIdentityObj: StandardIdentity;
    symbolSetObj: SymbolSet;
    statusObj: Status;
    hqtfdObj: HqtfD;
    amplifierObj: Amplifier;
    amplifierDescriptorObj: AmplifierDescriptor;
    entityObj: Entity;
    entityTypeObj: EntityType;
    entitySubTypeObj: EntitySubType;
    modifierOneObj: Modifier;
    modifierTwoObj: Modifier;
    entity: EntityBase;
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
        this.entity = this.entitySubTypeObj || this.entityTypeObj || this.entityObj;
        this.getFilePaths();


        //this.standardIdentityObj = findSymbolObject(symbolData.standardIdentities, this.standardIdentity);
    }
    private extractObjects(sic: Sic) {
        this.contextObj = findSymbolObject(symbolData.contexts, sic.context);
        this.standardIdentityObj = findSymbolObject(symbolData.standardIdentities, sic.standardIdentity);
        this.symbolSetObj = findSymbolObject(symbolData.symbolSets, sic.symbolSet);
        this.statusObj = findSymbolObject(symbolData.statuses, sic.status);
        this.hqtfdObj = findSymbolObject(symbolData.hqtfDummies, sic.hqtfd);
        this.amplifierObj = findSymbolObject(symbolData.amplifiers, sic.amplifier);
        if (this.amplifierObj) {
            this.amplifierDescriptorObj = findSymbolObject(this.amplifierObj.descriptors, sic.amplifierDescriptor);
        } else {
            this.amplifierDescriptorObj = null;
        }

        this.entityObj = findSymbolObject(this.symbolSetObj.entities, sic.entity);

        if (sic.entityType !== '00') {
            this.entityTypeObj = findSymbolObject(this.entityObj.entityTypes, sic.entityType);
            if (sic.entitySubType !== '00') {
                var subtypes;
                if (this.symbolSetObj.specialEntitySubTypes) {
                    subtypes = this.entityTypeObj.entitySubTypes.concat(this.symbolSetObj.specialEntitySubTypes);
                } else {
                    subtypes = this.entityTypeObj.entitySubTypes;
                }
                if (subtypes.length > 0) {
                    this.entitySubTypeObj = findSymbolObject(subtypes, sic.entitySubType);
                } else {
                    this.entitySubTypeObj = null;
                }
            } else {
                this.entitySubTypeObj = null;
            }
        } else {
            this.entityTypeObj = null;
        }
        this.modifierOneObj = findSymbolObject(this.symbolSetObj.sectorOneModifiers, sic.modifierOne);
        this.modifierTwoObj = findSymbolObject(this.symbolSetObj.sectorTwoModifiers, sic.modifierTwo);
        // Get main icon
        this.entity = this.entitySubTypeObj || this.entityTypeObj || this.entityObj;
    }

    private getFilePaths() {
        if (this.entity && this.entity.icon == 'SPECIAL') {
            this.specialFn = PathService.getEntityFilePath(this) || config.BLANK_PATH;
            this.entity = this.entityTypeObj;

        } else {
            this.specialFn = config.BLANK_PATH;
        }
        this.entityFn = PathService.getEntityFilePath(this) || config.BLANK_PATH;
        // Get frame
        if (!this.contextObj) {
            return;
        }
        let contextId = this.contextObj.id;
        let siId = this.standardIdentityObj.id;
        let entity = this.entity;


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
        let entity = sic.entity;
        if (entity) {
            if (entity.icon === 'FULL_FRAME' || sic.entity.icon === 'SPECIAL') {
                fn = sic.entity[standardIdentityMap2[sic.standardIdentityObj.id]];
            } else {
                if (sic.alternativeAmplifiers) {
                    fn = entity.alternativeGraphic || entity.graphic;
                } else {
                    fn = sic.entity.graphic;
                }
            }
        }
        return fn ? config.SVG_PATH + sic.symbolSetObj.graphicFolder["entities"] + "/" + fn : null;
    }

    static getFrameFilePath(sic: SicObject): string {
        let dimensionId = sic.symbolSetObj.dimensionId,
            fn = "";
        let contextId = sic.contextObj.id;
        let standardIdentityId = sic.standardIdentityObj.id;
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
        var dimensionId = sic.symbolSetObj.dimensionId,
            fn = "";
        let standardIdentityId = sic.standardIdentityObj.id;
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
        let dimensionId = sic.symbolSetObj.dimensionId,
            fn = "";
        if (sic.alternativeAmplifiers) {
            if (dimensionId && sic.statusObj && sic.standardIdentityObj.id && sic.statusObj.graphics) {
                var sig = sic.statusObj.graphics[symbolData.standardIdentityGroupMapping[sic.standardIdentityObj.id]];
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
        if (sic.symbolSetObj.geometry == "MIXED") {
            return null;
        }
        if (sic.standardIdentityObj.id && sic.amplifierDescriptorObj && sic.amplifierDescriptorObj.graphics) {
            var sig = sic.amplifierDescriptorObj.graphics[symbolData.standardIdentityGroupMapping[sic.standardIdentityObj.id]];
            fn = sig ? sig.graphic : null;
        }
        return fn ? config.SVG_PATH + fn : null;
    }


    static getModifierOneFilePath(sic: SicObject) {
        let fn = sic.modifierOneObj ? sic.modifierOneObj.graphic : "";
        return fn ? config.SVG_PATH + sic.symbolSetObj.graphicFolder["modifierOnes"] + "/" + fn : null;
    }


    static getModifierTwoFilePath(sic: SicObject) {
        var fn = sic.modifierTwoObj ? sic.modifierTwoObj.graphic : "";
        return fn ? config.SVG_PATH + sic.symbolSetObj.graphicFolder["modifierTwos"] + "/" + fn : null;
    }

    static getBoundingOctagonFilePath(symbolSetObj: SymbolSet) {
        if (symbolSetObj.id == "SS_AIR_MISSILE" || symbolSetObj.id == "SS_SPACE_MISSILE") {
            return "assets/img/BoundingOctagonVertical.svg";
        } else {
            return "assets/img/BoundingOctagonHorizontal.svg";
        }

    }

}

export var symbolData = <SymbolData>require("./data/jmsml.json");


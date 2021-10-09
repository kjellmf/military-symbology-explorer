/**
 * Typescript wrapper of the Joint Military Symbolic Markup Language (JMSML)
 */

export const SVG_PATH = "/svg/";
import _SYMBOL_DATA from "./jmsml.json";
export const SYMBOL_DATA = _SYMBOL_DATA as unknown as SymbolData;

export type GeometryType = "NA" | "POINT" | "LINE" | "AREA" | "MIXED";

export type IconType =
  | "NA"
  | "MAIN"
  | "MAIN_1"
  | "MAIN_2"
  | "FULL_OCTAGON"
  | "FULL_FRAME"
  | "SPECIAL";

export interface IdentifierAttributeGroup {
  id: string;
  digits: string;
  label?: string;
  labelAlias?: string;
  description?: string;
  remarks?: string;
}

interface FramedGraphicIdentifierAttributeGroup
  extends IdentifierAttributeGroup {
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
  IsAlignable?: boolean;
}

export interface SymbolSet extends IdentifierAttributeGroup {
  digits: string;
  dimensionId: string;
  geometry: GeometryType;
  entities: Entity[];
  specialEntitySubTypes?: EntitySubType[];
  sectorOneModifiers: Modifier[];
  sectorTwoModifiers: Modifier[];
  graphicFolder: {};
}

export interface EntityBase extends FramedGraphicIdentifierAttributeGroup {
  digits: string;
  geometryType?: GeometryType;
}

export interface Entity extends EntityBase {
  entityTypes: EntityType[];
}

export interface EntityType extends EntityBase {
  entitySubTypes: EntitySubType[];
}

export type EntitySubType = EntityBase;

export interface Modifier extends IdentifierAttributeGroup {
  digits: string;
  graphic?: string;
  category?: string;
  limitUseTo?: string[];
}

export interface Amplifier extends IdentifierAttributeGroup {
  digits: string;
  descriptors: any[];
}

export interface StandardIdentity extends IdentifierAttributeGroup {
  digits: string;
}

export interface Context extends IdentifierAttributeGroup {
  digits: string;
}

export interface HqtfD extends IdentifierAttributeGroup {
  digits: string;
  graphics?: any;
}

export interface Status extends IdentifierAttributeGroup {
  digits: string;
  graphic?: string;
  graphics?: any;
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

export interface SicElements {
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
}

export function parseSic(sic: string): SicElements {
  return {
    version: sic.substr(0, 2),
    context: sic.substr(2, 1),
    standardIdentity: sic.substr(3, 1),
    symbolSet: sic.substr(4, 2),
    status: sic.substr(6, 1),
    hqtfd: sic.substr(7, 1),
    amplifier: sic.substr(8, 1),
    amplifierDescriptor: sic.substr(9, 1),
    entity: sic.substr(10, 2),
    entityType: sic.substr(12, 2),
    entitySubType: sic.substr(14, 2),
    modifierOne: sic.substr(16, 2),
    modifierTwo: sic.substr(18, 2),
  };
}

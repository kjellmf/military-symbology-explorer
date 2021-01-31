/**
 * Typescript wrapper of the Joint Military Symbolic Markup Language (JMSML)
 */

export const SVG_PATH = "/svg/";
export const SYMBOL_DATA = <SymbolData>require("./jmsml.json");
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
  specialEntitySubTypes: EntitySubType[];
  sectorOneModifiers: Modifier[];
  sectorTwoModifiers: Modifier[];
  graphicFolder: {};
}

export interface EntityBase extends FramedGraphicIdentifierAttributeGroup {
  digits: string;
  geometryType: GeometryType;
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

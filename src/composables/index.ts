import { computed } from "vue";
import { Entity, EntitySubType, EntityType } from "../jmsml/types";

export function useEntityPathData({
  entity,
  entityType,
  entitySubType,
  entitiesPath,
}: {
  entity: Entity;
  entityType: EntityType;
  entitySubType: EntitySubType;
  entitiesPath: string;
}) {
  const cEntity = computed(() => entitySubType || entityType || entity);
  const eCode = computed(() => entity.digits || "00");
  const etCode = computed(() => entityType?.digits || "00");
  const etsCode = computed(() => entitySubType?.digits || "00");
  const codes = computed(() => {
    const { digits: eCode = "00" } = entity;
    const { digits: etCode = "00" } = entityType || {};
    const { digits: etsCode = "00" } = entitySubType || {};
    return `${eCode}${etCode}${etsCode}`;
  });

  const eClass = computed(() => {
    return entityType || entitySubType
      ? undefined
      : "font-medium text-gray-900";
  });

  const etClass = computed(
    () => entityType && !entitySubType && "font-medium text-gray-900"
  );

  const etsClass = computed(() => entitySubType && "font-medium text-gray-900");

  const entityPath = computed(() => {
    const {
      graphic,
      rectangleGraphic,
      squareGraphic,
      diamondGraphic,
      cloverGraphic,
    } = cEntity.value;
    if (!(graphic || rectangleGraphic)) return null;
    return {
      friend: `${entitiesPath}/${graphic || rectangleGraphic}`,
      unknown: `${entitiesPath}/${graphic || cloverGraphic}`,
      neutral: `${entitiesPath}/${graphic || squareGraphic}`,
      hostile: `${entitiesPath}/${graphic || diamondGraphic}`,
    };
  });

  return {
    cEntity,
    eCode,
    etCode,
    etsCode,
    codes,
    eClass,
    etClass,
    etsClass,
    entityPath,
  };
}

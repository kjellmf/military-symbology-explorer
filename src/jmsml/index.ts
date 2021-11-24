import { Amplifier, Context, HqtfD, StandardIdentity, Status } from "./types";

export const contexts: Context[] = [
  {
    digits: "0",
    label: "Reality",
    id: "REALITY",
  },
  {
    digits: "1",
    label: "Exercise",
    id: "EXERCISE",
  },
  {
    digits: "2",
    label: "Simulation",
    id: "SIMULATION",
  },
];

export const standardIdentities: StandardIdentity[] = [
  {
    digits: "0",
    label: "Pending",
    id: "SI_PENDING",
  },
  {
    digits: "1",
    label: "Unknown",
    id: "SI_UNKNOWN",
  },
  {
    digits: "2",
    label: "Assumed Friend",
    id: "SI_ASSUMED_FRIEND",
  },
  {
    digits: "3",
    label: "Friend",
    id: "SI_FRIEND",
  },
  {
    digits: "4",
    label: "Neutral",
    id: "SI_NEUTRAL",
  },
  {
    digits: "5",
    label: "Suspect/Joker",
    id: "SI_SUSPECT_JOKER",
  },
  {
    digits: "6",
    label: "Hostile/Faker",
    id: "SI_HOSTILE_FAKER",
  },
];

export const statuses: Status[] = [
  {
    digits: "0",
    id: "PRESENT",
    label: "Present",
  },
  {
    digits: "1",
    id: "PLANNED",
    label: "Planned/Anticipated/Suspect",
  },
  {
    digits: "2",
    id: "FULLY_CAPABLE",
    label: "Present/Fully Capable",
    labelAlias: "Fully Capable",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "OCA/043022.svg",
        },
        SPACE: {
          graphic: "OCA/040522.svg",
        },
        UNKNOWN: {
          graphic: "OCA/040022.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/042022.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/041522.svg",
        },
        AIR: {
          graphic: "OCA/040122.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/041022.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/043522.svg",
        },
        ACTIVITY: {
          graphic: "OCA/044022.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "OCA/063022.svg",
        },
        SPACE: {
          graphic: "OCA/060522.svg",
        },
        UNKNOWN: {
          graphic: "OCA/060022.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/062022.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/061522.svg",
        },
        AIR: {
          graphic: "OCA/060122.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/061022.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/063522.svg",
        },
        ACTIVITY: {
          graphic: "OCA/064022.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "OCA/033022.svg",
        },
        SPACE: {
          graphic: "OCA/030522.svg",
        },
        UNKNOWN: {
          graphic: "OCA/030022.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/032022.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/031522.svg",
        },
        AIR: {
          graphic: "OCA/030122.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/031022.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/033522.svg",
        },
        ACTIVITY: {
          graphic: "OCA/034022.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "OCA/013022.svg",
        },
        SPACE: {
          graphic: "OCA/010522.svg",
        },
        UNKNOWN: {
          graphic: "OCA/010022.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/012022.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/011522.svg",
        },
        AIR: {
          graphic: "OCA/010122.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/011022.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/013522.svg",
        },
        ACTIVITY: {
          graphic: "OCA/014022.svg",
        },
      },
    },
  },
  {
    digits: "3",
    id: "DAMAGED",
    label: "Present/Damaged",
    labelAlias: "Damaged",
    graphic: "OCA/3.svg",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "OCA/043032.svg",
        },
        SPACE: {
          graphic: "OCA/040532.svg",
        },
        UNKNOWN: {
          graphic: "OCA/040032.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/042032.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/041532.svg",
        },
        AIR: {
          graphic: "OCA/040132.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/041032.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/043532.svg",
        },
        ACTIVITY: {
          graphic: "OCA/044032.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "OCA/063032.svg",
        },
        SPACE: {
          graphic: "OCA/060532.svg",
        },
        UNKNOWN: {
          graphic: "OCA/060032.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/062032.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/061532.svg",
        },
        AIR: {
          graphic: "OCA/060132.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/061032.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/063532.svg",
        },
        ACTIVITY: {
          graphic: "OCA/064032.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "OCA/033032.svg",
        },
        SPACE: {
          graphic: "OCA/030532.svg",
        },
        UNKNOWN: {
          graphic: "OCA/030032.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/032032.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/031532.svg",
        },
        AIR: {
          graphic: "OCA/030132.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/031032.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/033532.svg",
        },
        ACTIVITY: {
          graphic: "OCA/034032.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "OCA/013032.svg",
        },
        SPACE: {
          graphic: "OCA/010532.svg",
        },
        UNKNOWN: {
          graphic: "OCA/010032.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/012032.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/011532.svg",
        },
        AIR: {
          graphic: "OCA/010132.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/011032.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/013532.svg",
        },
        ACTIVITY: {
          graphic: "OCA/014032.svg",
        },
      },
    },
  },
  {
    digits: "4",
    id: "DESTROYED",
    label: "Present/Destroyed",
    labelAlias: "Destroyed",
    graphic: "OCA/4.svg",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "OCA/043042.svg",
        },
        SPACE: {
          graphic: "OCA/040542.svg",
        },
        UNKNOWN: {
          graphic: "OCA/040042.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/042042.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/041542.svg",
        },
        AIR: {
          graphic: "OCA/040142.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/041042.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/043542.svg",
        },
        ACTIVITY: {
          graphic: "OCA/044042.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "OCA/063042.svg",
        },
        SPACE: {
          graphic: "OCA/060542.svg",
        },
        UNKNOWN: {
          graphic: "OCA/060042.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/062042.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/061542.svg",
        },
        AIR: {
          graphic: "OCA/060142.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/061042.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/063542.svg",
        },
        ACTIVITY: {
          graphic: "OCA/064042.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "OCA/033042.svg",
        },
        SPACE: {
          graphic: "OCA/030542.svg",
        },
        UNKNOWN: {
          graphic: "OCA/030042.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/032042.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/031542.svg",
        },
        AIR: {
          graphic: "OCA/030142.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/031042.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/033542.svg",
        },
        ACTIVITY: {
          graphic: "OCA/034042.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "OCA/013042.svg",
        },
        SPACE: {
          graphic: "OCA/010542.svg",
        },
        UNKNOWN: {
          graphic: "OCA/010042.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/012042.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/011542.svg",
        },
        AIR: {
          graphic: "OCA/010142.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/011042.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/013542.svg",
        },
        ACTIVITY: {
          graphic: "OCA/014042.svg",
        },
      },
    },
  },
  {
    digits: "5",
    id: "FULL",
    label: "Present/Full to Capacity",
    labelAlias: "Full",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "OCA/043052.svg",
        },
        SPACE: {
          graphic: "OCA/040552.svg",
        },
        UNKNOWN: {
          graphic: "OCA/040052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/042052.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/041552.svg",
        },
        AIR: {
          graphic: "OCA/040152.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/041052.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/043552.svg",
        },
        ACTIVITY: {
          graphic: "OCA/044052.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "OCA/063052.svg",
        },
        SPACE: {
          graphic: "OCA/060552.svg",
        },
        UNKNOWN: {
          graphic: "OCA/060052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/062052.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/061552.svg",
        },
        AIR: {
          graphic: "OCA/060152.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/061052.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/063552.svg",
        },
        ACTIVITY: {
          graphic: "OCA/064052.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "OCA/033052.svg",
        },
        SPACE: {
          graphic: "OCA/030552.svg",
        },
        UNKNOWN: {
          graphic: "OCA/030052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/032052.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/031552.svg",
        },
        AIR: {
          graphic: "OCA/030152.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/031052.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/033552.svg",
        },
        ACTIVITY: {
          graphic: "OCA/034052.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "OCA/013052.svg",
        },
        SPACE: {
          graphic: "OCA/010552.svg",
        },
        UNKNOWN: {
          graphic: "OCA/010052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "OCA/012052.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "OCA/011552.svg",
        },
        AIR: {
          graphic: "OCA/010152.svg",
        },
        LAND_UNIT: {
          graphic: "OCA/011052.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "OCA/013552.svg",
        },
        ACTIVITY: {
          graphic: "OCA/014052.svg",
        },
      },
    },
  },
];
export const hqtfDummies: HqtfD[] = [
  {
    digits: "0",
    id: "NA",
    label: "Not Applicable",
  },
  {
    digits: "1",
    id: "FEINT_DUMMY",
    label: "Feint/Dummy",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4301.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4051.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4201.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4151.svg",
        },
        AIR: {
          graphic: "HQTFFD/4011.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4101.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4351.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6301.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6051.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6201.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6151.svg",
        },
        AIR: {
          graphic: "HQTFFD/6011.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6101.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6351.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3301.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3051.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3201.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3151.svg",
        },
        AIR: {
          graphic: "HQTFFD/3011.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3101.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3351.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1301.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1051.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1201.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1151.svg",
        },
        AIR: {
          graphic: "HQTFFD/1011.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1101.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1351.svg",
        },
      },
    },
  },
  {
    digits: "2",
    id: "HQ",
    label: "Headquarters",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4302.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4202.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4152.svg",
        },
        AIR: {
          graphic: "HQTFFD/4012.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4102.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4352.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6302.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6202.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6152.svg",
        },
        AIR: {
          graphic: "HQTFFD/6012.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6102.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6352.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3302.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3202.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3152.svg",
        },
        AIR: {
          graphic: "HQTFFD/3012.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3102.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3352.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1302.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1052.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1202.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1152.svg",
        },
        AIR: {
          graphic: "HQTFFD/1012.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1102.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1352.svg",
        },
      },
    },
  },
  {
    digits: "3",
    id: "FEINT_DUMMY_HQ",
    label: "Feint/Dummy Headquarters",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4303.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4053.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4203.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4153.svg",
        },
        AIR: {
          graphic: "HQTFFD/4013.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4103.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4353.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6303.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6053.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6203.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6153.svg",
        },
        AIR: {
          graphic: "HQTFFD/6013.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6103.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6353.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3303.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3053.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3203.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3153.svg",
        },
        AIR: {
          graphic: "HQTFFD/3013.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3103.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3353.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1303.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1053.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1203.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1153.svg",
        },
        AIR: {
          graphic: "HQTFFD/1013.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1103.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1353.svg",
        },
      },
    },
  },
  {
    digits: "4",
    id: "TF",
    label: "Task Force",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4304.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4054.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4204.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4154.svg",
        },
        AIR: {
          graphic: "HQTFFD/4014.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4104.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4354.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6304.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6054.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6204.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6154.svg",
        },
        AIR: {
          graphic: "HQTFFD/6014.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6104.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6354.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3304.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3054.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3204.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3154.svg",
        },
        AIR: {
          graphic: "HQTFFD/3014.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3104.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3354.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1304.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1054.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1204.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1154.svg",
        },
        AIR: {
          graphic: "HQTFFD/1014.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1104.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1354.svg",
        },
      },
    },
  },
  {
    digits: "5",
    id: "FEINT_DUMMY_TF",
    label: "Feint/Dummy Task Force",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4305.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4055.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4205.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4155.svg",
        },
        AIR: {
          graphic: "HQTFFD/4015.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4105.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4355.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6305.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6055.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6205.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6155.svg",
        },
        AIR: {
          graphic: "HQTFFD/6015.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6105.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6355.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3305.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3055.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3205.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3155.svg",
        },
        AIR: {
          graphic: "HQTFFD/3015.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3105.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3355.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1305.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1055.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1205.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1155.svg",
        },
        AIR: {
          graphic: "HQTFFD/1015.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1105.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1355.svg",
        },
      },
    },
  },
  {
    digits: "6",
    id: "TF_HQ",
    label: "Task Force Headquarters",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4306.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4056.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4206.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4156.svg",
        },
        AIR: {
          graphic: "HQTFFD/4016.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4106.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4356.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6306.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6056.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6206.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6156.svg",
        },
        AIR: {
          graphic: "HQTFFD/6016.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6106.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6356.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3306.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3056.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3206.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3156.svg",
        },
        AIR: {
          graphic: "HQTFFD/3016.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3106.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3356.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1306.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1056.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1206.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1156.svg",
        },
        AIR: {
          graphic: "HQTFFD/1016.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1106.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1356.svg",
        },
      },
    },
  },
  {
    digits: "7",
    id: "FEINT_DUMMY_TF_HQ",
    label: "Feint/Dummy Task Force Headquarters",
    labelAlias: "Feint/Dummy Task Force HQ",
    graphics: {
      SIG_NEUTRAL: {
        SEA_SURFACE: {
          graphic: "HQTFFD/4307.svg",
        },
        SPACE: {
          graphic: "HQTFFD/4057.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/4207.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/4157.svg",
        },
        AIR: {
          graphic: "HQTFFD/4017.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/4107.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/4357.svg",
        },
      },
      SIG_HOSTILE: {
        SEA_SURFACE: {
          graphic: "HQTFFD/6307.svg",
        },
        SPACE: {
          graphic: "HQTFFD/6057.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/6207.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/6157.svg",
        },
        AIR: {
          graphic: "HQTFFD/6017.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/6107.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/6357.svg",
        },
      },
      SIG_FRIEND: {
        SEA_SURFACE: {
          graphic: "HQTFFD/3307.svg",
        },
        SPACE: {
          graphic: "HQTFFD/3057.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/3207.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/3157.svg",
        },
        AIR: {
          graphic: "HQTFFD/3017.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/3107.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/3357.svg",
        },
      },
      SIG_UNKNOWN: {
        SEA_SURFACE: {
          graphic: "HQTFFD/1307.svg",
        },
        SPACE: {
          graphic: "HQTFFD/1057.svg",
        },
        LAND_INSTALLATION: {
          graphic: "HQTFFD/1207.svg",
        },
        LAND_EQUIPMENT: {
          graphic: "HQTFFD/1157.svg",
        },
        AIR: {
          graphic: "HQTFFD/1017.svg",
        },
        LAND_UNIT: {
          graphic: "HQTFFD/1107.svg",
        },
        SEA_SUBSURFACE: {
          graphic: "HQTFFD/1357.svg",
        },
      },
    },
  },
];
export const amplifiers: Amplifier[] = [
  {
    digits: "0",
    label: "Unknown",
    id: "NA",
    descriptors: [
      {
        digits: "0",
        label: "Unknown",
        id: "NA",
      },
    ],
  },
  {
    digits: "1",
    label: "Echelon at brigade and below",
    id: "ECHELON_BDE_BELOW",
    descriptors: [
      {
        digits: "1",
        label: "Team/Crew",
        id: "TEAM_CREW",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/411.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/611.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/311.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/111.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Squad",
        id: "SQUAD",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/412.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/612.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/312.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/112.svg",
          },
        },
      },
      {
        digits: "3",
        label: "Section",
        id: "SEC",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/413.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/613.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/313.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/113.svg",
          },
        },
      },
      {
        digits: "4",
        label: "Platoon/Detachment",
        id: "PLT_DETACHMENT",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/414.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/614.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/314.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/114.svg",
          },
        },
      },
      {
        digits: "5",
        label: "Company/Battery/Troop",
        id: "CPY_BTY_TRP",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/415.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/615.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/315.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/115.svg",
          },
        },
      },
      {
        digits: "6",
        label: "Battalion/Squadron",
        id: "BN_SQUADRON",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/416.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/616.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/316.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/116.svg",
          },
        },
      },
      {
        digits: "7",
        label: "Regiment/Group",
        id: "REGT_GRP",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/417.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/617.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/317.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/117.svg",
          },
        },
      },
      {
        digits: "8",
        label: "Brigade",
        id: "BDE",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/418.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/618.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/318.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/118.svg",
          },
        },
      },
    ],
  },
  {
    digits: "2",
    label: "Echelon at division and above",
    id: "ECHELON_DIV_ABOVE",
    descriptors: [
      {
        digits: "1",
        label: "Division",
        id: "DIV",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/421.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/621.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/321.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/121.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Corps/MEF",
        id: "CORPS_MEF",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/422.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/622.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/322.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/122.svg",
          },
        },
      },
      {
        digits: "3",
        label: "Army",
        id: "ARMY",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/423.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/623.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/323.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/123.svg",
          },
        },
      },
      {
        digits: "4",
        label: "Army Group/Front",
        id: "ARMY_GROUP_FRONT",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/424.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/624.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/324.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/124.svg",
          },
        },
      },
      {
        digits: "5",
        label: "Region/Theater",
        id: "REGION_THEATER",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/425.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/625.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/325.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/125.svg",
          },
        },
      },
      {
        digits: "6",
        label: "Command",
        id: "COMMAND",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Echelon/426.svg",
          },
          SIG_HOSTILE: {
            graphic: "Echelon/626.svg",
          },
          SIG_FRIEND: {
            graphic: "Echelon/326.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Echelon/126.svg",
          },
        },
      },
    ],
  },
  {
    digits: "3",
    label: "Equipment mobility on land",
    id: "EQUIP_MOBILITY_LAND",
    descriptors: [
      {
        digits: "1",
        label: "Wheeled limited cross country",
        id: "WHEEL_LIMIT_COUNTRY",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/431.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/631.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/331.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/131.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Wheeled cross country",
        id: "WHEEL_COUNTRY",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/432.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/632.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/332.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/132.svg",
          },
        },
      },
      {
        digits: "3",
        label: "Tracked",
        id: "TRACKED",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/433.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/633.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/333.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/133.svg",
          },
        },
      },
      {
        digits: "4",
        label: "Wheeled and tracked combination",
        id: "WHEEL_TRACK",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/434.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/634.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/334.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/134.svg",
          },
        },
      },
      {
        digits: "5",
        label: "Towed",
        id: "TOWED",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/435.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/635.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/335.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/135.svg",
          },
        },
      },
      {
        digits: "6",
        label: "Rail",
        id: "RAIL",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/436.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/636.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/336.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/136.svg",
          },
        },
      },
      {
        digits: "7",
        label: "Pack animals",
        id: "PACK_ANIMALS",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/437.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/637.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/337.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/137.svg",
          },
        },
      },
    ],
  },
  {
    digits: "4",
    label: "Equipment mobility on snow",
    id: "EQUIP_MOBILITY_SNOW",
    descriptors: [
      {
        digits: "1",
        label: "Over snow (prime mover)",
        id: "OVER_SNOW",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/441.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/641.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/341.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/141.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Sled",
        id: "SLED",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/442.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/642.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/342.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/142.svg",
          },
        },
      },
    ],
  },
  {
    digits: "5",
    label: "Equipment mobility on water",
    id: "EQUIP_MOBILITY_WATER",
    descriptors: [
      {
        digits: "1",
        label: "Barge",
        id: "BARGE",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/451.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/651.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/351.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/151.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Amphibious",
        id: "AMPHIB",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/452.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/652.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/352.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/152.svg",
          },
        },
      },
    ],
  },
  {
    digits: "6",
    label: "Naval towed array",
    id: "TOWED_ARRAYS",
    descriptors: [
      {
        digits: "1",
        label: "Short towed array",
        id: "SHORT_TOWED_ARRAY",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/461.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/661.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/361.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/161.svg",
          },
        },
      },
      {
        digits: "2",
        label: "Long towed array",
        id: "LONG_TOWED_ARRAY",
        graphics: {
          SIG_NEUTRAL: {
            graphic: "Amplifier/462.svg",
          },
          SIG_HOSTILE: {
            graphic: "Amplifier/662.svg",
          },
          SIG_FRIEND: {
            graphic: "Amplifier/362.svg",
          },
          SIG_UNKNOWN: {
            graphic: "Amplifier/162.svg",
          },
        },
      },
    ],
  },
];
export const affiliations = {
  SIMULATION: {
    SEA_SURFACE: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_030_0.svg",
        civilianGraphic: "Frames/Sim/2_030_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_130_0.svg",
        plannedGraphic: "Frames/Sim/2_130_1.svg",
        civilianGraphic: "Frames/Sim/2_130_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_130_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_330_0.svg",
        plannedGraphic: "Frames/Sim/2_330_1.svg",
        civilianGraphic: "Frames/Sim/2_330_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_330_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_430_0.svg",
        plannedGraphic: "Frames/Sim/2_430_1.svg",
        civilianGraphic: "Frames/Sim/2_430_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_430_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_630_0.svg",
        plannedGraphic: "Frames/Sim/2_630_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_230_0.svg",
        civilianGraphic: "Frames/Sim/2_230_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_530_0.svg",
      },
    },
    CONTROL_MEASURE: {
      SI_PENDING: {},
      SI_UNKNOWN: {},
      SI_FRIEND: {},
      SI_NEUTRAL: {},
      SI_HOSTILE_FAKER: {},
      SI_ASSUMED_FRIEND: {},
      SI_SUSPECT_JOKER: {},
    },
    SPACE: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_005_0.svg",
        civilianGraphic: "Frames/Sim/2_005_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_105_0.svg",
        plannedGraphic: "Frames/Sim/2_105_1.svg",
        civilianGraphic: "Frames/Sim/2_105_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_105_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_305_0.svg",
        plannedGraphic: "Frames/Sim/2_305_1.svg",
        civilianGraphic: "Frames/Sim/2_305_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_305_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_405_0.svg",
        plannedGraphic: "Frames/Sim/2_405_1.svg",
        civilianGraphic: "Frames/Sim/2_405_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_405_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_605_0.svg",
        plannedGraphic: "Frames/Sim/2_605_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_205_0.svg",
        civilianGraphic: "Frames/Sim/2_205_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_505_0.svg",
      },
    },
    UNKNOWN: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_000_0.svg",
        civilianGraphic: "Frames/Sim/2_000_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_100_0.svg",
        plannedGraphic: "Frames/Sim/2_100_1.svg",
        civilianGraphic: "Frames/Sim/2_100_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_100_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_300_0.svg",
        plannedGraphic: "Frames/Sim/2_300_1.svg",
        civilianGraphic: "Frames/Sim/2_300_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_300_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_400_0.svg",
        plannedGraphic: "Frames/Sim/2_400_1.svg",
        civilianGraphic: "Frames/Sim/2_400_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_400_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_600_0.svg",
        plannedGraphic: "Frames/Sim/2_600_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_200_0.svg",
        civilianGraphic: "Frames/Sim/2_200_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_500_0.svg",
      },
    },
    LAND_INSTALLATION: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_020_0.svg",
        civilianGraphic: "Frames/Sim/2_020_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_120_0.svg",
        plannedGraphic: "Frames/Sim/2_120_1.svg",
        civilianGraphic: "Frames/Sim/2_120_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_120_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_320_0.svg",
        plannedGraphic: "Frames/Sim/2_320_1.svg",
        civilianGraphic: "Frames/Sim/2_320_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_320_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_420_0.svg",
        plannedGraphic: "Frames/Sim/2_420_1.svg",
        civilianGraphic: "Frames/Sim/2_420_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_420_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_620_0.svg",
        plannedGraphic: "Frames/Sim/2_620_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_220_0.svg",
        civilianGraphic: "Frames/Sim/2_220_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_520_0.svg",
      },
    },
    LAND_EQUIPMENT: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_015_0.svg",
        civilianGraphic: "Frames/Sim/2_015_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_115_0.svg",
        plannedGraphic: "Frames/Sim/2_115_1.svg",
        civilianGraphic: "Frames/Sim/2_115_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_115_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_315_0.svg",
        plannedGraphic: "Frames/Sim/2_315_1.svg",
        civilianGraphic: "Frames/Sim/2_315_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_315_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_415_0.svg",
        plannedGraphic: "Frames/Sim/2_415_1.svg",
        civilianGraphic: "Frames/Sim/2_415_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_415_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_615_0.svg",
        plannedGraphic: "Frames/Sim/2_615_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_215_0.svg",
        civilianGraphic: "Frames/Sim/2_215_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_515_0.svg",
      },
    },
    AIR: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_001_0.svg",
        civilianGraphic: "Frames/Sim/2_001_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_101_0.svg",
        plannedGraphic: "Frames/Sim/2_101_1.svg",
        civilianGraphic: "Frames/Sim/2_101_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_101_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_301_0.svg",
        plannedGraphic: "Frames/Sim/2_301_1.svg",
        civilianGraphic: "Frames/Sim/2_301_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_301_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_401_0.svg",
        plannedGraphic: "Frames/Sim/2_401_1.svg",
        civilianGraphic: "Frames/Sim/2_401_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_401_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_601_0.svg",
        plannedGraphic: "Frames/Sim/2_601_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_201_0.svg",
        civilianGraphic: "Frames/Sim/2_201_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_501_0.svg",
      },
    },
    LAND_UNIT: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_010_0.svg",
        civilianGraphic: "Frames/Sim/2_010_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_110_0.svg",
        plannedGraphic: "Frames/Sim/2_110_1.svg",
        civilianGraphic: "Frames/Sim/2_110_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_110_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_310_0.svg",
        plannedGraphic: "Frames/Sim/2_310_1.svg",
        civilianGraphic: "Frames/Sim/2_310_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_310_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_410_0.svg",
        plannedGraphic: "Frames/Sim/2_410_1.svg",
        civilianGraphic: "Frames/Sim/2_410_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_410_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_610_0.svg",
        plannedGraphic: "Frames/Sim/2_610_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_210_0.svg",
        civilianGraphic: "Frames/Sim/2_210_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_510_0.svg",
      },
    },
    INTERNAL: {
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_198_0.svg",
      },
    },
    SEA_SUBSURFACE: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_035_0.svg",
        civilianGraphic: "Frames/Sim/2_035_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_135_0.svg",
        plannedGraphic: "Frames/Sim/2_135_1.svg",
        civilianGraphic: "Frames/Sim/2_135_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_135_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_335_0.svg",
        plannedGraphic: "Frames/Sim/2_335_1.svg",
        civilianGraphic: "Frames/Sim/2_335_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_335_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_435_0.svg",
        plannedGraphic: "Frames/Sim/2_435_1.svg",
        civilianGraphic: "Frames/Sim/2_435_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_435_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_635_0.svg",
        plannedGraphic: "Frames/Sim/2_635_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_235_0.svg",
        civilianGraphic: "Frames/Sim/2_235_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_535_0.svg",
      },
    },
    ACTIVITY: {
      SI_PENDING: {
        graphic: "Frames/Sim/2_040_0.svg",
        civilianGraphic: "Frames/Sim/2_040_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Sim/2_140_0.svg",
        plannedGraphic: "Frames/Sim/2_140_1.svg",
        civilianGraphic: "Frames/Sim/2_140_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_140_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Sim/2_340_0.svg",
        plannedGraphic: "Frames/Sim/2_340_1.svg",
        civilianGraphic: "Frames/Sim/2_340_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_340_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Sim/2_440_0.svg",
        plannedGraphic: "Frames/Sim/2_440_1.svg",
        civilianGraphic: "Frames/Sim/2_440_0c.svg",
        plannedCivilianGraphic: "Frames/Sim/2_440_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Sim/2_640_0.svg",
        plannedGraphic: "Frames/Sim/2_640_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Sim/2_240_0.svg",
        civilianGraphic: "Frames/Sim/2_240_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Sim/2_540_0.svg",
      },
    },
  },
  EXERCISE: {
    SEA_SURFACE: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_030_0.svg",
        civilianGraphic: "Frames/Exercise/1_030_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_130_0.svg",
        plannedGraphic: "Frames/Exercise/1_130_1.svg",
        civilianGraphic: "Frames/Exercise/1_130_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_130_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_330_0.svg",
        plannedGraphic: "Frames/Exercise/1_330_1.svg",
        civilianGraphic: "Frames/Exercise/1_330_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_330_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_430_0.svg",
        plannedGraphic: "Frames/Exercise/1_430_1.svg",
        civilianGraphic: "Frames/Exercise/1_430_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_430_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_630_0.svg",
        plannedGraphic: "Frames/Exercise/1_630_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_230_0.svg",
        civilianGraphic: "Frames/Exercise/1_230_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_530_0.svg",
      },
    },
    CONTROL_MEASURE: {
      SI_PENDING: {},
      SI_UNKNOWN: {},
      SI_FRIEND: {},
      SI_NEUTRAL: {},
      SI_HOSTILE_FAKER: {},
      SI_ASSUMED_FRIEND: {},
      SI_SUSPECT_JOKER: {},
    },
    SPACE: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_005_0.svg",
        civilianGraphic: "Frames/Exercise/1_005_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_105_0.svg",
        plannedGraphic: "Frames/Exercise/1_105_1.svg",
        civilianGraphic: "Frames/Exercise/1_105_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_105_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_305_0.svg",
        plannedGraphic: "Frames/Exercise/1_305_1.svg",
        civilianGraphic: "Frames/Exercise/1_305_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_305_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_405_0.svg",
        plannedGraphic: "Frames/Exercise/1_405_1.svg",
        civilianGraphic: "Frames/Exercise/1_405_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_405_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_605_0.svg",
        plannedGraphic: "Frames/Exercise/1_605_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_205_0.svg",
        civilianGraphic: "Frames/Exercise/1_205_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_505_0.svg",
      },
    },
    UNKNOWN: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_000_0.svg",
        civilianGraphic: "Frames/Exercise/1_000_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_100_0.svg",
        plannedGraphic: "Frames/Exercise/1_100_1.svg",
        civilianGraphic: "Frames/Exercise/1_100_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_100_1c.svg",
      },
    },
    LAND_INSTALLATION: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_020_0.svg",
        civilianGraphic: "Frames/Exercise/1_020_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_120_0.svg",
        plannedGraphic: "Frames/Exercise/1_120_1.svg",
        civilianGraphic: "Frames/Exercise/1_120_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_120_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_320_0.svg",
        plannedGraphic: "Frames/Exercise/1_320_1.svg",
        civilianGraphic: "Frames/Exercise/1_320_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_320_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_420_0.svg",
        plannedGraphic: "Frames/Exercise/1_420_1.svg",
        civilianGraphic: "Frames/Exercise/1_420_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_420_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_620_0.svg",
        plannedGraphic: "Frames/Exercise/1_620_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_220_0.svg",
        civilianGraphic: "Frames/Exercise/1_220_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_520_0.svg",
      },
    },
    LAND_EQUIPMENT: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_015_0.svg",
        civilianGraphic: "Frames/Exercise/1_015_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_115_0.svg",
        plannedGraphic: "Frames/Exercise/1_115_1.svg",
        civilianGraphic: "Frames/Exercise/1_115_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_115_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_315_0.svg",
        plannedGraphic: "Frames/Exercise/1_315_1.svg",
        civilianGraphic: "Frames/Exercise/1_315_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_315_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_415_0.svg",
        plannedGraphic: "Frames/Exercise/1_415_1.svg",
        civilianGraphic: "Frames/Exercise/1_415_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_415_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_615_0.svg",
        plannedGraphic: "Frames/Exercise/1_615_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_215_0.svg",
        civilianGraphic: "Frames/Exercise/1_215_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_515_0.svg",
      },
    },
    AIR: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_001_0.svg",
        civilianGraphic: "Frames/Exercise/1_001_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_101_0.svg",
        plannedGraphic: "Frames/Exercise/1_101_1.svg",
        civilianGraphic: "Frames/Exercise/1_101_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_101_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_301_0.svg",
        plannedGraphic: "Frames/Exercise/1_301_1.svg",
        civilianGraphic: "Frames/Exercise/1_301_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_301_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_401_0.svg",
        plannedGraphic: "Frames/Exercise/1_401_1.svg",
        civilianGraphic: "Frames/Exercise/1_401_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_401_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_601_0.svg",
        plannedGraphic: "Frames/Exercise/1_601_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_201_0.svg",
        civilianGraphic: "Frames/Exercise/1_201_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_501_0.svg",
      },
    },
    LAND_UNIT: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_010_0.svg",
        civilianGraphic: "Frames/Exercise/1_010_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_110_0.svg",
        plannedGraphic: "Frames/Exercise/1_110_1.svg",
        civilianGraphic: "Frames/Exercise/1_110_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_110_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_310_0.svg",
        plannedGraphic: "Frames/Exercise/1_310_1.svg",
        civilianGraphic: "Frames/Exercise/1_310_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_310_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_410_0.svg",
        plannedGraphic: "Frames/Exercise/1_410_1.svg",
        civilianGraphic: "Frames/Exercise/1_410_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_410_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_610_0.svg",
        plannedGraphic: "Frames/Exercise/1_610_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_210_0.svg",
        civilianGraphic: "Frames/Exercise/1_210_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_510_0.svg",
      },
    },
    INTERNAL: {
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_198_0.svg",
      },
    },
    SEA_SUBSURFACE: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_035_0.svg",
        civilianGraphic: "Frames/Exercise/1_035_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_135_0.svg",
        plannedGraphic: "Frames/Exercise/1_135_1.svg",
        civilianGraphic: "Frames/Exercise/1_135_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_135_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_335_0.svg",
        plannedGraphic: "Frames/Exercise/1_335_1.svg",
        civilianGraphic: "Frames/Exercise/1_335_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_335_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_435_0.svg",
        plannedGraphic: "Frames/Exercise/1_435_1.svg",
        civilianGraphic: "Frames/Exercise/1_435_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_435_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_635_0.svg",
        plannedGraphic: "Frames/Exercise/1_635_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_235_0.svg",
        civilianGraphic: "Frames/Exercise/1_235_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_535_0.svg",
      },
    },
    ACTIVITY: {
      SI_PENDING: {
        graphic: "Frames/Exercise/1_040_0.svg",
        civilianGraphic: "Frames/Exercise/1_040_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/Exercise/1_140_0.svg",
        plannedGraphic: "Frames/Exercise/1_140_1.svg",
        civilianGraphic: "Frames/Exercise/1_140_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_140_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/Exercise/1_340_0.svg",
        plannedGraphic: "Frames/Exercise/1_340_1.svg",
        civilianGraphic: "Frames/Exercise/1_340_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_340_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/Exercise/1_440_0.svg",
        plannedGraphic: "Frames/Exercise/1_440_1.svg",
        civilianGraphic: "Frames/Exercise/1_440_0c.svg",
        plannedCivilianGraphic: "Frames/Exercise/1_440_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/Exercise/1_640_0.svg",
        plannedGraphic: "Frames/Exercise/1_640_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/Exercise/1_240_0.svg",
        civilianGraphic: "Frames/Exercise/1_240_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/Exercise/1_540_0.svg",
      },
    },
  },
  REALITY: {
    SEA_SURFACE: {
      SI_PENDING: {
        graphic: "Frames/0_030_0.svg",
        civilianGraphic: "Frames/0_030_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_130_0.svg",
        plannedGraphic: "Frames/0_130_1.svg",
        civilianGraphic: "Frames/0_130_0c.svg",
        plannedCivilianGraphic: "Frames/0_130_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_330_0.svg",
        plannedGraphic: "Frames/0_330_1.svg",
        civilianGraphic: "Frames/0_330_0c.svg",
        plannedCivilianGraphic: "Frames/0_330_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_430_0.svg",
        plannedGraphic: "Frames/0_430_1.svg",
        civilianGraphic: "Frames/0_430_0c.svg",
        plannedCivilianGraphic: "Frames/0_430_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_630_0.svg",
        plannedGraphic: "Frames/0_630_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_230_0.svg",
        civilianGraphic: "Frames/0_230_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_530_0.svg",
      },
    },
    CONTROL_MEASURE: {
      SI_PENDING: {},
      SI_UNKNOWN: {},
      SI_FRIEND: {},
      SI_NEUTRAL: {},
      SI_HOSTILE_FAKER: {},
      SI_ASSUMED_FRIEND: {},
      SI_SUSPECT_JOKER: {},
    },
    SPACE: {
      SI_PENDING: {
        graphic: "Frames/0_005_0.svg",
        civilianGraphic: "Frames/0_005_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_105_0.svg",
        plannedGraphic: "Frames/0_105_1.svg",
        civilianGraphic: "Frames/0_105_0c.svg",
        plannedCivilianGraphic: "Frames/0_105_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_305_0.svg",
        plannedGraphic: "Frames/0_305_1.svg",
        civilianGraphic: "Frames/0_305_0c.svg",
        plannedCivilianGraphic: "Frames/0_305_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_405_0.svg",
        plannedGraphic: "Frames/0_405_1.svg",
        civilianGraphic: "Frames/0_405_0c.svg",
        plannedCivilianGraphic: "Frames/0_405_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_605_0.svg",
        plannedGraphic: "Frames/0_605_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_205_0.svg",
        civilianGraphic: "Frames/0_205_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_505_0.svg",
      },
    },
    UNKNOWN: {
      SI_PENDING: {
        graphic: "Frames/0_000_0.svg",
        civilianGraphic: "Frames/0_000_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_100_0.svg",
        plannedGraphic: "Frames/0_100_1.svg",
        civilianGraphic: "Frames/0_100_0c.svg",
        plannedCivilianGraphic: "Frames/0_100_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_300_0.svg",
        plannedGraphic: "Frames/0_300_1.svg",
        civilianGraphic: "Frames/0_300_0c.svg",
        plannedCivilianGraphic: "Frames/0_300_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_400_0.svg",
        plannedGraphic: "Frames/0_400_1.svg",
        civilianGraphic: "Frames/0_400_0c.svg",
        plannedCivilianGraphic: "Frames/0_400_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_600_0.svg",
        plannedGraphic: "Frames/0_600_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_200_0.svg",
        civilianGraphic: "Frames/0_200_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_500_0.svg",
      },
    },
    LAND_INSTALLATION: {
      SI_PENDING: {
        graphic: "Frames/0_020_0.svg",
        civilianGraphic: "Frames/0_020_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_120_0.svg",
        plannedGraphic: "Frames/0_120_1.svg",
        civilianGraphic: "Frames/0_120_0c.svg",
        plannedCivilianGraphic: "Frames/0_120_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_320_0.svg",
        plannedGraphic: "Frames/0_320_1.svg",
        civilianGraphic: "Frames/0_320_0c.svg",
        plannedCivilianGraphic: "Frames/0_320_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_420_0.svg",
        plannedGraphic: "Frames/0_420_1.svg",
        civilianGraphic: "Frames/0_420_0c.svg",
        plannedCivilianGraphic: "Frames/0_420_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_620_0.svg",
        plannedGraphic: "Frames/0_620_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_220_0.svg",
        civilianGraphic: "Frames/0_220_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_520_0.svg",
      },
    },
    LAND_EQUIPMENT: {
      SI_PENDING: {
        graphic: "Frames/0_015_0.svg",
        civilianGraphic: "Frames/0_015_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_115_0.svg",
        plannedGraphic: "Frames/0_115_1.svg",
        civilianGraphic: "Frames/0_115_0c.svg",
        plannedCivilianGraphic: "Frames/0_115_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_315_0.svg",
        plannedGraphic: "Frames/0_315_1.svg",
        civilianGraphic: "Frames/0_315_0c.svg",
        plannedCivilianGraphic: "Frames/0_315_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_415_0.svg",
        plannedGraphic: "Frames/0_415_1.svg",
        civilianGraphic: "Frames/0_415_0c.svg",
        plannedCivilianGraphic: "Frames/0_415_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_615_0.svg",
        plannedGraphic: "Frames/0_615_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_215_0.svg",
        civilianGraphic: "Frames/0_215_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_515_0.svg",
      },
    },
    METOC: {
      SI_PENDING: {},
      SI_UNKNOWN: {},
      SI_FRIEND: {},
      SI_NEUTRAL: {},
      SI_HOSTILE_FAKER: {},
    },
    AIR: {
      SI_PENDING: {
        graphic: "Frames/0_001_0.svg",
        civilianGraphic: "Frames/0_001_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_101_0.svg",
        plannedGraphic: "Frames/0_101_1.svg",
        civilianGraphic: "Frames/0_101_0c.svg",
        plannedCivilianGraphic: "Frames/0_101_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_301_0.svg",
        plannedGraphic: "Frames/0_301_1.svg",
        civilianGraphic: "Frames/0_301_0c.svg",
        plannedCivilianGraphic: "Frames/0_301_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_401_0.svg",
        plannedGraphic: "Frames/0_401_1.svg",
        civilianGraphic: "Frames/0_401_0c.svg",
        plannedCivilianGraphic: "Frames/0_401_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_601_0.svg",
        plannedGraphic: "Frames/0_601_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_201_0.svg",
        civilianGraphic: "Frames/0_201_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_501_0.svg",
      },
    },
    LAND_UNIT: {
      SI_PENDING: {
        graphic: "Frames/0_010_0.svg",
        civilianGraphic: "Frames/0_010_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_110_0.svg",
        plannedGraphic: "Frames/0_110_1.svg",
        civilianGraphic: "Frames/0_110_0c.svg",
        plannedCivilianGraphic: "Frames/0_110_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_310_0.svg",
        plannedGraphic: "Frames/0_310_1.svg",
        civilianGraphic: "Frames/0_310_0c.svg",
        plannedCivilianGraphic: "Frames/0_310_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_410_0.svg",
        plannedGraphic: "Frames/0_410_1.svg",
        civilianGraphic: "Frames/0_410_0c.svg",
        plannedCivilianGraphic: "Frames/0_410_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_610_0.svg",
        plannedGraphic: "Frames/0_610_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_210_0.svg",
        civilianGraphic: "Frames/0_210_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_510_0.svg",
      },
    },
    INTERNAL: {
      SI_UNKNOWN: {
        graphic: "Frames/0_198_0.svg",
      },
    },
    SEA_SUBSURFACE: {
      SI_PENDING: {
        graphic: "Frames/0_035_0.svg",
        civilianGraphic: "Frames/0_035_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_135_0.svg",
        plannedGraphic: "Frames/0_135_1.svg",
        civilianGraphic: "Frames/0_135_0c.svg",
        plannedCivilianGraphic: "Frames/0_135_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_335_0.svg",
        plannedGraphic: "Frames/0_335_1.svg",
        civilianGraphic: "Frames/0_335_0c.svg",
        plannedCivilianGraphic: "Frames/0_335_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_435_0.svg",
        plannedGraphic: "Frames/0_435_1.svg",
        civilianGraphic: "Frames/0_435_0c.svg",
        plannedCivilianGraphic: "Frames/0_435_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_635_0.svg",
        plannedGraphic: "Frames/0_635_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_235_0.svg",
        civilianGraphic: "Frames/0_235_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_535_0.svg",
      },
    },
    ACTIVITY: {
      SI_PENDING: {
        graphic: "Frames/0_040_0.svg",
        civilianGraphic: "Frames/0_040_0c.svg",
      },
      SI_UNKNOWN: {
        graphic: "Frames/0_140_0.svg",
        plannedGraphic: "Frames/0_140_1.svg",
        civilianGraphic: "Frames/0_140_0c.svg",
        plannedCivilianGraphic: "Frames/0_140_1c.svg",
      },
      SI_FRIEND: {
        graphic: "Frames/0_340_0.svg",
        plannedGraphic: "Frames/0_340_1.svg",
        civilianGraphic: "Frames/0_340_0c.svg",
        plannedCivilianGraphic: "Frames/0_340_1c.svg",
      },
      SI_NEUTRAL: {
        graphic: "Frames/0_440_0.svg",
        plannedGraphic: "Frames/0_440_1.svg",
        civilianGraphic: "Frames/0_440_0c.svg",
        plannedCivilianGraphic: "Frames/0_440_1c.svg",
      },
      SI_HOSTILE_FAKER: {
        graphic: "Frames/0_640_0.svg",
        plannedGraphic: "Frames/0_640_1.svg",
      },
      SI_ASSUMED_FRIEND: {
        graphic: "Frames/0_240_0.svg",
        civilianGraphic: "Frames/0_240_0c.svg",
      },
      SI_SUSPECT_JOKER: {
        graphic: "Frames/0_540_0.svg",
      },
    },
  },
};
export const dimensions = [
  {
    id: "UNKNOWN",
    label: "Unknown",
    geometry: "POINT",
  },
  {
    id: "AIR",
    label: "Air",
    geometry: "POINT",
  },
  {
    id: "SPACE",
    label: "Space",
    geometry: "POINT",
  },
  {
    id: "LAND_UNIT",
    label: "Land Unit",
    geometry: "POINT",
  },
  {
    id: "LAND_EQUIPMENT",
    label: "Land Equipment",
    geometry: "POINT",
  },
  {
    id: "LAND_INSTALLATION",
    label: "Land Installations",
    geometry: "POINT",
  },
  {
    id: "SEA_SURFACE",
    label: "Sea Surface",
    geometry: "POINT",
  },
  {
    id: "SEA_SUBSURFACE",
    label: "Sea Subsurface",
    geometry: "POINT",
  },
  {
    id: "ACTIVITY",
    label: "Activities",
    geometry: "POINT",
  },
  {
    id: "CONTROL_MEASURE",
    label: "Control Measure",
    geometry: "MIXED",
  },
  {
    id: "METOC",
    label: "Meteorological",
    geometry: "MIXED",
  },
];

export const standardIdentityGroupMapping = {
  SI_UNKNOWN: "SIG_UNKNOWN",
  SI_ASSUMED_FRIEND: "SIG_FRIEND",
  SI_HOSTILE_FAKER: "SIG_HOSTILE",
  SI_PENDING: "SIG_UNKNOWN",
  SI_NEUTRAL: "SIG_NEUTRAL",
  SI_SUSPECT_JOKER: "SIG_HOSTILE",
  SI_FRIEND: "SIG_FRIEND",
};

export const UNIT_SYMBOLSET_VALUE = "10";
export const CIVILIAN_SYMBOLSET_VALUE = "11";
export const EQUIPMENT_SYMBOLSET_VALUE = "15";
export const CONTROL_MEASURE_SYMBOLSET_VALUE = "25";
export const DISMOUNTED_SYMBOLSET_VALUE = "27";
export const SURFACE_SYMBOLSET_VALUE = "30";
export const SUBSURFACE_SYMBOLSET_VALUE = "35";

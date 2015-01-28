var symbolData={
  "contexts": [
    {
      "digits": "0", 
      "label": "Reality", 
      "id": "REALITY"
    }, 
    {
      "digits": "1", 
      "label": "Exercise", 
      "id": "EXERCISE"
    }, 
    {
      "digits": "2", 
      "label": "Simulation", 
      "id": "SIMULATION"
    }
  ], 
  "standardIdentities": [
    {
      "digits": "0", 
      "label": "Pending", 
      "id": "SI_PENDING"
    }, 
    {
      "digits": "1", 
      "label": "Unknown", 
      "id": "SI_UNKNOWN"
    }, 
    {
      "digits": "2", 
      "label": "Assumed Friend", 
      "id": "SI_ASSUMED_FRIEND"
    }, 
    {
      "digits": "3", 
      "label": "Friend", 
      "id": "SI_FRIEND"
    }, 
    {
      "digits": "4", 
      "label": "Neutral", 
      "id": "SI_NEUTRAL"
    }, 
    {
      "digits": "5", 
      "label": "Suspect/Joker", 
      "id": "SI_SUSPECT_JOKER"
    }, 
    {
      "digits": "6", 
      "label": "Hostile/Faker", 
      "id": "SI_HOSTILE_FAKER"
    }
  ], 
  "symbolSets": [
    {
      "digits": "01", 
      "label": "Air", 
      "id": "SS_AIR", 
      "dimensionId": "AIR", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Military", 
          "id": "MILITARY", 
          "graphic": "01110000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Fixed-Wing", 
              "id": "FIXED_WING", 
              "graphic": "01110100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Medical Evacuation (MEDEVAC)", 
                  "id": "MEDEVAC", 
                  "graphic": "01110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Attack/Strike", 
                  "id": "ATTACK_STRIKE", 
                  "graphic": "01110102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Bomber", 
                  "id": "BOMBER", 
                  "graphic": "01110103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Fighter", 
                  "id": "FIGHTER", 
                  "graphic": "01110104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Fighter/Bomber", 
                  "id": "FIGHTER_BOMBER", 
                  "graphic": "01110105.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Cargo", 
                  "id": "CARGO", 
                  "graphic": "01110107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Electronic Combat (EC)/Jammer", 
                  "id": "ECJ", 
                  "graphic": "01110108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Tanker", 
                  "id": "TANKER", 
                  "graphic": "01110109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Patrol", 
                  "id": "PATROL", 
                  "graphic": "01110110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Reconnaissance", 
                  "id": "RECON", 
                  "graphic": "01110111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Trainer", 
                  "id": "TRAINER", 
                  "graphic": "01110112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Utility", 
                  "id": "UTILITY", 
                  "graphic": "01110113.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "VSTOL", 
                  "id": "VSTOL", 
                  "graphic": "01110114.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Airborne Command Post (ACP)", 
                  "id": "ACP", 
                  "graphic": "01110115.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "Airborne Early Warning (AEW)", 
                  "id": "AEW", 
                  "graphic": "01110116.svg"
                }, 
                {
                  "digits": "17", 
                  "label": "Antisurface Warfare", 
                  "id": "ASUW", 
                  "graphic": "01110117.svg"
                }, 
                {
                  "digits": "18", 
                  "label": "Antisubmarine Warfare", 
                  "id": "ASW", 
                  "graphic": "01110118.svg"
                }, 
                {
                  "digits": "19", 
                  "label": "Communications", 
                  "id": "COM", 
                  "graphic": "01110119.svg"
                }, 
                {
                  "digits": "20", 
                  "label": "Combat Search and Rescue (CSAR)", 
                  "id": "CSAR", 
                  "graphic": "01110120.svg"
                }, 
                {
                  "digits": "21", 
                  "label": "Electronic Support (ES)", 
                  "id": "ES", 
                  "graphic": "01110121.svg"
                }, 
                {
                  "digits": "22", 
                  "label": "Government", 
                  "id": "GOV", 
                  "graphic": "01110122.svg"
                }, 
                {
                  "digits": "23", 
                  "label": "Mine Countermeasures (MCM)", 
                  "id": "MCM", 
                  "graphic": "01110123.svg"
                }, 
                {
                  "digits": "24", 
                  "label": "Personnel Recovery", 
                  "id": "PR", 
                  "graphic": "01110124.svg"
                }, 
                {
                  "digits": "25", 
                  "label": "Search and Rescue", 
                  "id": "SAR", 
                  "graphic": "01110125.svg"
                }, 
                {
                  "digits": "26", 
                  "label": "Special Operations Forces", 
                  "id": "SOF", 
                  "graphic": "01110126.svg"
                }, 
                {
                  "digits": "27", 
                  "label": "Ultra Light", 
                  "id": "UL", 
                  "graphic": "01110127.svg"
                }, 
                {
                  "digits": "28", 
                  "label": "Photographic Reconnaissance", 
                  "id": "PH", 
                  "graphic": "01110128.svg"
                }, 
                {
                  "digits": "29", 
                  "label": "Very Important Person (VIP)", 
                  "id": "VIP", 
                  "graphic": "01110129.svg"
                }, 
                {
                  "digits": "30", 
                  "label": "Suppression of Enemy Air Defense", 
                  "id": "SEAD", 
                  "graphic": "01110130.svg"
                }, 
                {
                  "digits": "31", 
                  "label": "Passenger", 
                  "id": "PX", 
                  "graphic": "01110131.svg"
                }, 
                {
                  "digits": "32", 
                  "label": "Escort", 
                  "id": "E", 
                  "graphic": "01110132.svg"
                }, 
                {
                  "digits": "33", 
                  "label": "Electronic Attack (EA)", 
                  "id": "EA", 
                  "graphic": "01110133.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Rotary-Wing", 
              "id": "ROTARY_WING", 
              "graphic": "01110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Unmanned Aircraft (UA)/Unmanned Aerial Vehicle (UAV)/Unmanned Aircraft System (UAS)/Remote Piloted Vehicle (RPV)", 
              "id": "UAV", 
              "graphic": "01110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Vertical-Takeoff UAV (VT-UAV)", 
              "id": "VT_UAV", 
              "graphic": "01110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Lighter Than Air", 
              "id": "LIGHTER_THAN_AIR", 
              "graphic": "01110500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Airship", 
              "id": "AIRSHIP", 
              "graphic": "01110600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Tethered Lighter Than Air", 
              "id": "TETHERED_LTA", 
              "graphic": "01110700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Civilian", 
          "id": "CIVILIAN", 
          "graphic": "01120000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Fixed Wing", 
              "id": "CIV_FIXED_WING", 
              "graphic": "01120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Rotary Wing", 
              "id": "CIV_ROTARY_WING", 
              "graphic": "01120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Unmanned Aircraft (UA) / Unmanned Aerial Vehicle (UAV) / Unmanned Aircraft System (UAS) / Remote Piloted Vehicle (RPV)", 
              "id": "CIV_UAV", 
              "graphic": "01120300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Lighter Than Air", 
              "id": "CIV_LTA", 
              "graphic": "01120400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Airship", 
              "id": "CIV_AIRSHIP", 
              "graphic": "01120500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Tethered Lighter than Air", 
              "id": "CIV_TETHERED_LTA", 
              "graphic": "01120600.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Weapon", 
          "id": "WEAPON", 
          "graphic": "01130000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bomb", 
              "id": "BOMB", 
              "graphic": "01130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Decoy", 
              "id": "DECOY", 
              "graphic": "01130200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Manual Track", 
          "id": "MANUAL_TRACK", 
          "graphic": "01140000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Attack/Strike", 
          "id": "ATTACK_STRIKE_MOD", 
          "graphic": "01011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Bomber", 
          "id": "BOMBER_MOD", 
          "graphic": "01021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Cargo", 
          "id": "CARGO_MOD", 
          "graphic": "01031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Fighter", 
          "id": "FIGHTER_MOD", 
          "graphic": "01041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Interceptor", 
          "id": "INTERCEPTOR_MOD", 
          "graphic": "01051.svg", 
          "remarks": "APP-6"
        }, 
        {
          "digits": "06", 
          "label": "Tanker", 
          "id": "TANKER_MOD", 
          "graphic": "01061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Utility", 
          "id": "UTILITY_MOD", 
          "graphic": "01071.svg"
        }, 
        {
          "digits": "08", 
          "label": "VSTOL/VTOL", 
          "id": "VSTOL_MOD", 
          "graphic": "01081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Passenger", 
          "id": "PASSENGER_MOD", 
          "graphic": "01091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Ultra Light", 
          "id": "ULTRA_LIGHT_MOD", 
          "graphic": "01101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Airborne Command Post (ACP)", 
          "id": "ACP_MOD", 
          "graphic": "01111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Airborne Early Warning (AEW)", 
          "id": "AEW_MOD", 
          "graphic": "01121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Government", 
          "id": "GOV_MOD", 
          "graphic": "01131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Medical Evacuation (MEDEVAC)", 
          "id": "MEDEVAC_MOD", 
          "graphic": "01141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Escort", 
          "id": "ESCORT_MOD", 
          "graphic": "01151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Electronic Combat (EC)/Jammer", 
          "id": "EC_MOD", 
          "graphic": "01161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Patrol", 
          "id": "PATROL_MOD", 
          "graphic": "01171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Reconnaissance", 
          "id": "RECON_MOD", 
          "graphic": "01181.svg"
        }, 
        {
          "digits": "19", 
          "label": "Trainer", 
          "id": "TRAINER_MOD", 
          "graphic": "01191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Photographic (Reconnaissance)", 
          "id": "PHOTO_MOD", 
          "graphic": "01201.svg"
        }, 
        {
          "digits": "21", 
          "label": "Personnel Recovery", 
          "id": "PERSONNEL_RECOVERY_MOD", 
          "graphic": "01211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Antisubmarine Warfare", 
          "id": "ASW_MOD", 
          "graphic": "01221.svg"
        }, 
        {
          "digits": "23", 
          "label": "Communications", 
          "id": "COMMS_MOD", 
          "graphic": "01231.svg"
        }, 
        {
          "digits": "24", 
          "label": "Electronic Support (ES)", 
          "id": "ES_MOD", 
          "graphic": "01241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Mine Countermeasures (MCM)", 
          "id": "MCM_MOD", 
          "graphic": "01251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Search and Rescue", 
          "id": "SAR_MOD", 
          "graphic": "01261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Special Operations Forces", 
          "id": "SOF_MOD", 
          "graphic": "01271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Surface Warfare", 
          "id": "SURFACE_WARFARE_MOD", 
          "graphic": "01281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Very Important Person (VIP) Transport", 
          "id": "VIP_MOD", 
          "graphic": "01291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Combat Search and Rescue (CSAR)", 
          "id": "CSAR_MOD", 
          "graphic": "01301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Suppression of Enemy Air Defenses", 
          "id": "SUPP_EAD_MOD", 
          "graphic": "01311.svg", 
          "remarks": "APP-6"
        }, 
        {
          "digits": "32", 
          "label": "Antisurface Warfare", 
          "id": "ASUW_MOD", 
          "graphic": "01321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Fighter/Bomber", 
          "id": "FB_MOD", 
          "graphic": "01331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Intensive Care", 
          "id": "IC_MOD", 
          "graphic": "01341.svg"
        }, 
        {
          "digits": "35", 
          "label": "Electronic Attack (EA)", 
          "id": "EA_MOD", 
          "graphic": "01351.svg"
        }, 
        {
          "digits": "36", 
          "label": "Multimission", 
          "id": "MULTIMISSION_MOD", 
          "graphic": "01361.svg"
        }, 
        {
          "digits": "37", 
          "label": "Hijacking", 
          "id": "HIJACKING_MOD", 
          "graphic": "01371.svg"
        }, 
        {
          "digits": "38", 
          "label": "ASW Helo - LAMPS", 
          "id": "ASW_HELO_LAMPS_MOD", 
          "graphic": "01381.svg"
        }, 
        {
          "digits": "39", 
          "label": "ASW Helo - SH-60R", 
          "id": "ASW_HELO_SH_60R_MOD", 
          "graphic": "01391.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Heavy", 
          "id": "HVY_MOD", 
          "graphic": "01012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Medium", 
          "id": "MED_MOD", 
          "graphic": "01022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Light", 
          "id": "LT_MOD", 
          "graphic": "01032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Boom-Only", 
          "id": "BOOM_MOD", 
          "graphic": "01042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Drogue-Only", 
          "id": "DROGUE_MOD", 
          "graphic": "01052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Boom and Drogue", 
          "id": "BOOM_DROGUE_MOD", 
          "graphic": "01062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Close Range", 
          "id": "CLOSE_MOD", 
          "graphic": "01072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Short Range", 
          "id": "SHORT_MOD", 
          "graphic": "01082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Medium Range", 
          "id": "MEDIUM_MOD", 
          "graphic": "01092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Long Range", 
          "id": "LONG_MOD", 
          "graphic": "01102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Downlinked", 
          "id": "DOWNLINK_MOD", 
          "graphic": "01112.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Air", 
        "modifierTwos": "Appendices/Air/mod2", 
        "modifierOnes": "Appendices/Air/mod1"
      }
    }, 
    {
      "digits": "02", 
      "label": "Air Missile", 
      "id": "SS_AIR_MISSILE", 
      "dimensionId": "AIR", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Missile", 
          "id": "MISSILE", 
          "graphic": "02110000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Air", 
          "id": "AIR_MOD", 
          "graphic": "02011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Surface", 
          "id": "SURFACE_MOD", 
          "graphic": "02021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Subsurface", 
          "id": "SUB_MOD", 
          "graphic": "02031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "02041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Anti-Ballistic", 
          "id": "AB_MOD", 
          "graphic": "02051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Ballistic", 
          "id": "BALLISTIC_MOD", 
          "graphic": "02061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Cruise", 
          "id": "CRUISE_MOD", 
          "graphic": "02071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Interceptor", 
          "id": "INTERCEPTOR_MOD", 
          "graphic": "02081.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Air", 
          "id": "AIR_DEST_MOD", 
          "graphic": "02012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Surface", 
          "id": "SURFACE_DEST_MOD", 
          "graphic": "02022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Subsurface", 
          "id": "SUB_DEST_MOD", 
          "graphic": "02032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Space", 
          "id": "SPACE_DEST_MOD", 
          "graphic": "02042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Launched", 
          "id": "LAUNCHED_MOD", 
          "graphic": "02052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Missile", 
          "id": "MISSILE_MOD", 
          "graphic": "02062.svg", 
          "remarks": "APP-6"
        }, 
        {
          "digits": "07", 
          "label": "Patriot", 
          "id": "PATRIOT_MOD", 
          "graphic": "02072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Standard Missile-2 (SM-2)", 
          "id": "SM2_MOD", 
          "graphic": "02082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Standard Missile-6 (SM-6)", 
          "id": "SM6_MOD", 
          "graphic": "02092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Evolved Sea Sparrow Missile (ESSM)", 
          "id": "ESSM_MOD", 
          "graphic": "02102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Rolling Airframe Missile (RAM)", 
          "id": "RAM_MOD", 
          "graphic": "02112.svg"
        }, 
        {
          "digits": "12", 
          "label": "Short Range", 
          "id": "SHORT_MOD", 
          "graphic": "02122.svg", 
          "remarks": "1000km or less."
        }, 
        {
          "digits": "13", 
          "label": "Medium Range", 
          "id": "MED_MOD", 
          "graphic": "02132.svg", 
          "remarks": "1000km to 3500km. Typically used in reference to surface-to-air missiles."
        }, 
        {
          "digits": "14", 
          "label": "Intermediate Range", 
          "id": "INTER_MOD", 
          "graphic": "02142.svg", 
          "remarks": "1000km to 3500km. Typically used in reference to ballistic missiles."
        }, 
        {
          "digits": "15", 
          "label": "Long Range", 
          "id": "LONG_MOD", 
          "graphic": "02152.svg", 
          "remarks": "3500km to 5500km."
        }, 
        {
          "digits": "16", 
          "label": "Intercontinental", 
          "id": "INTERCONT_MOD", 
          "graphic": "02162.svg", 
          "remarks": "5500km or greater."
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Air", 
        "modifierTwos": "Appendices/Air/mod2", 
        "modifierOnes": "Appendices/Air/mod1"
      }
    }, 
    {
      "digits": "05", 
      "label": "Space", 
      "id": "SS_SPACE", 
      "dimensionId": "SPACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Military", 
          "id": "MILITARY", 
          "graphic": "05110000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Space Vehicle", 
              "id": "SPACE_VEHICLE", 
              "graphic": "05110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Re-Entry Vehicle", 
              "id": "RE_ENTRY_VEHICLE", 
              "graphic": "05110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Planet Lander", 
              "id": "PLANET_LANDER", 
              "graphic": "05110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Orbiter Shuttle", 
              "id": "ORBITER_SHUTTLE", 
              "graphic": "05110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Capsule", 
              "id": "CAPSULE", 
              "graphic": "05110500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Satellite, General", 
              "id": "GENERAL_SATELLITE", 
              "graphic": "05110600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Satellite", 
              "id": "SATELLITE", 
              "graphic": "05110700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Antisatellite Weapon", 
              "id": "ANTISATELLITE_WEAPON", 
              "graphic": "05110800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Astronomical Satellite", 
              "id": "ASTRONOMICAL_SATELLITE", 
              "graphic": "05110900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Biosatellite", 
              "id": "BIOSATELLITE", 
              "graphic": "05111000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Communications Satellite", 
              "id": "COMMUNICATIONS_SATELLITE", 
              "graphic": "05111100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Earth Observation Satellite", 
              "id": "EARTH_OBSERVATION_SATELLITE", 
              "graphic": "05111200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Miniaturized Satellite", 
              "id": "MINIATURIZED_SATELLITE", 
              "graphic": "05111300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Navigational Satellite", 
              "id": "NAVIGATIONAL_SATELLITE", 
              "graphic": "05111400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Reconnaissance Satellite", 
              "id": "RECONNAISSANCE_SATELLITE", 
              "graphic": "05111500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Space Station", 
              "id": "SPACE_STATION", 
              "graphic": "05111600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Tethered Satellite", 
              "id": "TETHERED_SATELLITE", 
              "graphic": "05111700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Weather Satellite", 
              "id": "WEATHER_SATELLITE", 
              "graphic": "05111800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Space Launched Vehicle (SLV)", 
              "id": "SPACE_LAUNCHED_VEHICLE", 
              "graphic": "05111900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Civilian", 
          "id": "CIVILIAN", 
          "graphic": "05120000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Orbiter Shuttle", 
              "id": "CIV_ORBITER_SHUTTLE", 
              "graphic": "05120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Capsule", 
              "id": "CIV_CAPSULE", 
              "graphic": "05120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Satellite", 
              "id": "CIV_SATELLITE", 
              "graphic": "05120300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Astronomical Satellite", 
              "id": "CIV_ASTRONOMICAL_SATELLITE", 
              "graphic": "05120400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Biosatellite", 
              "id": "CIV_BIOSATELLITE", 
              "graphic": "05120500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Communications Satellite", 
              "id": "CIV_COMMUNICATIONS_SATELLITE", 
              "graphic": "05120600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Earth Observation Satellite", 
              "id": "CIV_EARTH_OBSERVATION_SATELLITE", 
              "graphic": "05120700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Miniaturized Satellite", 
              "id": "CIV_MINIATURIZED_SATELLITE", 
              "graphic": "05120800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Navigational Satellite", 
              "id": "CIV_NAVIGATIONAL_SATELLITE", 
              "graphic": "05120900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Space Station", 
              "id": "CIV_SPACE_STATION", 
              "graphic": "05121000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Tethered Satellite", 
              "id": "CIV_TETHERED_SATELLITE", 
              "graphic": "05121100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Weather Satellite", 
              "id": "CIV_WEATHER_SATELLITE", 
              "graphic": "05121200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Manual Track", 
          "id": "MANUAL_TRACK", 
          "graphic": "05130000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Low Earth Orbit (LEO)", 
          "id": "LEO_MOD", 
          "graphic": "05011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Medium Earth Orbit (MEO)", 
          "id": "MEO_MOD", 
          "graphic": "05021.svg"
        }, 
        {
          "digits": "03", 
          "label": "High Earth Orbit (HEO)", 
          "id": "HEO_MOD", 
          "graphic": "05031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Geosynchronous Orbit (GSO)", 
          "id": "GSO_MOD", 
          "graphic": "05041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Geostationary Orbit (GO)", 
          "id": "GO_MOD", 
          "graphic": "05051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Molniya Orbit (MO)", 
          "id": "MO_MOD", 
          "graphic": "05061.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Optical", 
          "id": "OPTICAL_MOD", 
          "graphic": "05012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Infrared", 
          "id": "INFRARED_MOD", 
          "graphic": "05022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Radar", 
          "id": "RADAR_MOD", 
          "graphic": "05032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Signals Intelligence (SIGINT)", 
          "id": "SIGINT_MOD", 
          "graphic": "05042.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Space", 
        "modifierTwos": "Appendices/Space/mod2", 
        "modifierOnes": "Appendices/Space/mod1"
      }
    }, 
    {
      "digits": "06", 
      "label": "Space Missile", 
      "id": "SS_SPACE_MISSILE", 
      "dimensionId": "SPACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Missile", 
          "id": "MISSILE", 
          "graphic": "06110000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Ballistic", 
          "id": "BALLISTIC_MOD", 
          "graphic": "06011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Space", 
          "id": "SPACE_1_MOD", 
          "graphic": "06021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Interceptor", 
          "id": "INTERCEPTOR_MOD", 
          "graphic": "06031.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Short Range", 
          "id": "SHORT_MOD", 
          "graphic": "06012.svg", 
          "remarks": "1000km or less"
        }, 
        {
          "digits": "02", 
          "label": "Medium Range", 
          "id": "MEDIUM_MOD", 
          "graphic": "06022.svg", 
          "remarks": "1000km to 3500km"
        }, 
        {
          "digits": "03", 
          "label": "Intermediate Range", 
          "id": "INTERMEDIATE_MOD", 
          "graphic": "06032.svg", 
          "remarks": "1000km to 3500km"
        }, 
        {
          "digits": "04", 
          "label": "Long Range", 
          "id": "LONG_MOD", 
          "graphic": "06042.svg", 
          "remarks": "3500km to 5500km"
        }, 
        {
          "digits": "05", 
          "label": "Intercontinental", 
          "id": "INTERCONTINENTAL_MOD", 
          "graphic": "06052.svg", 
          "remarks": "5500km or greater"
        }, 
        {
          "digits": "06", 
          "label": "Arrow", 
          "id": "ARROW_MOD", 
          "graphic": "06062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Ground-Based Interceptor (GBI)", 
          "id": "GBI_MOD", 
          "graphic": "06072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Patriot", 
          "id": "PATRIOT_MOD", 
          "graphic": "06082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Standard Missile - Terminal Phase (SM-T)", 
          "id": "SMT_MOD", 
          "graphic": "06092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Standard Missile - 3 (SM-3)", 
          "id": "SM3_MOD", 
          "graphic": "06102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Terminal High-Altitude Area Defense (THAAD)", 
          "id": "THAAD_MOD", 
          "graphic": "06112.svg"
        }, 
        {
          "digits": "12", 
          "label": "Space", 
          "id": "SPACE_2_MOD", 
          "graphic": "06122.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Space", 
        "modifierTwos": "Appendices/Space/mod2", 
        "modifierOnes": "Appendices/Space/mod1"
      }
    }, 
    {
      "digits": "10", 
      "label": "Land Units", 
      "id": "SS_LAND_UNIT", 
      "dimensionId": "LAND_UNIT", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Command and Control", 
          "id": "COMMAND_AND_CONTROL", 
          "graphic": "10110000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchical explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Broadcast Transmitter Antennae", 
              "id": "BROADCAST_TRANSMITTER_ANTENNAE", 
              "graphic": "10110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Civil Affairs", 
              "id": "CIVIL_AFFAIRS", 
              "graphic": "10110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Civil-Military Cooperation", 
              "id": "CIVIL_MILITARY_COOPERATION", 
              "graphic": "10110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Information Operations", 
              "id": "INFORMATION_OPERATIONS", 
              "graphic": "10110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Liaison", 
              "id": "LIAISON", 
              "graphic": "10110500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Military Information Support Operations (MISO)", 
              "id": "MILITARY_INFORMATION_SUPPORT_OPERATIONS_MISO", 
              "graphic": "10110600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Broadcast Transmitter Antennae", 
                  "id": "BROADCAST_TRANSMITTER_ANTENNAE_MISO", 
                  "graphic": "10110601.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Radio", 
              "id": "RADIO", 
              "graphic": "10110700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Radio Relay", 
              "id": "RADIO_RELAY", 
              "graphic": "10110800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Radio Teletype Center", 
              "id": "RADIO_TELETYPE_CENTER", 
              "graphic": "10110900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Signal", 
              "id": "SIGNAL", 
              "cloverGraphic": "10111000_0.svg", 
              "diamondGraphic": "10111000_3.svg", 
              "rectangleGraphic": "10111000_1.svg", 
              "squareGraphic": "10111000_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Radio", 
                  "id": "SIGNAL_RADIO", 
                  "cloverGraphic": "10111001_0.svg", 
                  "diamondGraphic": "10111001_3.svg", 
                  "rectangleGraphic": "10111001_1.svg", 
                  "squareGraphic": "10111001_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Radio Relay", 
                  "id": "SIGNAL_RADIO_RELAY", 
                  "cloverGraphic": "10111002_0.svg", 
                  "diamondGraphic": "10111002_3.svg", 
                  "rectangleGraphic": "10111002_1.svg", 
                  "squareGraphic": "10111002_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Teletype", 
                  "id": "SIGNAL_TELETYPE", 
                  "cloverGraphic": "10111003_0.svg", 
                  "diamondGraphic": "10111003_3.svg", 
                  "rectangleGraphic": "10111003_1.svg", 
                  "squareGraphic": "10111003_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "04", 
                  "label": "Tactical Satellite", 
                  "id": "SIGNAL_TACTICAL_SATELLITE", 
                  "cloverGraphic": "10111004_0.svg", 
                  "diamondGraphic": "10111004_3.svg", 
                  "rectangleGraphic": "10111004_1.svg", 
                  "squareGraphic": "10111004_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "05", 
                  "label": "Video Imagery (Combat Camera)", 
                  "id": "SIGNAL_VIDEO_IMAGERY_COMBAT_CAMERA", 
                  "cloverGraphic": "10111005_0.svg", 
                  "diamondGraphic": "10111005_3.svg", 
                  "rectangleGraphic": "10111005_1.svg", 
                  "squareGraphic": "10111005_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Tactical Satellite", 
              "id": "TACTICAL_SATELLITE", 
              "graphic": "10111100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Video Imagery (Combat Camera)", 
              "id": "VIDEO_IMAGERY_COMBAT_CAMERA", 
              "graphic": "10111200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Movement and Maneuver", 
          "id": "MOVEMENT_AND_MANEUVER", 
          "remarks": "No icon is associated with this entity. It is for hiearchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Air Assault with Organic Lift", 
              "id": "AIR_ASSAULT_WITH_ORGANIC_LIFT", 
              "cloverGraphic": "10120100_0.svg", 
              "diamondGraphic": "10120100_3.svg", 
              "rectangleGraphic": "10120100_1.svg", 
              "squareGraphic": "10120100_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Air Traffic Services/Airfield Operations", 
              "id": "AIR_TRAFFIC_SERVICES_AIRFIELD_OPERATIONS", 
              "graphic": "10120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Amphibious", 
              "id": "AMPHIBIOUS", 
              "cloverGraphic": "10120300_0.svg", 
              "diamondGraphic": "10120300_3.svg", 
              "rectangleGraphic": "10120300_1.svg", 
              "squareGraphic": "10120300_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Antitank/Antiarmor", 
              "id": "ANTITANK_ANTIARMOR", 
              "cloverGraphic": "10120400_0.svg", 
              "diamondGraphic": "10120400_3.svg", 
              "rectangleGraphic": "10120400_1.svg", 
              "squareGraphic": "10120400_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Armored", 
                  "id": "ARMORED", 
                  "cloverGraphic": "10120401_0.svg", 
                  "diamondGraphic": "10120401_3.svg", 
                  "rectangleGraphic": "10120401_1.svg", 
                  "squareGraphic": "10120401_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Motorized", 
                  "id": "MOTORIZED", 
                  "cloverGraphic": "10120402_0.svg", 
                  "diamondGraphic": "10120402_3.svg", 
                  "rectangleGraphic": "10120402_1.svg", 
                  "squareGraphic": "10120402_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Armor/Armored/Mechanized/Self-Propelled/Tracked", 
              "id": "ARMOR_ARMORED_MECHANIZED_SELF_PROPELLED_TRACKED", 
              "graphic": "10120500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Reconnaissance/Cavalry/Scout", 
                  "id": "RECONNAISSANCE_CAVALRY_SCOUT", 
                  "cloverGraphic": "10120501_0.svg", 
                  "diamondGraphic": "10120501_3.svg", 
                  "rectangleGraphic": "10120501_1.svg", 
                  "squareGraphic": "10120501_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Amphibious", 
                  "id": "ARMORED_AMPHIBIOUS", 
                  "cloverGraphic": "10120502_0.svg", 
                  "diamondGraphic": "10120502_3.svg", 
                  "rectangleGraphic": "10120502_1.svg", 
                  "squareGraphic": "10120502_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Army Aviation/Aviation Rotary Wing", 
              "id": "ARMY_AVIATION_AVIATION_ROTARY_WING", 
              "graphic": "10120600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Reconnaissance", 
                  "id": "AVIATION_RECONNAISSANCE", 
                  "cloverGraphic": "10120601_0.svg", 
                  "diamondGraphic": "10120601_3.svg", 
                  "rectangleGraphic": "10120601_1.svg", 
                  "squareGraphic": "10120601_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Aviation Composite", 
              "id": "AVIATION_COMPOSITE", 
              "graphic": "10120700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Aviation Fixed Wing", 
              "id": "AVIATION_FIXED_WING", 
              "graphic": "10120800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Reconnaissance", 
                  "id": "AVIATION_FIXED_WING_RECONNAISSANCE", 
                  "cloverGraphic": "10120801_0.svg", 
                  "diamondGraphic": "10120801_3.svg", 
                  "rectangleGraphic": "10120801_1.svg", 
                  "squareGraphic": "10120801_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Combat", 
              "id": "COMBAT", 
              "graphic": "10120900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Combined Arms", 
              "id": "COMBINED_ARMS", 
              "graphic": "10121000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Infantry", 
              "id": "INFANTRY", 
              "cloverGraphic": "10121100_0.svg", 
              "diamondGraphic": "10121100_3.svg", 
              "rectangleGraphic": "10121100_1.svg", 
              "squareGraphic": "10121100_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Amphibious", 
                  "id": "INFANTRY_AMPHIBIOUS", 
                  "cloverGraphic": "10121101_0.svg", 
                  "diamondGraphic": "10121101_3.svg", 
                  "rectangleGraphic": "10121101_1.svg", 
                  "squareGraphic": "10121101_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Armored/Mechanized/Tracked", 
                  "id": "INFANTRY_ARMORED_MECHANIZED_TRACKED", 
                  "cloverGraphic": "10121102_0.svg", 
                  "diamondGraphic": "10121102_3.svg", 
                  "rectangleGraphic": "10121102_1.svg", 
                  "squareGraphic": "10121102_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Main Gun System", 
                  "id": "INFANTRY_MAIN_GUN_SYSTEM", 
                  "cloverGraphic": "10121103_0.svg", 
                  "diamondGraphic": "10121103_3.svg", 
                  "rectangleGraphic": "10121103_1.svg", 
                  "squareGraphic": "10121103_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "04", 
                  "label": "Motorized", 
                  "id": "INFANTRY_MOTORIZED", 
                  "cloverGraphic": "10121104_0.svg", 
                  "diamondGraphic": "10121104_3.svg", 
                  "rectangleGraphic": "10121104_1.svg", 
                  "squareGraphic": "10121104_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "05", 
                  "label": "Infantry Fighting Vehicle", 
                  "id": "INFANTRY_FIGHTING_VEHICLE", 
                  "cloverGraphic": "10121105_0.svg", 
                  "diamondGraphic": "10121105_3.svg", 
                  "rectangleGraphic": "10121105_1.svg", 
                  "squareGraphic": "10121105_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "12", 
              "label": "Observer", 
              "id": "OBSERVER", 
              "graphic": "10121200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Reconnaissance/Cavalry/Scout", 
              "id": "RECON_CAVALRY_SCOUT", 
              "cloverGraphic": "10121300_0.svg", 
              "diamondGraphic": "10121300_3.svg", 
              "rectangleGraphic": "10121300_1.svg", 
              "squareGraphic": "10121300_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Reconnaissance and Surveillance", 
                  "id": "RECONNAISSANCE_AND_SURVEILLANCE", 
                  "cloverGraphic": "10121301_0.svg", 
                  "diamondGraphic": "10121301_3.svg", 
                  "rectangleGraphic": "10121301_1.svg", 
                  "squareGraphic": "10121301_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Marine", 
                  "id": "RECON_MARINE", 
                  "cloverGraphic": "10121302_0.svg", 
                  "diamondGraphic": "10121302_3.svg", 
                  "rectangleGraphic": "10121302_1.svg", 
                  "squareGraphic": "10121302_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Motorized", 
                  "id": "RECON_MOTORIZED", 
                  "cloverGraphic": "10121303_0.svg", 
                  "diamondGraphic": "10121303_3.svg", 
                  "rectangleGraphic": "10121303_1.svg", 
                  "squareGraphic": "10121303_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Sea Air Land (SEAL)", 
              "id": "SEA_AIR_LAND_SEAL", 
              "graphic": "10121400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Sniper", 
              "id": "SNIPER", 
              "graphic": "10121500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Surveillance", 
              "id": "SURVEILLANCE", 
              "graphic": "10121600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Special Forces", 
              "id": "SPECIAL_FORCES", 
              "graphic": "10121700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Special Operations Forces (SOF)", 
              "id": "SPECIAL_OPERATIONS_FORCES_SOF", 
              "graphic": "10121800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fixed Wing MISO", 
                  "id": "FIXED_WING_MISO", 
                  "graphic": "10121801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Ground", 
                  "id": "GROUND", 
                  "cloverGraphic": "10121802_0.svg", 
                  "diamondGraphic": "10121802_3.svg", 
                  "rectangleGraphic": "10121802_1.svg", 
                  "squareGraphic": "10121802_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Special Boat", 
                  "id": "SPECIAL_BOAT", 
                  "graphic": "10121803.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Special SSNR", 
                  "id": "SPECIAL_SSNR", 
                  "graphic": "10121804.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Underwater Demolition Team", 
                  "id": "UNDERWATER_DEMOLITION_TEAM", 
                  "graphic": "10121805.svg"
                }
              ]
            }, 
            {
              "digits": "19", 
              "label": "Unmanned Aerial Systems", 
              "id": "UNMANNED_AERIAL_SYSTEMS", 
              "graphic": "10121900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Fires", 
          "id": "FIRES", 
          "remarks": "No icon is associated with this entity. It is for hiearchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Air Defense", 
              "id": "AIR_DEFENSE", 
              "cloverGraphic": "10130100_0.svg", 
              "diamondGraphic": "10130100_3.svg", 
              "rectangleGraphic": "10130100_1.svg", 
              "squareGraphic": "10130100_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Main Gun System", 
                  "id": "AD_MAIN_GUN_SYSTEM", 
                  "cloverGraphic": "10130101_0.svg", 
                  "diamondGraphic": "10130101_3.svg", 
                  "rectangleGraphic": "10130101_1.svg", 
                  "squareGraphic": "10130101_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Missile", 
                  "id": "AD_MISSILE", 
                  "cloverGraphic": "10130102_0.svg", 
                  "diamondGraphic": "10130102_3.svg", 
                  "rectangleGraphic": "10130102_1.svg", 
                  "squareGraphic": "10130102_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Air/Land Naval Gunfire Liaison", 
              "id": "AIR_LAND_NAVAL_GUNFIRE_LIAISON", 
              "cloverGraphic": "10130200_0.svg", 
              "diamondGraphic": "10130200_3.svg", 
              "rectangleGraphic": "10130200_1.svg", 
              "squareGraphic": "10130200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Field Artillery", 
              "id": "FIELD_ARTILLERY", 
              "graphic": "10130300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Self-propelled", 
                  "id": "FA_SELF_PROPELLED", 
                  "graphic": "10130301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Target Acquisition", 
                  "id": "FA_TARGET_ACQUISITION", 
                  "cloverGraphic": "10130302_0.svg", 
                  "diamondGraphic": "10130302_3.svg", 
                  "rectangleGraphic": "10130302_1.svg", 
                  "squareGraphic": "10130302_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Field Artillery Observer", 
              "id": "FIELD_ARTILLERY_OBSERVER", 
              "graphic": "10130400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Joint Fire Support", 
              "id": "JOINT_FIRE_SUPPORT", 
              "graphic": "10130500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Meteorological", 
              "id": "METEOROLOGICAL", 
              "graphic": "10130600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Missile", 
              "id": "MISSILE", 
              "graphic": "10130700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Mortar", 
              "id": "MORTAR", 
              "graphic": "10130800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Armored/Mechanized/Tracked", 
                  "id": "ARMORED_MECHANIZED_TRACKED", 
                  "graphic": "10130801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Self-Propelled Wheeled", 
                  "id": "SELF_PROPELLED_WHEELED", 
                  "graphic": "10130802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Towed", 
                  "id": "TOWED", 
                  "graphic": "10130803.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Survey", 
              "id": "SURVEY", 
              "graphic": "10130900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Protection", 
          "id": "PROTECTION", 
          "remarks": "No icon is associated with this entity. It is for hierarchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Chemical Biological Radiological Nuclear Defense", 
              "id": "CHEMICAL_BIOLOGICAL_RADIOLOGICAL_NUCLEAR_DEFENSE", 
              "graphic": "10140100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Mechanized", 
                  "id": "CBRN_MECHANIZED", 
                  "graphic": "10140101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Motorized", 
                  "id": "CBRN_MOTORIZED", 
                  "cloverGraphic": "10140102_0.svg", 
                  "diamondGraphic": "10140102_3.svg", 
                  "rectangleGraphic": "10140102_1.svg", 
                  "squareGraphic": "10140102_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Reconnaissance", 
                  "id": "CBRN_RECONNAISSANCE", 
                  "cloverGraphic": "10140103_0.svg", 
                  "diamondGraphic": "10140103_3.svg", 
                  "rectangleGraphic": "10140103_1.svg", 
                  "squareGraphic": "10140103_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "04", 
                  "label": "Reconnaissance Armored", 
                  "id": "CBRN_RECONNAISSANCE_ARMORED", 
                  "cloverGraphic": "10140104_0.svg", 
                  "diamondGraphic": "10140104_3.svg", 
                  "rectangleGraphic": "10140104_1.svg", 
                  "squareGraphic": "10140104_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "05", 
                  "label": "Reconnaissance Equipped", 
                  "id": "CBRN_RECONNAISSANCE_EQUIPPED", 
                  "cloverGraphic": "10140105_0.svg", 
                  "diamondGraphic": "10140105_3.svg", 
                  "rectangleGraphic": "10140105_1.svg", 
                  "squareGraphic": "10140105_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Combat Support (Maneuver Enhancement)", 
              "id": "COMBAT_SUPPORT_MANEUVER_ENHANCEMENT", 
              "graphic": "10140200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Criminal Investigation Division", 
              "id": "CRIMINAL_INVESTIGATION_DIVISION", 
              "graphic": "10140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Diving", 
              "id": "DIVING", 
              "graphic": "10140400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Dog", 
              "id": "DOG", 
              "graphic": "10140500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Drilling", 
              "id": "DRILLING", 
              "graphic": "10140600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Engineer", 
              "id": "ENGINEER", 
              "graphic": "10140700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Mechanized", 
                  "id": "ENG_MECHANIZED", 
                  "graphic": "10140701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Motorized", 
                  "id": "ENG_MOTORIZED", 
                  "cloverGraphic": "10140702_0.svg", 
                  "diamondGraphic": "10140702_3.svg", 
                  "rectangleGraphic": "10140702_1.svg", 
                  "squareGraphic": "10140702_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Reconnaissance", 
                  "id": "ENG_RECONNAISSANCE", 
                  "cloverGraphic": "10140703_0.svg", 
                  "diamondGraphic": "10140703_3.svg", 
                  "rectangleGraphic": "10140703_1.svg", 
                  "squareGraphic": "10140703_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Explosive Ordnance Disposal (EOD)", 
              "id": "EXPLOSIVE_ORDNANCE_DISPOSAL_EOD", 
              "graphic": "10140800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Field Camp Construction", 
              "id": "FIELD_CAMP_CONSTRUCTION", 
              "graphic": "10140900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Fire Fighting/Fire Protection", 
              "id": "FIRE_FIGHTING_FIRE_PROTECTION", 
              "graphic": "10141000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Geospatial Support/Geospatial Information Support", 
              "id": "GEOSPATIAL_SUPPORT_GEOSPATIAL_INFORMATION_SUPPORT", 
              "graphic": "10141100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Military Police", 
              "id": "MILITARY_POLICE", 
              "graphic": "10141200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Mine", 
              "id": "MINE", 
              "graphic": "10141300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Mine Clearing", 
              "id": "MINE_CLEARING", 
              "graphic": "10141400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Mine Launching", 
              "id": "MINE_LAUNCHING", 
              "graphic": "10141500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Mine Laying", 
              "id": "MINE_LAYING", 
              "graphic": "10141600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Security", 
              "id": "SECURITY", 
              "graphic": "10141700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Mechanized", 
                  "id": "SEC_MECHANIZED", 
                  "graphic": "10141701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Motorized", 
                  "id": "SEC_MOTORIZED", 
                  "cloverGraphic": "10141702_0.svg", 
                  "diamondGraphic": "10141702_3.svg", 
                  "rectangleGraphic": "10141702_1.svg", 
                  "squareGraphic": "10141702_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "Search and Rescue", 
              "id": "SEARCH_AND_RESCUE", 
              "graphic": "10141800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Security Police (Air)", 
              "id": "SECURITY_POLICE_AIR", 
              "graphic": "10141900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Shore Patrol", 
              "id": "SHORE_PATROL", 
              "graphic": "10142000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Topographic", 
              "id": "TOPOGRAPHIC", 
              "graphic": "10142100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Intelligence", 
          "id": "INTELLIGENCE", 
          "remarks": "No icon is associated with this entity. It is for hierarchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Analysis", 
              "id": "ANALYSIS", 
              "graphic": "10150100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Counterintelligence", 
              "id": "COUNTERINTELLIGENCE", 
              "graphic": "10150200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Direction Finding", 
              "id": "DIRECTION_FINDING", 
              "graphic": "10150300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Electronic Ranging", 
              "id": "ELECTRONIC_RANGING", 
              "graphic": "10150400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Electronic Warfare", 
              "id": "ELECTRONIC_WARFARE", 
              "graphic": "10150500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Analysis", 
                  "id": "EW_ANALYSIS", 
                  "graphic": "10150501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Direction Finding", 
                  "id": "EW_DIRECTION_FINDING", 
                  "graphic": "10150502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Intercept", 
                  "id": "EW_INTERCEPT", 
                  "graphic": "10150503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Jamming", 
                  "id": "EW_JAMMING", 
                  "cloverGraphic": "10150504_0.svg", 
                  "diamondGraphic": "10150504_3.svg", 
                  "rectangleGraphic": "10150504_1.svg", 
                  "squareGraphic": "10150504_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "05", 
                  "label": "Search", 
                  "id": "EW_SEARCH", 
                  "graphic": "10150505.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Intercept (Search and Recording)", 
              "id": "INTERCEPT_SEARCH_RECORDING", 
              "graphic": "10150600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Interrogation", 
              "id": "INTERROGATION", 
              "graphic": "10150700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Jamming", 
              "id": "JAMMING", 
              "cloverGraphic": "10150800_0.svg", 
              "diamondGraphic": "10150800_3.svg", 
              "rectangleGraphic": "10150800_1.svg", 
              "squareGraphic": "10150800_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Joint Intelligence Center", 
              "id": "JOINT_INTELLIGENCE_CENTER", 
              "graphic": "10150900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Military Intelligence", 
              "id": "MILITARY_INTELLIGENCE", 
              "graphic": "10151000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Search", 
              "id": "SEARCH", 
              "graphic": "10151100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Sensor", 
              "id": "SENSOR", 
              "graphic": "10151200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Sustainment", 
          "id": "SUSTAINMENT", 
          "graphic": "10160000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Administrative", 
              "id": "ADMINISTRATIVE", 
              "graphic": "10160100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "All Classes of Supply", 
              "id": "ALL_CLASSES_SUPPLY", 
              "cloverGraphic": "10160200_0.svg", 
              "diamondGraphic": "10160200_3.svg", 
              "rectangleGraphic": "10160200_1.svg", 
              "squareGraphic": "10160200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Airport of Debarkation/Airport of Embarkation", 
              "id": "AIRPORT_DEBARKATION_AIRPORT_EMBARKATION", 
              "graphic": "10160300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Ammunition", 
              "id": "AMMUNITION", 
              "graphic": "10160400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Band", 
              "id": "BAND", 
              "graphic": "10160500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Combat Service Support", 
              "id": "COMBAT_SERVICE_SUPPORT", 
              "graphic": "10160600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Finance", 
              "id": "FINANCE", 
              "graphic": "10160700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Judge Advocate General", 
              "id": "JUDGE_ADVOCATE_GENERAL", 
              "graphic": "10160800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Labor", 
              "id": "LABOR", 
              "graphic": "10160900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Laundry/Bath", 
              "id": "LAUNDRY_BATH", 
              "graphic": "10161000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Maintenance", 
              "id": "MAINTENANCE", 
              "graphic": "10161100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Material", 
              "id": "MATERIAL", 
              "cloverGraphic": "10161200_0.svg", 
              "diamondGraphic": "10161200_3.svg", 
              "rectangleGraphic": "10161200_1.svg", 
              "squareGraphic": "10161200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Medical", 
              "id": "MEDICAL", 
              "cloverGraphic": "10161300_0.svg", 
              "diamondGraphic": "10161300_3.svg", 
              "rectangleGraphic": "10161300_1.svg", 
              "squareGraphic": "10161300_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Medical Treatment Facility", 
              "id": "MEDICAL_TREATMENT_FACILITY", 
              "cloverGraphic": "10161400_0.svg", 
              "diamondGraphic": "10161400_3.svg", 
              "rectangleGraphic": "10161400_1.svg", 
              "squareGraphic": "10161400_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Morale Welfare and Recreation", 
              "id": "MORALE_WELFARE_AND_RECREATION", 
              "graphic": "10161500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Mortuary Affairs/Graves Registration", 
              "id": "MORTUARY_AFFAIRS_GRAVES_REGISTRATION", 
              "graphic": "10161600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Multiple Classes of Supply", 
              "id": "MULTIPLE_CLASSES_OF_SUPPLY", 
              "cloverGraphic": "10161700_0.svg", 
              "diamondGraphic": "10161700_3.svg", 
              "rectangleGraphic": "10161700_1.svg", 
              "squareGraphic": "10161700_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "NATO Supply Class I", 
              "id": "NATO_SUPPLY_CLASS_I", 
              "cloverGraphic": "10161800_0.svg", 
              "diamondGraphic": "10161800_3.svg", 
              "rectangleGraphic": "10161800_1.svg", 
              "squareGraphic": "10161800_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "NATO Supply Class II", 
              "id": "NATO_SUPPLY_CLASS_II", 
              "cloverGraphic": "10161900_0.svg", 
              "diamondGraphic": "10161900_3.svg", 
              "rectangleGraphic": "10161900_1.svg", 
              "squareGraphic": "10161900_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "NATO Supply Class III", 
              "id": "NATO_SUPPLY_CLASS_III", 
              "cloverGraphic": "10162000_0.svg", 
              "diamondGraphic": "10162000_3.svg", 
              "rectangleGraphic": "10162000_1.svg", 
              "squareGraphic": "10162000_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "NATO Supply Class IV", 
              "id": "NATO_SUPPLY_CLASS_IV", 
              "cloverGraphic": "10162100_0.svg", 
              "diamondGraphic": "10162100_3.svg", 
              "rectangleGraphic": "10162100_1.svg", 
              "squareGraphic": "10162100_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "NATO Supply Class V", 
              "id": "NATO_SUPPLY_CLASS_V", 
              "cloverGraphic": "10162200_0.svg", 
              "diamondGraphic": "10162200_3.svg", 
              "rectangleGraphic": "10162200_1.svg", 
              "squareGraphic": "10162200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "23", 
              "label": "Ordnance", 
              "id": "ORDNANCE", 
              "graphic": "10162300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "24", 
              "label": "Personnel Services", 
              "id": "PERSONNEL_SERVICES", 
              "graphic": "10162400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "25", 
              "label": "Petroleum Oil and Lubricants", 
              "id": "PETROLEUM_OIL_LUBRICANTS", 
              "graphic": "10162500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "26", 
              "label": "Pipeline", 
              "id": "PIPELINE", 
              "graphic": "10162600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "27", 
              "label": "Postal", 
              "id": "POSTAL", 
              "graphic": "10162700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "28", 
              "label": "Public Affairs/Public Information", 
              "id": "PUBLIC_AFFAIRS_PUBLIC_INFORMATION", 
              "graphic": "10162800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "29", 
              "label": "Quartermaster", 
              "id": "QUARTERMASTER", 
              "graphic": "10162900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "30", 
              "label": "Railhead", 
              "id": "RAILHEAD", 
              "graphic": "10163000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "31", 
              "label": "Religious Support", 
              "id": "RELIGIOUS_SUPPORT", 
              "graphic": "10163100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "32", 
              "label": "Replacement Holding Unit", 
              "id": "REPLACEMENT_HOLDING_UNIT", 
              "graphic": "10163200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "33", 
              "label": "Sea Port of Debarkation/Sea Port of Embarkation", 
              "id": "SEA_PORT_DEBARKATION_SEA_PORT_EMBARKATION", 
              "graphic": "10163300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "34", 
              "label": "Supply", 
              "id": "SUPPLY", 
              "cloverGraphic": "10163400_0.svg", 
              "diamondGraphic": "10163400_3.svg", 
              "rectangleGraphic": "10163400_1.svg", 
              "squareGraphic": "10163400_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "35", 
              "label": "Joint Information Bureau", 
              "id": "JOINT_INFORMATION_BUREAU", 
              "graphic": "10163500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "36", 
              "label": "Transportation", 
              "id": "TRANSPORTATION", 
              "graphic": "10163600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "37", 
              "label": "US Supply Class I", 
              "id": "US_SUPPLY_CLASS_I", 
              "cloverGraphic": "10163700_0.svg", 
              "diamondGraphic": "10163700_3.svg", 
              "rectangleGraphic": "10163700_1.svg", 
              "squareGraphic": "10163700_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "38", 
              "label": "US Supply Class II", 
              "id": "US_SUPPLY_CLASS_II", 
              "cloverGraphic": "10163800_0.svg", 
              "diamondGraphic": "10163800_3.svg", 
              "rectangleGraphic": "10163800_1.svg", 
              "squareGraphic": "10163800_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "39", 
              "label": "US Supply Class III", 
              "id": "US_SUPPLY_CLASS_III", 
              "cloverGraphic": "10163900_0.svg", 
              "diamondGraphic": "10163900_3.svg", 
              "rectangleGraphic": "10163900_1.svg", 
              "squareGraphic": "10163900_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "40", 
              "label": "US Supply Class IV", 
              "id": "US_SUPPLY_CLASS_IV", 
              "cloverGraphic": "10164000_0.svg", 
              "diamondGraphic": "10164000_3.svg", 
              "rectangleGraphic": "10164000_1.svg", 
              "squareGraphic": "10164000_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "41", 
              "label": "US Supply Class V", 
              "id": "US_SUPPLY_CLASS_V", 
              "cloverGraphic": "10164100_0.svg", 
              "diamondGraphic": "10164100_3.svg", 
              "rectangleGraphic": "10164100_1.svg", 
              "squareGraphic": "10164100_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "42", 
              "label": "US Supply Class VI", 
              "id": "US_SUPPLY_CLASS_VI", 
              "cloverGraphic": "10164200_0.svg", 
              "diamondGraphic": "10164200_3.svg", 
              "rectangleGraphic": "10164200_1.svg", 
              "squareGraphic": "10164200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "43", 
              "label": "US Supply Class VII", 
              "id": "US_SUPPLY_CLASS_VII", 
              "cloverGraphic": "10164300_0.svg", 
              "diamondGraphic": "10164300_3.svg", 
              "rectangleGraphic": "10164300_1.svg", 
              "squareGraphic": "10164300_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "44", 
              "label": "US Supply Class VIII", 
              "id": "US_SUPPLY_CLASS_VIII", 
              "cloverGraphic": "10164400_0.svg", 
              "diamondGraphic": "10164400_3.svg", 
              "rectangleGraphic": "10164400_1.svg", 
              "squareGraphic": "10164400_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "45", 
              "label": "US Supply Class IX", 
              "id": "US_SUPPLY_CLASS_IX", 
              "cloverGraphic": "10164500_0.svg", 
              "diamondGraphic": "10164500_3.svg", 
              "rectangleGraphic": "10164500_1.svg", 
              "squareGraphic": "10164500_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "46", 
              "label": "US Supply Class X", 
              "id": "US_SUPPLY_CLASS_X", 
              "cloverGraphic": "10164600_0.svg", 
              "diamondGraphic": "10164600_3.svg", 
              "rectangleGraphic": "10164600_1.svg", 
              "squareGraphic": "10164600_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "47", 
              "label": "Water", 
              "id": "WATER", 
              "graphic": "10164700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "48", 
              "label": "Water Purification", 
              "id": "WATER_PURIFICATION", 
              "graphic": "10164800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "49", 
              "label": "Broadcast", 
              "id": "BROADCAST", 
              "graphic": "10164900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Naval", 
          "id": "NAVAL", 
          "remarks": "No icon is associated with this entity. It is for hierarchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Naval", 
              "id": "NAVAL_ET", 
              "graphic": "10170100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "Named Headquarters", 
          "id": "NAMED_HEADQUARTERS", 
          "remarks": "No icon is associated with this entity. It is for hierarchical purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Allied Command Europe Rapid Reaction Corps (ARRC)", 
              "id": "ALLIED_COMMAND_EUROPE_RAPID_REACTION_CORPS_ARRC", 
              "graphic": "10180100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Allied Command Operations", 
              "id": "ALLIED_COMMAND_OPERATIONS", 
              "graphic": "10180200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "International Security Assistance Force (ISAF)", 
              "id": "INTERNATIONAL_SECURITY_ASSISTANCE_FORCE_ISAF", 
              "graphic": "10180300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Multinational (MN)", 
              "id": "MULTINATIONAL_MN", 
              "graphic": "10180400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "19", 
          "label": "Emergency Operation", 
          "id": "EMERGENCY_OPERATION", 
          "graphic": "10190000.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "20", 
          "label": "Law Enforcement", 
          "id": "LAW_ENFORCEMENT", 
          "graphic": "10200000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bureau of Alcohol Tobacco Firearms and Explosives (ATF) (Department of Justice)", 
              "id": "BUREAU_ATF", 
              "graphic": "10200100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Border Patrol", 
              "id": "BORDER_PATROL", 
              "graphic": "10200200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Customs Service", 
              "id": "CUSTOMS_SERVICE", 
              "graphic": "10200300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Drug Enforcement Administration (DEA)", 
              "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
              "graphic": "10200400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Department of Justice (DOJ)", 
              "id": "DEPARTMENT_JUSTICE_DOJ", 
              "graphic": "10200500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Federal Bureau of Investigation (FBI)", 
              "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
              "graphic": "10200600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Police", 
              "id": "POLICE", 
              "graphic": "10200700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Prison", 
              "id": "PRISON", 
              "graphic": "10200800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "United States Secret Service (USSS)", 
              "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
              "graphic": "10200900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Transportation Security Administration (TSA)", 
              "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
              "graphic": "10201000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Coast Guard", 
              "id": "COAST_GUARD", 
              "graphic": "10201100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "US Marshals Service", 
              "id": "US_MARSHALS_SERVICE", 
              "graphic": "10201200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Internal Security Force", 
              "id": "INTERNAL_SECURITY_FORCE", 
              "graphic": "10201300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Air Mobile/Air Assault (US Only)", 
          "id": "AIR_MOBILE_AIR_ASSAULT_MOD", 
          "graphic": "10011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Area", 
          "id": "AREA_MOD", 
          "graphic": "10021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Attack", 
          "id": "ATTACK_MOD", 
          "graphic": "10031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Biological", 
          "id": "BIOLOGICAL_MOD", 
          "graphic": "10041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Border", 
          "id": "BORDER_MOD", 
          "graphic": "10051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Bridging", 
          "id": "BRIDGING_MOD", 
          "graphic": "10061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Chemical", 
          "id": "CHEMICAL_MOD", 
          "graphic": "10071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Close Protection", 
          "id": "CLOSE_PROTECTION_MOD", 
          "graphic": "10081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Combat", 
          "id": "COMBAT_MOD", 
          "graphic": "10091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Command and Control", 
          "id": "COMMAND_CONTROL_MOD", 
          "graphic": "10101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Communications Contingency Package", 
          "id": "COMMUNICATIONS_CONTINGENCY_PACKAGE_MOD", 
          "graphic": "10111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Construction", 
          "id": "CONSTRUCTION_MOD", 
          "graphic": "10121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Cross Cultural Communication", 
          "id": "CROSS_CULTURAL_COMMUNICATION_MOD", 
          "graphic": "10131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Crowd and Riot Control", 
          "id": "CROWD_RIOT_CONTROL_MOD", 
          "graphic": "10141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Decontamination", 
          "id": "DECONTAMINATION_MOD", 
          "graphic": "10151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Detention", 
          "id": "DETENTION_MOD", 
          "graphic": "10161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Direct Communications", 
          "id": "DIRECT_COMMUNICATIONS_MOD", 
          "graphic": "10171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Diving", 
          "id": "DIVING_MOD", 
          "graphic": "10181.svg"
        }, 
        {
          "digits": "19", 
          "label": "Division", 
          "id": "DIVISION_MOD", 
          "graphic": "10191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Dog", 
          "id": "DOG_MOD", 
          "graphic": "10201.svg"
        }, 
        {
          "digits": "21", 
          "label": "Drilling", 
          "id": "DRILLING_MOD", 
          "graphic": "10211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Electro-Optical", 
          "id": "ELECTRO_OPTICAL_MOD", 
          "graphic": "10221.svg"
        }, 
        {
          "digits": "23", 
          "label": "Enhanced", 
          "id": "ENHANCED_MOD", 
          "graphic": "10231.svg"
        }, 
        {
          "digits": "24", 
          "label": "Explosive Ordnance Disposal (EOD)", 
          "id": "EXPLOSIVE_ORDNANCE_DISPOSAL_EOD_MOD", 
          "graphic": "10241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Fire Direction Center", 
          "id": "FIRE_DIRECTION_CENTER_MOD", 
          "graphic": "10251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Force", 
          "id": "FORCE_MOD", 
          "graphic": "10261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Forward", 
          "id": "FORWARD_MOD", 
          "graphic": "10271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Ground Station Module", 
          "id": "GROUND_STATION_MODULE_MOD", 
          "graphic": "10281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Landing Support", 
          "id": "LANDING_SUPPORT_MOD", 
          "graphic": "10291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Large Extension Node", 
          "id": "LARGE_EXTENSION_NODE_MOD", 
          "graphic": "10301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Maintenance", 
          "id": "MAINTENANCE_MOD", 
          "graphic": "10311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Meteorological", 
          "id": "METEOROLOGICAL_MOD", 
          "graphic": "10321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Mine Countermeasure", 
          "id": "MINE_COUNTERMEASURE_MOD", 
          "graphic": "10331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Missile", 
          "id": "MISSILE_MOD", 
          "graphic": "10341.svg"
        }, 
        {
          "digits": "35", 
          "label": "Mobile Advisor and Support", 
          "id": "MOBILE_ADVISOR_SUPPORT_MOD", 
          "graphic": "10351.svg"
        }, 
        {
          "digits": "36", 
          "label": "Mobile Subscriber Equipment", 
          "id": "MOBILE_SUBSCRIBER_EQUIPMENT_MOD", 
          "graphic": "10361.svg"
        }, 
        {
          "digits": "37", 
          "label": "Mobility Support", 
          "id": "MOBILITY_SUPPORT_MOD", 
          "graphic": "10371.svg"
        }, 
        {
          "digits": "38", 
          "label": "Movement Control Center", 
          "id": "MOVEMENT_CONTROL_CENTER_MOD", 
          "graphic": "10381.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multinational", 
          "id": "MULTINATIONAL_MOD", 
          "graphic": "10391.svg"
        }, 
        {
          "digits": "40", 
          "label": "Multinational Specialized Unit", 
          "id": "MULTINATIONAL_SPECIALIZED_UNIT_MOD", 
          "graphic": "10401.svg"
        }, 
        {
          "digits": "41", 
          "label": "Multiple Rocket Launcher", 
          "id": "MULTIPLE_ROCKET_LAUNCHER_MOD", 
          "graphic": "10411.svg"
        }, 
        {
          "digits": "42", 
          "label": "NATO Medical Role 1", 
          "id": "NATO_MEDICAL_ROLE_1_MOD", 
          "graphic": "10421.svg"
        }, 
        {
          "digits": "43", 
          "label": "NATO Medical Role 2", 
          "id": "NATO_MEDICAL_ROLE_2_MOD", 
          "graphic": "10431.svg"
        }, 
        {
          "digits": "44", 
          "label": "NATO Medical Role 3", 
          "id": "NATO_MEDICAL_ROLE_3_MOD", 
          "graphic": "10441.svg"
        }, 
        {
          "digits": "45", 
          "label": "NATO Medical Role 4", 
          "id": "NATO_MEDICAL_ROLE_4_MOD", 
          "graphic": "10451.svg"
        }, 
        {
          "digits": "46", 
          "label": "Naval", 
          "id": "NAVAL_MOD", 
          "graphic": "10461.svg"
        }, 
        {
          "digits": "47", 
          "label": "Node Center", 
          "id": "NODE_CENTER_MOD", 
          "graphic": "10471.svg"
        }, 
        {
          "digits": "48", 
          "label": "Nuclear", 
          "id": "NUCLEAR_MOD", 
          "graphic": "10481.svg"
        }, 
        {
          "digits": "49", 
          "label": "Operations", 
          "id": "OPERATIONS_MOD", 
          "graphic": "10491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Radar", 
          "id": "RADAR_MOD", 
          "graphic": "10501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Radio Frequency Identification (RFID) Interrogator / Sensor", 
          "id": "RFID_INTERROGATOR_SENSOR_MOD", 
          "graphic": "10511.svg"
        }, 
        {
          "digits": "52", 
          "label": "Radiological", 
          "id": "RADIOLOGICAL_MOD", 
          "graphic": "10521.svg"
        }, 
        {
          "digits": "53", 
          "label": "Search and Rescue", 
          "id": "SEARCH_RESCUE_MOD", 
          "graphic": "10531.svg"
        }, 
        {
          "digits": "54", 
          "label": "Security", 
          "id": "SECURITY_MOD", 
          "graphic": "10541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Sensor", 
          "id": "SENSOR_MOD", 
          "graphic": "10551.svg"
        }, 
        {
          "digits": "56", 
          "label": "Sensor Control Module (SCM)", 
          "id": "SENSOR_CONTROL_MODULE_SCM_MOD", 
          "graphic": "10561.svg"
        }, 
        {
          "digits": "57", 
          "label": "Signals Intelligence", 
          "id": "SIGNALS_INTELLIGENCE_MOD", 
          "graphic": "10571.svg"
        }, 
        {
          "digits": "58", 
          "label": "Single Shelter Switch", 
          "id": "SINGLE_SHELTER_SWITCH_MOD", 
          "graphic": "10581.svg"
        }, 
        {
          "digits": "59", 
          "label": "Single Rocket Launcher", 
          "id": "SINGLE_ROCKET_LAUNCHER_MOD", 
          "graphic": "10591.svg"
        }, 
        {
          "digits": "60", 
          "label": "Smoke", 
          "id": "SMOKE_MOD", 
          "graphic": "10601.svg"
        }, 
        {
          "digits": "61", 
          "label": "Sniper", 
          "id": "SNIPER_MOD", 
          "graphic": "10611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Sound Ranging", 
          "id": "SOUND_RANGING_MOD", 
          "graphic": "10621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Special Operations Forces (SOF)", 
          "id": "SPEC_OPS_SOF_MOD", 
          "graphic": "10631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Special Weapons and Tactics", 
          "id": "SPECIAL_WEAPONS_TACTICS_MOD", 
          "graphic": "10641.svg"
        }, 
        {
          "digits": "65", 
          "label": "Survey", 
          "id": "SURVEY_MOD", 
          "graphic": "10651.svg"
        }, 
        {
          "digits": "66", 
          "label": "Tactical Exploitation", 
          "id": "TACTICAL_EXPLOITATION_MOD", 
          "graphic": "10661.svg"
        }, 
        {
          "digits": "67", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "10671.svg"
        }, 
        {
          "digits": "68", 
          "label": "Topographic", 
          "id": "TOPOGRAPHIC_MOD", 
          "graphic": "10681.svg"
        }, 
        {
          "digits": "69", 
          "label": "Utility", 
          "id": "UTILITY_MOD", 
          "graphic": "10691.svg"
        }, 
        {
          "digits": "70", 
          "label": "Video Imagery (Combat Camera)", 
          "id": "VIDEO_IMAGERY_MOD", 
          "graphic": "10701.svg"
        }, 
        {
          "digits": "71", 
          "label": "Accident", 
          "id": "ACCIDENT_MOD", 
          "graphic": "10711.svg"
        }, 
        {
          "digits": "72", 
          "label": "Other", 
          "id": "OTHER_MOD", 
          "graphic": "10721.svg"
        }, 
        {
          "digits": "73", 
          "label": "Civilian", 
          "id": "CIVILIAN_MOD", 
          "graphic": "10731.svg"
        }, 
        {
          "digits": "74", 
          "label": "Antisubmarine Warfare", 
          "id": "ANTISUBMARINE_WARFARE_MOD", 
          "graphic": "10741.svg"
        }, 
        {
          "digits": "75", 
          "label": "Medevac", 
          "id": "MEDEVAC_MOD", 
          "graphic": "10751.svg"
        }, 
        {
          "digits": "76", 
          "label": "Ranger", 
          "id": "RANGER_MOD", 
          "graphic": "10761.svg"
        }, 
        {
          "digits": "77", 
          "label": "Support", 
          "id": "SUPPORT_MOD", 
          "graphic": "10771.svg"
        }, 
        {
          "digits": "78", 
          "label": "Aviation", 
          "id": "AVIATION_MOD", 
          "graphic": "10781.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Airborne", 
          "id": "AIRBORNE_MOD", 
          "graphic": "10012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Arctic", 
          "id": "ARCTIC_MOD", 
          "graphic": "10022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Battle Damage Repair", 
          "id": "BATTLE_DAMAGE_REPAIR_MOD", 
          "graphic": "10032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Bicycle Equipped", 
          "id": "BICYCLE_EQUIPPED_MOD", 
          "graphic": "10042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Casualty Staging", 
          "id": "CASUALTY_STAGING_MOD", 
          "graphic": "10052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Clearing", 
          "id": "CLEARING_MOD", 
          "graphic": "10062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Close Range", 
          "id": "CLOSE_RANGE_MOD", 
          "graphic": "10072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Control", 
          "id": "CONTROL_MOD", 
          "graphic": "10082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Decontamination", 
          "id": "DECONTAMINATION_2_MOD", 
          "graphic": "10092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Demolition", 
          "id": "DEMOLITION_MOD", 
          "graphic": "10102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Dental", 
          "id": "DENTAL_MOD", 
          "graphic": "10112.svg"
        }, 
        {
          "digits": "12", 
          "label": "Digital", 
          "id": "DIGITAL_MOD", 
          "graphic": "10122.svg"
        }, 
        {
          "digits": "13", 
          "label": "Enhanced Position Location Reporting System (EPLRS)", 
          "id": "ENHANCED_POSITION_LOCATION_REPORTING_SYSTEM_EPLRS_MOD", 
          "graphic": "10132.svg"
        }, 
        {
          "digits": "14", 
          "label": "Equipment", 
          "id": "EQUIPMENT_MOD", 
          "graphic": "10142.svg"
        }, 
        {
          "digits": "15", 
          "label": "Heavy", 
          "id": "HEAVY_MOD", 
          "graphic": "10152.svg"
        }, 
        {
          "digits": "16", 
          "label": "High Altitude", 
          "id": "HIGH_ALTITUDE_MOD", 
          "graphic": "10162.svg"
        }, 
        {
          "digits": "17", 
          "label": "Intermodal", 
          "id": "INTERMODAL_MOD", 
          "graphic": "10172.svg"
        }, 
        {
          "digits": "18", 
          "label": "Intensive Care", 
          "id": "INTENSIVE_CARE_MOD", 
          "graphic": "10182.svg"
        }, 
        {
          "digits": "19", 
          "label": "Light", 
          "id": "LIGHT_MOD", 
          "graphic": "10192.svg"
        }, 
        {
          "digits": "20", 
          "label": "Laboratory", 
          "id": "LABORATORY_MOD", 
          "graphic": "10202.svg"
        }, 
        {
          "digits": "21", 
          "label": "Launcher", 
          "id": "LAUNCHER_MOD", 
          "graphic": "10212.svg"
        }, 
        {
          "digits": "22", 
          "label": "Long Range", 
          "id": "LONG_RANGE_MOD", 
          "graphic": "10222.svg"
        }, 
        {
          "digits": "23", 
          "label": "Low Altitude", 
          "id": "LOW_ALTITUDE_MOD", 
          "graphic": "10232.svg"
        }, 
        {
          "digits": "24", 
          "label": "Medium", 
          "id": "MEDIUM_MOD", 
          "graphic": "10242.svg"
        }, 
        {
          "digits": "25", 
          "label": "Medium Altitude", 
          "id": "MEDIUM_ALTITUDE_MOD", 
          "graphic": "10252.svg"
        }, 
        {
          "digits": "26", 
          "label": "Medium Range", 
          "id": "MEDIUM_RANGE_MOD", 
          "graphic": "10262.svg"
        }, 
        {
          "digits": "27", 
          "label": "Mountain", 
          "id": "MOUNTAIN_MOD", 
          "graphic": "10272.svg"
        }, 
        {
          "digits": "28", 
          "label": "High to Medium Altitude", 
          "id": "HIGH_MEDIUM_ALTITUDE_MOD", 
          "graphic": "10282.svg"
        }, 
        {
          "digits": "29", 
          "label": "Multi-Channel", 
          "id": "MULTI_CHANNEL_MOD", 
          "graphic": "10292.svg"
        }, 
        {
          "digits": "30", 
          "label": "Optical (Flash)", 
          "id": "OPTICAL_FLASH_MOD", 
          "graphic": "10302.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pack Animal", 
          "id": "PACK_ANIMAL_MOD", 
          "graphic": "10312.svg"
        }, 
        {
          "digits": "32", 
          "label": "Patient Evacuation Coordination", 
          "id": "PATIENT_EVACUATION_COORDINATION_MOD", 
          "graphic": "10322.svg"
        }, 
        {
          "digits": "33", 
          "label": "Preventive Maintenance", 
          "id": "PREVENTIVE_MAINTENANCE_MOD", 
          "graphic": "10332.svg"
        }, 
        {
          "digits": "34", 
          "label": "Psychological", 
          "id": "PSYCHOLOGICAL_MOD", 
          "graphic": "10342.svg"
        }, 
        {
          "digits": "35", 
          "label": "Radio Relay Line of Sight", 
          "id": "RADIO_RELAY_LOS_MOD", 
          "graphic": "10352.svg"
        }, 
        {
          "digits": "36", 
          "label": "Railroad", 
          "id": "RAILROAD_MOD", 
          "graphic": "10362.svg"
        }, 
        {
          "digits": "37", 
          "label": "Recovery (Unmanned Systems)", 
          "id": "RECOVERY_UNMANNED_SYSTEMS_MOD", 
          "graphic": "10372.svg"
        }, 
        {
          "digits": "38", 
          "label": "Recovery (Maintenance)", 
          "id": "RECOVERY_MAINTENANCE_MOD", 
          "graphic": "10382.svg"
        }, 
        {
          "digits": "39", 
          "label": "Rescue Coordination Center", 
          "id": "RESCUE_COORDINATION_CENTER_MOD", 
          "graphic": "10392.svg"
        }, 
        {
          "digits": "40", 
          "label": "Riverine", 
          "id": "RIVERINE_MOD", 
          "graphic": "10402.svg"
        }, 
        {
          "digits": "41", 
          "label": "Single Channel", 
          "id": "SINGLE_CHANNEL_MOD", 
          "graphic": "10412.svg"
        }, 
        {
          "digits": "42", 
          "label": "Ski", 
          "id": "SKI_MOD", 
          "graphic": "10422.svg"
        }, 
        {
          "digits": "43", 
          "label": "Short Range", 
          "id": "SHORT_RANGE_MOD", 
          "graphic": "10432.svg"
        }, 
        {
          "digits": "44", 
          "label": "Strategic", 
          "id": "STRATEGIC_MOD", 
          "graphic": "10442.svg"
        }, 
        {
          "digits": "45", 
          "label": "Support", 
          "id": "SUPPORT_2_MOD", 
          "graphic": "10452.svg"
        }, 
        {
          "digits": "46", 
          "label": "Tactical", 
          "id": "TACTICAL_MOD", 
          "graphic": "10462.svg"
        }, 
        {
          "digits": "47", 
          "label": "Towed", 
          "id": "TOWED_MOD", 
          "graphic": "10472.svg"
        }, 
        {
          "digits": "48", 
          "label": "Troop", 
          "id": "TROOP_MOD", 
          "graphic": "10482.svg"
        }, 
        {
          "digits": "49", 
          "label": "Vertical or Short Take-Off and Landing (VTOL/VSTOL)", 
          "id": "VERTICAL_TAKE_OFF_LANDING_VTOL_MOD", 
          "graphic": "10492.svg"
        }, 
        {
          "digits": "50", 
          "label": "Veterinary", 
          "id": "VETERINARY_MOD", 
          "graphic": "10502.svg"
        }, 
        {
          "digits": "51", 
          "label": "Wheeled", 
          "id": "WHEELED_MOD", 
          "graphic": "10512.svg"
        }, 
        {
          "digits": "52", 
          "label": "High to Low Altitude", 
          "id": "HIGH_LOW_ALTITUDE_MOD", 
          "graphic": "10522.svg"
        }, 
        {
          "digits": "53", 
          "label": "Medium to Low Altitude", 
          "id": "MEDIUM_LOW_ALTITUDE_MOD", 
          "graphic": "10532.svg"
        }, 
        {
          "digits": "54", 
          "label": "Attack", 
          "id": "ATTACK_2_MOD", 
          "graphic": "10542.svg"
        }, 
        {
          "digits": "55", 
          "label": "Refuel", 
          "id": "REFUEL_MOD", 
          "graphic": "10552.svg"
        }, 
        {
          "digits": "56", 
          "label": "Utility", 
          "id": "UTILITY_2_MOD", 
          "graphic": "10562.svg"
        }, 
        {
          "digits": "57", 
          "label": "Combat Search and Rescue", 
          "id": "COMBAT_SEARCH_RESCUE_MOD", 
          "graphic": "10572.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Land", 
        "modifierTwos": "Appendices/Land/mod2", 
        "modifierOnes": "Appendices/Land/mod1"
      }
    }, 
    {
      "digits": "11", 
      "label": "Land Civilian", 
      "id": "SS_LAND_CIVILIAN", 
      "dimensionId": "LAND_UNIT", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Civilian", 
          "id": "CIVILIAN", 
          "graphic": "11110000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Environmental Protection", 
              "id": "ENVIRONMENTAL_PROTECTION", 
              "graphic": "11110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Government Organization", 
              "id": "GOVERNMENT_ORGANIZATION", 
              "graphic": "11110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Individual", 
              "id": "INDIVIDUAL", 
              "graphic": "11110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Organization or Group", 
              "id": "ORGANIZATION", 
              "graphic": "11110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Killing Victim", 
              "id": "KILLING_VICTIM", 
              "graphic": "11110500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Killing Victims", 
              "id": "KILLING_VICTIMS", 
              "graphic": "11110600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Victim of an Attempted Crime", 
              "id": "VICTIM_ATTEMPTED_CRIME", 
              "graphic": "11110700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Spy", 
              "id": "SPY", 
              "graphic": "11110800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Composite Loss", 
              "id": "COMPOSITE_LOSS", 
              "graphic": "11110900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Emergency Medical Operation", 
              "id": "EMERGENCY_MEDICAL_OPERATION", 
              "graphic": "11111000.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Assassination", 
          "id": "ASSASSINATION_MOD", 
          "graphic": "11011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Execution (Wrongful Killing)", 
          "id": "EXECUTION_MOD", 
          "graphic": "11021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Murder Victims", 
          "id": "MURDER_VICTIMS_MOD", 
          "graphic": "11031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Hijacking", 
          "id": "HIJACKING_MOD", 
          "graphic": "11041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Kidnapping", 
          "id": "KIDNAPPING_MOD", 
          "graphic": "11051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Piracy", 
          "id": "PIRACY_MOD", 
          "graphic": "11061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Rape", 
          "id": "RAPE_MOD", 
          "graphic": "11071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Civilian", 
          "id": "CIVILIAN_MOD", 
          "graphic": "11081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Displaced Person(s), Refugee(s) and Evacuee(s)", 
          "id": "DISPLACED_MOD", 
          "graphic": "11091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Foreign Fighter(s)", 
          "id": "FOREIGN_FIGHTER_MOD", 
          "graphic": "11101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Gang Member or Gang", 
          "id": "GANG_MOD", 
          "graphic": "11111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Government Organization", 
          "id": "GOVERNMENT_ORGANIZATION_MOD", 
          "graphic": "11121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Leader or Leadership", 
          "id": "LEADER_1_MOD", 
          "graphic": "11131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Nongovernmental Organization Member or Nongovernmental Organization", 
          "id": "NONGOVERNMENTAL_ORGANIZATION_MOD", 
          "graphic": "11141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Coerced/Impressed Recruit", 
          "id": "COERCED_RECRUIT_MOD", 
          "graphic": "11151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Willing Recruit", 
          "id": "WILLING_RECRUIT_MOD", 
          "graphic": "11161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Religious or Religious Organization", 
          "id": "RELIGIOUS_MOD", 
          "graphic": "11171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Targeted Individual or Organization", 
          "id": "TARGETED_MOD", 
          "graphic": "11181.svg"
        }, 
        {
          "digits": "19", 
          "label": "Terrorist or Terrorist Organization", 
          "id": "TERRORIST_MOD", 
          "graphic": "11191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Speaker", 
          "id": "SPEAKER_MOD", 
          "graphic": "11201.svg"
        }, 
        {
          "digits": "21", 
          "label": "Accident", 
          "id": "ACCIDENT_MOD", 
          "graphic": "11211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Combat", 
          "id": "COMBAT_MOD", 
          "graphic": "11221.svg"
        }, 
        {
          "digits": "23", 
          "label": "Other", 
          "id": "OTHER_MOD", 
          "graphic": "11231.svg"
        }, 
        {
          "digits": "24", 
          "label": "Loot", 
          "id": "LOOT_MOD", 
          "graphic": "11241.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Leader or Leadership", 
          "id": "LEADER_2_MOD", 
          "graphic": "11012.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Land", 
        "modifierTwos": "Appendices/Land/mod2", 
        "modifierOnes": "Appendices/Land/mod1"
      }
    }, 
    {
      "digits": "15", 
      "label": "Land Equipment", 
      "id": "SS_LAND_EQUIPMENT", 
      "dimensionId": "LAND_EQUIPMENT", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Weapon/Weapon System", 
          "id": "WEAPON_SYSTEM", 
          "graphic": "15110000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Rifle", 
              "id": "RIFLE", 
              "graphic": "15110100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Single Shot Rifle", 
                  "id": "SINGLE_SHOT_RIFLE", 
                  "graphic": "15110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Semiautomatic Rifle", 
                  "id": "SEMIAUTOMATIC_RIFLE", 
                  "graphic": "15110102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Automatic Rifle", 
                  "id": "AUTOMATIC_RIFLE", 
                  "graphic": "15110103.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Machine Gun", 
              "id": "MACHINE_GUN", 
              "graphic": "15110200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "MG_LIGHT", 
                  "graphic": "15110201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "MG_MEDIUM", 
                  "graphic": "15110202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "MG_HEAVY", 
                  "graphic": "15110203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Grenade Launcher", 
              "id": "GRENADE_LAUNCHER", 
              "graphic": "15110300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "GRENADE_LAUNCHER_LIGHT", 
                  "graphic": "15110301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "GRENADE_LAUNCHER_MEDIUM", 
                  "graphic": "15110302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "GRENADE_LAUNCHER_HEAVY", 
                  "graphic": "15110303.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Flame Thrower", 
              "id": "FLAME_THROWER", 
              "graphic": "15110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Air Defense Gun", 
              "id": "AIR_DEFENSE_GUN", 
              "graphic": "15110500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "AIR_DEFENSE_GUN_LIGHT", 
                  "graphic": "15110501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "AIR_DEFENSE_GUN_MEDIUM", 
                  "graphic": "15110502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "AIR_DEFENSE_GUN_HEAVY", 
                  "graphic": "15110503.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Antitank Gun", 
              "id": "ANTITANK_GUN", 
              "graphic": "15110600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "ANTITANK_GUN_LIGHT", 
                  "graphic": "15110601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "ANTITANK_GUN_MEDIUM", 
                  "graphic": "15110602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "ANTITANK_GUN_HEAVY", 
                  "graphic": "15110603.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Direct Fire Gun", 
              "id": "DIRECT_FIRE_GUN", 
              "graphic": "15110700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "DIRECT_FIRE_GUN_LIGHT", 
                  "graphic": "15110701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "DIRECT_FIRE_GUN_MEDIUM", 
                  "graphic": "15110702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "DIRECT_FIRE_GUN_HEAVY", 
                  "graphic": "15110703.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Recoilless Gun", 
              "id": "RECOILLESS_GUN", 
              "graphic": "15110800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "RECOILLESS_GUN_LIGHT", 
                  "graphic": "15110801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "RECOILLESS_GUN_MEDIUM", 
                  "graphic": "15110802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "RECOILLESS_GUN_HEAVY", 
                  "graphic": "15110803.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Howitzer", 
              "id": "HOWITZER", 
              "graphic": "15110900.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "HOWITZER_LIGHT", 
                  "graphic": "15110901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "HOWITZER_MEDIUM", 
                  "graphic": "15110902.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "HOWITZER_HEAVY", 
                  "graphic": "15110903.svg"
                }
              ]
            }, 
            {
              "digits": "10", 
              "label": "Missile Launcher", 
              "id": "MISSILE_LAUNCHER", 
              "graphic": "15111000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "MISSILE_LAUNCHER_LIGHT", 
                  "graphic": "15111001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "MISSILE_LAUNCHER_MEDIUM", 
                  "graphic": "15111002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "MISSILE_LAUNCHER_HEAVY", 
                  "graphic": "15111003.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Air Defense Missile Launcher", 
              "id": "AIR_DEFENSE_MISSILE_LAUNCHER", 
              "graphic": "15111100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "AIR_DEFENSE_MISSILE_LIGHT", 
                  "graphic": "15111101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Light, Light Transporter-Launcher and Radar (TLAR)", 
                  "id": "AIR_DEFENSE_MISSILE_LIGHT_TLAR", 
                  "graphic": "15111102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Light, Light Tactical Landing Approach Radar (TELAR)", 
                  "id": "AIR_DEFENSE_MISSILE_LIGHT_TELAR", 
                  "graphic": "15111103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Medium", 
                  "id": "AIR_DEFENSE_MISSILE_MEDIUM", 
                  "graphic": "15111104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Medium, TLAR", 
                  "id": "AIR_DEFENSE_MISSILE_MEDIUM_TLAR", 
                  "graphic": "15111105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Medium, TELAR Air Defense Missile Launcher", 
                  "id": "AIR_DEFENSE_MISSILE_MEDIUM_TELAR", 
                  "graphic": "15111106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Heavy", 
                  "id": "AIR_DEFENSE_MISSILE_HEAVY", 
                  "graphic": "15111107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Heavy, TLAR", 
                  "id": "AIR_DEFENSE_MISSILE_HEAVY_TLAR", 
                  "graphic": "15111108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Heavy, TELAR", 
                  "id": "AIR_DEFENSE_MISSILE_HEAVY_TELAR", 
                  "graphic": "15111109.svg"
                }
              ]
            }, 
            {
              "digits": "12", 
              "label": "Antitank Missile Launcher", 
              "id": "ANTITANK_MISSILE_LAUNCHER", 
              "graphic": "15111200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "ANTITANK_MISSILE_LAUNCHER_LIGHT", 
                  "graphic": "15111201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "ANTITANK_MISSILE_LAUNCHER_MEDIUM", 
                  "graphic": "15111202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "ANTITANK_MISSILE_LAUNCHER_HEAVY", 
                  "graphic": "15111203.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Surface-to-Surface Missile Launcher", 
              "id": "SURFACE_TO_SURFACE_MISSILE_LAUNCHER", 
              "graphic": "15111300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "SURFACE_TO_SURFACE_MISSILE_LIGHT", 
                  "graphic": "15111301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "SURFACE_TO_SURFACE_MISSILE_MEDIUM", 
                  "graphic": "15111302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "SURFACE_TO_SURFACE_MISSILE_HEAVY", 
                  "graphic": "15111303.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Mortar", 
              "id": "MORTAR", 
              "graphic": "15111400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "MORTAR_LIGHT", 
                  "graphic": "15111401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "MORTAR_MEDIUM", 
                  "graphic": "15111402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "MORTAR_HEAVY", 
                  "graphic": "15111403.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Single Rocket Launcher", 
              "id": "SINGLE_ROCKET_LAUNCHER", 
              "graphic": "15111500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "SINGLE_ROCKET_LIGHT", 
                  "graphic": "15111501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "SINGLE_ROCKET_MEDIUM", 
                  "graphic": "15111502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "SINGLE_ROCKET_HEAVY", 
                  "graphic": "15111503.svg"
                }
              ]
            }, 
            {
              "digits": "16", 
              "label": "Multiple Rocket Launcher", 
              "id": "MULTIPLE_ROCKET_LAUNCHER", 
              "graphic": "15111600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "MULTIPLE_ROCKET_LIGHT", 
                  "graphic": "15111601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "MULTIPLE_ROCKET_MEDIUM", 
                  "graphic": "15111602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "MULTIPLE_ROCKET_HEAVY", 
                  "graphic": "15111603.svg"
                }
              ]
            }, 
            {
              "digits": "17", 
              "label": "Antitank Rocket Launcher", 
              "id": "ANTITANK_ROCKET_LAUNCHER", 
              "graphic": "15111700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "ANTITANK_ROCKET_LIGHT", 
                  "graphic": "15111701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "ANTITANK_ROCKET_MEDIUM", 
                  "graphic": "15111702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "ANTITANK_ROCKET_HEAVY", 
                  "graphic": "15111703.svg"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "Nonlethal Weapon", 
              "id": "NONLETHAL_WEAPON", 
              "graphic": "15111800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Taser", 
              "id": "TASER", 
              "graphic": "15111900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Water Cannon", 
              "id": "WATER_CANNON", 
              "graphic": "15112000.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Vehicle", 
          "id": "VEHICLE", 
          "graphic": "15120000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Armored Vehicle", 
              "id": "VEHICLE_ARMORED", 
              "graphic": "15120100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Armored Fighting Vehicle", 
                  "id": "ARMORED_FIGHTING_VEHICLE", 
                  "graphic": "15120101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Armored Fighting Vehicle Command and Control", 
                  "id": "ARMORED_FIGHTING_VEHICLE_C2", 
                  "graphic": "15120102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Armored Personnel Carrier", 
                  "id": "ARMORED_PERSONNEL_CARRIER", 
                  "graphic": "15120103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Armored Personnel Carrier Ambulance", 
                  "id": "ARMORED_PERSONNEL_CARRIER_AMBULANCE", 
                  "graphic": "15120104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Armored Protected Vehicle", 
                  "id": "ARMORED_PROTECTED_VEHICLE", 
                  "graphic": "15120105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Armored Protected Vehicle Recovery", 
                  "id": "ARMORED_PROTECTED_VEHICLE_RECOVERY", 
                  "graphic": "15120106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Armored Protected Vehicle Medical Evacuation", 
                  "id": "ARMORED_PROTECTED_VEHICLE_MEDICAL", 
                  "graphic": "15120107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Armored Personnel Carrier-Recovery", 
                  "id": "ARMORED_PERSONNEL_CARRIER_RECOVERY", 
                  "graphic": "15120108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Combat Service Support Vehicle", 
                  "id": "COMBAT_SERVICE_SUPPORT_VEHICLE", 
                  "graphic": "15120109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Light Wheeled Armored Vehicle", 
                  "id": "LIGHT_WHEELED_ARMORED_VEHICLE", 
                  "graphic": "15120110.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Tank", 
              "id": "TANK", 
              "graphic": "15120200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "TANK_LIGHT", 
                  "graphic": "15120201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "TANK_MEDIUM", 
                  "graphic": "15120202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "TANK_HEAVY", 
                  "graphic": "15120203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Tank Recovery Vehicle", 
              "id": "TANK_RECOVERY_VEHICLE", 
              "graphic": "15120300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "TANK_RECOVERY_LIGHT", 
                  "graphic": "15120301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "TANK_RECOVERY_MEDIUM", 
                  "graphic": "15120302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "TANK_RECOVERY_HEAVY", 
                  "graphic": "15120303.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Engineer Vehicles and Equipment", 
          "id": "ENGINEER_VEHICLES_EQUIPMENT", 
          "graphic": "15130000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bridge", 
              "id": "BRIDGE", 
              "graphic": "15130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Bridge Mounted on Utility Vehicle", 
              "id": "BRIDGE_MOUNTED_UTILITY_VEHICLE", 
              "graphic": "15130200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Fixed Bridge", 
              "id": "FIXED_BRIDGE", 
              "graphic": "15130300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Floating Bridge", 
              "id": "FLOATING_BRIDGE", 
              "graphic": "15130400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Folding Girder Bridge", 
              "id": "FOLDING_GIRDER_BRIDGE", 
              "graphic": "15130500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Hollow Deck Bridge", 
              "id": "HOLLOW_DECK_BRIDGE", 
              "graphic": "15130600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Drill", 
              "id": "DRILL", 
              "graphic": "15130700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Drill Mounted on Utility Vehicle", 
                  "id": "DRILL_MOUNTED_ON_UTILITY_VEHICLE", 
                  "graphic": "15130701.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Earthmover", 
              "id": "EARTHMOVER", 
              "graphic": "15130800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Multifunctional Earthmover/Digger", 
                  "id": "EARTHMOVER_DIGGER", 
                  "graphic": "15130801.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Mine Clearing Equipment", 
              "id": "MINE_CLEARING_EQUIPMENT", 
              "graphic": "15130900.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Trailer Mounted", 
                  "id": "MINE_CLEARING_EQUIPMENT_TRAILER", 
                  "graphic": "15130901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Mine Clearing Equipment on Tank Chassis", 
                  "id": "MINE_CLEARING_EQUIPMENT_TANK_CHASSIS", 
                  "graphic": "15130902.svg"
                }
              ]
            }, 
            {
              "digits": "10", 
              "label": "Mine Laying Equipment", 
              "id": "MINE_LAYING_EQUIPMENT", 
              "graphic": "15131000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Mine Laying Equipment on Utility Vehicle", 
                  "id": "MINE_LAYING_EQUIPMENT_UTILITY_VEHICLE", 
                  "graphic": "15131001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Armored Carrier with Volcano", 
                  "id": "ARMORED_CARRIER_VOLCANO", 
                  "graphic": "15131002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Truck Mounted with Volcano", 
                  "id": "TRUCK_VOLCANO", 
                  "graphic": "15131003.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Dozer", 
              "id": "DOZER", 
              "graphic": "15131100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Dozer-Armored", 
                  "id": "DOZER_ARMORED", 
                  "graphic": "15131101.svg"
                }
              ]
            }, 
            {
              "digits": "12", 
              "label": "Armored Assault", 
              "id": "ARMORED_ASSAULT", 
              "graphic": "15131200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Armored Engineer Recon Vehicle (AERV)", 
              "id": "ARMORED_ENGINEER_RECON_VEHICLE_AERV", 
              "graphic": "15131300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Backhoe", 
              "id": "BACKHOE", 
              "graphic": "15131400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Construction Vehicle", 
              "id": "CONSTRUCTION_VEHICLE", 
              "graphic": "15131500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Ferry Transporter", 
              "id": "FERRY_TRANSPORTER", 
              "graphic": "15131600.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Utility Vehicles", 
          "id": "UTILITY_VEHICLES", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Utility Vehicle", 
              "id": "UTILITY_VEHICLE", 
              "graphic": "15140100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Medical", 
              "id": "UTILITY_VEHICLE_MEDICAL", 
              "graphic": "15140200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Medical Evacuation", 
              "id": "UTILITY_VEHICLE_MEDEVAC", 
              "graphic": "15140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Mobile Emergency Physician", 
              "id": "UTILITY_VEHICLE_MOBILE_EMERGENCY_PHYSICIAN", 
              "graphic": "15140400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Bus", 
              "id": "BUS", 
              "graphic": "15140500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Semi-Trailer and Truck", 
              "id": "SEMI_TRAILER_AND_TRUCK", 
              "graphic": "15140600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "SEMI_LIGHT", 
                  "graphic": "15140601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "SEMI_MEDIUM", 
                  "graphic": "15140602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "SEMI_HEAVY", 
                  "graphic": "15140603.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Limited Cross Country Truck", 
              "id": "LIMITED_CROSS_COUNTRY_TRUCK", 
              "graphic": "15140700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Cross Country Truck", 
              "id": "CROSS_COUNTRY_TRUCK", 
              "graphic": "15140800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Petroleum-Oil and Lubricant", 
              "id": "POL_VEHICLE", 
              "graphic": "15140900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Water", 
              "id": "WATER_VEHICLE", 
              "graphic": "15141000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Amphibious Utility Wheeled Vehicle", 
              "id": "AMPHIBIOUS_UTILITY_WHEELED_VEHICLE", 
              "graphic": "15141100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Tow Truck", 
              "id": "TOW_TRUCK", 
              "graphic": "15141200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "TOW_TRUCK_LIGHT", 
                  "graphic": "15141201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Heavy", 
                  "id": "TOW_TRUCK_HEAVY", 
                  "graphic": "15141202.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Train", 
          "id": "TRAIN", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Locomotive", 
              "id": "LOCOMOTIVE", 
              "graphic": "15150100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Railcar", 
              "id": "RAILCAR", 
              "graphic": "15150200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Civilian Vehicle", 
          "id": "CIVILIAN_VEHICLE", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Automobile", 
              "id": "AUTOMOBILE", 
              "graphic": "15160100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Compact", 
                  "id": "COMPACT_AUTO", 
                  "graphic": "15160101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Midsize", 
                  "id": "MIDSIZE_AUTO", 
                  "graphic": "15160102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Sedan", 
                  "id": "SEDAN_AUTO", 
                  "graphic": "15160103.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Open-Bed Truck", 
              "id": "OPEN_BED_TRUCK", 
              "graphic": "15160200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Pickup", 
                  "id": "PICKUP_TRUCK", 
                  "graphic": "15160201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Small", 
                  "id": "SMALL_PICKUP_TRUCK", 
                  "graphic": "15160202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large", 
                  "id": "LARGE_PICKUP_TRUCK", 
                  "graphic": "15160203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Multiple Passenger Vehicle", 
              "id": "MULTIPLE_PASSENGER_VEHICLE", 
              "graphic": "15160300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Van", 
                  "id": "VAN", 
                  "graphic": "15160301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Small Bus", 
                  "id": "SMALL_BUS", 
                  "graphic": "15160302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large Bus", 
                  "id": "LARGE_BUS", 
                  "graphic": "15160303.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Utility Vehicle", 
              "id": "AUTO_UTILITY_VEHICLE", 
              "graphic": "15160400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Sport Utility Vehicle (SUV)", 
                  "id": "SPORT_UTILITY_VEHICLE_SUV", 
                  "graphic": "15160401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Small Box Truck", 
                  "id": "SMALL_BOX_TRUCK", 
                  "graphic": "15160402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large Box Truck", 
                  "id": "LARGE_BOX_TRUCK", 
                  "graphic": "15160403.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Jeep Type Vehicle", 
              "id": "JEEP_TYPE_VEHICLE", 
              "graphic": "15160500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Small/Light", 
                  "id": "JEEP_LIGHT", 
                  "graphic": "15160501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "JEEP_MEDIUM", 
                  "graphic": "15160502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large/Heavy", 
                  "id": "JEEP_HEAVY", 
                  "graphic": "15160503.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Tractor Trailer Truck with Box", 
              "id": "TRACTOR_TRAILER_BOX", 
              "graphic": "15160600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Small/Light", 
                  "id": "TRACTOR_TRAILER_BOX_LIGHT", 
                  "graphic": "15160601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "TRACTOR_TRAILER_BOX_MEDIUM", 
                  "graphic": "15160602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large/Heavy", 
                  "id": "TRACTOR_TRAILER_BOX_HEAVY", 
                  "graphic": "15160603.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Tractor Trailer Truck with Flatbed Trailer", 
              "id": "TRACTOR_TRAILER_FLATBED", 
              "graphic": "15160700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Small/Light", 
                  "id": "TRACTOR_TRAILER_BED_LIGHT", 
                  "graphic": "15160701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Medium", 
                  "id": "TRACTOR_TRAILER_BED_MEDIUM", 
                  "graphic": "15160702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Large/Heavy", 
                  "id": "TRACTOR_TRAILER_BED_HEAVY", 
                  "graphic": "15160703.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Known Insurgent Vehicle", 
              "id": "KNOWN_INSURGENT_VEHICLE", 
              "graphic": "15160800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Drug Vehicle", 
              "id": "DRUG_VEHICLE", 
              "graphic": "15160900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Law Enforcement", 
          "id": "LAW_ENFORCEMENT", 
          "graphic": "15170000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bureau of Alcohol-Tobacco-Firearms and Explosives (ATF) (Department of Justice)", 
              "id": "BUREAU_ALCOHOL_TOBACCO_FIREARMS_EXPLOSIVES_ATF", 
              "graphic": "15170100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Border Patrol", 
              "id": "BORDER_PATROL", 
              "graphic": "15170200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Customs Service", 
              "id": "CUSTOMS_SERVICE", 
              "graphic": "15170300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Drug Enforcement Administration (DEA)", 
              "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
              "graphic": "15170400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Department of Justice (DOJ)", 
              "id": "DEPARTMENT_OF_JUSTICE_DOJ", 
              "graphic": "15170500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Federal Bureau of Investigation (FBI)", 
              "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
              "graphic": "15170600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Police", 
              "id": "POLICE", 
              "graphic": "15170700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "United States Secret Service (USSS)", 
              "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
              "graphic": "15170800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Transportation Security Administration (TSA)", 
              "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
              "graphic": "15170900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Coast Guard", 
              "id": "COAST_GUARD", 
              "graphic": "15171000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "US Marshals Service", 
              "id": "US_MARSHALS_SERVICE", 
              "graphic": "15171100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "Pack Animals", 
          "id": "PACK_ANIMALS", 
          "graphic": "15180000.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "19", 
          "label": "Missile Support", 
          "id": "MISSILE_SUPPORT", 
          "graphic": "15190000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Transloader", 
              "id": "MISSILE_TRANSLOADER", 
              "graphic": "15190100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Transporter", 
              "id": "MISSILE_TRANSPORTER", 
              "graphic": "15190200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Crane/Loading Device", 
              "id": "MISSILE_CRANE_LOADING_DEVICE", 
              "graphic": "15190300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Propellant Transporter", 
              "id": "MISSILE_PROPELLANT_TRANSPORTER", 
              "graphic": "15190400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Warhead Transporter", 
              "id": "MISSILE_WARHEAD_TRANSPORTER", 
              "graphic": "15190500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "20", 
          "label": "Other Equipment", 
          "id": "OTHER_EQUIPMENT", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Antennae", 
              "id": "ANTENNAE", 
              "graphic": "15200100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Bomb", 
              "id": "BOMB", 
              "graphic": "15200200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Booby Trap", 
              "id": "BOOBY_TRAP", 
              "graphic": "15200300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "CBRN Equipment", 
              "id": "CBRN_EQUIPMENT", 
              "graphic": "15200400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Computer System", 
              "id": "COMPUTER_SYSTEM", 
              "graphic": "15200500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Command Launch Equipment (CLE)", 
              "id": "COMMAND_LAUNCH_EQUIPMENT_CLE", 
              "graphic": "15200600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Generator Set", 
              "id": "GENERATOR_SET", 
              "graphic": "15200700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Ground-based Midcourse Defense (GMD) Fire Control (GFC) Center", 
              "id": "GMD_GFC_CENTER", 
              "graphic": "15200800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "In-Flight Interceptor Communications System (IFICS) Data Terminal (IDT)", 
              "id": "IFICS_IDT", 
              "graphic": "15200900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Laser", 
              "id": "LASER", 
              "graphic": "15201000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Military Information Support Operations (MISO)", 
              "id": "MILITARY_INFORMATION_SUPPORT_OPERATIONS_MISO", 
              "graphic": "15201100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Sustainment Shipments", 
              "id": "SUSTAINMENT_SHIPMENTS", 
              "graphic": "15201200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Tent", 
              "id": "TENT", 
              "graphic": "15201300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Unit Deployment Shipments", 
              "id": "UNIT_DEPLOYMENT_SHIPMENTS", 
              "graphic": "15201400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Emergency Medical Operation", 
              "id": "EMERGENCY_MEDICAL_OPERATION", 
              "graphic": "15201500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Medical Evacuation Helicopter", 
                  "id": "MEDICAL_EVACUATION_HELICOPTER", 
                  "graphic": "15201501.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "21", 
          "label": "Land Mines", 
          "id": "LAND_MINES", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Land Mine", 
              "id": "LAND_MINE", 
              "graphic": "15210100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Antipersonnel Land Mine (APL)", 
              "id": "ANTIPERSONNEL_LAND_MINE_APL", 
              "graphic": "15210200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Antitank Mine", 
              "id": "ANTITANK_MINE", 
              "graphic": "15210300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Improvised Explosives Device (IED)", 
              "id": "IMPROVISED_EXPLOSIVES_DEVICE_IED", 
              "graphic": "15210400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Less than lethal", 
              "id": "LESS_THAN_LETHAL", 
              "graphic": "15210500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "22", 
          "label": "Sensors", 
          "id": "SENSORS", 
          "remarks": "No icon is associated with this entity. It is for hierachal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Sensor", 
              "id": "SENSOR", 
              "graphic": "15220100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Sensor Emplaced", 
              "id": "SENSOR_EMPLACED", 
              "graphic": "15220200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "15220300.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "23", 
          "label": "Emergency Operation", 
          "id": "EMERGENCY_OPERATION", 
          "graphic": "15230000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Ambulance", 
              "id": "AMBULANCE", 
              "graphic": "15230100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Fire Fighting/Fire Protection", 
              "id": "FIRE_FIGHTING_FIRE_PROTECTION", 
              "graphic": "15230200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "24", 
          "label": "Manual Track", 
          "id": "MANUAL_TRACK", 
          "graphic": "15240000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Biological", 
          "id": "BIOLOGICAL_MOD", 
          "graphic": "15011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Chemical", 
          "id": "CHEMICAL_MOD", 
          "graphic": "15021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Early Warning Radar", 
          "id": "EARLY_WARNING_RADAR_MOD", 
          "graphic": "15031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Intrusion", 
          "id": "INTRUSION_MOD", 
          "graphic": "15041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Nuclear", 
          "id": "NUCLEAR_MOD", 
          "graphic": "15051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Radiological", 
          "id": "RADIOLOGICAL_MOD", 
          "graphic": "15061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Upgraded Early Warning Radar", 
          "id": "UPGRADED_EARLY_WARNING_RADAR_MOD", 
          "graphic": "15071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Hijacking", 
          "id": "HIJACKING_MOD", 
          "graphic": "15081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Civilian", 
          "id": "CIVILIAN_MOD", 
          "graphic": "15091.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/Land", 
        "modifierTwos": "Appendices/Land/mod2", 
        "modifierOnes": "Appendices/Land/mod1"
      }
    }, 
    {
      "digits": "20", 
      "label": "Land Installation", 
      "id": "SS_LAND_INSTALLATION", 
      "dimensionId": "LAND_INSTALLATION", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Installation", 
          "id": "INSTALLATION", 
          "graphic": "20110000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Aircraft Production/Assembly", 
              "id": "AIRCRAFT_PRODUCTION_ASSEMBLY", 
              "graphic": "20110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Ammunition and Explosives/Assembly", 
              "id": "AMMUNITION_EXPLOSIVES_ASSEMBLY", 
              "graphic": "20110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Ammunition Cache", 
              "id": "AMMUNITION_CACHE", 
              "cloverGraphic": "20110300_0.svg", 
              "diamondGraphic": "20110300_3.svg", 
              "rectangleGraphic": "20110300_1.svg", 
              "squareGraphic": "20110300_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Armament Production", 
              "id": "ARMAMENT_PRODUCTION", 
              "graphic": "20110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Black List Location", 
              "id": "BLACK_LIST_LOCATION", 
              "graphic": "20110500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Chemical-Biological-Radiological and Nuclear (CBRN)", 
              "id": "CBRN", 
              "graphic": "20110600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Engineering Equipment Production", 
              "id": "ENGINEERING_EQUIPMENT_PRODUCTION", 
              "graphic": "20110700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bridge", 
                  "id": "BRIDGE", 
                  "graphic": "20110701.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Equipment Manufacture", 
              "id": "EQUIPMENT_MANUFACTURE", 
              "graphic": "20110800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Government Leadership", 
              "id": "GOVERNMENT_LEADERSHIP", 
              "graphic": "20110900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Gray List Location", 
              "id": "GRAY_LIST_LOCATION", 
              "graphic": "20111000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Mass Grave Site", 
              "id": "MASS_GRAVE_SITE", 
              "graphic": "20111100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Materiel", 
              "id": "MATERIEL", 
              "cloverGraphic": "20111200_0.svg", 
              "diamondGraphic": "20111200_3.svg", 
              "rectangleGraphic": "20111200_1.svg", 
              "squareGraphic": "20111200_2.svg", 
              "icon": "FULL_FRAME", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Mine", 
              "id": "MINE", 
              "graphic": "20111300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Missile and Space System Production", 
              "id": "MISSILE_SPACE_SYSTEM_PRODUCTION", 
              "graphic": "20111400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Nuclear (Non CBRN Defense)", 
              "id": "NUCLEAR_DEFENSE", 
              "graphic": "20111500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Printed Media", 
              "id": "PRINTED_MEDIA", 
              "graphic": "20111600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Safe House", 
              "id": "SAFE_HOUSE", 
              "graphic": "20111700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "White List Location", 
              "id": "WHITE_LIST_LOCATION", 
              "graphic": "20111800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Tented Camp", 
              "id": "TENTED_CAMP", 
              "graphic": "20111900.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Displaced Persons / Refugee / Evacuees Camp", 
                  "id": "DISPLACED_PERSONS_CAMP", 
                  "graphic": "20111901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Training Camp", 
                  "id": "TRAINING_CAMP", 
                  "graphic": "20111902.svg"
                }
              ]
            }, 
            {
              "digits": "20", 
              "label": "Warehouse/Storage Facility", 
              "id": "WAREHOUSE_STORAGE_FACILITY", 
              "graphic": "20112000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Law Enforcement", 
              "id": "LAW_ENFORCEMENT", 
              "graphic": "20112100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bureau of Alcohol-Tobacco-Firearms and Explosives (ATF) (Department of Justice)", 
                  "id": "BUREAU_ATF", 
                  "graphic": "20112101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Border Patrol", 
                  "id": "BORDER_PATROL", 
                  "graphic": "20112102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Customs Service", 
                  "id": "CUSTOMS_SERVICE", 
                  "graphic": "20112103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Drug Enforcement Administration (DEA)", 
                  "id": "DRUG_ENFORCEMENT_ADMINISTRATION_DEA", 
                  "graphic": "20112104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Department of Justice (DOJ)", 
                  "id": "DEPARTMENT_JUSTICE_DOJ", 
                  "graphic": "20112105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Federal Bureau of Investigation (FBI)", 
                  "id": "FEDERAL_BUREAU_INVESTIGATION_FBI", 
                  "graphic": "20112106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Police", 
                  "id": "POLICE", 
                  "graphic": "20112107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Prison", 
                  "id": "PRISON", 
                  "graphic": "20112108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "United States Secret Service (USSS)", 
                  "id": "UNITED_STATES_SECRET_SERVICE_USSS", 
                  "graphic": "20112109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Transportation Security Administration (TSA)", 
                  "id": "TRANSPORTATION_SECURITY_ADMINISTRATION_TSA", 
                  "graphic": "20112110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Coast Guard", 
                  "id": "COAST_GUARD", 
                  "graphic": "20112111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "US Marshals Service", 
                  "id": "US_MARSHALS_SERVICE", 
                  "graphic": "20112112.svg"
                }
              ]
            }, 
            {
              "digits": "22", 
              "label": "Emergency Operation", 
              "id": "EMERGENCY_OPERATION", 
              "graphic": "20112200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fire Station", 
                  "id": "FIRE_STATION", 
                  "graphic": "20112201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Emergency Medical Operation", 
                  "id": "EMERGENCY_MEDICAL_OPERATION", 
                  "graphic": "20112202.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Infrastructure", 
          "id": "INFRASTRUCTURE", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Agriculture and Food Infrastructure", 
              "id": "AGRICULTURE_FOOD_INFRASTRUCTURE", 
              "graphic": "20120100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Agriculture Laboratory", 
                  "id": "AGRICULTURE_LABORATORY", 
                  "graphic": "20120101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Animal Feedlot", 
                  "id": "ANIMAL_FEEDLOT", 
                  "graphic": "20120102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Commercial Food Distribution Center", 
                  "id": "COMMERCIAL_FOOD_DISTRIBUTION", 
                  "cloverGraphic": "20120103_0.svg", 
                  "diamondGraphic": "20120103_3.svg", 
                  "rectangleGraphic": "20120103_1.svg", 
                  "squareGraphic": "20120103_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "04", 
                  "label": "Farm/Ranch", 
                  "id": "FARM_RANCH", 
                  "graphic": "20120104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Food Distribution", 
                  "id": "FOOD_DISTRIBUTION", 
                  "cloverGraphic": "20120105_0.svg", 
                  "diamondGraphic": "20120105_3.svg", 
                  "rectangleGraphic": "20120105_1.svg", 
                  "squareGraphic": "20120105_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "06", 
                  "label": "Food Production Center", 
                  "id": "FOOD_PRODUCTION_CENTER", 
                  "cloverGraphic": "20120106_0.svg", 
                  "diamondGraphic": "20120106_3.svg", 
                  "rectangleGraphic": "20120106_1.svg", 
                  "squareGraphic": "20120106_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "07", 
                  "label": "Food Retail", 
                  "id": "FOOD_RETAIL", 
                  "cloverGraphic": "20120107_0.svg", 
                  "diamondGraphic": "20120107_3.svg", 
                  "rectangleGraphic": "20120107_1.svg", 
                  "squareGraphic": "20120107_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "08", 
                  "label": "Grain Storage", 
                  "id": "GRAIN_STORAGE", 
                  "graphic": "20120108.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Banking, Finance, and Insurance Infrastructure", 
              "id": "BANKING_INFRASTRUCTURE", 
              "graphic": "20120200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "ATM", 
                  "id": "ATM", 
                  "graphic": "20120201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Bank", 
                  "id": "BANK", 
                  "graphic": "20120202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Bullion Storage", 
                  "id": "BULLION_STORAGE", 
                  "graphic": "20120203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Economic Infrastructure Asset", 
                  "id": "ECONOMIC_INFRASTRUCTURE_ASSET", 
                  "graphic": "20120204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Federal Reserve Bank", 
                  "id": "FEDERAL_RESERVE_BANK", 
                  "graphic": "20120205.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Financial Exchange", 
                  "id": "FINANCIAL_EXCHANGE", 
                  "graphic": "20120206.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Financial Services-Other", 
                  "id": "FINANCIAL_SERVICES_OTHER", 
                  "graphic": "20120207.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Commercial Infrastructure", 
              "id": "COMMERCIAL_INFRASTRUCTURE", 
              "graphic": "20120300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Chemical Plant", 
                  "id": "CHEMICAL_PLANT", 
                  "graphic": "20120301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Firearms Manufacturer", 
                  "id": "FIREARMS_MANUFACTURER", 
                  "graphic": "20120302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Firearms Retailer", 
                  "id": "FIREARMS_RETAILER", 
                  "graphic": "20120303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Hazardous Material Production", 
                  "id": "HAZARDOUS_MATERIAL_PRODUCTION", 
                  "graphic": "20120304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Hazardous Material Storage", 
                  "id": "HAZARDOUS_MATERIAL_STORAGE", 
                  "graphic": "20120305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Industrial Site", 
                  "id": "INDUSTRIAL_SITE", 
                  "graphic": "20120306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Landfill", 
                  "id": "LANDFILL", 
                  "graphic": "20120307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Pharmaceutical Manufacturer", 
                  "id": "PHARMACEUTICAL_MANUFACTURER", 
                  "graphic": "20120308.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Contaminated Hazardous Waste Site", 
                  "id": "CONTAMINATED_HAZARDOUS_WASTE_SITE", 
                  "graphic": "20120309.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Toxic Release Inventory", 
                  "id": "TOXIC_RELEASE_INVENTORY", 
                  "graphic": "20120310.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Educational Facilities Infrastructure", 
              "id": "EDUCATIONAL_FACILITIES_INFRASTRUCTURE", 
              "graphic": "20120400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "College/University", 
                  "id": "COLLEGE_UNIVERSITY", 
                  "graphic": "20120401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "School", 
                  "id": "SCHOOL", 
                  "graphic": "20120402.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Energy Facility Infrastructure", 
              "id": "ENERGY_FACILITY_INFRASTRUCTURE", 
              "graphic": "20120500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Electric Power", 
                  "id": "ELECTRIC_POWER", 
                  "graphic": "20120501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Generation Station", 
                  "id": "GENERATION_STATION", 
                  "graphic": "20120502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Natural Gas Facility", 
                  "id": "NATURAL_GAS_FACILITY", 
                  "graphic": "20120503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Petroleum Facility", 
                  "id": "PETROLEUM_FACILITY", 
                  "graphic": "20120504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Petroleum/Gas/Oil", 
                  "id": "PETROLEUM_GAS_OIL", 
                  "graphic": "20120505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Propane Facility", 
                  "id": "PROPANE_FACILITY", 
                  "graphic": "20120506.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Government Site Infrastructure", 
              "id": "GOVERNMENT_SITE_INFRASTRUCTURE", 
              "graphic": "20120600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Medical Infrastructure", 
              "id": "MEDICAL_INFRASTRUCTURE", 
              "remarks": "No icon is assoicated with this entity. It is for hierarchal purposes only.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Medical", 
                  "id": "MEDICAL", 
                  "cloverGraphic": "20120701_0.svg", 
                  "diamondGraphic": "20120701_3.svg", 
                  "rectangleGraphic": "20120701_1.svg", 
                  "squareGraphic": "20120701_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "02", 
                  "label": "Medical Treatment Facility (Hospital)", 
                  "id": "MTF_HOSPITAL", 
                  "cloverGraphic": "20120702_0.svg", 
                  "diamondGraphic": "20120702_3.svg", 
                  "rectangleGraphic": "20120702_1.svg", 
                  "squareGraphic": "20120702_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Military Infrastructure", 
              "id": "MILITARY_INFRASTRUCTURE", 
              "graphic": "20120800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Military Armory", 
                  "id": "MILITARY_ARMORY", 
                  "graphic": "20120801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Military Base", 
                  "id": "MILITARY_BASE", 
                  "graphic": "20120802.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Postal Services Infrastructure", 
              "id": "POSTAL_SERVICES_INFRASTRUCTURE", 
              "graphic": "20120900.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Postal Distribution Center", 
                  "id": "POSTAL_DISTRIBUTION_CENTER", 
                  "graphic": "20120901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Post Office", 
                  "id": "POST_OFFICE", 
                  "graphic": "20120902.svg"
                }
              ]
            }, 
            {
              "digits": "10", 
              "label": "Public Venues Infrastructure", 
              "id": "PUBLIC_VENUES_INFRASTRUCTURE", 
              "graphic": "20121000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Enclosed Facility", 
                  "id": "ENCLOSED_FACILITY", 
                  "graphic": "20121001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Open Facility", 
                  "id": "OPEN_FACILITY", 
                  "graphic": "20121002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Recreational Area", 
                  "id": "RECREATIONAL_AREA", 
                  "graphic": "20121003.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Religious Institution", 
                  "id": "RELIGIOUS_INSTITUTION", 
                  "graphic": "20121004.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Special Needs Infrastructure", 
              "id": "SPECIAL_NEEDS_INFRASTRUCTURE", 
              "graphic": "20121100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Adult Day Care", 
                  "id": "ADULT_DAY_CARE", 
                  "graphic": "20121101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Child Day Care", 
                  "id": "CHILD_DAY_CARE", 
                  "graphic": "20121102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Elder Care", 
                  "id": "ELDER_CARE", 
                  "graphic": "20121103.svg"
                }
              ]
            }, 
            {
              "digits": "12", 
              "label": "Telecommunications Infrastructure", 
              "id": "TELECOMMUNICATIONS_INFRASTRUCTURE", 
              "graphic": "20121200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Broadcast Transmitter Antennae", 
                  "id": "BROADCAST_TRANSMITTER_ANTENNAE", 
                  "graphic": "20121201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Telecommunications", 
                  "id": "TELECOMMUNICATIONS", 
                  "graphic": "20121202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Telecommunications Tower", 
                  "id": "TELECOMMUNICATIONS_TOWER", 
                  "graphic": "20121203.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Transportation Infrastructure", 
              "id": "TRANSPORTATION_INFRASTRUCTURE", 
              "graphic": "20121300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Airport/Air Base", 
                  "id": "AIRPORT_AIR_BASE", 
                  "graphic": "20121301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Air Traffic Control Facility", 
                  "id": "ATC_FACILITY", 
                  "graphic": "20121302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Bus Station", 
                  "id": "BUS_STATION", 
                  "graphic": "20121303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Ferry Terminal", 
                  "id": "FERRY_TERMINAL", 
                  "graphic": "20121304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Helicopter Landing Site", 
                  "id": "HELICOPTER_LANDING_SITE", 
                  "graphic": "20121305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Maintenance Facility", 
                  "id": "MAINTENANCE_FACILITY", 
                  "graphic": "20121306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Railhead/Railroad Station", 
                  "id": "RAILHEAD_RAILROAD_STATION", 
                  "graphic": "20121307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Rest Stop", 
                  "id": "REST_STOP", 
                  "graphic": "20121308.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Sea Port/Naval Base", 
                  "id": "SEA_PORT_NAVAL_BASE", 
                  "graphic": "20121309.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Ship Yard", 
                  "id": "SHIP_YARD", 
                  "graphic": "20121310.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Toll Facility", 
                  "id": "TOLL_FACILITY", 
                  "graphic": "20121311.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Traffic Inspection Facility", 
                  "id": "TRAFFIC_INSPECTION_FACILITY", 
                  "graphic": "20121312.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Tunnel", 
                  "id": "TUNNEL", 
                  "graphic": "20121313.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Water Supply Infrastructure", 
              "id": "WATER_SUPPLY_INFRASTRUCTURE", 
              "graphic": "20121400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Control Valve", 
                  "id": "CONTROL_VALVE", 
                  "graphic": "20121401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Dam", 
                  "id": "DAM", 
                  "graphic": "20121402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Discharge Outfall", 
                  "id": "DISCHARGE_OUTFALL", 
                  "graphic": "20121403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Ground Water Well", 
                  "id": "GROUND_WATER_WELL", 
                  "graphic": "20121404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Pumping Station", 
                  "id": "PUMPING_STATION", 
                  "graphic": "20121405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Reservoir", 
                  "id": "RESERVOIR", 
                  "graphic": "20121406.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Storage Tower", 
                  "id": "STORAGE_TOWER", 
                  "graphic": "20121407.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Surface Water Intake", 
                  "id": "SURFACE_WATER_INTAKE", 
                  "graphic": "20121408.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Wastewater Treatment Facility", 
                  "id": "WASTEWATER_TREATMENT_FACILITY", 
                  "graphic": "20121409.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Water", 
                  "id": "WATER", 
                  "graphic": "20121410.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Water Treatment", 
                  "id": "WATER_TREATMENT", 
                  "graphic": "20121411.svg"
                }
              ]
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Biological", 
          "id": "BIOLOGICAL_1_MOD", 
          "graphic": "20011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Chemical", 
          "id": "CHEMICAL_1_MOD", 
          "graphic": "20021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Nuclear", 
          "id": "NUCLEAR_1_MOD", 
          "graphic": "20031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Radiological", 
          "id": "RADIOLOGICAL_1_MOD", 
          "graphic": "20041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Decontamination", 
          "id": "DECONTAMINATION_MOD", 
          "graphic": "20051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Coal", 
          "id": "COAL_MOD", 
          "graphic": "20061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Geothermal", 
          "id": "GEOTHERMAL_MOD", 
          "graphic": "20071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Hydroelectric", 
          "id": "HYDROELECTRIC_MOD", 
          "graphic": "20081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Natural Gas", 
          "id": "NATURAL_GAS_MOD", 
          "graphic": "20091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Petroleum", 
          "id": "PETROLEUM_MOD", 
          "graphic": "20101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Civilian", 
          "id": "CIVILIAN_MOD", 
          "graphic": "20111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Civilian Telephone", 
          "id": "CIVILIAN_TELEPHONE_MOD", 
          "graphic": "20121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Civilian Television", 
          "id": "CIVILIAN_TELEVISION_MOD", 
          "graphic": "20131.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Biological", 
          "id": "BIOLOGICAL_2_MOD", 
          "graphic": "20012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Chemical", 
          "id": "CHEMICAL_2_MOD", 
          "graphic": "20022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Nuclear", 
          "id": "NUCLEAR_2_MOD", 
          "graphic": "20032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Radiological", 
          "id": "RADIOLOGICAL_2_MOD", 
          "graphic": "20042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Atomic Energy Reactor", 
          "id": "ATOMIC_ENERGY_REACTOR_MOD", 
          "graphic": "20052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Nuclear Material Production", 
          "id": "NUCLEAR_MATERIAL_PRODUCTION_MOD", 
          "graphic": "20062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Nuclear Material Storage", 
          "id": "NUCLEAR_MATERIAL_STORAGE_MOD", 
          "graphic": "20072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Weapons Grade", 
          "id": "WEAPONS_GRADE_MOD", 
          "graphic": "20082.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/Land", 
        "modifierTwos": "Appendices/Land/mod2", 
        "modifierOnes": "Appendices/Land/mod1"
      }
    }, 
    {
      "digits": "25", 
      "label": "Control Measure", 
      "id": "SS_CONTROL_MEASURE", 
      "dimensionId": "CONTROL_MEASURE", 
      "geometry": "MIXED", 
      "entities": [
        {
          "digits": "11", 
          "label": "Command and Control Lines", 
          "id": "COMMAND_CONTROL_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Boundary", 
              "id": "BOUNDARY", 
              "graphic": "25110100.a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Light Line", 
              "id": "LIGHT_LINE", 
              "graphic": "25110200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Command and Control Areas", 
          "id": "COMMAND_CONTROL_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Area of Operations", 
              "id": "AREA_OPERATIONS", 
              "graphic": "25120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Named Area of Interest", 
              "id": "NAMED_AREA_INTEREST", 
              "graphic": "25120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Targeted Area of Interest", 
              "id": "TARGETED_AREA_INTEREST", 
              "graphic": "25120300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Airfield Zone", 
              "id": "AIRFIELD_ZONE", 
              "graphic": "25120400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Command and Control Points", 
          "id": "COMMAND_CONTROL_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Action Point (General)", 
              "id": "ACTION_POINT", 
              "graphic": "25130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Amnesty Point", 
              "id": "AMNESTY_POINT", 
              "graphic": "25130200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Checkpoint", 
              "id": "CHECKPOINT", 
              "graphic": "25130300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Center of Main Effort", 
              "id": "CENTER_MAIN_EFFORT", 
              "graphic": "25130400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Contact Point", 
              "id": "CONTACT_POINT", 
              "graphic": "25130500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Coordinating Point", 
              "id": "COORDINATING_POINT", 
              "graphic": "25130600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Decision Point", 
              "id": "DECISION_POINT", 
              "graphic": "25130700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Distress Call", 
              "id": "DISTRESS_CALL", 
              "graphic": "25130800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Entry Control Point", 
              "id": "ENTRY_CONTROL_POINT", 
              "graphic": "25130900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Fly-To-Point", 
              "id": "FLY_TO_POINT", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fly-To-Point (Sonobuoy)", 
                  "id": "FLY_TO_POINT_SONOBUOY", 
                  "graphic": "25131001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Fly-To-Point (Weapon)", 
                  "id": "FLY_TO_POINT_WEAPON", 
                  "graphic": "25131002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Fly-To-Point (Normal)", 
                  "id": "FLY_TO_POINT_NORMAL", 
                  "graphic": "25131003.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Linkup Point", 
              "id": "LINKUP_POINT", 
              "graphic": "25131100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Passage Point", 
              "id": "PASSAGE_POINT", 
              "graphic": "25131200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Point of Interest", 
              "id": "POINT_OF_INTEREST", 
              "graphic": "25131300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Launch Event (Point of Interest)", 
                  "id": "POI_LAUNCH_EVENT", 
                  "graphic": "25131301.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Rally Point", 
              "id": "RALLY_POINT", 
              "graphic": "25131400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Release Point", 
              "id": "RELEASE_POINT", 
              "graphic": "25131500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Start Point", 
              "id": "START_POINT", 
              "graphic": "25131600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Special Point", 
              "id": "CC_SPECIAL_POINT", 
              "graphic": "25131700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Waypoint", 
              "id": "CC_WAYPOINT", 
              "graphic": "25131800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Airfield", 
              "id": "AIRFIELD", 
              "graphic": "25131900.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Maneuver Lines", 
          "id": "MANEUVER_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Forward Line of Troops", 
              "id": "FORWARD_LINE_OF_TROOPS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Friendly Present", 
                  "id": "FLOT_FRIENDLY_PRESENT", 
                  "graphic": "25140101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Friendly Planned or on Order", 
                  "id": "FLOT_FRIENDLY_PLANNED_ON_ORDER", 
                  "graphic": "25140102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Enemy Known", 
                  "id": "FLOT_ENEMY_KNOWN", 
                  "graphic": "25140103.a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Enemy Suspected or Templated", 
                  "id": "FLOT_ENEMY_SUSPECTED_TEMPLATED", 
                  "graphic": "25140104.a.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Line of Contact", 
              "id": "LINE_OF_CONTACT", 
              "remarks": "Line of Contact is a doctrinal term and concept for opposing and parallel Forward Lines of Own Troops.  It is not a symbol in its own right.", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Phase Line", 
              "id": "PHASE_LINE", 
              "graphic": "25140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Forward Edge of the Battle Area", 
              "id": "FORWARD_EDGE_BATTLE_AREA", 
              "graphic": "25140400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Proposed or On Order", 
                  "id": "FEBA_PROPOSED_ON_ORDER", 
                  "graphic": "25140401.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Principle Direction of Fire", 
              "id": "PRINCIPLE_DIRECTION_OF_FIRE", 
              "graphic": "25140500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Direction of Attack", 
              "id": "DIRECTION_OF_ATTACK", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Friendly Aviation", 
                  "id": "FRIENDLY_AVIATION", 
                  "graphic": "25140601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Friendly Direction of Main Attack", 
                  "id": "FRIENDLY_MAIN_ATTACK_DECISIVE", 
                  "graphic": "25140602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Friendly Direction of Supporting Attack", 
                  "id": "FRIENDLY_SUPPORTING_ATTACK", 
                  "graphic": "25140603.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Friendly Planned or On Order", 
                  "id": "FRIENDLY_PLANNED_ON_ORDER", 
                  "graphic": "25140604.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Feint", 
                  "id": "FEINT", 
                  "graphic": "25140605.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Enemy Confirmed", 
                  "id": "ENEMY_CONFIRMED", 
                  "graphic": "25140606.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Enemy Templated or Suspected", 
                  "id": "ENEMY_TEMPLATED_OR_SUSPECTED", 
                  "graphic": "25140607.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Final Coordination Line", 
              "id": "FINAL_COORDINATION_LINE", 
              "graphic": "25140700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Infiltration Lane", 
              "id": "INFILTRATION_LANE", 
              "graphic": "25140800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Limit of Advance", 
              "id": "LIMIT_OF_ADVANCE", 
              "graphic": "25140900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Line of Departure", 
              "id": "LINE_OF_DEPARTURE", 
              "graphic": "25141000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Line of Departure/Line of Contact", 
              "id": "LINE_OF_DEPARTURE_LINE_OF_CONTACT", 
              "graphic": "25141100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Probable Line of Deployment", 
              "id": "PROBABLE_LINE_OF_DEPLOYMENT", 
              "graphic": "25141200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Airhead Line", 
              "id": "AIRHEAD_LINE", 
              "graphic": "25141300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Bridgehead Line", 
              "id": "BRIDGEHEAD_LINE", 
              "graphic": "25141400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Holding Line", 
              "id": "HOLDING_LINE", 
              "graphic": "25141500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Release Line", 
              "id": "RELEASE_LINE", 
              "graphic": "25141600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Ambush", 
              "id": "AMBUSH", 
              "graphic": "25141700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Maneuver Areas", 
          "id": "MANEUVER_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Area", 
              "id": "AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Friendly", 
                  "id": "AREA_FRIENDLY", 
                  "graphic": "25150101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Friendly Planned or On Order", 
                  "id": "AREA_FRIENDLY_PLANNED_OR_ON_ORDER", 
                  "graphic": "25150102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Enemy Known or Confirmed", 
                  "id": "AREA_ENEMY_KNOWN_OR_CONFIRMED", 
                  "graphic": "25150103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Enemy Suspected", 
                  "id": "AREA_ENEMY_SUSPECTED", 
                  "graphic": "25150104.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Assembly Area", 
              "id": "ASSEMBLY_AREA", 
              "graphic": "25150200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Occupied Assembly Area", 
              "id": "OCCUPIED_ASSEMBLY_AREA", 
              "graphic": "25150300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Occupied Assembly Area w/ Offset Unit", 
                  "id": "OCCUPIED_AA_OFFSET_UNIT"
                }, 
                {
                  "digits": "02", 
                  "label": "Occupied Assembly Area w/ Offset Units", 
                  "id": "OCCUPIED_AA_OFFSET_UNITS"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Proposed or On Order Assembly Area", 
              "id": "AA_PROPOSED_ON_ORDER", 
              "graphic": "25150400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Action Area", 
              "id": "ACTION_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Joint Tactical Action Area (JTAA)", 
                  "id": "JTAA", 
                  "graphic": "25150501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Submarine Action Area (SAA)", 
                  "id": "SAA", 
                  "graphic": "25150502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Submarine-Generated Action Area (SGAA)", 
                  "id": "SGAA", 
                  "graphic": "25150503.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Drop Zone", 
              "id": "DROP_ZONE", 
              "graphic": "25150600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Extraction Zone", 
              "id": "EXTRACTION_ZONE", 
              "graphic": "25150700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Landing Zone", 
              "id": "LANDING_ZONE", 
              "graphic": "25150800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Pick-Up Zone", 
              "id": "PICK_UP_ZONE", 
              "graphic": "25150900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Fortified Area", 
              "id": "FORTIFIED_AREA", 
              "graphic": "25151000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Limited Access Area", 
              "id": "LIMITED_ACCESS_AREA", 
              "graphic": "25151100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Battle Position", 
              "id": "BATTLE_POSITION", 
              "graphic": "25151200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Battle Position - Planned", 
                  "id": "BP_PLANNED", 
                  "graphic": "25151201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Battle Position - Prepared (P) but not Occupied", 
                  "id": "PREPARED_BUT_NOT_OCCUPIED", 
                  "graphic": "25151202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Strong Point", 
                  "id": "STRONG_POINT", 
                  "graphic": "25151203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Contain", 
                  "id": "CONTAIN", 
                  "graphic": "25151204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Retain", 
                  "id": "RETAIN", 
                  "graphic": "25151205.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Engagement Area (EA)", 
              "id": "ENGAGEMENT_AREA_EA", 
              "graphic": "25151300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Axis of Advance", 
              "id": "AXIS_ADVANCE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Friendly Airborne/Aviation", 
                  "id": "AXIS_ADVANCE_FRIENDLY_AIRBORNE_AVIATION", 
                  "graphic": "25151401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Attack Helicopter", 
                  "id": "AXIS_ADVANCE_ATTACK_HELICOPTER", 
                  "graphic": "25151402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Main Attack", 
                  "id": "AXIS_ADVANCE_MAIN_ATTACK", 
                  "graphic": "25151403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Supporting Attack", 
                  "id": "AXIS_ADVANCE_SUPPORTING_ATTACK", 
                  "graphic": "25151404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Supporting Attack Planned or On Order", 
                  "id": "AXIS_ADVANCE_SUPPORTING_ATTACK_PLANNED_ON_ORDER", 
                  "graphic": "25151405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Feint", 
                  "id": "AXIS_ADVANCE_FEINT", 
                  "graphic": "25151406.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Enemy Confirmed", 
                  "id": "AXIS_ADVANCE_ENEMY_CONFIRMED", 
                  "graphic": "25151407.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Enemy Templated or Suspected", 
                  "id": "AXIS_ADVANCE_ENEMY_TEMPLATED_SUSPECTED", 
                  "graphic": "25151408.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Assault Position", 
              "id": "ASSAULT_POSITION", 
              "graphic": "25151500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Attack Position", 
              "id": "ATTACK_POSITION", 
              "graphic": "25151600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Objective", 
              "id": "OBJECTIVE", 
              "graphic": "25151700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Encirclement", 
              "id": "ENCIRCLEMENT", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Friendly", 
                  "id": "FRIENDLY", 
                  "graphic": "25151801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Enemy", 
                  "id": "ENEMY", 
                  "graphic": "25151802.svg"
                }
              ]
            }, 
            {
              "digits": "19", 
              "label": "Penetration Box", 
              "id": "PENETRATION_BOX", 
              "graphic": "25151900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Attack by Fire Position", 
              "id": "ATTACK_BY_FIRE_POSITION", 
              "graphic": "25152000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Support by Fire", 
              "id": "SUPPORT_BY_FIRE", 
              "graphic": "25152100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Search Area/Reconnaissance Area", 
              "id": "SEARCH_AREA_RECONNAISSANCE_AREA", 
              "graphic": "25152200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Maneuver Points", 
          "id": "MANEUVER_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Observation Post/Outpost (Unspecified)", 
              "id": "OBSERVATION_POST_OUTPOST_UNSPECIFIED", 
              "graphic": "25160100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Observation Post/Outpost (Specified)", 
              "id": "OBSERVATION_POST_OUTPOST_SPECIFIED", 
              "graphic": "25160200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Reconnaissance Outpost", 
                  "id": "RECONNAISSANCE_OUTPOST", 
                  "graphic": "25160201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Forward Observer Outpost", 
                  "id": "FORWARD_OBSERVER_OUTPOST", 
                  "graphic": "25160202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "CBRN Observation Outpost", 
                  "id": "CBRN_OBSERVATION_OUTPOST", 
                  "graphic": "25160203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Sensor Outpost/Listening Post", 
                  "id": "SENSOR_OUTPOST_LISTENING_POST", 
                  "graphic": "25160204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Combat Outpost", 
                  "id": "COMBAT_OUTPOST", 
                  "graphic": "25160205.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Target Reference Point", 
              "id": "TARGET_REFERENCE_POINT", 
              "graphic": "25160300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Point of Departure", 
              "id": "POINT_OF_DEPARTURE", 
              "graphic": "25160400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Airspace Control (Corridors) Areas", 
          "id": "AIRSPACE_CONTROL_CORRIDORS_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Air Corridor", 
              "id": "AIR_CORRIDOR", 
              "graphic": "25170100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Low Level Transit Route", 
              "id": "LOW_LEVEL_TRANSIT_ROUTE", 
              "graphic": "25170200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Minimum-Risk Route", 
              "id": "MINIMUM_RISK_ROUTE", 
              "graphic": "25170300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Safe Lane", 
              "id": "SAFE_LANE", 
              "graphic": "25170400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Standard Use Army Aircraft Flight Route", 
              "id": "STANDARD_USE_ARMY_AIRCRAFT_FLIGHT_ROUTE", 
              "graphic": "25170500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Transit Corridor", 
              "id": "TRANSIT_CORRIDOR", 
              "graphic": "25170600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Unmanned Aircraft (UA) Route", 
              "id": "UA_ROUTE", 
              "graphic": "25170700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Base Defense Zone", 
              "id": "BASE_DEFENSE_ZONE", 
              "graphic": "25170800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "High-Density Airspace Control Zone", 
              "id": "HIGH_DENSITY_AIRSPACE_CONTROL_ZONE", 
              "graphic": "25170900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Restricted Operations Zone", 
              "id": "RESTRICTED_OPERATIONS_ZONE", 
              "graphic": "25171000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Air-to-Air Restricted Operating Zone", 
              "id": "AIR_TO_AIR_RESTRICTED_OPERATING_ZONE", 
              "graphic": "25171100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Unmanned Aircraft Restricted Operating Zone", 
              "id": "UNMANNED_AIRCRAFT_RESTRICTED_OPERATING_ZONE", 
              "graphic": "25171200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Weapon Engagement Zone", 
              "id": "WEAPON_ENGAGEMENT_ZONE", 
              "graphic": "25171300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Fighter Engagement Zone", 
              "id": "FIGHTER_ENGAGEMENT_ZONE", 
              "graphic": "25171400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Joint Engagement Zone", 
              "id": "JOINT_ENGAGEMENT_ZONE", 
              "graphic": "25171500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Missile Engagement Zone", 
              "id": "MISSILE_ENGAGEMENT_ZONE", 
              "graphic": "25171600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Low Altitude Missile Engagement Zone", 
              "id": "LOW_ALTITUDE_MISSILE_ENGAGEMENT_ZONE", 
              "graphic": "25171700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "High Altitude Missile Engagement Zone", 
              "id": "HIGH_ALTITUDE_MISSILE_ENGAGEMENT_ZONE", 
              "graphic": "25171800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Short Range Air Defense Engagement Zone", 
              "id": "SHORT_RANGE_AIR_DEFENSE_ENGAGEMENT_ZONE", 
              "graphic": "25171900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Weapons Free Zone", 
              "id": "WEAPONS_FREE_ZONE", 
              "graphic": "25172000.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "Airspace Control Points", 
          "id": "AIRSPACE_CONTROL_POINTS", 
          "graphic": "25180000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Air Control Point", 
              "id": "AIR_CONTROL_POINT", 
              "graphic": "25180100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Communications Checkpoint", 
              "id": "COMMUNICATIONS_CHECKPOINT", 
              "graphic": "25180200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Downed Aircraft Pick-up Point", 
              "id": "DOWNED_AIRCRAFT_PICK_UP_POINT", 
              "graphic": "25180300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Pop-up Point", 
              "id": "POP_UP_POINT", 
              "graphic": "25180400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Air Control Rendezvous", 
              "id": "AIR_CONTROL_RENDEZVOUS", 
              "graphic": "25180500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "TACAN", 
              "id": "TACAN", 
              "graphic": "25180600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "CAP Station", 
              "id": "CAP_STATION", 
              "graphic": "25180700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "AEW Station", 
              "id": "AEW_STATION", 
              "graphic": "25180800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "ASW (Helo and F/W) Station", 
              "id": "ASW_HELO_FW_STATION", 
              "graphic": "25180900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Strike Initial Point", 
              "id": "STRIKE_INITIAL_POINT", 
              "graphic": "25181000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Replemenshment Station", 
              "id": "REPLEMENSHMENT_STATION", 
              "graphic": "25181100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Tanking", 
              "id": "TANKING", 
              "graphic": "25181200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Antisubmarine Warfare, Rotary Wing", 
              "id": "ANTISUBMARINE_WARFARE_ROTARY_WING", 
              "graphic": "25181300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "SUCAP - Fixed Wing", 
              "id": "SUCAP_FIXED_WING", 
              "graphic": "25181400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "SUCAP - Rotary Wing", 
              "id": "SUCAP_ROTARY_WING", 
              "graphic": "25181500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "MIW - Fixed Wing", 
              "id": "MIW_FIXED_WING", 
              "graphic": "25181600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "MIW - Rotary Wing", 
              "id": "MIW_ROTARY_WING", 
              "graphic": "25181700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Tomcat", 
              "id": "TOMCAT", 
              "graphic": "25181800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Rescue", 
              "id": "RESCUE", 
              "graphic": "25181900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Unmanned Aerial System (UAS/UA)", 
              "id": "UAS_UA", 
              "graphic": "25182000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "VTUA", 
              "id": "VTUA", 
              "graphic": "25182100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Orbit", 
              "id": "ORBIT", 
              "graphic": "25182200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "23", 
              "label": "Orbit - Figure Eight", 
              "id": "ORBIT_FIGURE_EIGHT", 
              "graphic": "25182300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "24", 
              "label": "Orbit - Race Track", 
              "id": "ORBIT_RACE_TRACK", 
              "graphic": "25182400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "25", 
              "label": "Orbit - Random Closed", 
              "id": "ORBIT_RANDOM_CLOSED", 
              "graphic": "25182500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "19", 
          "label": "Airspace Control Lines", 
          "id": "AIRSPACE_CONTROL_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Identification Friend or Foe Off Line", 
              "id": "IFF_OFF_LINE", 
              "graphic": "25190100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Identification Friend or Foe On Line", 
              "id": "IFF_ON_LINE", 
              "graphic": "25190200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "20", 
          "label": "Maritime Control Areas", 
          "id": "MARITIME_CONTROL_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Launch Area", 
              "id": "LAUNCH_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ellipse/Circle", 
                  "id": "LAUNCH_ELLIPSE_CIRCLE", 
                  "graphic": "25200101.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Defended Area", 
              "id": "DEFENDED_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ellipse/Circle", 
                  "id": "DEFEND_ELLIPSE_CIRCLE", 
                  "graphic": "25200201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangle", 
                  "id": "DEFEND_RECTANGLE", 
                  "graphic": "25200202.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "No Attack (NOTACK) Zone", 
              "id": "NOTACK_ZONE", 
              "graphic": "25200300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Ship Area of Interest", 
              "id": "SHIP_AREA_OF_INTEREST", 
              "graphic": "25200400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ellipse/Circle", 
                  "id": "SHIP_AOI_ELLIPSE_CIRCLE", 
                  "graphic": "25200401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangle", 
                  "id": "SHIP_AOI_RECTANGLE", 
                  "graphic": "25200402.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Active Maneuver Area", 
              "id": "ACTIVE_MANEUVER_AREA", 
              "graphic": "25200500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Cued Acquisition Doctrine", 
              "id": "CUED_ACQUISITION_DOCTRINE", 
              "graphic": "25200600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Radar Search Doctrine", 
              "id": "RADAR_SEARCH_DOCTRINE", 
              "graphic": "25200700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "21", 
          "label": "Maritime Control Points", 
          "id": "MARITIME_CONTROL_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Plan Ship", 
              "id": "PLAN_SHIP", 
              "graphic": "25210100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Aim Point", 
              "id": "AIM_POINT", 
              "graphic": "25210200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Defended Asset", 
              "id": "DEFENDED_ASSET", 
              "graphic": "25210300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Drop Point", 
              "id": "DROP_POINT", 
              "graphic": "25210400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Entry Point", 
              "id": "ENTRY_POINT", 
              "graphic": "25210500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Air  Detonation", 
              "id": "AIR_DETONATION", 
              "graphic": "25210600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Ground Zero", 
              "id": "GROUND_ZERO", 
              "graphic": "25210700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Impact Point", 
              "id": "IMPACT_POINT", 
              "graphic": "25210800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Predicted Impact Point", 
              "id": "PREDICTED_IMPACT_POINT", 
              "graphic": "25210900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Launched Torpedo", 
              "id": "LAUNCHED_TORPEDO", 
              "graphic": "25211000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Missile Detection Point", 
              "id": "MISSILE_DETECTION_POINT", 
              "graphic": "25211100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Acoustic Countermeasure (Decoy)", 
              "id": "ACOUSTIC_COUNTERMEASURE_DECOY", 
              "graphic": "25211200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Electronic Countermeasures (ECM) Decoy", 
              "id": "ECM_DECOY", 
              "graphic": "25211300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Brief Contact", 
              "id": "BRIEF_CONTACT", 
              "graphic": "25211400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Datum Lost Contact", 
              "id": "DATUM_LOST_CONTACT", 
              "graphic": "25211500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "BT Buoy Drop", 
              "id": "BT_BUOY_DROP", 
              "graphic": "25211600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Reported Bottom Sub", 
              "id": "REPORTED_BOTTOM_SUB", 
              "graphic": "25211700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Moving Haven", 
              "id": "MOVING_HAVEN", 
              "graphic": "25211800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Screen Center", 
              "id": "SCREEN_CENTER", 
              "graphic": "25211900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Lost Contact", 
              "id": "LOST_CONTACT", 
              "graphic": "25212000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Sinker", 
              "id": "SINKER", 
              "graphic": "25212100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Trial Track", 
              "id": "TRIAL_TRACK", 
              "graphic": "25212200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "23", 
              "label": "Acoustic Fix", 
              "id": "ACOUSTIC_FIX", 
              "graphic": "25212300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "24", 
              "label": "Electromagnetic Fix", 
              "id": "ELECTROMAGNETIC_FIX", 
              "graphic": "25212400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "25", 
              "label": "Electromagnetic - Magnetic Anomaly Detection (MAD)", 
              "id": "ELECTROMAGNETIC_MAD", 
              "graphic": "25212500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "26", 
              "label": "Optical Fix", 
              "id": "OPTICAL_FIX", 
              "graphic": "25212600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "27", 
              "label": "Formation", 
              "id": "FORMATION", 
              "graphic": "25212700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "28", 
              "label": "Harbor", 
              "id": "HARBOR", 
              "graphic": "25212800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "29", 
              "label": "Harbor Entrance Point", 
              "id": "HARBOR_ENTRANCE_POINT", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "A", 
                  "id": "A", 
                  "graphic": "25212901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Q", 
                  "id": "Q", 
                  "graphic": "25212902.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "X", 
                  "id": "X", 
                  "graphic": "25212903.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Y", 
                  "id": "Y", 
                  "graphic": "25212904.svg"
                }
              ]
            }, 
            {
              "digits": "30", 
              "label": "Dip Position", 
              "id": "DIP_POSITION", 
              "graphic": "25213000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "31", 
              "label": "Search", 
              "id": "SEARCH", 
              "graphic": "25213100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "32", 
              "label": "Search Area", 
              "id": "SEARCH_AREA", 
              "graphic": "25213200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "33", 
              "label": "Search Center", 
              "id": "SEARCH_CENTER", 
              "graphic": "25213300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "34", 
              "label": "Navigational Reference Point", 
              "id": "SEARCH_NAVIGATIONAL_REFERENCE_POINT", 
              "graphic": "25213400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "35", 
              "label": "Sonobuoy", 
              "id": "SONOBUOY", 
              "graphic": "25213500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ambient Noise", 
                  "id": "AMBIENT_NOISE", 
                  "graphic": "25213501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Air Transportable Communication", 
                  "id": "AIR_TRANSPORTABLE_COMMUNICATION", 
                  "graphic": "25213502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Barra", 
                  "id": "BARRA", 
                  "graphic": "25213503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Bathythermograph Transmitting", 
                  "id": "BATHYTHERMOGRAPH_TRANSMITTING", 
                  "graphic": "25213504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Command Active Multi-Beam (CAMBS)", 
                  "id": "CAMBS", 
                  "graphic": "25213505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Command Active Sonobuoy Directional Command Active Sonobuoy System (CASS)", 
                  "id": "CASS", 
                  "graphic": "25213506.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Digital Frequency Analysis and Recording (DIFAR)", 
                  "id": "DIFAR", 
                  "graphic": "25213507.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Directional Command Active Sonobuoy System (DICASS)", 
                  "id": "DICASS", 
                  "graphic": "25213508.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Expendable Reliable Acoustic Path Sonobuoy (ERAPS)", 
                  "id": "ERAPS", 
                  "graphic": "25213509.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Expired", 
                  "id": "EXPIRED", 
                  "graphic": "25213510.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Kingpin", 
                  "id": "KINGPIN", 
                  "graphic": "25213511.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Low Frequency Analysis and Recording (LOFAR)", 
                  "id": "LOFAR", 
                  "graphic": "25213512.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Pattern Center", 
                  "id": "PATTERN_CENTER", 
                  "graphic": "25213513.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Range Only", 
                  "id": "RANGE_ONLY", 
                  "graphic": "25213514.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Vertical Line Array Directional Frequency Analysis and Recording (DIFAR)", 
                  "id": "VERTICAL_LINE_ARRAY_DIRECTIONAL_FREQUENCY_ANALYSIS_RECORDING_DIFAR", 
                  "graphic": "25213515.svg"
                }
              ]
            }, 
            {
              "digits": "36", 
              "label": "Reference Point", 
              "id": "REFERENCE_POINT", 
              "graphic": "25213600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "37", 
              "label": "Special Point", 
              "id": "MARITIME_SPECIAL_POINT", 
              "graphic": "25213700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "38", 
              "label": "Navigational Reference Point", 
              "id": "NAVIGATIONAL_REFERENCE_POINT", 
              "graphic": "25213800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "39", 
              "label": "Data Link Reference Point", 
              "id": "DATA_LINK_REFERENCE_POINT", 
              "graphic": "25213900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "40", 
              "label": "Forward Observer / Spotter Position", 
              "id": "FORWARD_OBSERVER_SPOTTER_POSITION", 
              "graphic": "25214000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "41", 
              "label": "Vital Area Center", 
              "id": "VITAL_AREA_CENTER", 
              "graphic": "25214100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "42", 
              "label": "Corridor Tab Point", 
              "id": "CORRIDOR_TAB_POINT", 
              "graphic": "25214200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "43", 
              "label": "Enemy Point", 
              "id": "ENEMY_POINT", 
              "graphic": "25214300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "44", 
              "label": "Marshall Point", 
              "id": "MARSHALL_POINT", 
              "graphic": "25214400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "45", 
              "label": "Position and Intended Movement (PIM)", 
              "id": "POSITION_INTENDED_MOVEMENT_PIM", 
              "graphic": "25214500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "46", 
              "label": "Pre-Landfall Waypoint", 
              "id": "PRE_LANDFALL_WAYPOINT", 
              "graphic": "25214600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "47", 
              "label": "Estimated Position (EP)", 
              "id": "ESTIMATED_POSITION_EP", 
              "graphic": "25214700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "48", 
              "label": "Waypoint", 
              "id": "MARITIME_WAYPOINT", 
              "graphic": "25214800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "49", 
              "label": "General Subsurface Station", 
              "id": "GENERAL_SUBSURFACE_STATION", 
              "graphic": "25214900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "50", 
              "label": "Submarine Subsurface Station", 
              "id": "SUBMARINE_SUBSURFACE_STATION", 
              "graphic": "25215000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "51", 
              "label": "Submarine Antisubmarine Warfare Subsurface Station", 
              "id": "SUBMARINE_ANTISUBMARINE_WARFARE_SUBSURFACE_STATION", 
              "graphic": "25215100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "52", 
              "label": "Unmanned Underwater Vehicle Subsurface Station", 
              "id": "UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
              "graphic": "25215200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "53", 
              "label": "Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Subsurface Station", 
              "id": "ASW_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
              "graphic": "25215300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "54", 
              "label": "Mine Warfare Unmanned Underwater Vehicle Subsurface Station", 
              "id": "MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
              "graphic": "25215400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "55", 
              "label": "Surface Warfare Unmanned Underwater Vehicle Subsurface Station", 
              "id": "SURFACE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SUBSURFACE_STATION", 
              "graphic": "25215500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "56", 
              "label": "General Surface Station", 
              "id": "GENERAL_SURFACE_STATION", 
              "graphic": "25215600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "57", 
              "label": "Antisubmarine Warfare (ASW) Surface Station", 
              "id": "ASW_SURFACE_STATION", 
              "graphic": "25215700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "58", 
              "label": "Mine Warfare Surface Station", 
              "id": "MINE_WARFARE_SURFACE_STATION", 
              "graphic": "25215800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "59", 
              "label": "Non-Combatant Surface Station", 
              "id": "NON_COMBATANT_SURFACE_STATION", 
              "graphic": "25215900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "60", 
              "label": "Picket Surface Station", 
              "id": "PICKET_SURFACE_STATION", 
              "graphic": "25216000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "61", 
              "label": "Rendezvous Surface Station", 
              "id": "RENDEZVOUS_SURFACE_STATION", 
              "graphic": "25216100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "62", 
              "label": "Replenishment at Sea Surface Station", 
              "id": "REPLENISHMENT_SEA_SURFACE_STATION", 
              "graphic": "25216200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "63", 
              "label": "Rescue Surface Station", 
              "id": "RESCUE_SURFACE_STATION", 
              "graphic": "25216300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "64", 
              "label": "Surface Warfare Surface Station", 
              "id": "SURFACE_WARFARE_SURFACE_STATION", 
              "graphic": "25216400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "65", 
              "label": "Unmanned Underwater Vehicle Surface Station", 
              "id": "UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
              "graphic": "25216500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "66", 
              "label": "Antisubmarine Warfare (ASW) Unmanned Underwater Vehicle Surface Station", 
              "id": "ASW_UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
              "graphic": "25216600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "67", 
              "label": "Mine Warfare Unmanned Underwater Vehicle Surface Station", 
              "id": "MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE_SURFACE_STATION", 
              "graphic": "25216700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "68", 
              "label": "Remote Multi-Mission Vehicle Mine Warfare Unmanned Underwater", 
              "id": "REMOTE_MULTI_MISSION_VEHICLE_MINE_WARFARE_UNMANNED_UNDERWATER", 
              "graphic": "25216800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "69", 
              "label": "Surface Warfare Mine Warfare Unmanned Underwater Vehicle", 
              "id": "SURFACE_WARFARE_MINE_WARFARE_UNMANNED_UNDERWATER_VEHICLE", 
              "graphic": "25216900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "70", 
              "label": "Shore Control Station", 
              "id": "SHORE_CONTROL_STATION", 
              "graphic": "25217000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "71", 
              "label": "General Route", 
              "id": "GENERAL_ROUTE", 
              "graphic": "25217100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "72", 
              "label": "Diversion Route", 
              "id": "DIVERSION_ROUTE", 
              "graphic": "25217200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "73", 
              "label": "Position and Intended Movement (PIM) Route", 
              "id": "PIM_ROUTE", 
              "graphic": "25217300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "74", 
              "label": "Picket Route", 
              "id": "PICKET_ROUTE", 
              "graphic": "25217400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "75", 
              "label": "Point R Route", 
              "id": "POINT_R_ROUTE", 
              "graphic": "25217500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "76", 
              "label": "Rendezvous Route", 
              "id": "RENDEZVOUS_ROUTE", 
              "graphic": "25217600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "77", 
              "label": "Waypoint Route", 
              "id": "WAYPOINT_ROUTE", 
              "graphic": "25217700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "78", 
              "label": "Clutter-Stationary or Cease Reporting", 
              "id": "CLUTTER_STATIONARY_CEASE_REPORTING", 
              "graphic": "25217800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "79", 
              "label": "Tentative or Provisional Track", 
              "id": "TENTATIVE_PROVISIONAL_TRACK", 
              "graphic": "25217900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "80", 
              "label": "Distressed Vessel", 
              "id": "DISTRESSED_VESSEL", 
              "graphic": "25218000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "81", 
              "label": "Ditched Aircraft/Downed Aircraft", 
              "id": "DITCHED_AIRCRAFT_DOWNED_AIRCRAFT", 
              "graphic": "25218100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "82", 
              "label": "Person in Water/Bailout", 
              "id": "PERSON_IN_WATER_BAILOUT", 
              "graphic": "25218200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "83", 
              "label": "Iceberg", 
              "id": "ICEBERG", 
              "graphic": "25218300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "84", 
              "label": "Navigational", 
              "id": "NAVIGATIONAL", 
              "graphic": "25218400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "85", 
              "label": "Oil Rig", 
              "id": "OIL_RIG", 
              "graphic": "25218500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "86", 
              "label": "Sea Mine-Like", 
              "id": "SEA_MINE_LIKE", 
              "graphic": "25218600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "87", 
              "label": "Bottom Return/Non-Mine Like Bottom Object (NOMBO)", 
              "id": "BOTTOM_RETURN_NOMBO", 
              "graphic": "25218700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "88", 
              "label": "Bottom Return/Non-Mine Like Bottom Object (NOMBO)/Installation Manmade", 
              "id": "BOTTOM_RETURN_NOMBO_INSTALLATION_MANMADE", 
              "graphic": "25218800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "89", 
              "label": "Marine Life", 
              "id": "MARINE_LIFE", 
              "graphic": "25218900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "90", 
              "label": "Sea Anomaly (Wake-Current-Knuckle)", 
              "id": "SEA_ANOMALY_WAKE_CURRENT_KNUCKLE", 
              "graphic": "25219000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "91", 
              "label": "Bottom Return/Non-MILCO-Wreck-Dangerous", 
              "id": "BOTTOM_RETURN_NON_MILCO_WRECK_DANGEROUS", 
              "graphic": "25219100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "92", 
              "label": "Bottom Return/Non-MILCO-Wreck-Non Dangerous", 
              "id": "BOTTOM_RETURN_NON_MILCO_WRECK_NON_DANGEROUS", 
              "graphic": "25219200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "22", 
          "label": "Maritime Control Lines", 
          "id": "MARITIME_CONTROL_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bearing Line", 
              "id": "BEARING_LINE", 
              "graphic": "25220100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Electronic", 
                  "id": "ELECTRONIC", 
                  "graphic": "25220101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Electronic Warfare (EW)", 
                  "id": "ELECTRONIC_WARFARE_EW", 
                  "graphic": "25220102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Acoustic", 
                  "id": "ACOUSTIC", 
                  "graphic": "25220103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Acoustic (Ambiguous)", 
                  "id": "ACOUSTIC_AMBIGUOUS", 
                  "graphic": "25220104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Torpedo", 
                  "id": "TORPEDO", 
                  "graphic": "25220105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Electro-Optical Intercept", 
                  "id": "ELECTRO_OPTICAL_INTERCEPT", 
                  "graphic": "25220106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Jammer", 
                  "id": "JAMMER", 
                  "graphic": "25220107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Radio Direction Finder (RDF)", 
                  "id": "RADIO_DIRECTION_FINDER_RDF", 
                  "graphic": "25220108.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "23", 
          "label": "Deception", 
          "id": "DECEPTION", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Decoy/Dummy", 
              "id": "DECOY_DUMMY", 
              "graphic": "25230100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Decoy/Dummy/Feint", 
              "id": "DECOY_DUMMY_FEINT", 
              "graphic": "25230200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "24", 
          "label": "Fires Areas", 
          "id": "FIRES_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Airspace Coordination Area", 
              "id": "AIRSPACE_COORDINATION_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "ACA_IRREGULAR", 
                  "graphic": "25240101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "ACA_RECTANGULAR", 
                  "graphic": "25240102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "ACA_CIRCULAR", 
                  "graphic": "25240103.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Free Fire Area", 
              "id": "FREE_FIRE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "FFA_IRREGULAR", 
                  "graphic": "25240201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "FFA_RECTANGULAR", 
                  "graphic": "25240202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "FFA_CIRCULAR", 
                  "graphic": "25240203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "No Fire Area", 
              "id": "NO_FIRE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "NFA_IRREGULAR", 
                  "graphic": "25240301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "NFA_RECTANGULAR", 
                  "graphic": "25240302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "NFA_CIRCULAR", 
                  "graphic": "25240303.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Restricted Fire Area", 
              "id": "RESTRICTED_FIRE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "RFA_IRREGULAR", 
                  "graphic": "25240401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "RFA_RECTANGULAR", 
                  "graphic": "25240402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "RFA_CIRCULAR", 
                  "graphic": "25240403.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Position Area For Artillery (PAA)", 
              "id": "POSITION_AREA_FOR_ARTILLERY_PAA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rectangular", 
                  "id": "PAA_RECTANGULAR", 
                  "graphic": "25240501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Circular", 
                  "id": "PAA_CIRCULAR", 
                  "graphic": "25240502.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Point Targets", 
              "id": "POINT_TARGETS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Point or Single Target", 
                  "id": "POINT_SINGLE_TARGET", 
                  "graphic": "25240601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Nuclear Target", 
                  "id": "NUCLEAR_TARGET", 
                  "graphic": "25240602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Target-Recorded", 
                  "id": "TARGET_RECORDED", 
                  "graphic": "25240603.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Linear Targets", 
              "id": "LINEAR_TARGETS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Linear Target", 
                  "id": "LINEAR_TARGET", 
                  "graphic": "25240701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Linear Smoke Target", 
                  "id": "LINEAR_SMOKE_TARGET", 
                  "graphic": "25240702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Final Protective Fire (FPF)", 
                  "id": "FINAL_PROTECTIVE_FIRE_FPF", 
                  "graphic": "25240703.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Area Targets", 
              "id": "AREA_TARGETS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Area Target", 
                  "id": "AREA_TARGET", 
                  "graphic": "25240801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular Target", 
                  "id": "RECTANGULAR_TARGET", 
                  "graphic": "25240802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular Target", 
                  "id": "CIRCULAR_TARGET", 
                  "graphic": "25240803.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Rectangular Target - Single Target", 
                  "id": "RECTANGULAR_TARGET_SINGLE_TARGET", 
                  "graphic": "25240804.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Series of Targets", 
                  "id": "SERIES_GROUP_TARGETS", 
                  "graphic": "25240805.a.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Smoke Target", 
                  "id": "SMOKE_TARGET", 
                  "graphic": "25240806.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Smoke Planned or On Order", 
                  "id": "SMOKE_PLANNED_ON_ORDER", 
                  "graphic": "25240807.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Bomb Area", 
                  "id": "BOMB_AREA", 
                  "graphic": "25240808.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Fire Support Station", 
              "id": "FIRE_SUPPORT_STATION", 
              "graphic": "25240900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Fire Support Area", 
              "id": "FIRE_SUPPORT_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "FSA_IRREGULAR", 
                  "graphic": "25241001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "FSA_RECTANGULAR", 
                  "graphic": "25241002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "FSA_CIRCULAR", 
                  "graphic": "25241003.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Artillery Target Intelligence Zone", 
              "id": "ARTILLERY_TARGET_INTELLIGENCE_ZONE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "ATI_IRREGULAR", 
                  "graphic": "25241101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "ATI_RECTANGULAR", 
                  "graphic": "25241102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "ATI_CIRCULAR", 
                  "graphic": "25241103.svg"
                }
              ]
            }, 
            {
              "digits": "12", 
              "label": "Call for Fire Area", 
              "id": "CALL_FOR_FIRE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "CFFZ_IRREGULAR", 
                  "graphic": "25241201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "CFFZ_RECTANGULAR", 
                  "graphic": "25241202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "CFFZ_CIRCULAR", 
                  "graphic": "25241203.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Censor Zone", 
              "id": "CENSOR_ZONE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "CENSOR_IRREGULAR", 
                  "graphic": "25241301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "CENSOR_RECTANGULAR", 
                  "graphic": "25241302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "CENSOR_CIRCULAR", 
                  "graphic": "25241303.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Critical Friendly Zone", 
              "id": "CRITICAL_FRIENDLY_ZONE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "CFZ_IRREGULAR", 
                  "graphic": "25241401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "CFZ_RECTANGULAR", 
                  "graphic": "25241402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "CFZ_CIRCULAR", 
                  "graphic": "25241403.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Dead Space Area", 
              "id": "DEAD_SPACE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "DA_IRREGULAR", 
                  "graphic": "25241501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "DA_RECTANGULAR", 
                  "graphic": "25241502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "DA_CIRCULAR", 
                  "graphic": "25241503.svg"
                }
              ]
            }, 
            {
              "digits": "16", 
              "label": "Sensor Zone", 
              "id": "SENSOR_ZONE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "SENSOR_ZONE_IRREGULAR", 
                  "graphic": "25241601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "SENSOR_ZONE_RECTANGULAR", 
                  "graphic": "25241602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "SENSOR_ZONE_CIRCULAR", 
                  "graphic": "25241603.svg"
                }
              ]
            }, 
            {
              "digits": "17", 
              "label": "Target Build-up Area", 
              "id": "TARGET_BUILD_UP_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "TBA_IRREGULAR", 
                  "graphic": "25241701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "TBA_RECTANGULAR", 
                  "graphic": "25241702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "TBA_CIRCULAR", 
                  "graphic": "25241703.svg"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "Target Value Area", 
              "id": "TARGET_VALUE_AREA", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "TVAR_IRREGULAR", 
                  "graphic": "25241801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "TVAR_RECTANGULAR", 
                  "graphic": "25241802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "TVAR_CIRCULAR", 
                  "graphic": "25241803.svg"
                }
              ]
            }, 
            {
              "digits": "19", 
              "label": "Zone of Responsibility", 
              "id": "ZONE_OF_RESPONSIBILITY", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular", 
                  "id": "ZOR_IRREGULAR", 
                  "graphic": "25241901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular", 
                  "id": "ZOR_RECTANGULAR", 
                  "graphic": "25241902.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular", 
                  "id": "ZOR_CIRCULAR", 
                  "graphic": "25241903.svg"
                }
              ]
            }, 
            {
              "digits": "20", 
              "label": "Terminally Guided Munition Footprint (TGMF)", 
              "id": "TERMINALLY_GUIDED_MUNITION_FOOTPRINT_TGMF", 
              "graphic": "25242000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Weapon/Sensor Range fan-Circular", 
              "id": "WEAPON_SENSOR_RANGE_FAN_CIRCULAR", 
              "graphic": "25242100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Weapon/Sensor Range fan-Sector", 
              "id": "WEAPON_SENSOR_RANGE_FAN_SECTOR", 
              "graphic": "25242200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "23", 
              "label": "Kill Box", 
              "id": "KILL_BOX", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Irregular-Blue", 
                  "id": "BKB_IRREGULAR_BLUE", 
                  "graphic": "25242301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rectangular-Blue", 
                  "id": "BKB_RECTANGULAR_BLUE", 
                  "graphic": "25242302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Circular-Blue", 
                  "id": "BKB_CIRCULAR_BLUE", 
                  "graphic": "25242303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Irregular-Purple", 
                  "id": "PKB_IRREGULAR_PURPLE", 
                  "graphic": "25242304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Rectangular-Purple", 
                  "id": "PKB_RECTANGULAR_PURPLE", 
                  "graphic": "25242305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Circular-Purple", 
                  "id": "PKB_CIRCULAR_PURPLE", 
                  "graphic": "25242306.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "25", 
          "label": "Fires Points", 
          "id": "FIRES_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Firing Point", 
              "id": "FIRING_POINT", 
              "graphic": "25250100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Hide Point", 
              "id": "HIDE_POINT", 
              "graphic": "25250200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Launch Point", 
              "id": "LAUNCH_POINT", 
              "graphic": "25250300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Reload Point", 
              "id": "RELOAD_POINT", 
              "graphic": "25250400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Survey Control Point", 
              "id": "SURVEY_CONTROL_POINT", 
              "graphic": "25250500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "26", 
          "label": "Fire Lines", 
          "id": "FIRE_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Fire Support Coordination Line (FSCL)", 
              "id": "FIRE_SUPPORT_COORDINATION_LINE_FSCL", 
              "graphic": "25260100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Coordinated Fire Line (CFL)", 
              "id": "COORDINATED_FIRE_LINE_CFL", 
              "graphic": "25260200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "No Fire Line", 
              "id": "NO_FIRE_LINE", 
              "graphic": "25260300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Battlefield Coordination Line", 
              "id": "BATTLEFIELD_COORDINATION_LINE", 
              "graphic": "25260400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Restrictive Fire Line", 
              "id": "RESTRICTIVE_FIRE_LINE", 
              "graphic": "25260500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Munition Flight Path", 
              "id": "MUNITION_FLIGHT_PATH", 
              "graphic": "25260600.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "27", 
          "label": "Protection Areas", 
          "id": "PROTECTION_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Obstacle Belt", 
              "id": "OBSTACLE_BELT", 
              "graphic": "25270100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Obstacle Zone", 
              "id": "OBSTACLE_ZONE", 
              "graphic": "25270200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Obstacle Free Zone", 
              "id": "OBSTACLE_FREE_ZONE", 
              "graphic": "25270300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Obstacle Restricted Zone", 
              "id": "OBSTACLE_RESTRICTED_ZONE", 
              "graphic": "25270400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Obstacle Effects", 
              "id": "OBSTACLE_EFFECTS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Block", 
                  "id": "BLOCK", 
                  "graphic": "25270501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Disrupt", 
                  "id": "DISRUPT", 
                  "graphic": "25270502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Fix", 
                  "id": "FIX", 
                  "graphic": "25270503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Turn", 
                  "id": "TURN", 
                  "graphic": "25270504.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Obstacle Bypass", 
              "id": "OBSTACLE_BYPASS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Easy", 
                  "id": "OBSTACLE_BYPASS_EASY", 
                  "graphic": "25270601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Difficult", 
                  "id": "OBSTACLE_BYPASS_DIFFICULT", 
                  "graphic": "25270602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Impossible", 
                  "id": "OBSTACLE_BYPASS_IMPOSSIBLE", 
                  "graphic": "25270603.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Minefield", 
              "id": "MINEFIELD", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Completed", 
                  "id": "MINEFIELD_COMPLETED", 
                  "graphic": "25270701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Planned", 
                  "id": "MINEFIELD_PLANNED", 
                  "graphic": "25270702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Known Enemy", 
                  "id": "MINEFIELD_KNOWN_ENEMY", 
                  "graphic": "25270703.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Suspected or Templated Enemy", 
                  "id": "MINEFIELD_SUSPECTED_OR_TEMPLATED_ENEMY", 
                  "graphic": "25270704.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Dummy", 
                  "id": "MINEFIELD_DUMMY", 
                  "graphic": "25270705.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Dummy Minefield, Dymanic", 
                  "id": "MINEFIELD_DUMMY_DYMANIC", 
                  "graphic": "25270706.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Dynamic Depiction", 
                  "id": "MINEFIELD_DYNAMIC_DEPICTION", 
                  "graphic": "25270707.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Mined Area", 
              "id": "MINED_AREA", 
              "graphic": "25270800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Decoy Mined Area", 
              "id": "DECOY_MINED_AREA", 
              "graphic": "25270900.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fenced", 
                  "id": "FENCED", 
                  "graphic": "25270901.svg"
                }
              ]
            }, 
            {
              "digits": "10", 
              "label": "Unexploded Explosive Ordnance (UXO) Area", 
              "id": "UXO_AREA", 
              "graphic": "25271000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Bridge or Gap", 
              "id": "BRIDGE_OR_GAP", 
              "graphic": "25271100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Roadblocks, Craters and Blown Bridges", 
              "id": "ROADBLOCKS_CRATERS_BLOWN_BRIDGES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Planned", 
                  "id": "PLANNED", 
                  "graphic": "25271201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Explosives-State of Readiness 1 (Safe)", 
                  "id": "EXPLOSIVES_STATE_OF_READINESS_1", 
                  "graphic": "25271202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Explosives-State of Readiness 2 (armed but passable)", 
                  "id": "EXPLOSIVES_STATE_OF_READINESS_2", 
                  "graphic": "25271203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Roadblock Complete (Executed)", 
                  "id": "ROADBLOCK_COMPLETE_EXECUTED", 
                  "graphic": "25271204.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Assault Crossing", 
              "id": "ASSAULT_CROSSING", 
              "graphic": "25271300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Bridge", 
              "id": "BRIDGE", 
              "graphic": "25271400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Ford Easy", 
              "id": "FORD_EASY", 
              "graphic": "25271500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Ford Difficult", 
              "id": "FORD_DIFFICULT", 
              "graphic": "25271600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Biological Contaminated Area", 
              "id": "BIOLOGICAL_CONTAMINATED_AREA", 
              "graphic": "25271700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "BIO_TOXIC_INDUSTRIAL_MATERIAL", 
                  "graphic": "25271701.svg"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "Chemical Contaminated Area", 
              "id": "CHEMICAL_CONTAMINATED_AREA", 
              "graphic": "25271800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "CHEM_TOXIC_INDUSTRIAL_MATERIAL", 
                  "graphic": "25271801.svg"
                }
              ]
            }, 
            {
              "digits": "19", 
              "label": "Nuclear Contaminated Area", 
              "id": "NUCLEAR_CONTAMINATED_AREA", 
              "graphic": "25271900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Radiological Contaminated Area", 
              "id": "RADIOLOGICAL_CONTAMINATED_AREA", 
              "graphic": "25272000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "RAD_TOXIC_INDUSTRIAL_MATERIAL", 
                  "graphic": "25272001.svg"
                }
              ]
            }, 
            {
              "digits": "21", 
              "label": "Minimum Safe Distance Zone", 
              "id": "MINIMUM_SAFE_DISTANCE_ZONE", 
              "graphic": "25272100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Radiation Dose Rate Contour Lines", 
              "id": "RADIATION_DOSE_RATE_CONTOUR_LINES", 
              "graphic": "25272200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "28", 
          "label": "Protection Points", 
          "id": "PROTECTION_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Abatis", 
              "id": "ABATIS", 
              "graphic": "25280100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Antipersonnel Mine", 
              "id": "ANTIPERSONNEL_MINE", 
              "graphic": "25280200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Antipersonnel Mine with Directional Effects", 
                  "id": "ANTIPERSONNEL_MINE_WITH_DIRECTIONAL_EFFECTS", 
                  "graphic": "25280201.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Antitank Mine", 
              "id": "ANTITANK_MINE", 
              "graphic": "25280300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Antitank Mine with Anti-handling Device", 
              "id": "ANTITANK_MINE_ANTIHANDLING", 
              "graphic": "25280400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Wide Area Antitank Mine", 
              "id": "WIDE_AREA_ANTITANK_MINE", 
              "graphic": "25280500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Unspecified Mine", 
              "id": "UNSPECIFIED_MINE", 
              "graphic": "25280600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Booby Trap", 
              "id": "BOOBY_TRAP", 
              "graphic": "25280700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Engineer Regulating Point", 
              "id": "ENGINEER_REGULATING_POINT", 
              "graphic": "25280800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Shelter", 
              "id": "SHELTER", 
              "graphic": "25280900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Shelter Above Ground", 
              "id": "SHELTER_ABOVE_GROUND", 
              "graphic": "25281000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Below Ground Shelter", 
              "id": "BELOW_GROUND_SHELTER", 
              "graphic": "25281100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Fort", 
              "id": "FORT", 
              "graphic": "25281200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Chemical Event", 
              "id": "CHEMICAL_EVENT", 
              "graphic": "25281300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "CHEM_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                  "graphic": "25281301.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Biological Event", 
              "id": "BIOLOGICAL_EVENT", 
              "graphic": "25281400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "BIO_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                  "graphic": "25281401.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Nuclear Event", 
              "id": "NUCLEAR_EVENT", 
              "graphic": "25281500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Nuclear Fallout Producing Event", 
              "id": "NUCLEAR_FALLOUT_PRODUCING_EVENT", 
              "graphic": "25281600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Radiological", 
              "id": "RADIOLOGICAL", 
              "graphic": "25281700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Toxic Industrial Material", 
                  "id": "RAD_TOXIC_INDUSTRIAL_MATERIAL_POINT", 
                  "graphic": "25281701.svg"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "General Decontamination Point/Site", 
              "id": "GENERAL_DECONTAMINATION_POINT_SITE", 
              "graphic": "25281800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Alternate", 
                  "id": "DECON_ALTERNATE", 
                  "graphic": "25281801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Equipment", 
                  "id": "DECON_EQUIPMENT", 
                  "graphic": "25281802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Troop", 
                  "id": "DECON_TROOP", 
                  "graphic": "25281803.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Equipment/Troop", 
                  "id": "DECON_EQUIPMENT_TROOP", 
                  "graphic": "25281804.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Operational", 
                  "id": "DECON_OPERATIONAL", 
                  "graphic": "25281805.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Thorough", 
                  "id": "DECON_THOROUGH", 
                  "graphic": "25281806.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Main Equipment", 
                  "id": "DECON_MAIN_EQUIPMENT", 
                  "graphic": "25281807.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Forward Troop", 
                  "id": "DECON_FORWARD_TROOP", 
                  "graphic": "25281808.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Wounded Personnel", 
                  "id": "DECON_WOUNDED_PERSONNEL", 
                  "graphic": "25281809.svg"
                }
              ]
            }, 
            {
              "digits": "19", 
              "label": "Tetrahedrons, Dragons Teeth, and Other Similar Obstacles", 
              "id": "OTHER_SIMILAR_OBSTACLES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fixed and Prefabricated", 
                  "id": "FIXED_PREFABRICATED", 
                  "graphic": "25281901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Movable", 
                  "id": "MOVABLE", 
                  "graphic": "25281902.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Movable and Prefabricated", 
                  "id": "MOVABLE_PREFABRICATED", 
                  "graphic": "25281903.svg"
                }
              ]
            }, 
            {
              "digits": "20", 
              "label": "Vertical Obstructions", 
              "id": "VERTICAL_OBSTRUCTIONS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Tower-Low", 
                  "id": "TOWER_LOW", 
                  "graphic": "25282001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Tower-High", 
                  "id": "TOWER_HIGH", 
                  "graphic": "25282002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Overhead Wire", 
                  "id": "OVERHEAD_WIRE", 
                  "graphic": "25282003.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "29", 
          "label": "Protection Lines", 
          "id": "PROTECTION_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Obstacle Line", 
              "id": "OBSTACLE_LINE", 
              "graphic": "25290100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Antitank Obstacles", 
              "id": "ANTITANK_OBSTACLES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Under Construction", 
                  "id": "AT_UNDER_CONSTRUCTION", 
                  "graphic": "25290201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Completed", 
                  "id": "AT_COMPLETED", 
                  "graphic": "25290202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Reinforced-with Antitank Mines", 
                  "id": "AT_REINFORCED_WITH_MINES", 
                  "graphic": "25290203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Antitank Wall", 
                  "id": "AT_ANTITANK_WALL", 
                  "graphic": "25290204.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Wire Obstacles", 
              "id": "WIRE_OBSTACLES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Unspecified Wire", 
                  "id": "UNSPECIFIED_WIRE", 
                  "graphic": "25290301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Single Fence Wire", 
                  "id": "SINGLE_FENCE_WIRE", 
                  "graphic": "25290302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Double Fence Wire", 
                  "id": "DOUBLE_FENCE_WIRE", 
                  "graphic": "25290303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Double Apron Fence", 
                  "id": "DOUBLE_APRON_FENCE", 
                  "graphic": "25290304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Low Wire Fence", 
                  "id": "LOW_WIRE_FENCE", 
                  "graphic": "25290305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "High Wire Fence", 
                  "id": "HIGH_WIRE_FENCE", 
                  "graphic": "25290306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Single Concertina", 
                  "id": "SINGLE_CONCERTINA", 
                  "graphic": "25290307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Double Strand Concertina", 
                  "id": "DOUBLE_STRAND_CONCERTINA", 
                  "graphic": "25290308.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Triple Strand Concertina", 
                  "id": "TRIPLE_STRAND_CONCERTINA", 
                  "graphic": "25290309.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Mine Cluster", 
              "id": "MINE_CLUSTER", 
              "graphic": "25290400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Trip Wire", 
              "id": "TRIP_WIRE", 
              "graphic": "25290500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Lane", 
              "id": "LANE", 
              "graphic": "25290600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Ferry", 
              "id": "FERRY", 
              "graphic": "25290700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Raft Site", 
              "id": "RAFT_SITE", 
              "graphic": "25290800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Fortified Line", 
              "id": "FORTIFIED_LINE", 
              "graphic": "25290900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Fortified Position", 
              "id": "FORTIFIED_POSITION", 
              "graphic": "25291000.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "30", 
          "label": "Intelligence Lines", 
          "id": "INTELLIGENCE_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Intelligence Coordination Line", 
              "id": "INTELLIGENCE_COORDINATION_LINE", 
              "graphic": "25300100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "31", 
          "label": "Sustainment Areas", 
          "id": "SUSTAINMENT_AREAS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Detainee Holding Area", 
              "id": "DETAINEE_HOLDING_AREA", 
              "graphic": "25310100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Enemy Prisoner of War Holding Area", 
              "id": "EPW_HOLDING_AREA", 
              "graphic": "25310200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Forward Arming and Refueling Point", 
              "id": "FARP", 
              "graphic": "25310300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Refugee Holding Area", 
              "id": "REFUGEE_HOLDING_AREA", 
              "graphic": "25310400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Regimental Support Area", 
              "id": "REGIMENTAL_SUPPORT_AREA", 
              "graphic": "25310500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Brigade Support Area", 
              "id": "BRIGADE_SUPPORT_AREA", 
              "graphic": "25310600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Division Support Area", 
              "id": "DIVISION_SUPPORT_AREA", 
              "graphic": "25310700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "32", 
          "label": "Sustainment Points", 
          "id": "SUSTAINMENT_POINTS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Ambulance Exchange Point", 
              "id": "AMBULANCE_EXCHANGE_POINT", 
              "graphic": "25320100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Ammunition Supply Point", 
              "id": "AMMUNITION_SUPPLY_POINT", 
              "graphic": "25320200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Ammunition Transfer Point", 
              "id": "AMMUNITION_TRANSFER_POINT", 
              "graphic": "25320300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Cannibalization Point", 
              "id": "CANNIBALIZATION_POINT", 
              "graphic": "25320400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Casualty Collection Point", 
              "id": "CASUALTY_COLLECTION_POINT", 
              "graphic": "25320500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Civilian Collection Point", 
              "id": "CIVILIAN_COLLECTION_POINT", 
              "graphic": "25320600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Detainee Collection Point", 
              "id": "DETAINEE_COLLECTION_POINT", 
              "graphic": "25320700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Enemy Prisoner of War Collection Point", 
              "id": "EPW_COLLECTION_POINT", 
              "graphic": "25320800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Logistics Release Point", 
              "id": "LOGISTICS_RELEASE_POINT", 
              "graphic": "25320900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Maintenance Collection Point (MCP)", 
              "id": "MAINTENANCE_COLLECTION_POINT_MCP", 
              "graphic": "25321000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Medical Evacuation (MEDEVAC) Pick-up Point", 
              "id": "MEDEVAC_PICKUP_POINT", 
              "graphic": "25321100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Rearm-Refuel and Resupply Point (R3P)", 
              "id": "REARM_REFUEL_RESUPPLY_POINT_R3P", 
              "graphic": "25321200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Refuel on the Move (ROM) Point", 
              "id": "REFUEL_ON_THE_MOVE_ROM_POINT", 
              "graphic": "25321300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Traffic Control Post (TCP)", 
              "id": "TRAFFIC_CONTROL_POST_TCP", 
              "graphic": "25321400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Trailer Transfer Point (TTP)", 
              "id": "TRAILER_TRANSFER_POINT_TTP", 
              "graphic": "25321500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Unit Maintenance Collection Point (UMCP)", 
              "id": "UNIT_MAINTENANCE_COLLECTION_POINT_UMCP", 
              "graphic": "25321600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "General Supply Point", 
              "id": "GENERAL_SUPPLY_POINT", 
              "graphic": "25321700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "NATO Class I Supply Point", 
                  "id": "NATO_CLASS_1_SUPPLY_POINT", 
                  "graphic": "25321701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "NATO Class II Supply Point", 
                  "id": "NATO_CLASS_2_SUPPLY_POINT", 
                  "graphic": "25321702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "NATO Class III Supply Point", 
                  "id": "NATO_CLASS_3_SUPPLY_POINT", 
                  "graphic": "25321703.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "NATO Class IV Supply Point", 
                  "id": "NATO_CLASS_4_SUPPLY_POINT", 
                  "graphic": "25321704.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "NATO Class V Supply Point", 
                  "id": "NATO_CLASS_5_SUPPLY_POINT", 
                  "graphic": "25321705.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "NATO Multiple Class Supply Point", 
                  "id": "NATO_MULTIPLE_CLASS_SUPPLY_POINT", 
                  "graphic": "25321706.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "US Class I Supply Point", 
                  "id": "US_CLASS_01_SUPPLY_POINT", 
                  "graphic": "25321707.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "US Class II Supply Point", 
                  "id": "US_CLASS_02_SUPPLY_POINT", 
                  "graphic": "25321708.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "US Class III Supply Point", 
                  "id": "US_CLASS_03_SUPPLY_POINT", 
                  "graphic": "25321709.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "US Class IV Supply Point", 
                  "id": "US_CLASS_04_SUPPLY_POINT", 
                  "graphic": "25321710.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "US Class V Supply Point", 
                  "id": "US_CLASS_05_SUPPLY_POINT", 
                  "graphic": "25321711.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "US Class VI Supply Point", 
                  "id": "US_CLASS_06_SUPPLY_POINT", 
                  "graphic": "25321712.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "US Class VII Supply Point", 
                  "id": "US_CLASS_07_SUPPLY_POINT", 
                  "graphic": "25321713.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "US Class VIII Supply Point", 
                  "id": "US_CLASS_08_SUPPLY_POINT", 
                  "graphic": "25321714.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "US Class IX Supply Point", 
                  "id": "US_CLASS_09_SUPPLY_POINT", 
                  "graphic": "25321715.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "US Class X Supply Point", 
                  "id": "US_CLASS_10_SUPPLY_POINT", 
                  "graphic": "25321716.svg"
                }
              ]
            }, 
            {
              "digits": "18", 
              "label": "Medical Supply Point", 
              "id": "MEDICAL_SUPPLY_POINT", 
              "graphic": "25321800.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "33", 
          "label": "Sustainment Lines", 
          "id": "SUSTAINMENT_LINES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Moving Convoy", 
              "id": "MOVING_CONVOY", 
              "graphic": "25330100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Halted Convoy", 
              "id": "HALTED_CONVOY", 
              "graphic": "25330200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Main Supply Route", 
              "id": "MAIN_SUPPLY_ROUTE", 
              "graphic": "25330300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "One Way Traffic", 
                  "id": "MSR_ONE_WAY_TRAFFIC", 
                  "graphic": "25330301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Two Way Traffic", 
                  "id": "MSR_TWO_WAY_TRAFFIC", 
                  "graphic": "25330302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Alternating Traffic", 
                  "id": "MSR_ALTERNATING_TRAFFIC", 
                  "graphic": "25330303.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Alternate Supply Route", 
              "id": "ALTERNATE_SUPPLY_ROUTE", 
              "graphic": "25330400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "One Way Traffic", 
                  "id": "ASR_ONE_WAY_TRAFFIC", 
                  "graphic": "25330401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Two Way Traffic", 
                  "id": "ASR_TWO_WAY_TRAFFIC", 
                  "graphic": "25330402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Alternating Traffic", 
                  "id": "ASR_ALTERNATING_TRAFFIC", 
                  "graphic": "25330403.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "34", 
          "label": "Mission Tasks", 
          "id": "MISSION_TASKS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Block", 
              "id": "TMT_BLOCK", 
              "graphic": "25340100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Breach", 
              "id": "TMT_BREACH", 
              "graphic": "25340200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Bypass", 
              "id": "TMT_BYPASS", 
              "graphic": "25340300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Canalize", 
              "id": "TMT_CANALIZE", 
              "graphic": "25340400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Clear", 
              "id": "TMT_CLEAR", 
              "graphic": "25340500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Counterattack", 
              "id": "TMT_COUNTERATTACK", 
              "graphic": "25340600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Counterattack by Fire", 
              "id": "TMT_COUNTERATTACK_BY_FIRE", 
              "graphic": "25340700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Delay", 
              "id": "TMT_DELAY", 
              "graphic": "25340800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Destroy", 
              "id": "TMT_DESTROY", 
              "graphic": "25340900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Disrupt", 
              "id": "TMT_DISTRUPT", 
              "graphic": "25341000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Fix", 
              "id": "TMT_FIX", 
              "graphic": "25341100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Follow and Assume", 
              "id": "TMT_FOLLOW_AND_ASSUME", 
              "graphic": "25341200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "13", 
              "label": "Follow and Support", 
              "id": "TMT_FOLLOW_AND_SUPPORT", 
              "graphic": "25341300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Interdict", 
              "id": "TMT_INTERDICT", 
              "graphic": "25341400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "15", 
              "label": "Isolate", 
              "id": "TMT_ISOLATE", 
              "graphic": "25341500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "16", 
              "label": "Neutralize", 
              "id": "TMT_NEUTRALIZE", 
              "graphic": "25341600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Occupy", 
              "id": "TMT_OCCUPY", 
              "graphic": "25341700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Penetrate", 
              "id": "TMT_PENETRATE", 
              "graphic": "25341800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Relief in Place (RIP)", 
              "id": "TMT_RELIEF_IN_PLACE_RIP", 
              "graphic": "25341900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "20", 
              "label": "Retire/Retirement", 
              "id": "TMT_RETIRE_RETIREMENT", 
              "graphic": "25342000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "21", 
              "label": "Secure", 
              "id": "TMT_SECURE", 
              "graphic": "25342100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "22", 
              "label": "Security", 
              "id": "SECURITY", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Cover", 
                  "id": "TMT_COVER", 
                  "graphic": "25342201.b.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Guard", 
                  "id": "TMT_GUARD", 
                  "graphic": "25342202.b.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Screen", 
                  "id": "TMT_SCREEN", 
                  "graphic": "25342203.b.svg"
                }
              ]
            }, 
            {
              "digits": "23", 
              "label": "Seize", 
              "id": "TMT_SEIZE", 
              "graphic": "25342300.b.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "24", 
              "label": "Withdraw", 
              "id": "TMT_WITHDRAW", 
              "graphic": "25342400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "25", 
              "label": "Withdraw Under Pressure", 
              "id": "TMT_WITHDRAW_UNDER_PRESSURE", 
              "graphic": "25342500.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/ControlMeasures"
      }
    }, 
    {
      "digits": "30", 
      "label": "Sea Surface", 
      "id": "SS_SEA_SURFACE", 
      "dimensionId": "SEA_SURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Military", 
          "id": "MILITARY", 
          "graphic": "30110000.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "12", 
          "label": "Military Combatant", 
          "id": "MILITARY_COMBAT", 
          "graphic": "30120000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Carrier", 
              "id": "CARRIER", 
              "graphic": "30120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Surface Combatant, Line", 
              "id": "SURF_COMBAT_LINE", 
              "graphic": "30120200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Battleship", 
                  "id": "BB", 
                  "graphic": "30120201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Cruiser", 
                  "id": "CA", 
                  "graphic": "30120202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Destroyer", 
                  "id": "DD", 
                  "graphic": "30120203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Frigate", 
                  "id": "FF", 
                  "graphic": "30120204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Corvette", 
                  "id": "CORVETTE", 
                  "graphic": "30120205.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Littoral Combatant Ship", 
                  "id": "LCS", 
                  "graphic": "30120206.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Amphibious Warfare Ship", 
              "id": "AMPHIB_WAR_SHIP", 
              "graphic": "30120300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Amphibious Command Ship", 
                  "id": "ACS", 
                  "graphic": "30120301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Amphibious Assault, Non-specified", 
                  "id": "AMPHIB_ASSAULT_NON", 
                  "graphic": "30120302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Amphibious Assault Ship, General", 
                  "id": "AMPHIB_ASSAULT_GENERAL", 
                  "graphic": "30120303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Amphibious Assault Ship, Multipurpose", 
                  "id": "AMPHIB_ASSAULT_MULT", 
                  "graphic": "30120304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Amphibious Assault Ship, Helicopter", 
                  "id": "AMPHIB_ASSAULT_HELO", 
                  "graphic": "30120305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Amphibious Transport Dock", 
                  "id": "AMPHIB_TRANS_DOCK", 
                  "graphic": "30120306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Landing Ship", 
                  "id": "LANDING_SHIP", 
                  "graphic": "30120307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Landing Craft", 
                  "id": "LANDING_CRAFT", 
                  "graphic": "30120308.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Mine Warfare Ship", 
              "id": "MINE_WARFARE", 
              "graphic": "30120400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Mine Layer", 
                  "id": "MINE_LAYER", 
                  "graphic": "30120401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Mine Sweeper", 
                  "id": "MINE_SWEEPER", 
                  "graphic": "30120402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Mine Sweeper, Drone", 
                  "id": "MINE_SWEEPER_DRONE", 
                  "graphic": "30120403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Mine Hunter", 
                  "id": "MINE_HUNTER", 
                  "graphic": "30120404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Mine Countermeasures", 
                  "id": "MINE_COUNTER", 
                  "graphic": "30120405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Mine Countermeasures, Support Ship", 
                  "id": "MINE_COUNTER_SUPPORT", 
                  "graphic": "30120406.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Patrol Boat", 
              "id": "PATROL_BOAT", 
              "graphic": "30120500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Patrol Craft, Submarine Chaser/Escort, General", 
                  "id": "PATROL_CHASER", 
                  "graphic": "30120501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Patrol Ship, General", 
                  "id": "PATROL_SHIP", 
                  "graphic": "30120502.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Decoy", 
              "id": "DECOY", 
              "graphic": "30120600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Unmanned Surface Water Vehicle (USV)", 
              "id": "USV", 
              "graphic": "30120700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Speedboat", 
              "id": "SPEEDBOAT", 
              "graphic": "30120800.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rigid-Hull Inflatable Boat (RHIB)", 
                  "id": "RHIB", 
                  "graphic": "30120801.svg"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Jet Ski", 
              "id": "JET_SKI", 
              "graphic": "30120900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Navy Task Organization", 
              "id": "NAVY_TASK", 
              "graphic": "30121000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Navy Task Element", 
                  "id": "NAVY_TASK_ELEMENT", 
                  "graphic": "30121001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Navy Task Force", 
                  "id": "NAVY_TASK_FORCE", 
                  "graphic": "30121002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Navy Task Group", 
                  "id": "NAVY_TASK_GROUP", 
                  "graphic": "30121003.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Navy Task Unit", 
                  "id": "NAVY_TASK_UNIT", 
                  "graphic": "30121004.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Convoy", 
                  "id": "CONVOY", 
                  "graphic": "30121005.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Sea-Based X-Band (SBX) Radar", 
              "id": "SEA_BASED_X", 
              "graphic": "30121100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Military Noncombatant", 
          "id": "MILITARY_NON_COMBAT", 
          "graphic": "30130000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Auxiliary Ship", 
              "id": "AUX", 
              "graphic": "30130100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ammunition Ship", 
                  "id": "AMMO_SHIP", 
                  "graphic": "30130101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Naval Stores Ship", 
                  "id": "NAVAL_STORES", 
                  "graphic": "30130102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Auxiliary Flag Ship", 
                  "id": "AUX_FLAG", 
                  "graphic": "30130103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Intelligence Collector", 
                  "id": "INTEL_COLLECTOR", 
                  "graphic": "30130104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Oceanographic Research Ship", 
                  "id": "OCEANO_RESEARCH", 
                  "graphic": "30130105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Survey Ship", 
                  "id": "SURVEY", 
                  "graphic": "30130106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Hospital Ship", 
                  "id": "HOSPITAL", 
                  "graphic": "30130107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Naval Cargo Ship", 
                  "id": "NAVAL_CARGO", 
                  "graphic": "30130108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Combat Support Ship, Fast", 
                  "id": "COMBAT_SUPPORT_FAST", 
                  "graphic": "30130109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Oiler, Replenishment", 
                  "id": "OILER", 
                  "graphic": "30130110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Repair Ship", 
                  "id": "REPAIR", 
                  "graphic": "30130111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Submarine Tender", 
                  "id": "SUB_TENDER", 
                  "graphic": "30130112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Tug, Ocean Going", 
                  "id": "TUG", 
                  "graphic": "30130113.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Service Craft/Yard", 
              "id": "SERVICE_CRAFT", 
              "graphic": "30130200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Barge, Not Self-Propelled", 
                  "id": "BARGE_NON_SELF", 
                  "graphic": "30130201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Barge, Self-Propelled", 
                  "id": "BARGE_SELF", 
                  "graphic": "30130202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Tug, Harbor", 
                  "id": "TUG_HARBOR", 
                  "graphic": "30130203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Launch", 
                  "id": "LAUNCH", 
                  "graphic": "30130204.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Civilian", 
          "id": "CIVILIAN", 
          "graphic": "30140000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Merchant Ship", 
              "id": "CIV_MERCHANT", 
              "graphic": "30140100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Cargo, General", 
                  "id": "CIV_CARGO", 
                  "graphic": "30140101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Container Ship", 
                  "id": "CIV_CONTAINER", 
                  "graphic": "30140102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Dredge", 
                  "id": "CIV_DREDGE", 
                  "graphic": "30140103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Roll On/Roll Off", 
                  "id": "CIV_RORO", 
                  "graphic": "30140104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Ferry", 
                  "id": "CIV_FERRY", 
                  "graphic": "30140105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Heavy Lift", 
                  "id": "CIV_HEAVY_LIFT", 
                  "graphic": "30140106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Hovercraft", 
                  "id": "CIV_HOVERCRAFT", 
                  "graphic": "30140107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Lash Carrier (with Barges)", 
                  "id": "CIV_LASH_CARRIER", 
                  "graphic": "30140108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Oiler/Tanker", 
                  "id": "CIV_OILER_TANKER", 
                  "graphic": "30140109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Passenger", 
                  "id": "CIV_PASSENGER", 
                  "graphic": "30140110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Tug, Ocean Going", 
                  "id": "CIV_TUG", 
                  "graphic": "30140111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Tow", 
                  "id": "CIV_TOW", 
                  "graphic": "30140112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Transport Ship, Hazardous Material", 
                  "id": "CIV_HAZMAT", 
                  "graphic": "30140113.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Junk/Dhow", 
                  "id": "CIV_JUNK", 
                  "graphic": "30140114.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Barge, Not Self-Propelled", 
                  "id": "CIV_BARGE", 
                  "graphic": "30140115.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "Hospital Ship", 
                  "id": "CIV_HOSPITAL", 
                  "graphic": "30140116.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Fishing Vessel", 
              "id": "CIV_FISHING", 
              "graphic": "30140200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Drifter", 
                  "id": "CIV_DRIFTER", 
                  "graphic": "30140201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Trawler", 
                  "id": "CIV_TRAWLER", 
                  "graphic": "30140202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Dredger", 
                  "id": "CIV_DREDGER", 
                  "graphic": "30140203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Law Enforcement Vessel", 
              "id": "CIV_LAW", 
              "graphic": "30140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Leisure Craft, Sailing", 
              "id": "CIV_LEISURE_SAIL", 
              "graphic": "30140400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Leisure Craft, Motorized", 
              "id": "CIV_LEISURE_MOTOR", 
              "graphic": "30140500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rigid-Hull Inflatable Boat (RHIB)", 
                  "id": "CIV_RHIB", 
                  "graphic": "30140501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Speedboat", 
                  "id": "CIV_SPEED", 
                  "graphic": "30140502.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Jet Ski", 
              "id": "CIV_JET_SKI", 
              "graphic": "30140600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Unmanned Surface Water Vehicle (USV)", 
              "id": "CIV_USV", 
              "graphic": "30140700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Own Ship", 
          "id": "OWN_SHIP", 
          "graphic": "30150000.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "16", 
          "label": "Fused Track", 
          "id": "FUSED_TRACK", 
          "graphic": "30160000.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "17", 
          "label": "Manual Track", 
          "id": "MANUAL_TRACK", 
          "graphic": "30170000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Own Ship", 
          "id": "OWN_MOD", 
          "graphic": "30011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Antiair Warfare", 
          "id": "AA_MOD", 
          "graphic": "30021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Antisubmarine Warfare", 
          "id": "ASW_MOD", 
          "graphic": "30031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Escort", 
          "id": "ESCORT_MOD", 
          "graphic": "30041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Electronic Warfare", 
          "id": "EW_MOD", 
          "graphic": "30051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Intelligence, Surveillance, Reconnaissance", 
          "id": "ISR_MOD", 
          "graphic": "30061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Mine Countermeasures", 
          "id": "MCM_MOD", 
          "graphic": "30071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Missile Defense", 
          "id": "MD_MOD", 
          "graphic": "30081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Medical", 
          "id": "MED_MOD", 
          "graphic": "30091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Mine Warfare", 
          "id": "MIW_MOD", 
          "graphic": "30101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Remote Multi-Mission Vehicle (USV-only)", 
          "id": "RMV_MOD", 
          "graphic": "30111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Special Operations Forces (SOF)", 
          "id": "SOF_MOD", 
          "graphic": "30121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Surface Warfare", 
          "id": "SUW_MOD", 
          "graphic": "30131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Ballistic Missile", 
          "id": "BALLISTIC_MOD", 
          "graphic": "30141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Guided Missile", 
          "id": "GUIDED_MOD", 
          "graphic": "30151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Other Guided Missile", 
          "id": "OTHER_GUIDED_MOD", 
          "graphic": "30161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Torpedo", 
          "id": "TORPEDO_MOD", 
          "graphic": "30171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Drone-Equipped", 
          "id": "DRONE_EQUIP_MOD", 
          "graphic": "30181.svg"
        }, 
        {
          "digits": "19", 
          "label": "Helicopter-Equipped/VSTOL", 
          "id": "HELO_EQUIP_MOD", 
          "graphic": "30191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Ballistic Missile Defense, Shooter", 
          "id": "BALLISTIC_DEFENSE_MOD", 
          "graphic": "30201.svg"
        }, 
        {
          "digits": "21", 
          "label": "Ballistic Missile Defense, Long-Range Surveillance and Track (LRST)", 
          "id": "LRST_MOD", 
          "graphic": "30211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Sea-Base X-Band", 
          "id": "SEA_BASED_X_MOD", 
          "graphic": "30221.svg"
        }, 
        {
          "digits": "23", 
          "label": "Hijacking/Hijacked", 
          "id": "HIJACK_MOD", 
          "graphic": "30231.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Nuclear Powered", 
          "id": "NUCLEAR_MOD", 
          "graphic": "30012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Heavy", 
          "id": "HEAVY_MOD", 
          "graphic": "30022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Light", 
          "id": "LIGHT_MOD", 
          "graphic": "30032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Medium", 
          "id": "MEDIUM_MOD", 
          "graphic": "30042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Dock", 
          "id": "DOCK_MOD", 
          "graphic": "30052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Logistics", 
          "id": "LOGISTICS_MOD", 
          "graphic": "30062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Tank", 
          "id": "TANK_MOD", 
          "graphic": "30072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Vehicle", 
          "id": "VEHICLE_MOD", 
          "graphic": "30082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Fast", 
          "id": "FAST_MOD", 
          "graphic": "30092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Air-Cushioned (US)", 
          "id": "COMBINE_GEV_MOD", 
          "graphic": "30102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Air-Cushioned (NATO)", 
          "id": "PANEURO_GEV_MOD", 
          "graphic": "30112.svg"
        }, 
        {
          "digits": "12", 
          "label": "Hydrofoil", 
          "id": "HYDROFOIL_MOD", 
          "graphic": "30122.svg"
        }, 
        {
          "digits": "13", 
          "label": "Autonomous Control", 
          "id": "AUTONOMOUS_MOD", 
          "graphic": "30132.svg"
        }, 
        {
          "digits": "14", 
          "label": "Remotely Piloted", 
          "id": "RPV_MOD", 
          "graphic": "30142.svg"
        }, 
        {
          "digits": "15", 
          "label": "Expendable", 
          "id": "EXPENDABLE_MOD", 
          "graphic": "30152.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/SeaSurface", 
        "modifierTwos": "Appendices/SeaSurface/mod2", 
        "modifierOnes": "Appendices/SeaSurface/mod1"
      }
    }, 
    {
      "digits": "35", 
      "label": "Sea Subsurface", 
      "id": "SS_SEA_SUBSURFACE", 
      "dimensionId": "SEA_SUBSURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Military", 
          "id": "MILITARY", 
          "graphic": "35110000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Submarine", 
              "id": "SUBMARINE", 
              "graphic": "35110100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Submarine-Surfaced", 
                  "id": "SUBMARINE_SURFACED", 
                  "graphic": "35110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Submarine-Snorkeling", 
                  "id": "SUBMARINE_SNORKELING", 
                  "graphic": "35110102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Submarine-Bottomed", 
                  "id": "SUBMARINE_BOTTOMED", 
                  "graphic": "35110103.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Other Submersible", 
              "id": "OTHER_SUBMERSIBLE", 
              "graphic": "35110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Nonsubmarine", 
              "id": "NONSUBMARINE", 
              "graphic": "35110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Autonomous Underwater Vehicle (AUV)/Unmanned Underwater Vehicle (UUV)", 
              "id": "AUV_UUV", 
              "graphic": "35110400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Diver", 
              "id": "DIVER", 
              "graphic": "35110500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Civilian", 
          "id": "CIVILIAN", 
          "graphic": "35120000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Submersible", 
              "id": "SUBMERSIBLE_CIV", 
              "graphic": "35120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Autonomous Underwater Vehicle (AUV)/ Underwater Vehicle (UUV)", 
              "id": "AUV_UUV_CIV", 
              "graphic": "35120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Diver", 
              "id": "DIVER_CIV", 
              "graphic": "35120300.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Weapon", 
          "id": "WEAPON", 
          "graphic": "35130000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Torpedo", 
              "id": "TORPEDO", 
              "graphic": "35130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Improvised Explosive Device (IED)", 
              "id": "IMPROVISED_EXPLOSIVE_DEVICE_IED", 
              "graphic": "35130200.svg", 
              "remarks": "Used with hostile standard identity only.", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Decoy", 
              "id": "DECOY", 
              "graphic": "35130300.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Echo Tracker Classifier (ETC) / Possible Contact (POSCON)", 
          "id": "ECHO_TRACKER_CLASSIFIER_ETC_POSSIBLE_CONTACT_POSCON", 
          "graphic": "35140000.svg", 
          "remarks": "All ETC/POSCON tracks shall have a pending standard identity frame.", 
          "entityTypes": []
        }, 
        {
          "digits": "15", 
          "label": "Fused Track", 
          "id": "FUSED_TRACK", 
          "graphic": "35150000.svg", 
          "remarks": "All fused tracks shall have a pending standard identity frame.", 
          "entityTypes": []
        }, 
        {
          "digits": "16", 
          "label": "Manual Track", 
          "id": "MANUAL_TRACK", 
          "graphic": "35160000.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Antisubmarine Warfare", 
          "id": "ANTISUBMARINE_WARFARE_MOD", 
          "graphic": "35011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Auxiliary", 
          "id": "AUXILIARY_MOD", 
          "graphic": "35021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Command and Control", 
          "id": "COMMAND_AND_CONTROL_MOD", 
          "graphic": "35031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Intelligence Surveillance Reconnaissance", 
          "id": "INTELLIGENCE_SURVEILLANCE_RECONNAISSANCE_MOD", 
          "graphic": "35041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Mine Countermeasures", 
          "id": "MINE_COUNTERMEASURES_MOD", 
          "graphic": "35051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Mine Warfare", 
          "id": "MINE_WARFARE_MOD", 
          "graphic": "35061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Surface Warfare", 
          "id": "SURFACE_WARFARE_MOD", 
          "graphic": "35071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Attack", 
          "id": "ATTACK_MOD", 
          "graphic": "35081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Ballistic Missile", 
          "id": "BALLISTIC_MISSILE_MOD", 
          "graphic": "35091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Guided Missile", 
          "id": "GUIDED_MISSILE_MOD", 
          "graphic": "35101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Other Guided Missile", 
          "id": "OTHER_GUIDED_MISSILE_MOD", 
          "graphic": "35111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Special Operations Forces (SOF)", 
          "id": "SPECIAL_OPERATIONS_FORCES_SOF_MOD", 
          "graphic": "35121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Possible Submarine Low 1", 
          "id": "POSSIBLE_SUBMARINE_LOW_1_MOD", 
          "graphic": "35131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Possible Submarine Low 2", 
          "id": "POSSIBLE_SUBMARINE_LOW_2_MOD", 
          "graphic": "35141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Possible Submarine High 3", 
          "id": "POSSIBLE_SUBMARINE_HIGH_3_MOD", 
          "graphic": "35151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Possible Submarine High 4", 
          "id": "POSSIBLE_SUBMARINE_HIGH_4_MOD", 
          "graphic": "35161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Probable Submarine", 
          "id": "PROBABLE_SUBMARINE_MOD", 
          "graphic": "35171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Certain Submarine", 
          "id": "CERTAIN_SUBMARINE_MOD", 
          "graphic": "35181.svg"
        }, 
        {
          "digits": "19", 
          "label": "Anti-torpedo Torpedo", 
          "id": "ANTI_TORPEDO_TORPEDO_MOD", 
          "graphic": "35191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Hijacking/Highjacked", 
          "id": "HIJACKING_HIGHJACKED_MOD", 
          "graphic": "35201.svg"
        }
      ], 
      "sectorTwoModifiers": [
        {
          "digits": "01", 
          "label": "Air Independent Propulsion", 
          "id": "AIR_INDEPENDENT_PROPULSION_MOD", 
          "graphic": "35012.svg"
        }, 
        {
          "digits": "02", 
          "label": "Diesel Electric General", 
          "id": "DIESEL_ELECTRIC_GENERAL_MOD", 
          "graphic": "35022.svg"
        }, 
        {
          "digits": "03", 
          "label": "Diesel - Type 1", 
          "id": "DIESEL___TYPE_1_MOD", 
          "graphic": "35032.svg"
        }, 
        {
          "digits": "04", 
          "label": "Diesel - Type 2", 
          "id": "DIESEL___TYPE_2_MOD", 
          "graphic": "35042.svg"
        }, 
        {
          "digits": "05", 
          "label": "Diesel - Type 3", 
          "id": "DIESEL___TYPE_3_MOD", 
          "graphic": "35052.svg"
        }, 
        {
          "digits": "06", 
          "label": "Nuclear Powered General", 
          "id": "NUCLEAR_POWERED_GENERAL_MOD", 
          "graphic": "35062.svg"
        }, 
        {
          "digits": "07", 
          "label": "Nuclear - Type 1", 
          "id": "NUCLEAR___TYPE_1_MOD", 
          "graphic": "35072.svg"
        }, 
        {
          "digits": "08", 
          "label": "Nuclear - Type 2", 
          "id": "NUCLEAR___TYPE_2_MOD", 
          "graphic": "35082.svg"
        }, 
        {
          "digits": "09", 
          "label": "Nuclear - Type 3", 
          "id": "NUCLEAR___TYPE_3_MOD", 
          "graphic": "35092.svg"
        }, 
        {
          "digits": "10", 
          "label": "Nuclear - Type 4", 
          "id": "NUCLEAR___TYPE_4_MOD", 
          "graphic": "35102.svg"
        }, 
        {
          "digits": "11", 
          "label": "Nuclear - Type 5", 
          "id": "NUCLEAR___TYPE_5_MOD", 
          "graphic": "35112.svg"
        }, 
        {
          "digits": "12", 
          "label": "Nuclear - Type 6", 
          "id": "NUCLEAR___TYPE_6_MOD", 
          "graphic": "35122.svg"
        }, 
        {
          "digits": "13", 
          "label": "Nuclear - Type 7", 
          "id": "NUCLEAR___TYPE_7_MOD", 
          "graphic": "35132.svg"
        }, 
        {
          "digits": "14", 
          "label": "Autonomous Control", 
          "id": "AUTONOMOUS_CONTROL_MOD", 
          "graphic": "35142.svg"
        }, 
        {
          "digits": "15", 
          "label": "Remotely Piloted", 
          "id": "REMOTELY_PILOTED_MOD", 
          "graphic": "35152.svg"
        }, 
        {
          "digits": "16", 
          "label": "Expendable", 
          "id": "EXPENDABLE_MOD", 
          "graphic": "35162.svg"
        }
      ], 
      "graphicFolder": {
        "entities": "Appendices/SeaSubsurface", 
        "modifierTwos": "Appendices/SeaSubsurface/mod2", 
        "modifierOnes": "Appendices/SeaSubsurface/mod1"
      }
    }, 
    {
      "digits": "36", 
      "label": "Mine Warfare", 
      "id": "SS_MINE_WARFARE", 
      "dimensionId": "SEA_SUBSURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Sea Mine-General", 
          "id": "SEA_MINE_GENERAL", 
          "graphic": "36110000.svg", 
          "alternativeGraphic": "36110000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Sea Mine-Bottom", 
              "id": "SEA_MINE_BOTTOM", 
              "graphic": "36110100.svg", 
              "alternativeGraphic": "36110100_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Sea Mine-Moored", 
              "id": "SEA_MINE_MOORED", 
              "graphic": "36110200.svg", 
              "alternativeGraphic": "36110200_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Sea Mine-Floating", 
              "id": "SEA_MINE_FLOATING", 
              "graphic": "36110300.svg", 
              "alternativeGraphic": "36110300_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Sea Mine-Rising", 
              "id": "SEA_MINE_RISING", 
              "graphic": "36110400.svg", 
              "alternativeGraphic": "36110400_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Sea Mine-Other Position", 
              "id": "SEA_MINE_OTHER_POSITION", 
              "graphic": "36110500.svg", 
              "alternativeGraphic": "36110500_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Kingfisher", 
              "id": "KINGFISHER", 
              "alternativeGraphic": "36110600_a.svg", 
              "remarks": "There is no MEDAL icon associated with this symbol.", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Small Object-Mine-Like", 
              "id": "SMALL_OBJECT_MINE_LIKE", 
              "alternativeGraphic": "36110700_a.svg", 
              "remarks": "There is no MEDAL icon associated with this symbol.", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Exercise Mine-General", 
              "id": "EXERCISE_MINE_GENERAL", 
              "graphic": "36110800.svg", 
              "alternativeGraphic": "36110800_a.svg", 
              "remarks": "Used with exercise frame only", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Exercise Mine-Bottom", 
                  "id": "EXERCISE_MINE_BOTTOM", 
                  "graphic": "36110801.svg", 
                  "alternativeGraphic": "36110801_a.svg", 
                  "remarks": "Used with exercise frame only"
                }, 
                {
                  "digits": "02", 
                  "label": "Exercise Mine-Moored", 
                  "id": "EXERCISE_MINE_MOORED", 
                  "graphic": "36110802.svg", 
                  "alternativeGraphic": "36110802_a.svg", 
                  "remarks": "Used with exercise frame only"
                }, 
                {
                  "digits": "03", 
                  "label": "Exercise Mine-Floating", 
                  "id": "EXERCISE_MINE_FLOATING", 
                  "graphic": "36110803.svg", 
                  "alternativeGraphic": "36110803_a.svg", 
                  "remarks": "Used with exercise frame only"
                }, 
                {
                  "digits": "04", 
                  "label": "Exercise Mine-Rising", 
                  "id": "EXERCISE_MINE_RISING", 
                  "graphic": "36110804.svg", 
                  "alternativeGraphic": "36110804_a.svg", 
                  "remarks": "Used with exercise frame only"
                }
              ]
            }, 
            {
              "digits": "09", 
              "label": "Neutralized Mine-General", 
              "id": "NEUTRALIZED_MINE_GENERAL", 
              "graphic": "36110900.svg", 
              "alternativeGraphic": "36110900_a.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Neutralized Mine-Bottom", 
                  "id": "NEUTRALIZED_MINE_BOTTOM", 
                  "graphic": "36110901.svg", 
                  "alternativeGraphic": "36110901_a.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Neutralized Mine-Moored", 
                  "id": "NEUTRALIZED_MINE_MOORED", 
                  "graphic": "36110902.svg", 
                  "alternativeGraphic": "36110902_a.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Neutralized Mine-Floating", 
                  "id": "NEUTRALIZED_MINE_FLOATING", 
                  "graphic": "36110903.svg", 
                  "alternativeGraphic": "36110903_a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Neutralized Mine-Rising", 
                  "id": "NEUTRALIZED_MINE_RISING", 
                  "graphic": "36110904.svg", 
                  "alternativeGraphic": "36110904_a.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Neutralized Mine-Other Position", 
                  "id": "NEUTRALIZED_MINE_OTHER_POSITION", 
                  "graphic": "36110905.svg", 
                  "alternativeGraphic": "36110905_a.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Unexploded Ordnance", 
          "id": "UNEXPLODED_ORDNANCE", 
          "graphic": "36120000.svg", 
          "alternativeGraphic": "36120000_a.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "13", 
          "label": "Sea Mine Decoy", 
          "id": "SEA_MINE_DECOY", 
          "graphic": "36130000.svg", 
          "alternativeGraphic": "36130000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Sea Mine Decoy-Bottom", 
              "id": "SEA_MINE_DECOY_BOTTOM", 
              "graphic": "36130100.svg", 
              "alternativeGraphic": "36130100_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Sea Mine Decoy-Moored", 
              "id": "SEA_MINE_DECOY_MOORED", 
              "graphic": "36130200.svg", 
              "alternativeGraphic": "36130200_a.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Mine-Like Contact (MILCO)", 
          "id": "MINE_LIKE_CONTACT_MILCO", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "MILCO - General", 
              "id": "MILCO_GENERAL", 
              "graphic": "36140100.svg", 
              "alternativeGraphic": "36140100_a.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "MILCO - General-Confidence-Level 1", 
                  "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_1", 
                  "graphic": "36140101.svg", 
                  "alternativeGraphic": "36140101_a.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "MILCO - General-Confidence-Level 2", 
                  "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_2", 
                  "graphic": "36140102.svg", 
                  "alternativeGraphic": "36140102_a.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "MILCO - General-Confidence-Level 3", 
                  "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_3", 
                  "graphic": "36140103.svg", 
                  "alternativeGraphic": "36140103_a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "MILCO - General-Confidence-Level 4", 
                  "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_4", 
                  "graphic": "36140104.svg", 
                  "alternativeGraphic": "36140104_a.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "MILCO - General-Confidence-Level 5", 
                  "id": "MILCO_GENERAL_CONFIDENCE_LEVEL_5", 
                  "graphic": "36140105.svg", 
                  "alternativeGraphic": "36140105_a.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "MILCO - Bottom", 
              "id": "MILCO_BOTTOM", 
              "graphic": "36140200.svg", 
              "alternativeGraphic": "36140200_a.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "MILCO - Bottom-Confidence-Level 1", 
                  "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_1", 
                  "graphic": "36140201.svg", 
                  "alternativeGraphic": "36140201_a.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "MILCO - Bottom-Confidence-Level 2", 
                  "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_2", 
                  "graphic": "36140202.svg", 
                  "alternativeGraphic": "36140202_a.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "MILCO - Bottom-Confidence-Level 3", 
                  "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_3", 
                  "graphic": "36140203.svg", 
                  "alternativeGraphic": "36140203_a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "MILCO - Bottom-Confidence-Level 4", 
                  "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_4", 
                  "graphic": "36140204.svg", 
                  "alternativeGraphic": "36140204_a.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "MILCO - Bottom-Confidence-Level 5", 
                  "id": "MILCO_BOTTOM_CONFIDENCE_LEVEL_5", 
                  "graphic": "36140205.svg", 
                  "alternativeGraphic": "36140205_a.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "MILCO - Moored", 
              "id": "MILCO_MOORED", 
              "graphic": "36140300.svg", 
              "alternativeGraphic": "36140300_a.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "MILCO - Moored-Confidence-Level 1", 
                  "id": "MILCO_MOORED_CONFIDENCE_LEVEL_1", 
                  "graphic": "36140301.svg", 
                  "alternativeGraphic": "36140301_a.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "MILCO - Moored-Confidence-Level 2", 
                  "id": "MILCO_MOORED_CONFIDENCE_LEVEL_2", 
                  "graphic": "36140302.svg", 
                  "alternativeGraphic": "36140302_a.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "MILCO - Moored-Confidence-Level 3", 
                  "id": "MILCO_MOORED_CONFIDENCE_LEVEL_3", 
                  "graphic": "36140303.svg", 
                  "alternativeGraphic": "36140303_a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "MILCO - Moored-Confidence-Level 4", 
                  "id": "MILCO_MOORED_CONFIDENCE_LEVEL_4", 
                  "graphic": "36140304.svg", 
                  "alternativeGraphic": "36140304_a.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "MILCO - Moored-Confidence-Level 5", 
                  "id": "MILCO_MOORED_CONFIDENCE_LEVEL_5", 
                  "graphic": "36140305.svg", 
                  "alternativeGraphic": "36140305_a.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "MILCO - Floating", 
              "id": "MILCO_FLOATING", 
              "graphic": "36140400.svg", 
              "alternativeGraphic": "36140400_a.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "MILCO - Floating-Confidence-Level 1", 
                  "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_1", 
                  "graphic": "36140401.svg", 
                  "alternativeGraphic": "36140401_a.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "MILCO - Floating-Confidence-Level 2", 
                  "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_2", 
                  "graphic": "36140402.svg", 
                  "alternativeGraphic": "36140402_a.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "MILCO - Floating-Confidence-Level 3", 
                  "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_3", 
                  "graphic": "36140403.svg", 
                  "alternativeGraphic": "36140403_a.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "MILCO - Floating-Confidence-Level 4", 
                  "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_4", 
                  "graphic": "36140404.svg", 
                  "alternativeGraphic": "36140404_a.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "MILCO - Floating-Confidence-Level 5", 
                  "id": "MILCO_FLOATING_CONFIDENCE_LEVEL_5", 
                  "graphic": "36140405.svg", 
                  "alternativeGraphic": "36140405_a.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Mine-Like Echo (MILEC)-General", 
          "id": "MINE_LIKE_ECHO_MILEC_GENERAL", 
          "graphic": "36150000.svg", 
          "alternativeGraphic": "36150000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Mine-Like Echo-Bottom", 
              "id": "MINE_LIKE_ECHO_BOTTOM", 
              "graphic": "36150100.svg", 
              "alternativeGraphic": "36150100_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Mine-Like Echo-Moored", 
              "id": "MINE_LIKE_ECHO_MOORED", 
              "graphic": "36150200.svg", 
              "alternativeGraphic": "36150200_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Mine-Like Echo-Floating", 
              "id": "MINE_LIKE_ECHO_FLOATING", 
              "graphic": "36150300.svg", 
              "alternativeGraphic": "36150300_a.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Negative Reacquisition-General", 
          "id": "NEGATIVE_REACQUISITION_GENERAL", 
          "graphic": "36160000.svg", 
          "alternativeGraphic": "36160000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Negative Reacquisition-Bottom", 
              "id": "NEGATIVE_REACQUISITION_BOTTOM", 
              "graphic": "36160100.svg", 
              "alternativeGraphic": "36160100_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Negative Reacquisition-Moored", 
              "id": "NEGATIVE_REACQUISITION_MOORED", 
              "graphic": "36160200.svg", 
              "alternativeGraphic": "36160200_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Negative Reacquisition-Floating", 
              "id": "NEGATIVE_REACQUISITION_FLOATING", 
              "graphic": "36160300.svg", 
              "alternativeGraphic": "36160300_a.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Obstructor", 
          "id": "OBSTRUCTOR", 
          "graphic": "36170000.svg", 
          "alternativeGraphic": "36170000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Neutralized Obstructor", 
              "id": "NEUTRALIZED_OBSTRUCTOR", 
              "graphic": "36170100.svg", 
              "alternativeGraphic": "36170100_a.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "General Mine Anchor", 
          "id": "GENERAL_MINE_ANCHOR", 
          "graphic": "36180000.svg", 
          "alternativeGraphic": "36180000_a.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "19", 
          "label": "Non-Mine Mine-Like Object (NMLO)-General", 
          "id": "NON_MINE_MINE_LIKE_NMLO_GENERAL", 
          "graphic": "36190000.svg", 
          "alternativeGraphic": "36190000_a.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Non-Mine Mine-Like Object-Bottom", 
              "id": "NON_MINE_MINE_LIKE_BOTTOM", 
              "graphic": "36190100.svg", 
              "alternativeGraphic": "36190100_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Non-Mine Mine-Like Object-Moored", 
              "id": "NON_MINE_MINE_LIKE_MOORED", 
              "graphic": "36190200.svg", 
              "alternativeGraphic": "36190200_a.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Non-Mine Mine-Like Object-Floating", 
              "id": "NON_MINE_MINE_LIKE_FLOATING", 
              "graphic": "36190300.svg", 
              "alternativeGraphic": "36190300_a.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "20", 
          "label": "Environmental Report Location", 
          "id": "ENVIRONMENTAL_REPORT_LOCATION", 
          "graphic": "36200000.svg", 
          "alternativeGraphic": "36200000_a.svg", 
          "entityTypes": []
        }, 
        {
          "digits": "21", 
          "label": "Dive Report Location", 
          "id": "DIVE_REPORT_LOCATION", 
          "graphic": "36210000.svg", 
          "alternativeGraphic": "36210000_a.svg", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SeaSubsurface", 
        "modifierTwos": "Appendices/SeaSubsurface/mod2", 
        "modifierOnes": "Appendices/SeaSubsurface/mod1"
      }
    }, 
    {
      "digits": "40", 
      "label": "Activities", 
      "id": "SS_ACTIVITY", 
      "dimensionId": "ACTIVITY", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Incident", 
          "id": "INCIDENT", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Criminal Activity Incident", 
              "id": "CRIMINAL_ACTIVITY_INCIDENT", 
              "graphic": "40110100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Arrest", 
                  "id": "ARREST", 
                  "graphic": "40110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Arson", 
                  "id": "ARSON", 
                  "graphic": "40110102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Attempted Criminal Activity", 
                  "id": "ATTEMPTED_CRIMINAL_ACTIVITY", 
                  "graphic": "40110103.svg", 
                  "remarks": "APP-6C"
                }, 
                {
                  "digits": "04", 
                  "label": "Drive-by Shooting", 
                  "id": "DRIVE_BY_SHOOTING", 
                  "graphic": "40110104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Drug Related", 
                  "id": "DRUG_RELATED", 
                  "graphic": "40110105.svg", 
                  "remarks": "APP-6C"
                }, 
                {
                  "digits": "06", 
                  "label": "Extortion", 
                  "id": "EXTORTION", 
                  "graphic": "40110106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Graffiti", 
                  "id": "GRAFFITI", 
                  "graphic": "40110107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Killing", 
                  "id": "KILLING", 
                  "graphic": "40110108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Poisoning", 
                  "id": "POISONING", 
                  "graphic": "40110109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Civil Rioting", 
                  "id": "CIVIL_RIOTING", 
                  "graphic": "40110110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Booby Trap", 
                  "id": "BOOBY_TRAP", 
                  "graphic": "40110111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Home Eviction", 
                  "id": "HOME_EVICTION", 
                  "graphic": "40110112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Black Marketing", 
                  "id": "BLACK_MARKETING", 
                  "graphic": "40110113.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Vandalism / Loot / Ransack / Plunder", 
                  "id": "VANDALISM_LOOT_RANSACK_PLUNDER", 
                  "graphic": "40110114.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Jail Break", 
                  "id": "JAIL_BREAK", 
                  "graphic": "40110115.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "Robbery", 
                  "id": "ROBBERY", 
                  "graphic": "40110116.svg"
                }, 
                {
                  "digits": "17", 
                  "label": "Theft", 
                  "id": "THEFT", 
                  "graphic": "40110117.svg"
                }, 
                {
                  "digits": "18", 
                  "label": "Burglary", 
                  "id": "BURGLARY", 
                  "graphic": "40110118.svg"
                }, 
                {
                  "digits": "19", 
                  "label": "Smuggling", 
                  "id": "SMUGGLING", 
                  "graphic": "40110119.svg"
                }, 
                {
                  "digits": "20", 
                  "label": "Rock Throwing", 
                  "id": "ROCK_THROWING", 
                  "graphic": "40110120.svg"
                }, 
                {
                  "digits": "21", 
                  "label": "Dead Body", 
                  "id": "DEAD_BODY", 
                  "graphic": "40110121.svg"
                }, 
                {
                  "digits": "22", 
                  "label": "Sabotage", 
                  "id": "SABOTAGE", 
                  "graphic": "40110122.svg"
                }, 
                {
                  "digits": "23", 
                  "label": "Suspicious Activity", 
                  "id": "SUSPICIOUS_ACTIVITY", 
                  "graphic": "40110123.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Bomb/Bombing", 
              "id": "BOMB_BOMBING", 
              "graphic": "40110200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bomb Threat", 
                  "id": "BOMB_THREAT", 
                  "graphic": "40110201.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "IED Event", 
              "id": "IED_EVENT", 
              "graphic": "40110300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "IED Explosion", 
                  "id": "IED_EXPLOSION", 
                  "graphic": "40110301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Premature IED Explosion", 
                  "id": "PREMATURE_IED_EXPLOSION", 
                  "graphic": "40110302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "IED Cache", 
                  "id": "IED_CACHE", 
                  "cloverGraphic": "40110303_0.svg", 
                  "diamondGraphic": "40110303_3.svg", 
                  "rectangleGraphic": "40110303_1.svg", 
                  "squareGraphic": "40110303_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "04", 
                  "label": "IED Suicide Bomber", 
                  "id": "IED_SUICIDE_BOMBER", 
                  "graphic": "40110304.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Shooting", 
              "id": "SHOOTING", 
              "graphic": "40110400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Sniping", 
                  "id": "SNIPING", 
                  "graphic": "40110401.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Illegal Drug Operation", 
              "id": "ILLEGAL_DRUG_OPERATION", 
              "graphic": "40110500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Trafficking", 
                  "id": "TRAFFICKING", 
                  "graphic": "40110501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Illegal Drug Lab", 
                  "id": "ILLEGAL_DRUG_LAB", 
                  "graphic": "40110502.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Explosion", 
              "id": "EXPLOSION", 
              "graphic": "40110600.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Grenade Explosion", 
                  "id": "GRENADE_EXPLOSION", 
                  "graphic": "40110601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Incendiary Explosion", 
                  "id": "INCENDIARY_EXPLOSION", 
                  "graphic": "40110602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Mine Explosion", 
                  "id": "MINE_EXPLOSION", 
                  "graphic": "40110603.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Mortar Fire Explosion", 
                  "id": "MORTAR_FIRE_EXPLOSION", 
                  "graphic": "40110604.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Rocket Explosion", 
                  "id": "ROCKET_EXPLOSION", 
                  "graphic": "40110605.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Bomb Explosion", 
                  "id": "BOMB_EXPLOSION", 
                  "graphic": "40110606.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Civil Disturbance", 
          "id": "CIVIL_DISTURBANCE", 
          "graphic": "40120000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Demonstration", 
              "id": "DEMONSTRATION", 
              "graphic": "40120100.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Operation", 
          "id": "OPERATION", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Patrolling", 
              "id": "PATROLLING", 
              "graphic": "40130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Military Information Support Operation (MISO)", 
              "id": "MILITARY_INFORMATION_SUPPORT_OPERATION_MISO", 
              "graphic": "40130200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "TV and Radio Propaganda", 
                  "id": "TV_AND_RADIO_PROPAGANDA", 
                  "cloverGraphic": "40130201_0.svg", 
                  "diamondGraphic": "40130201_3.svg", 
                  "rectangleGraphic": "40130201_1.svg", 
                  "squareGraphic": "40130201_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Foraging/Searching", 
              "id": "FORAGING_SEARCHING", 
              "graphic": "40130300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Recruitment", 
              "id": "RECRUITMENT", 
              "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Willing", 
                  "id": "WILLING", 
                  "graphic": "40130401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Coerced/Impressed", 
                  "id": "COERCED_IMPRESSED", 
                  "graphic": "40130402.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Mine Laying", 
              "id": "MINE_LAYING", 
              "graphic": "40130500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Spy", 
              "id": "SPY", 
              "graphic": "40130600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Warrant Served", 
              "id": "WARRANT_SERVED", 
              "graphic": "40130700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Exfiltration", 
              "id": "EXFILTRATION", 
              "graphic": "40130800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Infiltration", 
              "id": "INFILTRATION", 
              "graphic": "40130900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Meeting", 
              "id": "MEETING", 
              "graphic": "40131000.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Polling Place/Election", 
                  "id": "POLLING_PLACE_ELECTION", 
                  "graphic": "40131001.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Raid on House", 
              "id": "RAID_ON_HOUSE", 
              "graphic": "40131100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Emergency Operation", 
              "id": "EMERGENCY_OPERATION", 
              "graphic": "40131200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Emergency Collection Evacuation Point", 
                  "id": "EMERGENCY_COLLECTION_EVACUATION_POINT", 
                  "graphic": "40131201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Emergency Food Distribution", 
                  "id": "EMERGENCY_FOOD_DISTRIBUTION", 
                  "cloverGraphic": "40131202_0.svg", 
                  "diamondGraphic": "40131202_3.svg", 
                  "rectangleGraphic": "40131202_1.svg", 
                  "squareGraphic": "40131202_2.svg", 
                  "icon": "FULL_FRAME"
                }, 
                {
                  "digits": "03", 
                  "label": "Emergency Incident Command Center", 
                  "id": "EMERGENCY_INCIDENT_COMMAND_CENTER", 
                  "graphic": "40131203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Emergency Operations Center", 
                  "id": "EMERGENCY_OPERATIONS_CENTER", 
                  "graphic": "40131204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Emergency Public Information Center", 
                  "id": "EMERGENCY_PUBLIC_INFORMATION_CENTER", 
                  "graphic": "40131205.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Emergency Shelter", 
                  "id": "EMERGENCY_SHELTER", 
                  "graphic": "40131206.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Emergency Staging Area", 
                  "id": "EMERGENCY_STAGING_AREA", 
                  "graphic": "40131207.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Emergency Water Distribution Center", 
                  "id": "EMERGENCY_WATER_DISTRIBUTION_CENTER", 
                  "cloverGraphic": "40131208_0.svg", 
                  "diamondGraphic": "40131208_3.svg", 
                  "rectangleGraphic": "40131208_1.svg", 
                  "squareGraphic": "40131208_2.svg", 
                  "icon": "FULL_FRAME"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Emergency Medical Operation", 
              "id": "EMERGENCY_MEDICAL_OPERATION", 
              "graphic": "40131300.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "EMT Station Location", 
                  "id": "EMT_STATION_LOCATION", 
                  "graphic": "40131301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Health Department Facility", 
                  "id": "HEALTH_DEPARTMENT_FACILITY", 
                  "graphic": "40131302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Medical Facilities Outpatient", 
                  "id": "MEDICAL_FACILITIES_OUTPATIENT", 
                  "graphic": "40131303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Morgue", 
                  "id": "MORGUE", 
                  "graphic": "40131304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Pharmacy", 
                  "id": "PHARMACY", 
                  "graphic": "40131305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Triage", 
                  "id": "TRIAGE", 
                  "graphic": "40131306.svg"
                }
              ]
            }, 
            {
              "digits": "14", 
              "label": "Fire Fighting Operation", 
              "id": "FIRE_FIGHTING_OPERATION", 
              "graphic": "40131400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Fire Hydrant", 
                  "id": "FIRE_HYDRANT", 
                  "graphic": "40131401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Fire Station", 
                  "id": "FIRE_STATION", 
                  "graphic": "40131402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Other Water Supply Location", 
                  "id": "OTHER_WATER_SUPPLY_LOCATION", 
                  "graphic": "40131403.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Law Enforcement Operation", 
              "id": "LAW_ENFORCEMENT_OPERATION", 
              "graphic": "40131500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bureau of Alcohol,Tobacco,Firearms and Explosives (ATF) (Department of Justice)", 
                  "id": "BUREAU_ATF", 
                  "graphic": "40131501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Border Patrol", 
                  "id": "BORDER_PATROL", 
                  "graphic": "40131502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Customs Service", 
                  "id": "CUSTOMS_SERVICE", 
                  "graphic": "40131503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Drug Enforcement Administration (DEA)", 
                  "id": "DRUG_ENFORCEMENT_ADMIN_DEA", 
                  "graphic": "40131504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Department of Justice (DOJ)", 
                  "id": "JUSTICE_DEPT_DOJ", 
                  "graphic": "40131505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Federal Bureau of Investigation (FBI)", 
                  "id": "FEDERAL_BUREAU_NVESTIGATION_FBI", 
                  "graphic": "40131506.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Police", 
                  "id": "POLICE", 
                  "graphic": "40131507.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Prison", 
                  "id": "PRISON", 
                  "graphic": "40131508.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "United States Secret Service (USSS)", 
                  "id": "US_SECRET_SERVICE_USSS", 
                  "graphic": "40131509.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Transportation Security Administration (TSA)", 
                  "id": "TRANS_SECURITY_ADMIN_TSA", 
                  "graphic": "40131510.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Coast Guard", 
                  "id": "COAST_GUARD", 
                  "graphic": "40131511.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "US Marshals Service", 
                  "id": "US_MARSHALS", 
                  "graphic": "40131512.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Internal Security Force", 
                  "id": "INTERNAL_SECURITY_FORCE", 
                  "graphic": "40131513.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Fire Event", 
          "id": "FIRE_EVENT", 
          "graphic": "40140000.svg", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Fire Origin", 
              "id": "FIRE_ORIGIN", 
              "graphic": "40140100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Smoke", 
              "id": "SMOKE", 
              "graphic": "40140200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Hot Spot", 
              "id": "HOT_SPOT", 
              "graphic": "40140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Non-Residential Fire", 
              "id": "NON_RESIDENTIAL_FIRE", 
              "graphic": "40140400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Residential Fire", 
              "id": "RESIDENTIAL_FIRE", 
              "graphic": "40140500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "School Fire", 
              "id": "SCHOOL_FIRE", 
              "graphic": "40140600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Special Needs Fire", 
              "id": "SPECIAL_NEEDS_FIRE", 
              "graphic": "40140700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Wild Fire", 
              "id": "WILD_FIRE", 
              "graphic": "40140800.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Hazard Materials", 
          "id": "HAZARD_MATERIALS", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Hazard Materials Incident", 
              "id": "HAZARD_MATERIALS_INCIDENT", 
              "graphic": "40150100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Chemical Agent", 
                  "id": "CHEMICAL_AGENT", 
                  "graphic": "40150101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Corrosive Material", 
                  "id": "CORROSIVE_MATERIAL", 
                  "graphic": "40150102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Hazardous when Wet", 
                  "id": "HAZARDOUS_WHEN_WET", 
                  "graphic": "40150103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Explosive Material", 
                  "id": "EXPLOSIVE_MATERIAL", 
                  "graphic": "40150104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Flammable Gas", 
                  "id": "FLAMMABLE_GAS", 
                  "graphic": "40150105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Flammable Liquid", 
                  "id": "FLAMMABLE_LIQUID", 
                  "graphic": "40150106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Flammable Solid", 
                  "id": "FLAMMABLE_SOLID", 
                  "graphic": "40150107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Non-Flammable Gas", 
                  "id": "NON_FLAMMABLE_GAS", 
                  "graphic": "40150108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Organic Peroxide", 
                  "id": "ORGANIC_PEROXIDE", 
                  "graphic": "40150109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Oxidizer", 
                  "id": "OXIDIZER", 
                  "graphic": "40150110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Radioactive Material", 
                  "id": "RADIOACTIVE_MATERIAL", 
                  "graphic": "40150111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Spontaneously Combustible Material", 
                  "id": "SPONTANEOUSLY_COMBUSTIBLE_MATERIAL", 
                  "graphic": "40150112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Toxic Gas", 
                  "id": "TOXIC_GAS", 
                  "graphic": "40150113.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Toxic Infectious Material", 
                  "id": "TOXIC_INFECTIOUS_MATERIAL", 
                  "graphic": "40150114.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Unexploded Ordnance", 
                  "id": "UNEXPLODED_ORDNANCE", 
                  "graphic": "40150115.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Transportation Incident", 
          "id": "TRANSPORTATION_INCIDENT", 
          "graphic": "40160000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Air", 
              "id": "AIR", 
              "graphic": "40160100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Marine", 
              "id": "MARINE", 
              "graphic": "40160200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Rail", 
              "id": "RAIL", 
              "graphic": "40160300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Vehicle", 
              "id": "VEHICLE", 
              "graphic": "40160400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Wheeled Vehicle Explosion", 
              "id": "WHEELED_VEHICLE_EXPLOSION", 
              "graphic": "40160500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Natural Event", 
          "id": "NATURAL_EVENT", 
          "graphic": "40170000.svg", 
          "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Geologic", 
              "id": "GEOLOGIC", 
              "graphic": "40170100.svg", 
              "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Aftershock", 
                  "id": "AFTERSHOCK", 
                  "graphic": "40170101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Avalanche", 
                  "id": "AVALANCHE", 
                  "graphic": "40170102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Earthquake Epicenter", 
                  "id": "EARTHQUAKE_EPICENTER", 
                  "graphic": "40170103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Landslide", 
                  "id": "LANDSLIDE", 
                  "graphic": "40170104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Subsidence", 
                  "id": "SUBSIDENCE", 
                  "graphic": "40170105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Volcanic Eruption", 
                  "id": "VOLCANIC_ERUPTION", 
                  "graphic": "40170106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Volcanic Threat", 
                  "id": "VOLCANIC_THREAT", 
                  "graphic": "40170107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Cave Entrance", 
                  "id": "CAVE_ENTRANCE", 
                  "graphic": "40170108.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Hydro-Meteorological", 
              "id": "HYDRO_METEOROLOGICAL", 
              "graphic": "40170200.svg", 
              "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Drought", 
                  "id": "DROUGHT", 
                  "graphic": "40170201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Flood", 
                  "id": "FLOOD", 
                  "graphic": "40170202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Tsunami", 
                  "id": "TSUNAMI", 
                  "graphic": "40170203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Infestation", 
              "id": "INFESTATION", 
              "graphic": "40170300.svg", 
              "remarks": "This symbol shall not be displayed on a C2 system but may be displayed for training or hierarchal explanation purposes.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bird", 
                  "id": "BIRD", 
                  "graphic": "40170301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Insect", 
                  "id": "INSECT", 
                  "graphic": "40170302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Microbial", 
                  "id": "MICROBIAL", 
                  "graphic": "40170303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Reptile", 
                  "id": "REPTILE", 
                  "graphic": "40170304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Rodent", 
                  "id": "RODENT", 
                  "graphic": "40170305.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "Individual", 
          "id": "INDIVIDUAL", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Religious Leader", 
              "id": "RELIGIOUS_LEADER", 
              "graphic": "40180100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Speaker", 
              "id": "SPEAKER", 
              "graphic": "40180200.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Assassination", 
          "id": "ASSASSINATION_MOD", 
          "graphic": "40011.svg"
        }, 
        {
          "digits": "02", 
          "label": "Execution (Wrongful Killing)", 
          "id": "EXECUTION_WRONGFUL_KILLING_MOD", 
          "graphic": "40021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Hijacking/Hijacked", 
          "id": "HIJACKING_MOD", 
          "graphic": "40031.svg"
        }, 
        {
          "digits": "04", 
          "label": "House-to-House", 
          "id": "HOUSE_TO_HOUSE_MOD", 
          "graphic": "40041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Kidnapping", 
          "id": "KIDNAPPING_MOD", 
          "graphic": "40051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Murder", 
          "id": "MURDER_MOD", 
          "graphic": "40061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Piracy", 
          "id": "PIRACY_MOD", 
          "graphic": "40071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Rape", 
          "id": "RAPE_MOD", 
          "graphic": "40081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Written Psychological Operations", 
          "id": "WRITTEN_PSYCHOLOGICAL_OPERATIONS_MOD", 
          "graphic": "40091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Pirate", 
          "id": "PIRATE_MOD", 
          "graphic": "40101.svg"
        }, 
        {
          "digits": "11", 
          "label": "False", 
          "id": "FALSE_MOD", 
          "graphic": "40111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Find", 
          "id": "FIND_MOD", 
          "graphic": "40121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Found and Cleared", 
          "id": "FOUND_AND_CLEARED_MOD", 
          "graphic": "40131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Hoax (Decoy)", 
          "id": "HOAX_DECOY_MOD", 
          "graphic": "40141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Attempted", 
          "id": "ATTEMPTED_MOD", 
          "graphic": "40151.svg"
        }, 
        {
          "digits": "16", 
          "label": "Accident", 
          "id": "ACCIDENT_MOD", 
          "graphic": "40161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Incident", 
          "id": "INCIDENT_MOD", 
          "graphic": "40171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Theft", 
          "id": "THEFT_MOD", 
          "graphic": "40181.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/Activities", 
        "modifierOnes": "Appendices/Activities/mod1"
      }
    }, 
    {
      "digits": "45", 
      "label": "Meteorological - Atmospheric", 
      "id": "SS_ATMOSPHERIC", 
      "dimensionId": "METOC", 
      "geometry": "MIXED", 
      "entities": [
        {
          "digits": "11", 
          "label": "Pressure Systems", 
          "id": "PRESSURE_SYSTEMS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Low Pressure Center", 
              "id": "LOW_PRESSURE_CENTER", 
              "graphic": "45110100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Cyclone Center", 
                  "id": "CYCLONE_CENTER", 
                  "graphic": "45110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Tropopause Low", 
                  "id": "TROPOPAUSE_LOW", 
                  "graphic": "45110102.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "High Pressure Center", 
              "id": "HIGH_PRESSURE_CENTER", 
              "graphic": "45110200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Anticyclone Center", 
                  "id": "ANTICYCLONE_CENTER", 
                  "graphic": "45110201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Tropopause High", 
                  "id": "TROPOPAUSE_HIGH", 
                  "graphic": "45110202.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Frontal Systems", 
              "id": "FRONTAL_SYSTEMS", 
              "remarks": "For special lines that are not symmetrical, such as Fronts, the sequence of anchor points determines the proper alighment of the line.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Cold Front", 
                  "id": "COLD_FRONT", 
                  "graphic": "45110301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Upper Cold Front", 
                  "id": "UPPER_COLD_FRONT", 
                  "graphic": "45110302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Cold Frontogenesis", 
                  "id": "COLD_FRONTOGENESIS", 
                  "graphic": "45110303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Cold Frontolysis", 
                  "id": "COLD_FRONTOLYSIS", 
                  "graphic": "45110304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Warm Front", 
                  "id": "WARM_FRONT", 
                  "graphic": "45110305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Upper Warm Front", 
                  "id": "UPPER_WARM_FRONT", 
                  "graphic": "45110306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Warm Frontogenesis", 
                  "id": "WARM_FRONTOGENESIS", 
                  "graphic": "45110307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Warm Frontolysis", 
                  "id": "WARM_FRONTOLYSIS", 
                  "graphic": "45110308.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Occluded Front", 
                  "id": "OCCLUDED_FRONT", 
                  "graphic": "45110309.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Upper Occluded Front", 
                  "id": "UPPER_OCCLUDED_FRONT", 
                  "graphic": "45110310.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Occluded Frontolysis", 
                  "id": "OCCLUDED_FRONTOLYSIS", 
                  "graphic": "45110311.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Stationary Front", 
                  "id": "STATIONARY_FRONT", 
                  "graphic": "45110312.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Upper Stationary Front", 
                  "id": "UPPER_STATIONARY_FRONT", 
                  "graphic": "45110313.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Stationary Frontogenesis", 
                  "id": "STATIONARY_FRONTOGENESIS", 
                  "graphic": "45110314.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Stationary Frontolysis", 
                  "id": "STATIONARY_FRONTOLYSIS", 
                  "graphic": "45110315.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Lines", 
              "id": "LINES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Trough Axis", 
                  "id": "TROUGH_AXIS", 
                  "graphic": "45110401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Upper Trough Axis", 
                  "id": "UPPER_TROUGH_AXIS", 
                  "graphic": "45110402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Ridge Axis", 
                  "id": "RIDGE_AXIS", 
                  "graphic": "45110403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Severe Squall Line", 
                  "id": "SEVERE_SQUALL_LINE", 
                  "graphic": "45110404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Instability Line", 
                  "id": "INSTABILITY_LINE", 
                  "graphic": "45110405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Shear Line", 
                  "id": "SHEAR_LINE", 
                  "graphic": "45110406.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Inter-Tropical Convergence Zone", 
                  "id": "INTER_TROPICAL_CONVERGENCE_ZONE", 
                  "graphic": "45110407.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Convergence Line", 
                  "id": "CONVERGENCE_LINE", 
                  "graphic": "45110408.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Inter-Tropical Discontinuity", 
                  "id": "INTER_TROPICAL_DISCONTINUITY", 
                  "graphic": "45110409.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Pressure Tendency", 
              "id": "PRESSURE_TENDENCY", 
              "remarks": "Each symbols within the pressure tendency group is static, but only one can be applied to a particular station plot, dependent upon the pressure tendency at that location. As such, the group of symbols is dynamic.", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rise Then Fall Higher", 
                  "id": "RISE_THEN_FALL_HIGHER", 
                  "graphic": "45110501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rise Then Steady", 
                  "id": "RISE_THEN_STEADY", 
                  "graphic": "45110502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Rise", 
                  "id": "RISE", 
                  "graphic": "45110503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Rise Then Rise Higher", 
                  "id": "RISE_THEN_RISE_HIGHER", 
                  "graphic": "45110504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Steady", 
                  "id": "STEADY", 
                  "graphic": "45110505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Fall Then Rise Lower", 
                  "id": "FALL_THEN_RISE_LOWER", 
                  "graphic": "45110506.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Fall Then Steady", 
                  "id": "FALL_THEN_STEADY", 
                  "graphic": "45110507.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Fall", 
                  "id": "FALL", 
                  "graphic": "45110508.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Rise Then Fall Lower", 
                  "id": "RISE_THEN_FALL_LOWER", 
                  "graphic": "45110509.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Turbulence", 
          "id": "TURBULENCE", 
          "remarks": "USAF turbulence forecasts are based on Category II type aircraft.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Light", 
              "id": "LIGHT", 
              "graphic": "45120100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Moderate", 
              "id": "MODERATE", 
              "graphic": "45120200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Severe", 
              "id": "SEVERE", 
              "graphic": "45120300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Extreme", 
              "id": "EXTREME", 
              "graphic": "45120400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Mountain Waves", 
              "id": "MOUNTAIN_WAVES", 
              "graphic": "45120500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Icing", 
          "id": "ICING", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Clear Icing", 
              "id": "CLEAR_ICING", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "CLEAR_ICING_LIGHT", 
                  "graphic": "45130101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate", 
                  "id": "CLEAR_ICING_MODERATE", 
                  "graphic": "45130102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Severe", 
                  "id": "CLEAR_ICING_SEVERE", 
                  "graphic": "45130103.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Rime Icing", 
              "id": "RIME_ICING", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "RIME_ICING_LIGHT", 
                  "graphic": "45130201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate", 
                  "id": "RIME_ICING_MODERATE", 
                  "graphic": "45130202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Severe", 
                  "id": "RIME_ICING_SEVERE", 
                  "graphic": "45130203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Mixed Icing", 
              "id": "MIXED_ICING", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "MIXED_ICING_LIGHT", 
                  "graphic": "45130301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate", 
                  "id": "MIXED_ICING_MODERATE", 
                  "graphic": "45130302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Severe", 
                  "id": "MIXED_ICING_SEVERE", 
                  "graphic": "45130303.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Winds", 
          "id": "WINDS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Calm Winds", 
              "id": "CALM_WINDS", 
              "graphic": "45140100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Wind Plot", 
              "id": "WIND_PLOT", 
              "graphic": "45140200.3.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Jet Stream", 
              "id": "JET_STREAM", 
              "graphic": "45140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Stream Line", 
              "id": "STREAM_LINE", 
              "graphic": "45140400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Cloud Cover", 
          "id": "CLOUD_COVER", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Cloud Coverage Symbols", 
              "id": "CLOUD_COVERAGE_SYMBOLS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Clear Sky", 
                  "id": "CLEAR_SKY", 
                  "graphic": "45150101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Few Coverage", 
                  "id": "FEW_COVERAGE", 
                  "graphic": "45150102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Scattered Coverage", 
                  "id": "SCATTERED_COVERAGE", 
                  "graphic": "45150103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Broken Coverage", 
                  "id": "BROKEN_COVERAGE", 
                  "graphic": "45150104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Overcast Coverage", 
                  "id": "OVERCAST_COVERAGE", 
                  "graphic": "45150105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Sky Totally or Partially Obscured", 
                  "id": "SKY_TOTALLY_OR_PARTIALLY_OBSCURED", 
                  "graphic": "45150106.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Weather Symbols", 
          "id": "WEATHER_SYMBOLS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Rain", 
              "id": "RAIN", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Intermittent Light", 
                  "id": "RAIN_INTERMITTENT_LIGHT", 
                  "graphic": "45160101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Continuous Light", 
                  "id": "RAIN_CONTINUOUS_LIGHT", 
                  "graphic": "45160102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Intermittent Moderate", 
                  "id": "RAIN_INTERMITTENT_MODERATE", 
                  "graphic": "45160103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Intermittent Moderate/Continuous Moderate", 
                  "id": "RAIN_INTERMITTENT_CONTINUOUS_MODERATE", 
                  "graphic": "45160104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Intermittent Heavy", 
                  "id": "RAIN_INTERMITTENT_HEAVY", 
                  "graphic": "45160105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Intermittent Heavy/Continuous Heavy", 
                  "id": "RAIN_INTERMITTENT_CONTINUOUS_HEAVY", 
                  "graphic": "45160106.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Freezing Rain", 
              "id": "FREEZING_RAIN", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "FREEZING_RAIN_LIGHT", 
                  "graphic": "45160201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate/Heavy", 
                  "id": "FREEZING_RAIN_MODERATE_HEAVY", 
                  "graphic": "45160202.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Rain Showers", 
              "id": "RAIN_SHOWERS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "RAIN_SHOWERS_LIGHT", 
                  "graphic": "45160301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate/Heavy", 
                  "id": "RAIN_SHOWERS_MODERATE_HEAVY", 
                  "graphic": "45160302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Torrential", 
                  "id": "RAIN_SHOWERS_TORRENTIAL", 
                  "graphic": "45160303.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Drizzle", 
              "id": "DRIZZLE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Intermittent Light", 
                  "id": "DRIZZLE_INTERMITTENT_LIGHT", 
                  "graphic": "45160401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Intermittent Light/Continuous Light", 
                  "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_LIGHT", 
                  "graphic": "45160402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Intermittent Moderate", 
                  "id": "DRIZZLE_INTERMITTENT_MODERATE", 
                  "graphic": "45160403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Intermittent Moderate/Continuous Moderate", 
                  "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_MODERATE", 
                  "graphic": "45160404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Intermittent Heavy", 
                  "id": "DRIZZLE_INTERMITTENT_HEAVY", 
                  "graphic": "45160405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Intermittent Heavy/Continuous Heavy", 
                  "id": "DRIZZLE_INTERMITTENT_CONTINUOUS_HEAVY", 
                  "graphic": "45160406.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Freezing Drizzle", 
              "id": "FREEZING_DRIZZLE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "FREEZING_DRIZZLE_LIGHT", 
                  "graphic": "45160501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate/Heavy", 
                  "id": "FREEZING_DRIZZLE_MODERATE_HEAVY", 
                  "graphic": "45160502.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Rain and Snow Mixed", 
              "id": "RAIN_SNOW_MIXED", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rain or Drizzle and Snow - Light", 
                  "id": "RAIN_DRIZZLE_SNOW_LIGHT", 
                  "graphic": "45160601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rain or Drizzle and Snow - Moderate/Heavy", 
                  "id": "RAIN_DRIZZLE_SNOW_MODERATE_HEAVY", 
                  "graphic": "45160602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Rain and Snow Showers - Light", 
                  "id": "RAIN_SNOW_SHOWERS_LIGHT", 
                  "graphic": "45160603.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Rain and Snow Showers - Moderate/Heavy", 
                  "id": "RAIN_SNOW_SHOWERS_MODERATE_HEAVY", 
                  "graphic": "45160604.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Snow", 
              "id": "SNOW", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Intermittent Light", 
                  "id": "SNOW_INTERMITTENT_LIGHT", 
                  "graphic": "45160701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Intermittent Light/Continuous Light", 
                  "id": "SNOW_INTERMITTENT_CONTINUOUS_LIGHT", 
                  "graphic": "45160702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Intermittent Moderate", 
                  "id": "SNOW_INTERMITTENT_MODERATE", 
                  "graphic": "45160703.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Intermittent Moderate/Continuous Moderate", 
                  "id": "SNOW_INTERMITTENT_CONTINUOUS_MODERATE", 
                  "graphic": "45160704.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Intermittent Heavy", 
                  "id": "SNOW_INTERMITTENT_HEAVY", 
                  "graphic": "45160705.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Intermittent Heavy/Continuous Heavy", 
                  "id": "SNOW_INTERMITTENT_CONTINUOUS_HEAVY", 
                  "graphic": "45160706.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Blowing Snow - Light/Moderate", 
                  "id": "BLOWING_SNOW_LIGHT_MODERATE", 
                  "graphic": "45160707.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Blowing Snow - Heavy", 
                  "id": "BLOWING_SNOW_HEAVY", 
                  "graphic": "45160708.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Snow Grains", 
              "id": "SNOW_GRAINS", 
              "graphic": "45160800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Snow Showers", 
              "id": "SNOW_SHOWERS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "SNOW_SHOWERS_LIGHT", 
                  "graphic": "45160901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate/Heavy", 
                  "id": "SNOW_SHOWERS_MODERATE_HEAVY", 
                  "graphic": "45160902.svg"
                }
              ]
            }, 
            {
              "digits": "10", 
              "label": "Hail", 
              "id": "HAIL", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light not Associated with Thunder", 
                  "id": "HAIL_LIGHT_NOT_THUNDER", 
                  "graphic": "45161001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate/Heavy not Associated with Thunder", 
                  "id": "HAIL_MODERATE_HEAVY_NOT_THUNDER", 
                  "graphic": "45161002.svg"
                }
              ]
            }, 
            {
              "digits": "11", 
              "label": "Ice Crystals (Diamond Dust)", 
              "id": "ICE_CRYSTALS_DIAMOND_DUST", 
              "graphic": "45161100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Ice Pellets (Sleet)", 
              "id": "ICE_PELLETS_SLEET", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light", 
                  "id": "SLEET_LIGHT", 
                  "graphic": "45161201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Moderate", 
                  "id": "SLEET_MODERATE", 
                  "graphic": "45161202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Heavy", 
                  "id": "SLEET_HEAVY", 
                  "graphic": "45161203.svg"
                }
              ]
            }, 
            {
              "digits": "13", 
              "label": "Inversion", 
              "id": "INVERSION", 
              "graphic": "45161300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "14", 
              "label": "Storms", 
              "id": "STORMS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Thunderstorm - No Precipitation", 
                  "id": "THUNDERSTORM_NO_PRECIPITATION", 
                  "graphic": "45161401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Thunderstorm Light to Moderate with Rain/Snow - No Hail", 
                  "id": "THUNDERSTORM_LIGHT_MODERATE_RAIN_SNOW_NO_HAIL", 
                  "graphic": "45161402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Thunderstorm Heavy with Rain/Snow - No Hail", 
                  "id": "THUNDERSTORM_HEAVY_RAIN_SNOW_NO_HAIL", 
                  "graphic": "45161403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Thunderstorm Light to Moderate - With Hail", 
                  "id": "THUNDERSTORM_LIGHT_MODERATE_WITH_HAIL", 
                  "graphic": "45161404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Thunderstorm Heavy - With Hail", 
                  "id": "THUNDERSTORM_HEAVY_WITH_HAIL", 
                  "graphic": "45161405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Funnel Cloud (Tornado/Waterspout)", 
                  "id": "FUNNEL_CLOUD_TORNADO_WATERSPOUT", 
                  "graphic": "45161406.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Squall", 
                  "id": "SQUALL", 
                  "graphic": "45161407.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Lightning", 
                  "id": "LIGHTNING", 
                  "graphic": "45161408.svg"
                }
              ]
            }, 
            {
              "digits": "15", 
              "label": "Fog", 
              "id": "FOG", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Shallow Patches", 
                  "id": "FOG_SHALLOW_PATCHES", 
                  "graphic": "45161501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Shallow Continuous", 
                  "id": "FOG_SHALLOW_CONTINUOUS", 
                  "graphic": "45161502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Patchy", 
                  "id": "FOG_PATCHY", 
                  "graphic": "45161503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Sky Visible", 
                  "id": "FOG_SKY_VISIBLE", 
                  "graphic": "45161504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Sky Obscured", 
                  "id": "FOG_SKY_OBSCURED", 
                  "graphic": "45161505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Freezing-Sky Visible", 
                  "id": "FOG_FREEZING_SKY_VISIBLE", 
                  "graphic": "45161506.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Freezing-Sky Obscured", 
                  "id": "FOG_FREEZING_SKY_OBSCURED", 
                  "graphic": "45161507.svg"
                }
              ]
            }, 
            {
              "digits": "16", 
              "label": "Mist", 
              "id": "MIST", 
              "graphic": "45161600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "17", 
              "label": "Smoke", 
              "id": "SMOKE", 
              "graphic": "45161700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "18", 
              "label": "Haze", 
              "id": "HAZE", 
              "graphic": "45161800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "19", 
              "label": "Dust or Sand", 
              "id": "DUST_SAND", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Light to Moderate", 
                  "id": "DUST_SAND_LIGHT_TO_MODERATE", 
                  "graphic": "45161901.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Severe", 
                  "id": "DUST_SAND_SEVERE", 
                  "graphic": "45161902.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Dust Devil", 
                  "id": "DUST_DEVIL", 
                  "graphic": "45161903.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Blowing Dust or Sand", 
                  "id": "BLOWING_DUST_SAND", 
                  "graphic": "45161904.svg"
                }
              ]
            }, 
            {
              "digits": "20", 
              "label": "Tropical Storm Systems", 
              "id": "TROPICAL_STORM_SYSTEMS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Tropical Depression", 
                  "id": "TROPICAL_DEPRESSION", 
                  "graphic": "45162001.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Tropical Storm", 
                  "id": "TROPICAL_STORM", 
                  "graphic": "45162002.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Hurricane/Typhoon", 
                  "id": "HURRICANE_TYPHOON", 
                  "graphic": "45162003.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Tropical Storm Wind Areas and Date/Time Labels", 
                  "id": "TROPICAL_STORM_WIND_AREAS_DATE_TIME_LABELS", 
                  "graphic": "45162004.svg"
                }
              ]
            }, 
            {
              "digits": "21", 
              "label": "Volcanic Eruption", 
              "id": "VOLCANIC_ERUPTION", 
              "graphic": "45162100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Volcanic Ash", 
                  "id": "VOLCANIC_ASH", 
                  "graphic": "45162101.svg"
                }
              ]
            }, 
            {
              "digits": "22", 
              "label": "Tropopause Level", 
              "id": "TROPOPAUSE_LEVEL", 
              "graphic": "45162200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "23", 
              "label": "Freezing Level", 
              "id": "FREEZING_LEVEL", 
              "graphic": "45162300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "24", 
              "label": "Precipitation of Unknown Type and Intensity", 
              "id": "PRECIPITATION_UNKNOWN_TYPE_INTENSITY", 
              "graphic": "45162400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "17", 
          "label": "Bounded Areas of Weather", 
          "id": "BOUNDED_AREAS_WEATHER", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Instrument Flight Rule (IFR)", 
              "id": "INSTRUMENT_FLIGHT_RULE_IFR", 
              "graphic": "45170100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Marginal Visual Flight Rule (MVFR)", 
              "id": "MARGINAL_VISUAL_FLIGHT_RULE_MVFR", 
              "graphic": "45170200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Turbulence", 
              "id": "TURBULENCE_BOUNDED", 
              "graphic": "45170300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Icing", 
              "id": "ICING_BOUNDED", 
              "graphic": "45170400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Liquid Precipitation - Non-Convective Continuous or Intermittent", 
              "id": "LIQUID_PRECIPITATION_NON_CONVECTIVE", 
              "graphic": "45170500.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Liquid Precipitation - Convective", 
                  "id": "LIQUID_PRECIPITATION_CONVECTIVE", 
                  "graphic": "45170501.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Freezing /Frozen Precipitation", 
              "id": "FREEZING_PRECIPITATION", 
              "graphic": "45170600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Thunderstorm", 
              "id": "THUNDERSTORM_BOUNDED", 
              "graphic": "45170700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Fog", 
              "id": "FOG_BOUNDED", 
              "graphic": "45170800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Dust or Sand", 
              "id": "DUST_SAND_BOUNDED", 
              "graphic": "45170900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Operator-Defined Freeform", 
              "id": "OPERATOR_DEFINED_FREEFORM_BOUNDED", 
              "graphic": "45171000.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "18", 
          "label": "Isopleths", 
          "id": "ISOPLETHS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Isobar - Surface", 
              "id": "ISOBAR_SURFACE", 
              "graphic": "45180100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Contour - Upper Air", 
              "id": "CONTOUR_UPPER_AIR", 
              "graphic": "45180200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Isotherm", 
              "id": "ISOTHERM", 
              "graphic": "45180300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Isotach", 
              "id": "ISOTACH", 
              "graphic": "45180400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Isodrosotherm", 
              "id": "ISODROSOTHERM", 
              "graphic": "45180500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Thickness", 
              "id": "THICKNESS", 
              "graphic": "45180600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Operator-Defined Freeform", 
              "id": "OPERATOR_DEFINED_FREEFORM", 
              "graphic": "45180700.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "19", 
          "label": "State of the Ground", 
          "id": "STATE_GROUND", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Without Snow or Measurable Ice Cover", 
              "id": "WITHOUT_SNOW_MEASURABLE_ICE_COVER", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Surface Dry Without Cracks or Appreciable Dust or Loose Sand", 
                  "id": "SURFACE_DRY", 
                  "graphic": "45190101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Surface Moist", 
                  "id": "SURFACE_MOIST", 
                  "graphic": "45190102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Surface Wet-Standing Water in Small or Large Pools", 
                  "id": "SURFACE_WET", 
                  "graphic": "45190103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Surface Flooded", 
                  "id": "SURFACE_FLOODED", 
                  "graphic": "45190104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Surface Frozen", 
                  "id": "SURFACE_FROZEN", 
                  "graphic": "45190105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Glaze (Thin Ice) on Ground", 
                  "id": "GLAZE_THIN_ICE_ON_GROUND", 
                  "graphic": "45190106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Loose Dry Dust or Sand not Covering Ground Completely", 
                  "id": "LOOSE_DUST_SAND_NOT_COVERING", 
                  "graphic": "45190107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Thin Loose Dry Dust or Sand Covering Ground Completely", 
                  "id": "THIN_LOOSE_DUST_SAND_COVERING", 
                  "graphic": "45190108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Moderate/Thick Loose Dry Dust or Sand Covering Ground Completely", 
                  "id": "MODERATE_THICK_LOOSE_DUST_SAND_COVERING", 
                  "graphic": "45190109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Extremely Dry with Cracks", 
                  "id": "EXTREMELY_DRY_CRACKS", 
                  "graphic": "45190110.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "With Snow or Measurable Ice Cover", 
              "id": "WITH_SNOW_MEASURABLE_ICE_COVER", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Predominately Ice Covered", 
                  "id": "PREDOMINATELY_ICE_COVERED", 
                  "graphic": "45190201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Compact or Wet Snow (with or without Ice) Covering Less Than One-Half of Ground", 
                  "id": "COMPACT_WET_SNOW_COVERING_LESS_THAN_HALF", 
                  "graphic": "45190202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Compact or Wet Snow (with or without Ice) Covering  at Least One-Half of Ground-but Ground not Completely Covered", 
                  "id": "COMPACT_WET_SNOW_COVERING_HALF", 
                  "graphic": "45190203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Even Layer of Compact or Wet Snow Covering Ground Completely", 
                  "id": "EVEN_COMPACT_WET_SNOW_COVERING", 
                  "graphic": "45190204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Uneven Layer of Compact or Wet Snow Covering Ground Completely", 
                  "id": "UNEVEN_COMPACT_WET_SNOW_COVERING", 
                  "graphic": "45190205.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Loose Dry Snow Covering Less Than One-Half of Ground", 
                  "id": "LOOSE_DRY_SNOW_COVERING_LESS_THAN_HALF", 
                  "graphic": "45190206.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Loose Dry Snow Covering at Least One-Half of Ground-but Ground not Completely Covered", 
                  "id": "LOOSE_DRY_SNOW_COVERING_HALF", 
                  "graphic": "45190207.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Even Layer of Loose Dry Snow Covering Ground Completely", 
                  "id": "EVEN_LOOSE_DRY_SNOW_COVERING", 
                  "graphic": "45190208.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Uneven Layer of Loose Dry Snow Covering Ground Completely", 
                  "id": "UNEVEN_LOOSE_DRY_SNOW_COVERING", 
                  "graphic": "45190209.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Snow Covering Ground Completely-Deep Drifts", 
                  "id": "SNOW_DEEP_DRIFTS", 
                  "graphic": "45190210.svg"
                }
              ]
            }
          ]
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/METOC/Atmospheric"
      }
    }, 
    {
      "digits": "46", 
      "label": "Meteorological - Oceanographic", 
      "id": "SS_OCEANIC", 
      "dimensionId": "METOC", 
      "geometry": "MIXED", 
      "entities": [
        {
          "digits": "11", 
          "label": "Ice Systems", 
          "id": "ICE_SYSTEMS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Icebergs", 
              "id": "ICEBERGS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Many Icebergs", 
                  "id": "MANY_ICEBERGS", 
                  "graphic": "46110101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Belts and Strips", 
                  "id": "ICEBERGS_BELTS_STRIPS", 
                  "graphic": "46110102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "General", 
                  "id": "ICEBERGS_GENERAL", 
                  "graphic": "46110103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Many Icebergs - General", 
                  "id": "MANY_ICEBERGS_GENERAL", 
                  "graphic": "46110104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Bergy Bit", 
                  "id": "BERGY_BIT", 
                  "graphic": "46110105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Many Bergy Bits", 
                  "id": "MANY_BERGY_BITS", 
                  "graphic": "46110106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Growler", 
                  "id": "GROWLER", 
                  "graphic": "46110107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Many Growlers", 
                  "id": "MANY_GROWLERS", 
                  "graphic": "46110108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Floeberg", 
                  "id": "FLOEBERG", 
                  "graphic": "46110109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Ice Island", 
                  "id": "ICE_ISLAND", 
                  "graphic": "46110110.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Ice Concentration", 
              "id": "ICE_CONCENTRATION", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bergy Water", 
                  "id": "BERGY_WATER", 
                  "graphic": "46110201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Water with Radar Targets", 
                  "id": "WATER_WITH_RADAR_TARGETS", 
                  "graphic": "46110202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Ice Free", 
                  "id": "ICE_FREE", 
                  "graphic": "46110203.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Dynamic Processes", 
              "id": "DYNAMIC_PROCESSES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Convergence", 
                  "id": "CONVERGENCE", 
                  "graphic": "46110301.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Divergence", 
                  "id": "DIVERGENCE", 
                  "graphic": "46110302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Shearing or Shear Zone", 
                  "id": "SHEARING_SHEAR_ZONE", 
                  "graphic": "46110303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Ice Drift (Direction)", 
                  "id": "ICE_DRIFT_DIRECTION", 
                  "graphic": "46110304.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Sea Ice", 
              "id": "SEA_ICE", 
              "graphic": "46110400.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ice Thickness (Observed)", 
                  "id": "ICE_THICKNESS_OBSERVED", 
                  "graphic": "46110401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Ice Thickness (Estimated)", 
                  "id": "ICE_THICKNESS_ESTIMATED", 
                  "graphic": "46110402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Melt Puddles or Flooded Ice", 
                  "id": "MELT_PUDDLES_FLOODED_ICE", 
                  "graphic": "46110403.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Limits", 
              "id": "ICE_LIMITS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Limits of Visual Observation", 
                  "id": "LIMITS_VISUAL_OBSERVATION", 
                  "graphic": "46110501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Limits of Under Cast", 
                  "id": "LIMITS_UNDER_CAST", 
                  "graphic": "46110502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Limits of Radar Observation", 
                  "id": "LIMITS_RADAR_OBSERVATION", 
                  "graphic": "46110503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Observed Ice Edge or Boundary", 
                  "id": "OBSERVED_ICE_EDGE_BOUNDARY", 
                  "graphic": "46110504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Estimated Ice Edge or Boundary", 
                  "id": "ESTIMATED_ICE_EDGE_BOUNDARY", 
                  "graphic": "46110505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Ice Edge or Boundary From Radar", 
                  "id": "ICE_EDGE_BOUNDARY_FROM_RADAR", 
                  "graphic": "46110506.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Openings in the Ice", 
              "id": "OPENINGS_IN_THE_ICE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Cracks", 
                  "id": "CRACKS", 
                  "graphic": "46110601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Cracks at a Specific Location", 
                  "id": "CRACKS_SPECIFIC_LOCATION", 
                  "graphic": "46110602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Lead", 
                  "id": "LEAD", 
                  "graphic": "46110603.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Frozen Lead", 
                  "id": "FROZEN_LEAD", 
                  "graphic": "46110604.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Snow Cover", 
              "id": "SNOW_COVER", 
              "graphic": "46110700.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Sastrugi (with Orientation)", 
                  "id": "SASTRUGI_WITH_ORIENTATION", 
                  "graphic": "46110701.svg"
                }
              ]
            }, 
            {
              "digits": "08", 
              "label": "Topographical Features", 
              "id": "TOPOGRAPHICAL_FEATURES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ridges or Hummocks", 
                  "id": "RIDGES_HUMMOCKS", 
                  "graphic": "46110801.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rafting", 
                  "id": "RAFTING", 
                  "graphic": "46110802.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Jammed Brash Barrier", 
                  "id": "JAMMED_BRASH_BARRIER", 
                  "graphic": "46110803.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Hydrography", 
          "id": "HYDROGRAPHY", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Depth", 
              "id": "DEPTH", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Soundings", 
                  "id": "SOUNDINGS", 
                  "graphic": "46120101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Depth Curve", 
                  "id": "DEPTH_CURVE", 
                  "graphic": "46120102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Depth Contour", 
                  "id": "DEPTH_CONTOUR", 
                  "graphic": "46120103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Depth Area", 
                  "id": "DEPTH_AREA", 
                  "graphic": "46120104.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Coastal Hydrography", 
              "id": "COASTAL_HYDROGRAPHY", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Coastline", 
                  "id": "COASTLINE", 
                  "graphic": "46120201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Island", 
                  "id": "ISLAND", 
                  "graphic": "46120202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Beach", 
                  "id": "BEACH", 
                  "graphic": "46120203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Water", 
                  "id": "WATER", 
                  "graphic": "46120204.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Foreshore - Line", 
                  "id": "FORESHORE_LINE", 
                  "graphic": "46120205.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Foreshore - Area", 
                  "id": "FORESHORE_AREA", 
                  "graphic": "46120206.svg"
                }
              ]
            }, 
            {
              "digits": "03", 
              "label": "Ports and Harbors", 
              "id": "PORTS_HARBORS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Ports", 
                  "id": "PORTS"
                }, 
                {
                  "digits": "02", 
                  "label": "Berths (Onshore)", 
                  "id": "BERTHS_ONSHORE", 
                  "graphic": "46120302.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Berths (Anchor)", 
                  "id": "BERTHS_ANCHOR", 
                  "graphic": "46120303.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Anchorage - Point", 
                  "id": "ANCHORAGE_POINT", 
                  "graphic": "46120304.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Anchorage - Line", 
                  "id": "ANCHORAGE_LINE", 
                  "graphic": "46120305.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Anchorage - Area", 
                  "id": "ANCHORAGE_AREA", 
                  "graphic": "46120306.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Call in Point", 
                  "id": "CALL_IN_POINT", 
                  "graphic": "46120307.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Pier/Wharf/Quay", 
                  "id": "PIER_WHARF_QUAY", 
                  "graphic": "46120308.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Fishing Harbor - Point", 
                  "id": "FISHING_HARBOR_POINT", 
                  "graphic": "46120309.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Fish Weirs - Point", 
                  "id": "FISH_WEIRS_POINT", 
                  "graphic": "46120310.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Fish Stakes - Point", 
                  "id": "FISH_STAKES_POINT", 
                  "graphic": "46120311.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Fish Traps - Area", 
                  "id": "FISH_TRAPS_AREA", 
                  "graphic": "46120312.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Facilities", 
                  "id": "FACILITIES"
                }, 
                {
                  "digits": "14", 
                  "label": "Drydock", 
                  "id": "DRYDOCK", 
                  "graphic": "46120314.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "Landing Place", 
                  "id": "LANDING_PLACE", 
                  "graphic": "46120315.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "Offshore Loading Facility - Point", 
                  "id": "OFFSHORE_LOADING_FACILITY_POINT", 
                  "graphic": "46120316.svg"
                }, 
                {
                  "digits": "17", 
                  "label": "Offshore Loading Facility - Line", 
                  "id": "OFFSHORE_LOADING_FACILITY_LINE", 
                  "graphic": "46120317.svg"
                }, 
                {
                  "digits": "18", 
                  "label": "Offshore Loading Facility - Area", 
                  "id": "OFFSHORE_LOADING_FACILITY_AREA", 
                  "graphic": "46120318.svg"
                }, 
                {
                  "digits": "19", 
                  "label": "Ramp - Above Water", 
                  "id": "RAMP_ABOVE_WATER", 
                  "graphic": "46120319.svg"
                }, 
                {
                  "digits": "20", 
                  "label": "Ramp - Below Water", 
                  "id": "RAMP_BELOW_WATER", 
                  "graphic": "46120320.svg"
                }, 
                {
                  "digits": "21", 
                  "label": "Landing Ring", 
                  "id": "LANDING_RING", 
                  "graphic": "46120321.svg"
                }, 
                {
                  "digits": "22", 
                  "label": "Ferry Crossing", 
                  "id": "FERRY_CROSSING", 
                  "graphic": "46120322.svg"
                }, 
                {
                  "digits": "23", 
                  "label": "Cable Ferry Crossing", 
                  "id": "CABLE_FERRY_CROSSING", 
                  "graphic": "46120323.svg"
                }, 
                {
                  "digits": "24", 
                  "label": "Dolphin", 
                  "id": "DOLPHIN", 
                  "graphic": "46120324.svg"
                }, 
                {
                  "digits": "25", 
                  "label": "Shoreline Protection", 
                  "id": "SHORELINE_PROTECTION"
                }, 
                {
                  "digits": "26", 
                  "label": "Breakwater/Groin/Jetty - Above Water", 
                  "id": "BREAKWATER_GROIN_JETTY_ABOVE_WATER", 
                  "graphic": "46120326.svg"
                }, 
                {
                  "digits": "27", 
                  "label": "Breakwater/Groin/Jetty - Below Water", 
                  "id": "BREAKWATER_GROIN_JETTY_BELOW_WATER", 
                  "graphic": "46120327.svg"
                }, 
                {
                  "digits": "28", 
                  "label": "Seawall", 
                  "id": "SEAWALL", 
                  "graphic": "46120328.svg"
                }
              ]
            }, 
            {
              "digits": "04", 
              "label": "Aids to Navigation", 
              "id": "AIDS_NAVIGATION", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Beacon", 
                  "id": "BEACON", 
                  "graphic": "46120401.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Buoy Default", 
                  "id": "BUOY_DEFAULT", 
                  "graphic": "46120402.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Marker", 
                  "id": "MARKER", 
                  "graphic": "46120403.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Perches/Stakes - Point", 
                  "id": "PERCHES_STAKES_POINT", 
                  "graphic": "46120404.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Perches/Stakes - Area", 
                  "id": "PERCHES_STAKES_AREA", 
                  "graphic": "46120405.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Light", 
                  "id": "LIGHT", 
                  "graphic": "46120406.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Leading Line", 
                  "id": "LEADING_LINE", 
                  "graphic": "46120407.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Light Vessel/Light Ship", 
                  "id": "LIGHT_VESSEL_LIGHT_SHIP", 
                  "graphic": "46120408.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Lighthouse", 
                  "id": "LIGHTHOUSE", 
                  "graphic": "46120409.svg"
                }
              ]
            }, 
            {
              "digits": "05", 
              "label": "Dangers/Hazards", 
              "id": "DANGERS_HAZARDS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Rock Submerged", 
                  "id": "ROCK_SUBMERGED", 
                  "graphic": "46120501.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Rock Awashed", 
                  "id": "ROCK_AWASHED", 
                  "graphic": "46120502.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Underwater Danger/Hazard", 
                  "id": "UNDERWATER_DANGER_HAZARD", 
                  "graphic": "46120503.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Foul Ground - Point", 
                  "id": "FOUL_GROUND_POINT", 
                  "graphic": "46120504.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Foul Ground - Area", 
                  "id": "FOUL_GROUND_AREA", 
                  "graphic": "46120505.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Kelp/Seaweed - Point", 
                  "id": "KELP_SEAWEED_POINT", 
                  "graphic": "46120506.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Kelp/Seaweed - Area", 
                  "id": "KELP_SEAWEED_AREA", 
                  "graphic": "46120507.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Snags/Stumps", 
                  "id": "SNAGS_STUMPS", 
                  "graphic": "46120508.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Wreck (Uncovers)", 
                  "id": "WRECK_UNCOVERS", 
                  "graphic": "46120509.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Wreck (Submerged)", 
                  "id": "WRECK_SUBMERGED", 
                  "graphic": "46120510.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Breakers", 
                  "id": "BREAKERS", 
                  "graphic": "46120511.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Reef", 
                  "id": "REEF", 
                  "graphic": "46120512.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Eddies/Overfalls/Tide Rips", 
                  "id": "EDDIES_OVERFALLS_TIDE_RIPS", 
                  "graphic": "46120513.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Discolored Water", 
                  "id": "DISCOLORED_WATER", 
                  "graphic": "46120514.svg"
                }
              ]
            }, 
            {
              "digits": "06", 
              "label": "Bottom Features", 
              "id": "BOTTOM_FEATURES", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Bottom Characteristics - Sand", 
                  "id": "BOTTOM_CHARACTERISTICS_SAND", 
                  "graphic": "46120601.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Bottom Characteristics - Mud", 
                  "id": "BOTTOM_CHARACTERISTICS_MUD", 
                  "graphic": "46120602.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Bottom Characteristics - Clay", 
                  "id": "BOTTOM_CHARACTERISTICS_CLAY", 
                  "graphic": "46120603.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Bottom Characteristics - Silt", 
                  "id": "BOTTOM_CHARACTERISTICS_SILT", 
                  "graphic": "46120604.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Bottom Characteristics - Stones", 
                  "id": "BOTTOM_CHARACTERISTICS_STONES", 
                  "graphic": "46120605.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "Bottom Characteristics - Gravel", 
                  "id": "BOTTOM_CHARACTERISTICS_GRAVEL", 
                  "graphic": "46120606.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "Bottom Characteristics - Pebbles", 
                  "id": "BOTTOM_CHARACTERISTICS_PEBBLES", 
                  "graphic": "46120607.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "Bottom Characteristics - Cobbles", 
                  "id": "BOTTOM_CHARACTERISTICS_COBBLES", 
                  "graphic": "46120608.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "Bottom Characteristics - Rock", 
                  "id": "BOTTOM_CHARACTERISTICS_ROCK", 
                  "graphic": "46120609.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "Bottom Characteristics - Coral", 
                  "id": "BOTTOM_CHARACTERISTICS_CORAL", 
                  "graphic": "46120610.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "Bottom Characteristics - Shell", 
                  "id": "BOTTOM_CHARACTERISTICS_SHELL", 
                  "graphic": "46120611.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "Qualifying Terms - Fine", 
                  "id": "QUALIFYING_TERMS_FINE", 
                  "graphic": "46120612.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "Qualifying Terms - Medium", 
                  "id": "QUALIFYING_TERMS_MEDIUM", 
                  "graphic": "46120613.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "Qualifying Terms - Coarse", 
                  "id": "QUALIFYING_TERMS_COARSE", 
                  "graphic": "46120614.svg"
                }
              ]
            }, 
            {
              "digits": "07", 
              "label": "Tide and Current", 
              "id": "TIDE_AND_CURRENT", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Water Turbulence", 
                  "id": "WATER_TURBULENCE", 
                  "graphic": "46120701.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Current Flow - Ebb", 
                  "id": "CURRENT_FLOW_EBB", 
                  "graphic": "46120702.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Current Flow - Flood", 
                  "id": "CURRENT_FLOW_FLOOD", 
                  "graphic": "46120703.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Tide Data Point", 
                  "id": "TIDE_DATA_POINT", 
                  "graphic": "46120704.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "Tide Gauge", 
                  "id": "TIDE_GAUGE", 
                  "graphic": "46120705.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Oceanography", 
          "id": "OCEANOGRAPHY", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Bioluminescence", 
              "id": "BIOLUMINESCENCE", 
              "remarks": "Measured by Visual Detection Ratio (VDR)", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Visual Detection Ratio (VDR) Level 1-2", 
                  "id": "VDR_LEVEL_1_2", 
                  "graphic": "46130101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "VDR Level 2-3", 
                  "id": "VDR_LEVEL_2_3", 
                  "graphic": "46130102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "VDR Level 3-4", 
                  "id": "VDR_LEVEL_3_4", 
                  "graphic": "46130103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "VDR Level 4-5", 
                  "id": "VDR_LEVEL_4_5", 
                  "graphic": "46130104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "VDR Level 5-6", 
                  "id": "VDR_LEVEL_5_6", 
                  "graphic": "46130105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "VDR Level 6-7", 
                  "id": "VDR_LEVEL_6_7", 
                  "graphic": "46130106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "VDR Level 7-8", 
                  "id": "VDR_LEVEL_7_8", 
                  "graphic": "46130107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "VDR Level 8-9", 
                  "id": "VDR_LEVEL_8_9", 
                  "graphic": "46130108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "VDR Level 9-10", 
                  "id": "VDR_LEVEL_9_10", 
                  "graphic": "46130109.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Beach Slope", 
              "id": "BEACH_SLOPE", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "Flat", 
                  "id": "BEACH_SLOPE_FLAT", 
                  "graphic": "46130201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "Gentle", 
                  "id": "BEACH_SLOPE_GENTLE", 
                  "graphic": "46130202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "Moderate", 
                  "id": "BEACH_SLOPE_MODERATE", 
                  "graphic": "46130203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "Steep", 
                  "id": "BEACH_SLOPE_STEEP", 
                  "graphic": "46130204.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Geophysics/Acoustics", 
          "id": "GEOPHYSICS_ACOUSTICS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Mine Warfare (MIW) Bottom Descriptors", 
              "id": "MINE_WARFARE_MIW_BOTTOM_DESCRIPTORS", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "MIW Bottom Sediments - Solid Rock", 
                  "id": "MIW_BOTTOM_SEDIMENTS_SOLID_ROCK", 
                  "graphic": "46140101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "MIW Bottom Sediments - Clay", 
                  "id": "MIW_BOTTOM_SEDIMENTS_CLAY", 
                  "graphic": "46140102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "MIW Bottom Sediments - Very Coarse Sand", 
                  "id": "MIW_BOTTOM_SEDIMENTS_VERY_COARSE_SAND", 
                  "graphic": "46140103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "MIW Bottom Sediments - Coarse Sand", 
                  "id": "MIW_BOTTOM_SEDIMENTS_COARSE_SAND", 
                  "graphic": "46140104.svg"
                }, 
                {
                  "digits": "05", 
                  "label": "MIW Bottom Sediments - Medium Sand", 
                  "id": "MIW_BOTTOM_SEDIMENTS_MEDIUM_SAND", 
                  "graphic": "46140105.svg"
                }, 
                {
                  "digits": "06", 
                  "label": "MIW Bottom Sediments - Fine Sand", 
                  "id": "MIW_BOTTOM_SEDIMENTS_FINE_SAND", 
                  "graphic": "46140106.svg"
                }, 
                {
                  "digits": "07", 
                  "label": "MIW Bottom Sediments - Very Fine Sand", 
                  "id": "MIW_BOTTOM_SEDIMENTS_VERY_FINE_SAND", 
                  "graphic": "46140107.svg"
                }, 
                {
                  "digits": "08", 
                  "label": "MIW Bottom Sediments - Very Fine Silt", 
                  "id": "MIW_BOTTOM_SEDIMENTS_VERY_FINE_SILT", 
                  "graphic": "46140108.svg"
                }, 
                {
                  "digits": "09", 
                  "label": "MIW Bottom Sediments - Fine Silt", 
                  "id": "MIW_BOTTOM_SEDIMENTS_FINE_SILT", 
                  "graphic": "46140109.svg"
                }, 
                {
                  "digits": "10", 
                  "label": "MIW Bottom Sediments - Medium Silt", 
                  "id": "MIW_BOTTOM_SEDIMENTS_MEDIUM_SILT", 
                  "graphic": "46140110.svg"
                }, 
                {
                  "digits": "11", 
                  "label": "MIW Bottom Sediments - Coarse Silt", 
                  "id": "MIW_BOTTOM_SEDIMENTS_COARSE_SILT", 
                  "graphic": "46140111.svg"
                }, 
                {
                  "digits": "12", 
                  "label": "MIW Bottom Sediments - Boulders", 
                  "id": "MIW_BOTTOM_SEDIMENTS_BOULDERS", 
                  "graphic": "46140112.svg"
                }, 
                {
                  "digits": "13", 
                  "label": "MIW Bottom Sediments - Cobbles-Oyster Shells", 
                  "id": "MIW_BOTTOM_SEDIMENTS_COBBLES_OYSTER_SHELLS", 
                  "graphic": "46140113.svg"
                }, 
                {
                  "digits": "14", 
                  "label": "MIW Bottom Sediments - Pebbles-Shells", 
                  "id": "MIW_BOTTOM_SEDIMENTS_PEBBLES_SHELLS", 
                  "graphic": "46140114.svg"
                }, 
                {
                  "digits": "15", 
                  "label": "MIW Bottom Sediments - Sand and Shells", 
                  "id": "MIW_BOTTOM_SEDIMENTS_SAND_AND_SHELLS", 
                  "graphic": "46140115.svg"
                }, 
                {
                  "digits": "16", 
                  "label": "MIW Bottom Sediment - Land", 
                  "id": "MIW_BOTTOM_SEDIMENT_LAND", 
                  "graphic": "46140116.svg"
                }, 
                {
                  "digits": "17", 
                  "label": "MIW Bottom Sediment - No Data", 
                  "id": "MIW_BOTTOM_SEDIMENT_NO_DATA", 
                  "graphic": "46140117.svg"
                }, 
                {
                  "digits": "18", 
                  "label": "Bottom Roughness - Smooth", 
                  "id": "BOTTOM_ROUGHNESS_SMOOTH", 
                  "graphic": "46140118.svg"
                }, 
                {
                  "digits": "19", 
                  "label": "Bottom Roughness - Moderate", 
                  "id": "BOTTOM_ROUGHNESS_MODERATE", 
                  "graphic": "46140119.svg"
                }, 
                {
                  "digits": "20", 
                  "label": "Bottom Roughness - Rough", 
                  "id": "BOTTOM_ROUGHNESS_ROUGH", 
                  "graphic": "46140120.svg"
                }, 
                {
                  "digits": "21", 
                  "label": "Clutter (Bottom) - Low", 
                  "id": "CLUTTER_BOTTOM_LOW", 
                  "graphic": "46140121.svg"
                }, 
                {
                  "digits": "22", 
                  "label": "Clutter (Bottom) - Medium", 
                  "id": "CLUTTER_BOTTOM_MEDIUM", 
                  "graphic": "46140122.svg"
                }, 
                {
                  "digits": "23", 
                  "label": "Clutter (Bottom) - High", 
                  "id": "CLUTTER_BOTTOM_HIGH", 
                  "graphic": "46140123.svg"
                }, 
                {
                  "digits": "24", 
                  "label": "Impact Burial - 0%", 
                  "id": "IMPACT_BURIAL_0", 
                  "graphic": "46140124.svg"
                }, 
                {
                  "digits": "25", 
                  "label": "Impact Burial - 0-10%", 
                  "id": "IMPACT_BURIAL_0_10", 
                  "graphic": "46140125.svg"
                }, 
                {
                  "digits": "26", 
                  "label": "Impact Burial - 10-20%", 
                  "id": "IMPACT_BURIAL_10_20", 
                  "graphic": "46140126.svg"
                }, 
                {
                  "digits": "27", 
                  "label": "Impact Burial - 20-75%", 
                  "id": "IMPACT_BURIAL_20_75", 
                  "graphic": "46140127.svg"
                }, 
                {
                  "digits": "28", 
                  "label": "Impact Burial - >75%", 
                  "id": "IMPACT_BURIAL_75", 
                  "graphic": "46140128.svg"
                }, 
                {
                  "digits": "29", 
                  "label": "MIW Bottom Category A", 
                  "id": "MIW_BOTTOM_CATEGORY_A", 
                  "graphic": "46140129.svg"
                }, 
                {
                  "digits": "30", 
                  "label": "MIW Bottom Category B", 
                  "id": "MIW_BOTTOM_CATEGORY_B", 
                  "graphic": "46140130.svg"
                }, 
                {
                  "digits": "31", 
                  "label": "MIW Bottom Category C", 
                  "id": "MIW_BOTTOM_CATEGORY_C", 
                  "graphic": "46140131.svg"
                }, 
                {
                  "digits": "32", 
                  "label": "MIW Bottom Type A1", 
                  "id": "MIW_BOTTOM_TYPE_A1", 
                  "graphic": "46140132.svg"
                }, 
                {
                  "digits": "33", 
                  "label": "MIW Bottom Type A2", 
                  "id": "MIW_BOTTOM_TYPE_A2", 
                  "graphic": "46140133.svg"
                }, 
                {
                  "digits": "34", 
                  "label": "MIW Bottom Type A3", 
                  "id": "MIW_BOTTOM_TYPE_A3", 
                  "graphic": "46140134.svg"
                }, 
                {
                  "digits": "35", 
                  "label": "MIW Bottom Type B1", 
                  "id": "MIW_BOTTOM_TYPE_B1", 
                  "graphic": "46140135.svg"
                }, 
                {
                  "digits": "36", 
                  "label": "MIW Bottom Type B2", 
                  "id": "MIW_BOTTOM_TYPE_B2", 
                  "graphic": "46140136.svg"
                }, 
                {
                  "digits": "37", 
                  "label": "MIW Bottom Type B3", 
                  "id": "MIW_BOTTOM_TYPE_B3", 
                  "graphic": "46140137.svg"
                }, 
                {
                  "digits": "38", 
                  "label": "MIW Bottom Type C1", 
                  "id": "MIW_BOTTOM_TYPE_C1", 
                  "graphic": "46140138.svg"
                }, 
                {
                  "digits": "39", 
                  "label": "MIW Bottom Type C2", 
                  "id": "MIW_BOTTOM_TYPE_C2", 
                  "graphic": "46140139.svg"
                }, 
                {
                  "digits": "40", 
                  "label": "MIW Bottom Type C3", 
                  "id": "MIW_BOTTOM_TYPE_C3", 
                  "graphic": "46140140.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Limits", 
          "id": "MARITIME_LIMITS", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Maritime Limit Boundary", 
              "id": "MARITIME_LIMIT_BOUNDARY", 
              "graphic": "46150100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Maritime Area", 
              "id": "MARITIME_AREA", 
              "graphic": "46150200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Restricted Area", 
              "id": "RESTRICTED_AREA", 
              "graphic": "46150300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Swept Area", 
              "id": "SWEPT_AREA", 
              "graphic": "46150400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Training Area", 
              "id": "TRAINING_AREA", 
              "graphic": "46150500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Operator-Defined", 
              "id": "LIMITS_OPERATOR_DEFINED", 
              "graphic": "46150600.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Man-Made Structures", 
          "id": "MAN_MADE_STRUCTURES", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Submarine Cable", 
              "id": "SUBMARINE_CABLE", 
              "graphic": "46160100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Submerged Crib", 
              "id": "SUBMERGED_CRIB", 
              "graphic": "46160200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Canal", 
              "id": "CANAL", 
              "graphic": "46160300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Ford", 
              "id": "FORD", 
              "graphic": "46160400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Lock", 
              "id": "LOCK", 
              "graphic": "46160500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Oil/Gas Rig", 
              "id": "OIL_GAS_RIG", 
              "graphic": "46160600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Oil/Gas Rig Field", 
              "id": "OIL_GAS_RIG_FIELD", 
              "graphic": "46160700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Pipelines/Pipe", 
              "id": "PIPELINES_PIPE", 
              "graphic": "46160800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Pile/Piling/Post", 
              "id": "PILE_PILING_POST", 
              "graphic": "46160900.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/METOC/Oceanographic"
      }
    }, 
    {
      "digits": "47", 
      "label": "Meteorological - Space", 
      "id": "SS_MET_SPACE", 
      "dimensionId": "METOC", 
      "geometry": "MIXED", 
      "entities": [
        {
          "digits": "11", 
          "label": "Space", 
          "id": "SPACE", 
          "remarks": "No icon is associated with this entity. It is for hierarchal purposes only.", 
          "entityTypes": []
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/METOC/Space"
      }
    }, 
    {
      "digits": "50", 
      "label": "Signals Intelligence - Space", 
      "id": "SS_SIGINT_SPACE", 
      "dimensionId": "SPACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Signal Intercept", 
          "id": "SIGNAL_INTERCEPT", 
          "remarks": "There is no icon associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Communications", 
              "id": "COMMUNICATIONS", 
              "graphic": "50110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Jammer", 
              "id": "JAMMER", 
              "graphic": "50110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "50110300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "14", 
          "label": "Data Transmission", 
          "id": "DATA_TRANSMISSION_MOD", 
          "graphic": "50141.svg"
        }, 
        {
          "digits": "15", 
          "label": "Earth Surveillance", 
          "id": "EARTH_SURVEILLANCE_MOD", 
          "graphic": "50151.svg"
        }, 
        {
          "digits": "21", 
          "label": "Identification Friend or Foe (Interrogator)", 
          "id": "IFF_INTERROGATOR_MOD", 
          "graphic": "50211.svg"
        }, 
        {
          "digits": "24", 
          "label": "Identification Friend or Foe (Transponder)", 
          "id": "IFF_TRANSPONDER_MOD", 
          "graphic": "50241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Barrage Jammer", 
          "id": "BARRAGE_JAMMER_MOD", 
          "graphic": "50251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Click Jammer", 
          "id": "CLICK_JAMMER_MOD", 
          "graphic": "50261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Deceptive Jammer", 
          "id": "DECEPTIVE_JAMMER_MOD", 
          "graphic": "50271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Frequency Swept Jammer", 
          "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
          "graphic": "50281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Jammer (General)", 
          "id": "JAMMER_GENERAL_MOD", 
          "graphic": "50291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Noise Jammer", 
          "id": "NOISE_JAMMER_MOD", 
          "graphic": "50301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pulsed Jammer", 
          "id": "PULSED_JAMMER_MOD", 
          "graphic": "50311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Repeater Jammer", 
          "id": "REPEATER_JAMMER_MOD", 
          "graphic": "50321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Spot Noise Jammer", 
          "id": "SPOT_NOISE_JAMMER_MOD", 
          "graphic": "50331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Transponder Jammer", 
          "id": "TRANSPONDER_JAMMER_MOD", 
          "graphic": "50341.svg"
        }, 
        {
          "digits": "36", 
          "label": "Missile Control", 
          "id": "MISSILE_CONTROL_MOD", 
          "graphic": "50361.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multi-Function", 
          "id": "MULTI_FUNCTION_MOD", 
          "graphic": "50391.svg", 
          "remarks": "Two or more of EW, TA, TT, MG, TI"
        }, 
        {
          "digits": "42", 
          "label": "Missile Tracking", 
          "id": "MISSILE_TRACKING_MOD", 
          "graphic": "50421.svg"
        }, 
        {
          "digits": "43", 
          "label": "Navigational/General", 
          "id": "NAVIGATIONAL_GENERAL_MOD", 
          "graphic": "50431.svg"
        }, 
        {
          "digits": "44", 
          "label": "Navigational/Distance Measuring Equipment", 
          "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
          "graphic": "50441.svg"
        }, 
        {
          "digits": "45", 
          "label": "Navigation/Terrain Following", 
          "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
          "graphic": "50451.svg"
        }, 
        {
          "digits": "49", 
          "label": "Point-to-Point Line of Sight (LOS)", 
          "id": "POINT_POINT_LOS_MOD", 
          "graphic": "50491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Instrumentation", 
          "id": "INSTRUMENTATION_MOD", 
          "graphic": "50501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Range Only", 
          "id": "RANGE_ONLY_MOD", 
          "graphic": "50511.svg"
        }, 
        {
          "digits": "53", 
          "label": "Satellite Downlink", 
          "id": "SATELLITE_DOWNLINK_MOD", 
          "graphic": "50531.svg"
        }, 
        {
          "digits": "54", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "50541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Surface Search", 
          "id": "SURFACE_SEARCH_MOD", 
          "graphic": "50551.svg"
        }, 
        {
          "digits": "58", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "50581.svg"
        }, 
        {
          "digits": "61", 
          "label": "Target Tracking", 
          "id": "TARGET_TRACKING_MOD", 
          "graphic": "50611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Unknown", 
          "id": "UNKNOWN_MOD", 
          "graphic": "50621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Video Remoting", 
          "id": "VIDEO_REMOTING_MOD", 
          "graphic": "50631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Experimental", 
          "id": "EXPERIMENTAL_MOD", 
          "graphic": "50641.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SigInt", 
        "modifierOnes": "Appendices/SigInt/mod1"
      }
    }, 
    {
      "digits": "51", 
      "label": "Signals Intelligence - Air", 
      "id": "SS_SIGINT_AIR", 
      "dimensionId": "AIR", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Signal Intercept", 
          "id": "SIGNAL_INTERCEPT", 
          "remarks": "There is no icon associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Communications", 
              "id": "COMMUNICATIONS", 
              "graphic": "51110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Jammer", 
              "id": "JAMMER", 
              "graphic": "51110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "51110300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "02", 
          "label": "Airborne Search and Bombing", 
          "id": "AIRBORNE_SEARCH_AND_BOMBING_MOD", 
          "graphic": "51021.svg"
        }, 
        {
          "digits": "03", 
          "label": "Airborne Intercept", 
          "id": "AIRBORNE_INTERCEPT_MOD", 
          "graphic": "51031.svg"
        }, 
        {
          "digits": "04", 
          "label": "Altimeter", 
          "id": "ALTIMETER_MOD", 
          "graphic": "51041.svg"
        }, 
        {
          "digits": "05", 
          "label": "Airborne Reconnaissance and Mapping", 
          "id": "AIRBORNE_RECONNAISSANCE_AND_MAPPING_MOD", 
          "graphic": "51051.svg"
        }, 
        {
          "digits": "06", 
          "label": "Air Traffic Control", 
          "id": "AIR_TRAFFIC_CONTROL_MOD", 
          "graphic": "51061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Beacon Transponder (not IFF)", 
          "id": "BEACON_TRANSPONDER_MOD", 
          "graphic": "51071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Battlefield Surveillance", 
          "id": "BATTLEFIELD_SURVEILLANCE_MOD", 
          "graphic": "51081.svg"
        }, 
        {
          "digits": "10", 
          "label": "Controlled Intercept", 
          "id": "CONTROLLED_INTERCEPT_MOD", 
          "graphic": "51101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Cellular/Mobile", 
          "id": "CELLULAR_MOBILE_MOD", 
          "graphic": "51111.svg"
        }, 
        {
          "digits": "12", 
          "label": "Coastal Surveillance", 
          "id": "COASTAL_SURVEILLANCE_MOD", 
          "graphic": "51121.svg"
        }, 
        {
          "digits": "13", 
          "label": "Decoy/Mimic", 
          "id": "DECOY_MIMIC_MOD", 
          "graphic": "51131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Data Transmission", 
          "id": "DATA_TRANSMISSION_MOD", 
          "graphic": "51141.svg"
        }, 
        {
          "digits": "16", 
          "label": "Early Warning", 
          "id": "EARLY_WARNING_MOD", 
          "graphic": "51161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Fire Control", 
          "id": "FIRE_CONTROL_MOD", 
          "graphic": "51171.svg"
        }, 
        {
          "digits": "18", 
          "label": "Ground Mapping", 
          "id": "GROUND_MAPPING_MOD", 
          "graphic": "51181.svg"
        }, 
        {
          "digits": "21", 
          "label": "Identification Friend or Foe (Interrogator)", 
          "id": "IFF_INTERROGATOR_MOD", 
          "graphic": "51211.svg"
        }, 
        {
          "digits": "23", 
          "label": "Ionospheric Sounding", 
          "id": "IONOSPHERIC_SOUNDING_MOD", 
          "graphic": "51231.svg"
        }, 
        {
          "digits": "24", 
          "label": "Identification Friend or Foe (Transponder)", 
          "id": "IFF_TRANSPONDER_MOD", 
          "graphic": "51241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Barrage Jammer", 
          "id": "BARRAGE_JAMMER_MOD", 
          "graphic": "51251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Click Jammer", 
          "id": "CLICK_JAMMER_MOD", 
          "graphic": "51261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Deceptive Jammer", 
          "id": "DECEPTIVE_JAMMER_MOD", 
          "graphic": "51271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Frequency Swept Jammer", 
          "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
          "graphic": "51281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Jammer (General)", 
          "id": "JAMMER_GENERAL_MOD", 
          "graphic": "51291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Noise Jammer", 
          "id": "NOISE_JAMMER_MOD", 
          "graphic": "51301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pulsed Jammer", 
          "id": "PULSED_JAMMER_MOD", 
          "graphic": "51311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Repeater Jammer", 
          "id": "REPEATER_JAMMER_MOD", 
          "graphic": "51321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Spot Noise Jammer", 
          "id": "SPOT_NOISE_JAMMER_MOD", 
          "graphic": "51331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Transponder Jammer", 
          "id": "TRANSPONDER_JAMMER_MOD", 
          "graphic": "51341.svg"
        }, 
        {
          "digits": "35", 
          "label": "Missile Acquisition", 
          "id": "MISSILE_ACQUISITION_MOD", 
          "graphic": "51351.svg"
        }, 
        {
          "digits": "36", 
          "label": "Missile Control", 
          "id": "MISSILE_CONTROL_MOD", 
          "graphic": "51361.svg"
        }, 
        {
          "digits": "37", 
          "label": "Missile Downlink", 
          "id": "MISSILE_DOWNLINK_MOD", 
          "graphic": "51371.svg"
        }, 
        {
          "digits": "38", 
          "label": "Meteorological", 
          "id": "METEOROLOGICAL_MOD", 
          "graphic": "51381.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multi-Function", 
          "id": "MULTI_FUNCTION_MOD", 
          "graphic": "51391.svg"
        }, 
        {
          "digits": "40", 
          "label": "Missile Guidance", 
          "id": "MISSILE_GUIDANCE_MOD", 
          "graphic": "51401.svg"
        }, 
        {
          "digits": "41", 
          "label": "Missile Homing", 
          "id": "MISSILE_HOMING_MOD", 
          "graphic": "51411.svg"
        }, 
        {
          "digits": "42", 
          "label": "Missile Tracking", 
          "id": "MISSILE_TRACKING_MOD", 
          "graphic": "51421.svg"
        }, 
        {
          "digits": "43", 
          "label": "Navigational/General", 
          "id": "NAVIGATIONAL_GENERAL_MOD", 
          "graphic": "51431.svg"
        }, 
        {
          "digits": "44", 
          "label": "Navigational/Distance Measuring Equipment", 
          "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
          "graphic": "51441.svg"
        }, 
        {
          "digits": "45", 
          "label": "Navigation/Terrain Following", 
          "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
          "graphic": "51451.svg"
        }, 
        {
          "digits": "46", 
          "label": "Navigational/Weather Avoidance", 
          "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
          "graphic": "51461.svg"
        }, 
        {
          "digits": "47", 
          "label": "Omni-Line of Sight (LOS)", 
          "id": "OMNI_LOS_MOD", 
          "graphic": "51471.svg"
        }, 
        {
          "digits": "48", 
          "label": "Proximity Use", 
          "id": "PROXIMITY_FUSE_MOD", 
          "graphic": "51481.svg"
        }, 
        {
          "digits": "49", 
          "label": "Point-to-Point Line of Sight (LOS)", 
          "id": "POINT_POINT_LOS_MOD", 
          "graphic": "51491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Instrumentation", 
          "id": "INSTRUMENTATION_MOD", 
          "graphic": "51501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Range Only", 
          "id": "RANGE_ONLY_MOD", 
          "graphic": "51511.svg"
        }, 
        {
          "digits": "54", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "51541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Surface Search", 
          "id": "SURFACE_SEARCH_MOD", 
          "graphic": "51551.svg"
        }, 
        {
          "digits": "57", 
          "label": "Satellite Uplink", 
          "id": "SATELLITE_UPLINK_MOD", 
          "graphic": "51571.svg"
        }, 
        {
          "digits": "58", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "51581.svg"
        }, 
        {
          "digits": "59", 
          "label": "Target Illumination", 
          "id": "TARGET_ILLUMINATION_MOD", 
          "graphic": "51591.svg"
        }, 
        {
          "digits": "61", 
          "label": "Target Tracking", 
          "id": "TARGET_TRACKING_MOD", 
          "graphic": "51611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Unknown", 
          "id": "UNKNOWN_MOD", 
          "graphic": "51621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Video Remoting", 
          "id": "VIDEO_REMOTING_MOD", 
          "graphic": "51631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Experimental", 
          "id": "EXPERIMENTAL_MOD", 
          "graphic": "51641.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SigInt", 
        "modifierOnes": "Appendices/SigInt/mod1"
      }
    }, 
    {
      "digits": "52", 
      "label": "Signals Intelligence - Land", 
      "id": "SS_SIGINT_LAND", 
      "dimensionId": "LAND_EQUIPMENT", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Signal Intercept", 
          "id": "SIGNAL_INTERCEPT", 
          "remarks": "There is no icon associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Communications", 
              "id": "COMMUNICATIONS", 
              "graphic": "52110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Jammer", 
              "id": "JAMMER", 
              "graphic": "52110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "52110300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Anti-Aircraft Fire Control", 
          "id": "ANTI_AIRCRAFT_FIRE_CONTROL_MOD", 
          "graphic": "52011.svg"
        }, 
        {
          "digits": "06", 
          "label": "Air Traffic Control", 
          "id": "AIR_TRAFFIC_CONTROL_MOD", 
          "graphic": "52061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Beacon Transponder (not IFF)", 
          "id": "BEACON_TRANSPONDER_MOD", 
          "graphic": "52071.svg"
        }, 
        {
          "digits": "08", 
          "label": "Battlefield Surveillance", 
          "id": "BATTLEFIELD_SURVEILLANCE_MOD", 
          "graphic": "52081.svg"
        }, 
        {
          "digits": "09", 
          "label": "Controlled Approach", 
          "id": "CONTROLLED_APPROACH_MOD", 
          "graphic": "52091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Controlled Intercept", 
          "id": "CONTROLLED_INTERCEPT_MOD", 
          "graphic": "52101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Cellular/Mobile", 
          "id": "CELLULAR_MOBILE_MOD", 
          "graphic": "52111.svg"
        }, 
        {
          "digits": "13", 
          "label": "Decoy/Mimic", 
          "id": "DECOY_MIMIC_MOD", 
          "graphic": "52131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Data Transmission", 
          "id": "DATA_TRANSMISSION_MOD", 
          "graphic": "52141.svg"
        }, 
        {
          "digits": "16", 
          "label": "Early Warning", 
          "id": "EARLY_WARNING_MOD", 
          "graphic": "52161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Fire Control", 
          "id": "FIRE_CONTROL_MOD", 
          "graphic": "52171.svg"
        }, 
        {
          "digits": "19", 
          "label": "Height Finding", 
          "id": "HEIGHT_FINDING_MOD", 
          "graphic": "52191.svg"
        }, 
        {
          "digits": "20", 
          "label": "Harbor Surveillance", 
          "id": "HARBOR_SURVEILLANCE_MOD", 
          "graphic": "52201.svg"
        }, 
        {
          "digits": "21", 
          "label": "Identification Friend or Foe (Interrogator)", 
          "id": "IFF_INTERROGATOR_MOD", 
          "graphic": "52211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Instrument Landing System", 
          "id": "INSTRUMENT_LANDING_SYSTEM_MOD", 
          "graphic": "52221.svg"
        }, 
        {
          "digits": "23", 
          "label": "Ionospheric Sounding", 
          "id": "IONOSPHERIC_SOUNDING_MOD", 
          "graphic": "52231.svg"
        }, 
        {
          "digits": "24", 
          "label": "Identification Friend or Foe (Transponder)", 
          "id": "IFF_TRANSPONDER_MOD", 
          "graphic": "52241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Barrage Jammer", 
          "id": "BARRAGE_JAMMER_MOD", 
          "graphic": "52251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Click Jammer", 
          "id": "CLICK_JAMMER_MOD", 
          "graphic": "52261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Deceptive Jammer", 
          "id": "DECEPTIVE_JAMMER_MOD", 
          "graphic": "52271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Frequency Swept Jammer", 
          "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
          "graphic": "52281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Jammer (General)", 
          "id": "JAMMER_GENERAL_MOD", 
          "graphic": "52291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Noise Jammer", 
          "id": "NOISE_JAMMER_MOD", 
          "graphic": "52301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pulsed Jammer", 
          "id": "PULSED_JAMMER_MOD", 
          "graphic": "52311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Repeater Jammer", 
          "id": "REPEATER_JAMMER_MOD", 
          "graphic": "52321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Spot Noise Jammer", 
          "id": "SPOT_NOISE_JAMMER_MOD", 
          "graphic": "52331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Transponder Jammer", 
          "id": "TRANSPONDER_JAMMER_MOD", 
          "graphic": "52341.svg"
        }, 
        {
          "digits": "35", 
          "label": "Missile Acquisition", 
          "id": "MISSILE_ACQUISITION_MOD", 
          "graphic": "52351.svg"
        }, 
        {
          "digits": "36", 
          "label": "Missile Control", 
          "id": "MISSILE_CONTROL_MOD", 
          "graphic": "52361.svg"
        }, 
        {
          "digits": "38", 
          "label": "Meteorological", 
          "id": "METEOROLOGICAL_MOD", 
          "graphic": "52381.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multi-Function", 
          "id": "MULTI_FUNCTION_MOD", 
          "graphic": "52391.svg", 
          "remarks": "Two or more of EW, TA, TT, MG, TI"
        }, 
        {
          "digits": "40", 
          "label": "Missile Guidance", 
          "id": "MISSILE_GUIDANCE_MOD", 
          "graphic": "52401.svg"
        }, 
        {
          "digits": "42", 
          "label": "Missile Tracking", 
          "id": "MISSILE_TRACKING_MOD", 
          "graphic": "52421.svg"
        }, 
        {
          "digits": "43", 
          "label": "Navigational/General", 
          "id": "NAVIGATIONAL_GENERAL_MOD", 
          "graphic": "52431.svg"
        }, 
        {
          "digits": "44", 
          "label": "Navigational/Distance Measuring Equipment", 
          "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
          "graphic": "52441.svg"
        }, 
        {
          "digits": "45", 
          "label": "Navigation/Terrain Following", 
          "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
          "graphic": "52451.svg"
        }, 
        {
          "digits": "46", 
          "label": "Navigational/Weather Avoidance", 
          "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
          "graphic": "52461.svg"
        }, 
        {
          "digits": "47", 
          "label": "Omni-Line of Sight (LOS)", 
          "id": "OMNI_LOS_MOD", 
          "graphic": "52471.svg"
        }, 
        {
          "digits": "49", 
          "label": "Point-to-Point Line of Sight (LOS)", 
          "id": "POINT_POINT_LOS_MOD", 
          "graphic": "52491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Instrumentation", 
          "id": "INSTRUMENTATION_MOD", 
          "graphic": "52501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Range Only", 
          "id": "RANGE_ONLY_MOD", 
          "graphic": "52511.svg"
        }, 
        {
          "digits": "54", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "52541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Surface Search", 
          "id": "SURFACE_SEARCH_MOD", 
          "graphic": "52551.svg"
        }, 
        {
          "digits": "56", 
          "label": "Shell Tracking", 
          "id": "SHELL_TRACKING_MOD", 
          "graphic": "52561.svg"
        }, 
        {
          "digits": "57", 
          "label": "Satellite Uplink", 
          "id": "SATELLITE_UPLINK_MOD", 
          "graphic": "52571.svg"
        }, 
        {
          "digits": "58", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "52581.svg"
        }, 
        {
          "digits": "59", 
          "label": "Target Illumination", 
          "id": "TARGET_ILLUMINATION_MOD", 
          "graphic": "52591.svg"
        }, 
        {
          "digits": "60", 
          "label": "Tropospheric Scatter", 
          "id": "TROPOSPHERIC_SCATTER_MOD", 
          "graphic": "52601.svg"
        }, 
        {
          "digits": "61", 
          "label": "Target Tracking", 
          "id": "TARGET_TRACKING_MOD", 
          "graphic": "52611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Unknown", 
          "id": "UNKNOWN_MOD", 
          "graphic": "52621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Video Remoting", 
          "id": "VIDEO_REMOTING_MOD", 
          "graphic": "52631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Experimental", 
          "id": "EXPERIMENTAL_MOD", 
          "graphic": "52641.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SigInt", 
        "modifierOnes": "Appendices/SigInt/mod1"
      }
    }, 
    {
      "digits": "53", 
      "label": "Signals Intelligence - Surface", 
      "id": "SS_SIGINT_SURFACE", 
      "dimensionId": "SEA_SURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Signal Intercept", 
          "id": "SIGNAL_INTERCEPT", 
          "remarks": "There is no icon associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Communications", 
              "id": "COMMUNICATIONS", 
              "graphic": "53110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Jammer", 
              "id": "JAMMER", 
              "graphic": "53110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "53110300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "01", 
          "label": "Anti-Aircraft Fire Control", 
          "id": "ANTI_AIRCRAFT_FIRE_CONTROL_MOD", 
          "graphic": "53011.svg"
        }, 
        {
          "digits": "06", 
          "label": "Air Traffic Control", 
          "id": "AIR_TRAFFIC_CONTROL_MOD", 
          "graphic": "53061.svg"
        }, 
        {
          "digits": "07", 
          "label": "Beacon Transponder (not IFF)", 
          "id": "BEACON_TRANSPONDER_MOD", 
          "graphic": "53071.svg"
        }, 
        {
          "digits": "09", 
          "label": "Controlled Approach", 
          "id": "CONTROLLED_APPROACH_MOD", 
          "graphic": "53091.svg"
        }, 
        {
          "digits": "10", 
          "label": "Controlled Intercept", 
          "id": "CONTROLLED_INTERCEPT_MOD", 
          "graphic": "53101.svg"
        }, 
        {
          "digits": "11", 
          "label": "Cellular/Mobile", 
          "id": "CELLULAR_MOBILE_MOD", 
          "graphic": "53111.svg"
        }, 
        {
          "digits": "13", 
          "label": "Decoy/Mimic", 
          "id": "DECOY_MIMIC_MOD", 
          "graphic": "53131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Data Transmission", 
          "id": "DATA_TRANSMISSION_MOD", 
          "graphic": "53141.svg"
        }, 
        {
          "digits": "16", 
          "label": "Early Warning", 
          "id": "EARLY_WARNING_MOD", 
          "graphic": "53161.svg"
        }, 
        {
          "digits": "17", 
          "label": "Fire Control", 
          "id": "FIRE_CONTROL_MOD", 
          "graphic": "53171.svg"
        }, 
        {
          "digits": "19", 
          "label": "Height Finding", 
          "id": "HEIGHT_FINDING_MOD", 
          "graphic": "53191.svg"
        }, 
        {
          "digits": "21", 
          "label": "Identification Friend or Foe (Interrogator)", 
          "id": "IFF_INTERROGATOR_MOD", 
          "graphic": "53211.svg"
        }, 
        {
          "digits": "22", 
          "label": "Instrument Landing System", 
          "id": "INSTRUMENT_LANDING_SYSTEM_MOD", 
          "graphic": "53221.svg"
        }, 
        {
          "digits": "24", 
          "label": "Identification Friend or Foe (Transponder)", 
          "id": "IFF_TRANSPONDER_MOD", 
          "graphic": "53241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Barrage Jammer", 
          "id": "BARRAGE_JAMMER_MOD", 
          "graphic": "53251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Click Jammer", 
          "id": "CLICK_JAMMER_MOD", 
          "graphic": "53261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Deceptive Jammer", 
          "id": "DECEPTIVE_JAMMER_MOD", 
          "graphic": "53271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Frequency Swept Jammer", 
          "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
          "graphic": "53281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Jammer (General)", 
          "id": "JAMMER_GENERAL_MOD", 
          "graphic": "53291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Noise Jammer", 
          "id": "NOISE_JAMMER_MOD", 
          "graphic": "53301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pulsed Jammer", 
          "id": "PULSED_JAMMER_MOD", 
          "graphic": "53311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Repeater Jammer", 
          "id": "REPEATER_JAMMER_MOD", 
          "graphic": "53321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Spot Noise Jammer", 
          "id": "SPOT_NOISE_JAMMER_MOD", 
          "graphic": "53331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Transponder Jammer", 
          "id": "TRANSPONDER_JAMMER_MOD", 
          "graphic": "53341.svg"
        }, 
        {
          "digits": "35", 
          "label": "Missile Acquisition", 
          "id": "MISSILE_ACQUISITION_MOD", 
          "graphic": "53351.svg"
        }, 
        {
          "digits": "36", 
          "label": "Missile Control", 
          "id": "MISSILE_CONTROL_MOD", 
          "graphic": "53361.svg"
        }, 
        {
          "digits": "38", 
          "label": "Meteorological", 
          "id": "METEOROLOGICAL_MOD", 
          "graphic": "53381.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multi-Function", 
          "id": "MULTI_FUNCTION_MOD", 
          "graphic": "53391.svg", 
          "remarks": "Two or more of EW, TA, TT, MG, TI"
        }, 
        {
          "digits": "40", 
          "label": "Missile Guidance", 
          "id": "MISSILE_GUIDANCE_MOD", 
          "graphic": "53401.svg"
        }, 
        {
          "digits": "42", 
          "label": "Missile Tracking", 
          "id": "MISSILE_TRACKING_MOD", 
          "graphic": "53421.svg"
        }, 
        {
          "digits": "43", 
          "label": "Navigational/General", 
          "id": "NAVIGATIONAL_GENERAL_MOD", 
          "graphic": "53431.svg"
        }, 
        {
          "digits": "44", 
          "label": "Navigational/Distance Measuring Equipment", 
          "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
          "graphic": "53441.svg"
        }, 
        {
          "digits": "45", 
          "label": "Navigation/Terrain Following", 
          "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
          "graphic": "53451.svg"
        }, 
        {
          "digits": "46", 
          "label": "Navigational/Weather Avoidance", 
          "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
          "graphic": "53461.svg"
        }, 
        {
          "digits": "47", 
          "label": "Omni-Line of Sight (LOS)", 
          "id": "OMNI_LOS_MOD", 
          "graphic": "53471.svg"
        }, 
        {
          "digits": "49", 
          "label": "Point-to-Point Line of Sight (LOS)", 
          "id": "POINT_POINT_LOS_MOD", 
          "graphic": "53491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Instrumentation", 
          "id": "INSTRUMENTATION_MOD", 
          "graphic": "53501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Range Only", 
          "id": "RANGE_ONLY_MOD", 
          "graphic": "53511.svg"
        }, 
        {
          "digits": "52", 
          "label": "Sonobuoy", 
          "id": "SONOBUOY_MOD", 
          "graphic": "53521.svg"
        }, 
        {
          "digits": "54", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "53541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Surface Search", 
          "id": "SURFACE_SEARCH_MOD", 
          "graphic": "53551.svg"
        }, 
        {
          "digits": "57", 
          "label": "Satellite Uplink", 
          "id": "SATELLITE_UPLINK_MOD", 
          "graphic": "53571.svg"
        }, 
        {
          "digits": "58", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "53581.svg"
        }, 
        {
          "digits": "59", 
          "label": "Target Illumination", 
          "id": "TARGET_ILLUMINATION_MOD", 
          "graphic": "53591.svg"
        }, 
        {
          "digits": "61", 
          "label": "Target Tracking", 
          "id": "TARGET_TRACKING_MOD", 
          "graphic": "53611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Unknown", 
          "id": "UNKNOWN_MOD", 
          "graphic": "53621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Video Remoting", 
          "id": "VIDEO_REMOTING_MOD", 
          "graphic": "53631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Experimental", 
          "id": "EXPERIMENTAL_MOD", 
          "graphic": "53641.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SigInt", 
        "modifierOnes": "Appendices/SigInt/mod1"
      }
    }, 
    {
      "digits": "54", 
      "label": "Signals Intelligence - Subsurface", 
      "id": "SS_SIGINT_SUBSURFACE", 
      "dimensionId": "SEA_SUBSURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Signal Intercept", 
          "id": "SIGNAL_INTERCEPT", 
          "remarks": "There is no icon associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Communications", 
              "id": "COMMUNICATIONS", 
              "graphic": "54110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Jammer", 
              "id": "JAMMER", 
              "graphic": "54110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Radar", 
              "id": "RADAR", 
              "graphic": "54110300.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [
        {
          "digits": "07", 
          "label": "Beacon Transponder (not IFF)", 
          "id": "BEACON_TRANSPONDER_MOD", 
          "graphic": "54071.svg"
        }, 
        {
          "digits": "11", 
          "label": "Cellular/Mobile", 
          "id": "CELLULAR_MOBILE_MOD", 
          "graphic": "54111.svg"
        }, 
        {
          "digits": "13", 
          "label": "Decoy/Mimic", 
          "id": "DECOY_MIMIC_MOD", 
          "graphic": "54131.svg"
        }, 
        {
          "digits": "14", 
          "label": "Data Transmission", 
          "id": "DATA_TRANSMISSION_MOD", 
          "graphic": "54141.svg"
        }, 
        {
          "digits": "16", 
          "label": "Early Warning", 
          "id": "EARLY_WARNING_MOD", 
          "graphic": "54161.svg"
        }, 
        {
          "digits": "21", 
          "label": "Identification Friend or Foe (Interrogator)", 
          "id": "IFF_INTERROGATOR_MOD", 
          "graphic": "54211.svg"
        }, 
        {
          "digits": "24", 
          "label": "Identification Friend or Foe (Transponder)", 
          "id": "IFF_TRANSPONDER_MOD", 
          "graphic": "54241.svg"
        }, 
        {
          "digits": "25", 
          "label": "Barrage Jammer", 
          "id": "BARRAGE_JAMMER_MOD", 
          "graphic": "54251.svg"
        }, 
        {
          "digits": "26", 
          "label": "Click Jammer", 
          "id": "CLICK_JAMMER_MOD", 
          "graphic": "54261.svg"
        }, 
        {
          "digits": "27", 
          "label": "Deceptive Jammer", 
          "id": "DECEPTIVE_JAMMER_MOD", 
          "graphic": "54271.svg"
        }, 
        {
          "digits": "28", 
          "label": "Frequency Swept Jammer", 
          "id": "FREQUENCY_SWEPT_JAMMER_MOD", 
          "graphic": "54281.svg"
        }, 
        {
          "digits": "29", 
          "label": "Jammer (General)", 
          "id": "JAMMER_GENERAL_MOD", 
          "graphic": "54291.svg"
        }, 
        {
          "digits": "30", 
          "label": "Noise Jammer", 
          "id": "NOISE_JAMMER_MOD", 
          "graphic": "54301.svg"
        }, 
        {
          "digits": "31", 
          "label": "Pulsed Jammer", 
          "id": "PULSED_JAMMER_MOD", 
          "graphic": "54311.svg"
        }, 
        {
          "digits": "32", 
          "label": "Repeater Jammer", 
          "id": "REPEATER_JAMMER_MOD", 
          "graphic": "54321.svg"
        }, 
        {
          "digits": "33", 
          "label": "Spot Noise Jammer", 
          "id": "SPOT_NOISE_JAMMER_MOD", 
          "graphic": "54331.svg"
        }, 
        {
          "digits": "34", 
          "label": "Transponder Jammer", 
          "id": "TRANSPONDER_JAMMER_MOD", 
          "graphic": "54341.svg"
        }, 
        {
          "digits": "36", 
          "label": "Missile Control", 
          "id": "MISSILE_CONTROL_MOD", 
          "graphic": "54361.svg"
        }, 
        {
          "digits": "39", 
          "label": "Multi-Function", 
          "id": "MULTI_FUNCTION_MOD", 
          "graphic": "54391.svg", 
          "remarks": "Two or more of EW, TA, TT, MG, TI"
        }, 
        {
          "digits": "42", 
          "label": "Missile Tracking", 
          "id": "MISSILE_TRACKING_MOD", 
          "graphic": "54421.svg"
        }, 
        {
          "digits": "43", 
          "label": "Navigational/General", 
          "id": "NAVIGATIONAL_GENERAL_MOD", 
          "graphic": "54431.svg"
        }, 
        {
          "digits": "44", 
          "label": "Navigational/Distance Measuring Equipment", 
          "id": "NAVIGATIONAL_DISTANCE_MEASURING_EQUIPMENT_MOD", 
          "graphic": "54441.svg"
        }, 
        {
          "digits": "45", 
          "label": "Navigation/Terrain Following", 
          "id": "NAVIGATION_TERRAIN_FOLLOWING_MOD", 
          "graphic": "54451.svg"
        }, 
        {
          "digits": "46", 
          "label": "Navigational/Weather Avoidance", 
          "id": "NAVIGATIONAL_WEATHER_AVOIDANCE_MOD", 
          "graphic": "54461.svg"
        }, 
        {
          "digits": "47", 
          "label": "Omni-Line of Sight (LOS)", 
          "id": "OMNI_LOS_MOD", 
          "graphic": "54471.svg"
        }, 
        {
          "digits": "49", 
          "label": "Point-to-Point Line of Sight (LOS)", 
          "id": "POINT_POINT_LOS_MOD", 
          "graphic": "54491.svg"
        }, 
        {
          "digits": "50", 
          "label": "Instrumentation", 
          "id": "INSTRUMENTATION_MOD", 
          "graphic": "54501.svg"
        }, 
        {
          "digits": "51", 
          "label": "Range Only", 
          "id": "RANGE_ONLY_MOD", 
          "graphic": "54511.svg"
        }, 
        {
          "digits": "52", 
          "label": "Sonobuoy", 
          "id": "SONOBUOY_MOD", 
          "graphic": "54521.svg"
        }, 
        {
          "digits": "54", 
          "label": "Space", 
          "id": "SPACE_MOD", 
          "graphic": "54541.svg"
        }, 
        {
          "digits": "55", 
          "label": "Surface Search", 
          "id": "SURFACE_SEARCH_MOD", 
          "graphic": "54551.svg"
        }, 
        {
          "digits": "57", 
          "label": "Satellite Uplink", 
          "id": "SATELLITE_UPLINK_MOD", 
          "graphic": "54571.svg"
        }, 
        {
          "digits": "58", 
          "label": "Target Acquisition", 
          "id": "TARGET_ACQUISITION_MOD", 
          "graphic": "54581.svg"
        }, 
        {
          "digits": "61", 
          "label": "Target Tracking", 
          "id": "TARGET_TRACKING_MOD", 
          "graphic": "54611.svg"
        }, 
        {
          "digits": "62", 
          "label": "Unknown", 
          "id": "UNKNOWN_MOD", 
          "graphic": "54621.svg"
        }, 
        {
          "digits": "63", 
          "label": "Video Remoting", 
          "id": "VIDEO_REMOTING_MOD", 
          "graphic": "54631.svg"
        }, 
        {
          "digits": "64", 
          "label": "Experimental", 
          "id": "EXPERIMENTAL_MOD", 
          "graphic": "54641.svg"
        }
      ], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/SigInt", 
        "modifierOnes": "Appendices/SigInt/mod1"
      }
    }, 
    {
      "digits": "60", 
      "label": "Cyberspace", 
      "id": "SS_CYBERSPACE", 
      "dimensionId": "AIR SPACE LAND_EQUIPMENT SEA_SURFACE SEA_SUBSURFACE", 
      "geometry": "POINT", 
      "entities": [
        {
          "digits": "11", 
          "label": "Botnet", 
          "id": "BOTNET", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Command and Control (C2)", 
              "id": "COMMAND_AND_CONTROL_C2", 
              "graphic": "60110100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Herder", 
              "id": "HERDER", 
              "graphic": "60110200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Callback Domain", 
              "id": "CALLBACK_DOMAIN", 
              "graphic": "60110300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Zombie", 
              "id": "ZOMBIE", 
              "graphic": "60110400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "12", 
          "label": "Infection", 
          "id": "INFECTION", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Advanced Persistent Threat (APT)", 
              "id": "ADVANCED_PERSISTENT_THREAT_APT", 
              "graphic": "60120100.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "APT with C2", 
                  "id": "APT_WITH_C2", 
                  "graphic": "60120101.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "APT with Self Propagation", 
                  "id": "APT_WITH_SELF_PROPAGATION", 
                  "graphic": "60120102.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "APT with C2 and Self Propagation", 
                  "id": "APT_WITH_C2_AND_SELF_PROPAGATION", 
                  "graphic": "60120103.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "APT Other", 
                  "id": "APT_OTHER", 
                  "graphic": "60120104.svg"
                }
              ]
            }, 
            {
              "digits": "02", 
              "label": "Non-Advanced Persistent Threat (NAPT)", 
              "id": "NON_ADVANCED_PERSISTENT_THREAT_NAPT", 
              "graphic": "60120200.svg", 
              "entitySubTypes": [
                {
                  "digits": "01", 
                  "label": "NAPT with C2", 
                  "id": "NAPT_WITH_C2", 
                  "graphic": "60120201.svg"
                }, 
                {
                  "digits": "02", 
                  "label": "NAPT with Self Propagation", 
                  "id": "NAPT_WITH_SELF_PROPAGATION", 
                  "graphic": "60120202.svg"
                }, 
                {
                  "digits": "03", 
                  "label": "NAPT with C2 and Self Propagation", 
                  "id": "NAPT_WITH_C2_AND_SELF_PROPAGATION", 
                  "graphic": "60120203.svg"
                }, 
                {
                  "digits": "04", 
                  "label": "NAPT Other", 
                  "id": "NAPT_OTHER", 
                  "graphic": "60120204.svg"
                }
              ]
            }
          ]
        }, 
        {
          "digits": "13", 
          "label": "Health and Status", 
          "id": "HEALTH_AND_STATUS", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Normal", 
              "id": "NORMAL", 
              "graphic": "60130100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Network Outage", 
              "id": "NETWORK_OUTAGE", 
              "graphic": "60130200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Unknown", 
              "id": "UNKNOWN", 
              "graphic": "60130300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Impaired", 
              "id": "IMPAIRED", 
              "graphic": "60130400.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "14", 
          "label": "Device Type", 
          "id": "DEVICE_TYPE", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Core Router", 
              "id": "CORE_ROUTER", 
              "graphic": "60140100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Router", 
              "id": "ROUTER", 
              "graphic": "60140200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Cross Domain Solution", 
              "id": "CROSS_DOMAIN_SOLUTION", 
              "graphic": "60140300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Mail Server", 
              "id": "MAIL_SERVER", 
              "graphic": "60140400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Web Server", 
              "id": "WEB_SERVER", 
              "graphic": "60140500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Domain Server", 
              "id": "DOMAIN_SERVER", 
              "graphic": "60140600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "File Server", 
              "id": "FILE_SERVER", 
              "graphic": "60140700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Peer-to-Peer Node", 
              "id": "PEER_TO_PEER_NODE", 
              "graphic": "60140800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Firewall", 
              "id": "FIREWALL", 
              "graphic": "60140900.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "10", 
              "label": "Switch", 
              "id": "SWITCH", 
              "graphic": "60141000.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "11", 
              "label": "Host", 
              "id": "HOST", 
              "graphic": "60141100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "12", 
              "label": "Virtual Private Network (VPN)", 
              "id": "VIRTUAL_PRIVATE_NETWORK_VPN", 
              "graphic": "60141200.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "15", 
          "label": "Device Domain", 
          "id": "DEVICE_DOMAIN", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Department of Defense (DoD)", 
              "id": "DEPARTMENT_OF_DEFENSE_DOD", 
              "graphic": "60150100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Government", 
              "id": "GOVERNMENT", 
              "graphic": "60150200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Contractor", 
              "id": "CONTRACTOR", 
              "graphic": "60150300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Supervisory Control and Data Acquisition (SCADA)", 
              "id": "SUPERVISORY_CONTROL_AND_DATA_ACQUISITION_SCADA", 
              "graphic": "60150400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Non-Government", 
              "id": "NON_GOVERNMENT", 
              "graphic": "60150500.svg", 
              "entitySubTypes": []
            }
          ]
        }, 
        {
          "digits": "16", 
          "label": "Effect", 
          "id": "EFFECT", 
          "remarks": "There is no symbol associated with this entity.", 
          "entityTypes": [
            {
              "digits": "01", 
              "label": "Infection", 
              "id": "CYBER_INFECTION", 
              "graphic": "60160100.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "02", 
              "label": "Degradation", 
              "id": "DEGRADATION", 
              "graphic": "60160200.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "03", 
              "label": "Data Spoofing", 
              "id": "DATA_SPOOFING", 
              "graphic": "60160300.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "04", 
              "label": "Data Manipulation", 
              "id": "DATA_MANIPULATION", 
              "graphic": "60160400.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "05", 
              "label": "Exfiltration", 
              "id": "EXFILTRATION", 
              "graphic": "60160500.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "06", 
              "label": "Power Outage", 
              "id": "POWER_OUTAGE", 
              "graphic": "60160600.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "07", 
              "label": "Network Outage", 
              "id": "CYBER_NETWORK_OUTAGE", 
              "graphic": "60160700.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "08", 
              "label": "Service Outage", 
              "id": "SERVICE_OUTAGE", 
              "graphic": "60160800.svg", 
              "entitySubTypes": []
            }, 
            {
              "digits": "09", 
              "label": "Device Outage", 
              "id": "DEVICE_OUTAGE", 
              "graphic": "60160900.svg", 
              "entitySubTypes": []
            }
          ]
        }
      ], 
      "sectorOneModifiers": [], 
      "sectorTwoModifiers": [], 
      "graphicFolder": {
        "entities": "Appendices/Cyberspace"
      }
    }
  ], 
  "statuses": [
    {
      "digits": "0", 
      "id": "PRESENT", 
      "label": "Present"
    }, 
    {
      "digits": "1", 
      "id": "PLANNED", 
      "label": "Planned/Anticipated/Suspect", 
      "labelAlias": "Planned"
    }, 
    {
      "digits": "2", 
      "id": "FULLY_CAPABLE", 
      "label": "Present/Fully Capable", 
      "labelAlias": "Fully Capable", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "OCA/043022.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/040522.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/040022.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/042022.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/041522.svg"
          }, 
          "AIR": {
            "graphic": "OCA/040122.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/041022.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/043522.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/044022.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "OCA/063022.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/060522.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/060022.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/062022.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/061522.svg"
          }, 
          "AIR": {
            "graphic": "OCA/060122.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/061022.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/063522.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/064022.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "OCA/033022.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/030522.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/030022.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/032022.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/031522.svg"
          }, 
          "AIR": {
            "graphic": "OCA/030122.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/031022.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/033522.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/034022.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "OCA/013022.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/010522.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/010022.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/012022.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/011522.svg"
          }, 
          "AIR": {
            "graphic": "OCA/010122.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/011022.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/013522.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/014022.svg"
          }
        }
      }
    }, 
    {
      "digits": "3", 
      "id": "DAMAGED", 
      "label": "Present/Damaged", 
      "labelAlias": "Damaged", 
      "graphic": "3.svg", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "OCA/043032.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/040532.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/040032.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/042032.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/041532.svg"
          }, 
          "AIR": {
            "graphic": "OCA/040132.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/041032.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/043532.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/044032.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "OCA/063032.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/060532.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/060032.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/062032.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/061532.svg"
          }, 
          "AIR": {
            "graphic": "OCA/060132.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/061032.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/063532.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/064032.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "OCA/033032.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/030532.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/030032.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/032032.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/031532.svg"
          }, 
          "AIR": {
            "graphic": "OCA/030132.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/031032.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/033532.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/034032.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "OCA/013032.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/010532.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/010032.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/012032.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/011532.svg"
          }, 
          "AIR": {
            "graphic": "OCA/010132.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/011032.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/013532.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/014032.svg"
          }
        }
      }
    }, 
    {
      "digits": "4", 
      "id": "DESTROYED", 
      "label": "Present/Destroyed", 
      "labelAlias": "Destroyed", 
      "graphic": "4.svg", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "OCA/043042.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/040542.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/040042.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/042042.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/041542.svg"
          }, 
          "AIR": {
            "graphic": "OCA/040142.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/041042.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/043542.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/044042.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "OCA/063042.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/060542.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/060042.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/062042.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/061542.svg"
          }, 
          "AIR": {
            "graphic": "OCA/060142.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/061042.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/063542.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/064042.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "OCA/033042.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/030542.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/030042.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/032042.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/031542.svg"
          }, 
          "AIR": {
            "graphic": "OCA/030142.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/031042.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/033542.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/034042.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "OCA/013042.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/010542.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/010042.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/012042.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/011542.svg"
          }, 
          "AIR": {
            "graphic": "OCA/010142.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/011042.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/013542.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/014042.svg"
          }
        }
      }
    }, 
    {
      "digits": "5", 
      "id": "FULL", 
      "label": "Present/Full to Capacity", 
      "labelAlias": "Full", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "OCA/043052.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/040552.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/040052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/042052.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/041552.svg"
          }, 
          "AIR": {
            "graphic": "OCA/040152.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/041052.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/043552.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/044052.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "OCA/063052.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/060552.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/060052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/062052.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/061552.svg"
          }, 
          "AIR": {
            "graphic": "OCA/060152.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/061052.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/063552.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/064052.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "OCA/033052.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/030552.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/030052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/032052.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/031552.svg"
          }, 
          "AIR": {
            "graphic": "OCA/030152.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/031052.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/033552.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/034052.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "OCA/013052.svg"
          }, 
          "SPACE": {
            "graphic": "OCA/010552.svg"
          }, 
          "UNKNOWN": {
            "graphic": "OCA/010052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "OCA/012052.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "OCA/011552.svg"
          }, 
          "AIR": {
            "graphic": "OCA/010152.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "OCA/011052.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "OCA/013552.svg"
          }, 
          "ACTIVITY": {
            "graphic": "OCA/014052.svg"
          }
        }
      }
    }
  ], 
  "hqtfDummies": [
    {
      "digits": "0", 
      "id": "NA", 
      "label": "Not Applicable"
    }, 
    {
      "digits": "1", 
      "id": "FEINT_DUMMY", 
      "label": "Feint/Dummy", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4301.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4051.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4201.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4151.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4011.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4101.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4351.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6301.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6051.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6201.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6151.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6011.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6101.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6351.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3301.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3051.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3201.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3151.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3011.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3101.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3351.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1301.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1051.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1201.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1151.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1011.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1101.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1351.svg"
          }
        }
      }
    }, 
    {
      "digits": "2", 
      "id": "HQ", 
      "label": "Headquarters", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4302.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4202.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4152.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4012.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4102.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4352.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6302.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6202.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6152.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6012.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6102.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6352.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3302.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3202.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3152.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3012.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3102.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3352.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1302.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1052.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1202.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1152.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1012.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1102.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1352.svg"
          }
        }
      }
    }, 
    {
      "digits": "3", 
      "id": "FEINT_DUMMY_HQ", 
      "label": "Feint/Dummy Headquarters", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4303.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4053.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4203.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4153.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4013.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4103.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4353.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6303.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6053.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6203.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6153.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6013.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6103.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6353.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3303.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3053.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3203.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3153.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3013.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3103.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3353.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1303.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1053.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1203.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1153.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1013.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1103.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1353.svg"
          }
        }
      }
    }, 
    {
      "digits": "4", 
      "id": "TF", 
      "label": "Task Force", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4304.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4054.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4204.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4154.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4014.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4104.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4354.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6304.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6054.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6204.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6154.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6014.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6104.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6354.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3304.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3054.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3204.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3154.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3014.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3104.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3354.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1304.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1054.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1204.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1154.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1014.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1104.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1354.svg"
          }
        }
      }
    }, 
    {
      "digits": "5", 
      "id": "FEINT_DUMMY_TF", 
      "label": "Feint/Dummy Task Force", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4305.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4055.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4205.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4155.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4015.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4105.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4355.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6305.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6055.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6205.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6155.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6015.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6105.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6355.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3305.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3055.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3205.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3155.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3015.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3105.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3355.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1305.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1055.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1205.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1155.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1015.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1105.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1355.svg"
          }
        }
      }
    }, 
    {
      "digits": "6", 
      "id": "TF_HQ", 
      "label": "Task Force Headquarters", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4306.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4056.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4206.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4156.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4016.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4106.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4356.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6306.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6056.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6206.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6156.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6016.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6106.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6356.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3306.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3056.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3206.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3156.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3016.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3106.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3356.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1306.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1056.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1206.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1156.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1016.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1106.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1356.svg"
          }
        }
      }
    }, 
    {
      "digits": "7", 
      "id": "FEINT_DUMMY_TF_HQ", 
      "label": "Feint/Dummy Task Force Headquarters", 
      "labelAlias": "Feint/Dummy Task Force HQ", 
      "graphics": {
        "SIG_NEUTRAL": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/4307.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/4057.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/4207.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/4157.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/4017.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/4107.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/4357.svg"
          }
        }, 
        "SIG_HOSTILE": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/6307.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/6057.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/6207.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/6157.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/6017.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/6107.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/6357.svg"
          }
        }, 
        "SIG_FRIEND": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/3307.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/3057.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/3207.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/3157.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/3017.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/3107.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/3357.svg"
          }
        }, 
        "SIG_UNKNOWN": {
          "SEA_SURFACE": {
            "graphic": "HQTFFD/1307.svg"
          }, 
          "SPACE": {
            "graphic": "HQTFFD/1057.svg"
          }, 
          "LAND_INSTALLATION": {
            "graphic": "HQTFFD/1207.svg"
          }, 
          "LAND_EQUIPMENT": {
            "graphic": "HQTFFD/1157.svg"
          }, 
          "AIR": {
            "graphic": "HQTFFD/1017.svg"
          }, 
          "LAND_UNIT": {
            "graphic": "HQTFFD/1107.svg"
          }, 
          "SEA_SUBSURFACE": {
            "graphic": "HQTFFD/1357.svg"
          }
        }
      }
    }
  ], 
  "amplifier": [
    {
      "digits": "0", 
      "label": "Not Applicable", 
      "id": "NA", 
      "descriptors": [
        {
          "digits": "0", 
          "label": "Not Applicable", 
          "id": "NA"
        }
      ]
    }, 
    {
      "digits": "1", 
      "label": "Echelon at brigade and below", 
      "id": "ECHELON_BDE_BELOW", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Team/Crew", 
          "id": "TEAM_CREW", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/411.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/611.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/311.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/111.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Squad", 
          "id": "SQUAD", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/412.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/612.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/312.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/112.svg"
            }
          }
        }, 
        {
          "digits": "3", 
          "label": "Section", 
          "id": "SEC", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/413.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/613.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/313.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/113.svg"
            }
          }
        }, 
        {
          "digits": "4", 
          "label": "Platoon/Detachment", 
          "id": "PLT_DETACHMENT", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/414.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/614.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/314.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/114.svg"
            }
          }
        }, 
        {
          "digits": "5", 
          "label": "Company/Battery/Troop", 
          "id": "CPY_BTY_TRP", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/415.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/615.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/315.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/115.svg"
            }
          }
        }, 
        {
          "digits": "6", 
          "label": "Battalion/Squadron", 
          "id": "BN_SQUADRON", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/416.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/616.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/316.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/116.svg"
            }
          }
        }, 
        {
          "digits": "7", 
          "label": "Regiment/Group", 
          "id": "REGT_GRP", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/417.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/617.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/317.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/117.svg"
            }
          }
        }, 
        {
          "digits": "8", 
          "label": "Brigade", 
          "id": "BDE", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/418.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/618.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/318.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/118.svg"
            }
          }
        }
      ]
    }, 
    {
      "digits": "2", 
      "label": "Echelon at division and above", 
      "id": "ECHELON_DIV_ABOVE", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Division", 
          "id": "DIV", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/421.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/621.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/321.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/121.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Corps/MEF", 
          "id": "CORPS_MEF", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/422.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/622.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/322.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/122.svg"
            }
          }
        }, 
        {
          "digits": "3", 
          "label": "Army", 
          "id": "ARMY", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/423.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/623.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/323.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/123.svg"
            }
          }
        }, 
        {
          "digits": "4", 
          "label": "Army Group/Front", 
          "id": "ARMY_GROUP_FRONT", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/424.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/624.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/324.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/124.svg"
            }
          }
        }, 
        {
          "digits": "5", 
          "label": "Region/Theater", 
          "id": "REGION_THEATER", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/425.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/625.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/325.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/125.svg"
            }
          }
        }, 
        {
          "digits": "6", 
          "label": "Command", 
          "id": "COMMAND", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Echelon/426.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Echelon/626.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Echelon/326.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Echelon/126.svg"
            }
          }
        }
      ]
    }, 
    {
      "digits": "3", 
      "label": "Equipment mobility on land", 
      "id": "EQUIP_MOBILITY_LAND", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Wheeled limited cross country", 
          "id": "WHEEL_LIMIT_COUNTRY", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/431.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/631.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/331.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/131.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Wheeled cross country", 
          "id": "WHEEL_COUNTRY", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/432.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/632.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/332.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/132.svg"
            }
          }
        }, 
        {
          "digits": "3", 
          "label": "Tracked", 
          "id": "TRACKED", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/433.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/633.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/333.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/133.svg"
            }
          }
        }, 
        {
          "digits": "4", 
          "label": "Wheeled and tracked combination", 
          "id": "WHEEL_TRACK", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/434.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/634.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/334.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/134.svg"
            }
          }
        }, 
        {
          "digits": "5", 
          "label": "Towed", 
          "id": "TOWED", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/435.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/635.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/335.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/135.svg"
            }
          }
        }, 
        {
          "digits": "6", 
          "label": "Rail", 
          "id": "RAIL", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/436.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/636.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/336.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/136.svg"
            }
          }
        }, 
        {
          "digits": "7", 
          "label": "Pack animals", 
          "id": "PACK_ANIMALS", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/437.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/637.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/337.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/137.svg"
            }
          }
        }
      ]
    }, 
    {
      "digits": "4", 
      "label": "Equipment mobility on snow", 
      "id": "EQUIP_MOBILITY_SNOW", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Over snow (prime mover)", 
          "id": "OVER_SNOW", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/441.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/641.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/341.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/141.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Sled", 
          "id": "SLED", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/442.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/642.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/342.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/142.svg"
            }
          }
        }
      ]
    }, 
    {
      "digits": "5", 
      "label": "Equipment mobility on water", 
      "id": "EQUIP_MOBILITY_WATER", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Barge", 
          "id": "BARGE", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/451.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/651.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/351.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/151.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Amphibious", 
          "id": "AMPHIB", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/452.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/652.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/352.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/152.svg"
            }
          }
        }
      ]
    }, 
    {
      "digits": "6", 
      "label": "Naval towed array", 
      "id": "TOWED_ARRAYS", 
      "descriptors": [
        {
          "digits": "1", 
          "label": "Short towed array", 
          "id": "SHORT_TOWED_ARRAY", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/461.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/661.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/361.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/161.svg"
            }
          }
        }, 
        {
          "digits": "2", 
          "label": "Long towed array", 
          "id": "LONG_TOWED_ARRAY", 
          "graphics": {
            "SIG_NEUTRAL": {
              "graphic": "Amplifier/462.svg"
            }, 
            "SIG_HOSTILE": {
              "graphic": "Amplifier/662.svg"
            }, 
            "SIG_FRIEND": {
              "graphic": "Amplifier/362.svg"
            }, 
            "SIG_UNKNOWN": {
              "graphic": "Amplifier/162.svg"
            }
          }
        }
      ]
    }
  ], 
  "affiliations": {
    "SIMULATION": {
      "SEA_SURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_030_0.svg", 
          "civilianGraphic": "Frames/Sim/2_030_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_130_0.svg", 
          "plannedGraphic": "Frames/Sim/2_130_1.svg", 
          "civilianGraphic": "Frames/Sim/2_130_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_130_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_330_0.svg", 
          "plannedGraphic": "Frames/Sim/2_330_1.svg", 
          "civilianGraphic": "Frames/Sim/2_330_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_330_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_430_0.svg", 
          "plannedGraphic": "Frames/Sim/2_430_1.svg", 
          "civilianGraphic": "Frames/Sim/2_430_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_430_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_630_0.svg", 
          "plannedGraphic": "Frames/Sim/2_630_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_230_0.svg", 
          "civilianGraphic": "Frames/Sim/2_230_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_530_0.svg"
        }
      }, 
      "CONTROL_MEASURE": {
        "SI_PENDING": {}, 
        "SI_UNKNOWN": {}, 
        "SI_FRIEND": {}, 
        "SI_NEUTRAL": {}, 
        "SI_HOSTILE_FAKER": {}, 
        "SI_ASSUMED_FRIEND": {}, 
        "SI_SUSPECT_JOKER": {}
      }, 
      "SPACE": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_005_0.svg", 
          "civilianGraphic": "Frames/Sim/2_005_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_105_0.svg", 
          "plannedGraphic": "Frames/Sim/2_105_1.svg", 
          "civilianGraphic": "Frames/Sim/2_105_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_105_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_305_0.svg", 
          "plannedGraphic": "Frames/Sim/2_305_1.svg", 
          "civilianGraphic": "Frames/Sim/2_305_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_305_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_405_0.svg", 
          "plannedGraphic": "Frames/Sim/2_405_1.svg", 
          "civilianGraphic": "Frames/Sim/2_405_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_405_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_605_0.svg", 
          "plannedGraphic": "Frames/Sim/2_605_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_205_0.svg", 
          "civilianGraphic": "Frames/Sim/2_205_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_505_0.svg"
        }
      }, 
      "UNKNOWN": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_000_0.svg", 
          "civilianGraphic": "Frames/Sim/2_000_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_100_0.svg", 
          "plannedGraphic": "Frames/Sim/2_100_1.svg", 
          "civilianGraphic": "Frames/Sim/2_100_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_100_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_300_0.svg", 
          "plannedGraphic": "Frames/Sim/2_300_1.svg", 
          "civilianGraphic": "Frames/Sim/2_300_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_300_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_400_0.svg", 
          "plannedGraphic": "Frames/Sim/2_400_1.svg", 
          "civilianGraphic": "Frames/Sim/2_400_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_400_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_600_0.svg", 
          "plannedGraphic": "Frames/Sim/2_600_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_200_0.svg", 
          "civilianGraphic": "Frames/Sim/2_200_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_500_0.svg"
        }
      }, 
      "LAND_INSTALLATION": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_020_0.svg", 
          "civilianGraphic": "Frames/Sim/2_020_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_120_0.svg", 
          "plannedGraphic": "Frames/Sim/2_120_1.svg", 
          "civilianGraphic": "Frames/Sim/2_120_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_120_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_320_0.svg", 
          "plannedGraphic": "Frames/Sim/2_320_1.svg", 
          "civilianGraphic": "Frames/Sim/2_320_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_320_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_420_0.svg", 
          "plannedGraphic": "Frames/Sim/2_420_1.svg", 
          "civilianGraphic": "Frames/Sim/2_420_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_420_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_620_0.svg", 
          "plannedGraphic": "Frames/Sim/2_620_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_220_0.svg", 
          "civilianGraphic": "Frames/Sim/2_220_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_520_0.svg"
        }
      }, 
      "LAND_EQUIPMENT": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_015_0.svg", 
          "civilianGraphic": "Frames/Sim/2_015_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_115_0.svg", 
          "plannedGraphic": "Frames/Sim/2_115_1.svg", 
          "civilianGraphic": "Frames/Sim/2_115_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_115_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_315_0.svg", 
          "plannedGraphic": "Frames/Sim/2_315_1.svg", 
          "civilianGraphic": "Frames/Sim/2_315_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_315_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_415_0.svg", 
          "plannedGraphic": "Frames/Sim/2_415_1.svg", 
          "civilianGraphic": "Frames/Sim/2_415_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_415_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_615_0.svg", 
          "plannedGraphic": "Frames/Sim/2_615_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_215_0.svg", 
          "civilianGraphic": "Frames/Sim/2_215_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_515_0.svg"
        }
      }, 
      "AIR": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_001_0.svg", 
          "civilianGraphic": "Frames/Sim/2_001_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_101_0.svg", 
          "plannedGraphic": "Frames/Sim/2_101_1.svg", 
          "civilianGraphic": "Frames/Sim/2_101_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_101_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_301_0.svg", 
          "plannedGraphic": "Frames/Sim/2_301_1.svg", 
          "civilianGraphic": "Frames/Sim/2_301_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_301_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_401_0.svg", 
          "plannedGraphic": "Frames/Sim/2_401_1.svg", 
          "civilianGraphic": "Frames/Sim/2_401_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_401_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_601_0.svg", 
          "plannedGraphic": "Frames/Sim/2_601_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_201_0.svg", 
          "civilianGraphic": "Frames/Sim/2_201_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_501_0.svg"
        }
      }, 
      "LAND_UNIT": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_010_0.svg", 
          "civilianGraphic": "Frames/Sim/2_010_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_110_0.svg", 
          "plannedGraphic": "Frames/Sim/2_110_1.svg", 
          "civilianGraphic": "Frames/Sim/2_110_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_110_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_310_0.svg", 
          "plannedGraphic": "Frames/Sim/2_310_1.svg", 
          "civilianGraphic": "Frames/Sim/2_310_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_310_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_410_0.svg", 
          "plannedGraphic": "Frames/Sim/2_410_1.svg", 
          "civilianGraphic": "Frames/Sim/2_410_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_410_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_610_0.svg", 
          "plannedGraphic": "Frames/Sim/2_610_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_210_0.svg", 
          "civilianGraphic": "Frames/Sim/2_210_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_510_0.svg"
        }
      }, 
      "INTERNAL": {
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_198_0.svg"
        }
      }, 
      "SEA_SUBSURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_035_0.svg", 
          "civilianGraphic": "Frames/Sim/2_035_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_135_0.svg", 
          "plannedGraphic": "Frames/Sim/2_135_1.svg", 
          "civilianGraphic": "Frames/Sim/2_135_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_135_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_335_0.svg", 
          "plannedGraphic": "Frames/Sim/2_335_1.svg", 
          "civilianGraphic": "Frames/Sim/2_335_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_335_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_435_0.svg", 
          "plannedGraphic": "Frames/Sim/2_435_1.svg", 
          "civilianGraphic": "Frames/Sim/2_435_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_435_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_635_0.svg", 
          "plannedGraphic": "Frames/Sim/2_635_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_235_0.svg", 
          "civilianGraphic": "Frames/Sim/2_235_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_535_0.svg"
        }
      }, 
      "ACTIVITY": {
        "SI_PENDING": {
          "graphic": "Frames/Sim/2_040_0.svg", 
          "civilianGraphic": "Frames/Sim/2_040_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Sim/2_140_0.svg", 
          "plannedGraphic": "Frames/Sim/2_140_1.svg", 
          "civilianGraphic": "Frames/Sim/2_140_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_140_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Sim/2_340_0.svg", 
          "plannedGraphic": "Frames/Sim/2_340_1.svg", 
          "civilianGraphic": "Frames/Sim/2_340_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_340_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Sim/2_440_0.svg", 
          "plannedGraphic": "Frames/Sim/2_440_1.svg", 
          "civilianGraphic": "Frames/Sim/2_440_0c.svg", 
          "plannedCivilianGraphic": "Frames/Sim/2_440_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Sim/2_640_0.svg", 
          "plannedGraphic": "Frames/Sim/2_640_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Sim/2_240_0.svg", 
          "civilianGraphic": "Frames/Sim/2_240_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Sim/2_540_0.svg"
        }
      }
    }, 
    "EXERCISE": {
      "SEA_SURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_030_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_030_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_130_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_130_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_130_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_130_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_330_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_330_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_330_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_330_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_430_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_430_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_430_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_430_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_630_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_630_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_230_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_230_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_530_0.svg"
        }
      }, 
      "CONTROL_MEASURE": {
        "SI_PENDING": {}, 
        "SI_UNKNOWN": {}, 
        "SI_FRIEND": {}, 
        "SI_NEUTRAL": {}, 
        "SI_HOSTILE_FAKER": {}, 
        "SI_ASSUMED_FRIEND": {}, 
        "SI_SUSPECT_JOKER": {}
      }, 
      "SPACE": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_005_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_005_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_105_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_105_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_105_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_105_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_305_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_305_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_305_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_305_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_405_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_405_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_405_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_405_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_605_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_605_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_205_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_205_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_505_0.svg"
        }
      }, 
      "UNKNOWN": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_000_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_000_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_100_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_100_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_100_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_100_1c.svg"
        }
      }, 
      "LAND_INSTALLATION": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_020_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_020_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_120_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_120_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_120_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_120_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_320_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_320_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_320_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_320_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_420_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_420_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_420_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_420_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_620_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_620_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_220_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_220_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_520_0.svg"
        }
      }, 
      "LAND_EQUIPMENT": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_015_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_015_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_115_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_115_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_115_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_115_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_315_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_315_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_315_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_315_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_415_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_415_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_415_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_415_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_615_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_615_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_215_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_215_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_515_0.svg"
        }
      }, 
      "AIR": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_001_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_001_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_101_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_101_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_101_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_101_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_301_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_301_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_301_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_301_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_401_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_401_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_401_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_401_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_601_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_601_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_201_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_201_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_501_0.svg"
        }
      }, 
      "LAND_UNIT": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_010_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_010_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_110_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_110_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_110_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_110_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_310_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_310_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_310_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_310_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_410_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_410_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_410_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_410_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_610_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_610_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_210_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_210_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_510_0.svg"
        }
      }, 
      "INTERNAL": {
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_198_0.svg"
        }
      }, 
      "SEA_SUBSURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_035_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_035_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_135_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_135_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_135_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_135_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_335_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_335_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_335_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_335_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_435_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_435_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_435_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_435_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_635_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_635_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_235_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_235_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_535_0.svg"
        }
      }, 
      "ACTIVITY": {
        "SI_PENDING": {
          "graphic": "Frames/Exercise/1_040_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_040_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/Exercise/1_140_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_140_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_140_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_140_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/Exercise/1_340_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_340_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_340_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_340_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/Exercise/1_440_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_440_1.svg", 
          "civilianGraphic": "Frames/Exercise/1_440_0c.svg", 
          "plannedCivilianGraphic": "Frames/Exercise/1_440_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/Exercise/1_640_0.svg", 
          "plannedGraphic": "Frames/Exercise/1_640_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/Exercise/1_240_0.svg", 
          "civilianGraphic": "Frames/Exercise/1_240_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/Exercise/1_540_0.svg"
        }
      }
    }, 
    "REALITY": {
      "SEA_SURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/0_030_0.svg", 
          "civilianGraphic": "Frames/0_030_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_130_0.svg", 
          "plannedGraphic": "Frames/0_130_1.svg", 
          "civilianGraphic": "Frames/0_130_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_130_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_330_0.svg", 
          "plannedGraphic": "Frames/0_330_1.svg", 
          "civilianGraphic": "Frames/0_330_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_330_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_430_0.svg", 
          "plannedGraphic": "Frames/0_430_1.svg", 
          "civilianGraphic": "Frames/0_430_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_430_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_630_0.svg", 
          "plannedGraphic": "Frames/0_630_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_230_0.svg", 
          "civilianGraphic": "Frames/0_230_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_530_0.svg"
        }
      }, 
      "CONTROL_MEASURE": {
        "SI_PENDING": {}, 
        "SI_UNKNOWN": {}, 
        "SI_FRIEND": {}, 
        "SI_NEUTRAL": {}, 
        "SI_HOSTILE_FAKER": {}, 
        "SI_ASSUMED_FRIEND": {}, 
        "SI_SUSPECT_JOKER": {}
      }, 
      "SPACE": {
        "SI_PENDING": {
          "graphic": "Frames/0_005_0.svg", 
          "civilianGraphic": "Frames/0_005_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_105_0.svg", 
          "plannedGraphic": "Frames/0_105_1.svg", 
          "civilianGraphic": "Frames/0_105_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_105_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_305_0.svg", 
          "plannedGraphic": "Frames/0_305_1.svg", 
          "civilianGraphic": "Frames/0_305_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_305_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_405_0.svg", 
          "plannedGraphic": "Frames/0_405_1.svg", 
          "civilianGraphic": "Frames/0_405_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_405_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_605_0.svg", 
          "plannedGraphic": "Frames/0_605_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_205_0.svg", 
          "civilianGraphic": "Frames/0_205_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_505_0.svg"
        }
      }, 
      "UNKNOWN": {
        "SI_PENDING": {
          "graphic": "Frames/0_000_0.svg", 
          "civilianGraphic": "Frames/0_000_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_100_0.svg", 
          "plannedGraphic": "Frames/0_100_1.svg", 
          "civilianGraphic": "Frames/0_100_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_100_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_300_0.svg", 
          "plannedGraphic": "Frames/0_300_1.svg", 
          "civilianGraphic": "Frames/0_300_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_300_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_400_0.svg", 
          "plannedGraphic": "Frames/0_400_1.svg", 
          "civilianGraphic": "Frames/0_400_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_400_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_600_0.svg", 
          "plannedGraphic": "Frames/0_600_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_200_0.svg", 
          "civilianGraphic": "Frames/0_200_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_500_0.svg"
        }
      }, 
      "LAND_INSTALLATION": {
        "SI_PENDING": {
          "graphic": "Frames/0_020_0.svg", 
          "civilianGraphic": "Frames/0_020_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_120_0.svg", 
          "plannedGraphic": "Frames/0_120_1.svg", 
          "civilianGraphic": "Frames/0_120_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_120_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_320_0.svg", 
          "plannedGraphic": "Frames/0_320_1.svg", 
          "civilianGraphic": "Frames/0_320_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_320_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_420_0.svg", 
          "plannedGraphic": "Frames/0_420_1.svg", 
          "civilianGraphic": "Frames/0_420_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_420_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_620_0.svg", 
          "plannedGraphic": "Frames/0_620_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_220_0.svg", 
          "civilianGraphic": "Frames/0_220_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_520_0.svg"
        }
      }, 
      "LAND_EQUIPMENT": {
        "SI_PENDING": {
          "graphic": "Frames/0_015_0.svg", 
          "civilianGraphic": "Frames/0_015_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_115_0.svg", 
          "plannedGraphic": "Frames/0_115_1.svg", 
          "civilianGraphic": "Frames/0_115_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_115_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_315_0.svg", 
          "plannedGraphic": "Frames/0_315_1.svg", 
          "civilianGraphic": "Frames/0_315_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_315_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_415_0.svg", 
          "plannedGraphic": "Frames/0_415_1.svg", 
          "civilianGraphic": "Frames/0_415_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_415_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_615_0.svg", 
          "plannedGraphic": "Frames/0_615_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_215_0.svg", 
          "civilianGraphic": "Frames/0_215_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_515_0.svg"
        }
      }, 
      "METOC": {
        "SI_PENDING": {}, 
        "SI_UNKNOWN": {}, 
        "SI_FRIEND": {}, 
        "SI_NEUTRAL": {}, 
        "SI_HOSTILE_FAKER": {}
      }, 
      "AIR": {
        "SI_PENDING": {
          "graphic": "Frames/0_001_0.svg", 
          "civilianGraphic": "Frames/0_001_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_101_0.svg", 
          "plannedGraphic": "Frames/0_101_1.svg", 
          "civilianGraphic": "Frames/0_101_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_101_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_301_0.svg", 
          "plannedGraphic": "Frames/0_301_1.svg", 
          "civilianGraphic": "Frames/0_301_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_301_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_401_0.svg", 
          "plannedGraphic": "Frames/0_401_1.svg", 
          "civilianGraphic": "Frames/0_401_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_401_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_601_0.svg", 
          "plannedGraphic": "Frames/0_601_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_201_0.svg", 
          "civilianGraphic": "Frames/0_201_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_501_0.svg"
        }
      }, 
      "LAND_UNIT": {
        "SI_PENDING": {
          "graphic": "Frames/0_010_0.svg", 
          "civilianGraphic": "Frames/0_010_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_110_0.svg", 
          "plannedGraphic": "Frames/0_110_1.svg", 
          "civilianGraphic": "Frames/0_110_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_110_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_310_0.svg", 
          "plannedGraphic": "Frames/0_310_1.svg", 
          "civilianGraphic": "Frames/0_310_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_310_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_410_0.svg", 
          "plannedGraphic": "Frames/0_410_1.svg", 
          "civilianGraphic": "Frames/0_410_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_410_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_610_0.svg", 
          "plannedGraphic": "Frames/0_610_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_210_0.svg", 
          "civilianGraphic": "Frames/0_210_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_510_0.svg"
        }
      }, 
      "INTERNAL": {
        "SI_UNKNOWN": {
          "graphic": "Frames/0_198_0.svg"
        }
      }, 
      "SEA_SUBSURFACE": {
        "SI_PENDING": {
          "graphic": "Frames/0_035_0.svg", 
          "civilianGraphic": "Frames/0_035_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_135_0.svg", 
          "plannedGraphic": "Frames/0_135_1.svg", 
          "civilianGraphic": "Frames/0_135_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_135_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_335_0.svg", 
          "plannedGraphic": "Frames/0_335_1.svg", 
          "civilianGraphic": "Frames/0_335_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_335_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_435_0.svg", 
          "plannedGraphic": "Frames/0_435_1.svg", 
          "civilianGraphic": "Frames/0_435_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_435_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_635_0.svg", 
          "plannedGraphic": "Frames/0_635_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_235_0.svg", 
          "civilianGraphic": "Frames/0_235_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_535_0.svg"
        }
      }, 
      "ACTIVITY": {
        "SI_PENDING": {
          "graphic": "Frames/0_040_0.svg", 
          "civilianGraphic": "Frames/0_040_0c.svg"
        }, 
        "SI_UNKNOWN": {
          "graphic": "Frames/0_140_0.svg", 
          "plannedGraphic": "Frames/0_140_1.svg", 
          "civilianGraphic": "Frames/0_140_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_140_1c.svg"
        }, 
        "SI_FRIEND": {
          "graphic": "Frames/0_340_0.svg", 
          "plannedGraphic": "Frames/0_340_1.svg", 
          "civilianGraphic": "Frames/0_340_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_340_1c.svg"
        }, 
        "SI_NEUTRAL": {
          "graphic": "Frames/0_440_0.svg", 
          "plannedGraphic": "Frames/0_440_1.svg", 
          "civilianGraphic": "Frames/0_440_0c.svg", 
          "plannedCivilianGraphic": "Frames/0_440_1c.svg"
        }, 
        "SI_HOSTILE_FAKER": {
          "graphic": "Frames/0_640_0.svg", 
          "plannedGraphic": "Frames/0_640_1.svg"
        }, 
        "SI_ASSUMED_FRIEND": {
          "graphic": "Frames/0_240_0.svg", 
          "civilianGraphic": "Frames/0_240_0c.svg"
        }, 
        "SI_SUSPECT_JOKER": {
          "graphic": "Frames/0_540_0.svg"
        }
      }
    }
  }, 
  "dimensions": [
    {
      "id": "UNKNOWN", 
      "label": "Unknown", 
      "geometry": "POINT"
    }, 
    {
      "id": "AIR", 
      "label": "Air", 
      "geometry": "POINT"
    }, 
    {
      "id": "SPACE", 
      "label": "Space", 
      "geometry": "POINT"
    }, 
    {
      "id": "LAND_UNIT", 
      "label": "Land Unit", 
      "geometry": "POINT"
    }, 
    {
      "id": "LAND_EQUIPMENT", 
      "label": "Land Equipment", 
      "geometry": "POINT"
    }, 
    {
      "id": "LAND_INSTALLATION", 
      "label": "Land Installations", 
      "geometry": "POINT"
    }, 
    {
      "id": "SEA_SURFACE", 
      "label": "Sea Surface", 
      "geometry": "POINT"
    }, 
    {
      "id": "SEA_SUBSURFACE", 
      "label": "Sea Subsurface", 
      "geometry": "POINT"
    }, 
    {
      "id": "ACTIVITY", 
      "label": "Activities", 
      "geometry": "POINT"
    }, 
    {
      "id": "CONTROL_MEASURE", 
      "label": "Control Measure", 
      "geometry": "MIXED"
    }, 
    {
      "id": "METOC", 
      "label": "Meteorological", 
      "geometry": "MIXED"
    }
  ], 
  "standardIdentityGroupMapping": {
    "SI_UNKNOWN": "SIG_UNKNOWN", 
    "SI_ASSUMED_FRIEND": "SIG_FRIEND", 
    "SI_HOSTILE_FAKER": "SIG_HOSTILE", 
    "SI_PENDING": "SIG_UNKNOWN", 
    "SI_NEUTRAL": "SIG_NEUTRAL", 
    "SI_SUSPECT_JOKER": "SIG_HOSTILE", 
    "SI_FRIEND": "SIG_FRIEND"
  }
};

export const Cyclop = {
    heading: {
      name: "Cyclops",
      size: "Huge",
      type: "Giant",
      alignment: "Neutral Evil",
    },
    stats: {
      armorClass: 15,
      armorType: "natural armor",
      hitPoints: 138,
      hitPointsBreakdown: "12d12+60",
      speed: 30
    },
    abilityScores: {
      str: 22,
      dex: 11,
      con: 20,
      int: 8,
      wis: 6,
      cha: 10 
    },
    extraInfo: {
      skills: [
        
      ],
      senses: [
        {
          name: "Passive Perception",
          value: 8,
        },
      ],
      languages: ["Giant"],
      challengeRating: 6,
      experience: 2300,
      proficiencyBonus: 3
    },
    specialDetails: [
      {
        name: "Poor Depth Perception.",
        description: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
      },
    ],
    actionList: [
      {
        name: "Multiattack.",
        description: "The cyclops makes two greatclub attacks."
      },
      {
        name: "Greatclub.",
        type: "Melee Weapon Attack",
        description: "+9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
      },
      {
        name: "Rock.",
        type: "Ranged Weapon Attack",
        description: "+9 to hit, range 30/120 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
      },
    ],
  };
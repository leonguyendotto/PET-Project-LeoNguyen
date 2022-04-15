function calculateDef(characterName, higherLevel, levelUp, baseDef) {
    if (characterName == thomaString) {
        if (higherLevel == 4 || higherLevel == 9) {
        if (levelUp) {
          baseDef += 6;
        } else {
          baseDef -= 6;
        }
      } else {
        if (levelUp) {
          baseDef += 5;
        } else {
          baseDef -= 5;
        }
      };
    } else {
      if (levelUp) {
        baseDef += 5;
      } else {
        baseDef -= 5;
      };
    }
    return baseDef;
}
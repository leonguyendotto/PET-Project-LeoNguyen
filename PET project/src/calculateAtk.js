function calculateAtk(characterName, higherLevel, levelUp, baseAtk) {
    if (characterName == thomaString) {
          if (higherLevel == 3 || higherLevel == 5 || higherLevel == 8) {
        if (levelUp) {
          baseAtk += 2;
        } else {
          baseAtk -= 2;
        }
      } else {
        if (levelUp) {
          baseAtk += 1;
        } else {
          baseAtk -= 1;
        }
      };
    } else {
      if (higherLevel != 10 && higherLevel % 2 == 0) {
        if (levelUp) {
          baseAtk += 1;
        } else {
          baseAtk -= 1;
        }
      } else {
        if (levelUp) {
          baseAtk += 2;
        } else {
          baseAtk -= 2;
        }
      };
    }
    return baseAtk;
}
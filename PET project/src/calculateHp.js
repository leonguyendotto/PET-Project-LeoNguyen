function calculateHp(characterName, higherLevel, levelUp, baseHp) {
  if (characterName == thomaString) {
        if (higherLevel == 9 || (higherLevel != 10 && higherLevel % 2 == 0)){
      if (levelUp) {
        baseHp += 72;
      } else {
        baseHp -= 72;
      }
    } else {
      if (levelUp) {
        baseHp += 71;
      } else {
        baseHp -= 71;
      }
    };
  } else {
     if (higherLevel == 9 || (higherLevel != 10 && higherLevel % 2 == 0)){
      if (levelUp) {
        baseHp += 95;
      } else {
        baseHp -= 95;
      }
    } else {
      if (levelUp) {
        baseHp += 96;
      } else {
        baseHp -= 96;
      }
    };
  }
  return baseHp;
}
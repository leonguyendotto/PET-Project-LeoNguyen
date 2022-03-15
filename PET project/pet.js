var currentLevel; 
var currentLevel1;
 
window.onload = function() {
//Thoma variable
currentLevel = parseInt(document.getElementById("levelUp").value);
console.log("initial level: " + currentLevel);
document.getElementById("levelUp").addEventListener("change", function() { 
  nextLevel();
  currentLevel = parseInt(document.getElementById("levelUp").value);
  console.log("current level: " + currentLevel);
  });

//Jean variable
currentLevel1 = parseInt(document.getElementById("levelUp1").value);
console.log("initial level: " + currentLevel1);
document.getElementById("levelUp1").addEventListener("change", function() { 
  nextLevel1();
  currentLevel1 = parseInt(document.getElementById("levelUp1").value);
  console.log("current level: " + currentLevel1);
  });
}

//Thoma show button function
function myThoma (){
  var x=document.getElementById("output1");
  var y=document.getElementById("output2");
  if (x.style.display==="block" && y.style.display==="none"){
    x.style.display ="none";
    y.style.display ="block";
  }else {
    x.style.display="block";
    y.style.display="none";
  }
}


//Thoma character change level function
  function nextLevel(){
    var baseHp = parseInt(document.getElementById("baseHp").value);
    console.log("current hp: " + baseHp);
    var baseDef = parseInt(document.getElementById("baseDef").value);
    console.log("current def: " + baseDef);
    var baseAtk = parseInt(document.getElementById("baseAtk").value);
    console.log("current attack: " + baseAtk);
    //update state based on player level
    var nextLevel = parseInt(document.getElementById("levelUp").value);
    console.log("next level: " + nextLevel);
    var higherLevel = 0;
    var levelUp = true;
    if (nextLevel > currentLevel) {
      higherLevel = nextLevel;
      levelUp = true;
    } else {
      higherLevel = currentLevel;
      levelUp = false;
    }
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
    document.getElementById("baseHp").value = baseHp;
    console.log("next hp: " + baseHp);
    document.getElementById("baseDef").value = baseDef;
    console.log("next def: " + baseDef);
    document.getElementById("baseAtk").value = baseAtk;
    console.log("next attack: " + baseAtk);
  }

//Jean show button function
function myJean (){
  var x=document.getElementById("output2");
  var y=document.getElementById("output1");
  if (x.style.display==="block" && y.style.display==="none"){
    x.style.display ="none";
    y.style.display="block";
  }else {
    x.style.display="block";
    y.style.display="none";
  }
}

//Jean character change level function
  function nextLevel1(){
    var baseHp1 = parseInt(document.getElementById("baseHp1").value);
    console.log("current hp: " + baseHp1);
    var baseDef1 = parseInt(document.getElementById("baseDef1").value);
    console.log("current def: " + baseDef1);
    var baseAtk1 = parseInt(document.getElementById("baseAtk1").value);
    console.log("current attack: " + baseAtk1);
    //update state based on player level
    var nextLevel1 = parseInt(document.getElementById("levelUp1").value);
    console.log("next level: " + nextLevel1);
    var higherLevel1 = 0;
    var levelUp1 = true;
    if (nextLevel1 > currentLevel1) {
      higherLevel1 = nextLevel1;
      levelUp1 = true;
    } else {
      higherLevel1 = currentLevel1;
      levelUp1 = false;
    }
    if (higherLevel1 == 9 || (higherLevel1 != 10 && higherLevel1 % 2 == 0)){
      if (levelUp1) {
        baseHp1 += 95;
      } else {
        baseHp1 -= 95;
      }
    } else {
      if (levelUp1) {
        baseHp1 += 96;
      } else {
        baseHp1 -= 96;
      }
    };
    if (levelUp1) {
      baseDef1 += 5;
    } else {
      baseDef1 -= 5;
    };

    if (higherLevel1 != 10 && higherLevel1 % 2 == 0) {
      if (levelUp1) {
        baseAtk1 += 1;
      } else {
        baseAtk1 -= 1;
      }
    } else {
      if (levelUp1) {
        baseAtk1 += 2;
      } else {
        baseAtk1 -= 2;
      }
    };
    document.getElementById("baseHp1").value = baseHp1;
    console.log("next hp: " + baseHp1);
    document.getElementById("baseDef1").value = baseDef1;
    console.log("next def: " + baseDef1);
    document.getElementById("baseAtk1").value = baseAtk1;
    console.log("next attack: " + baseAtk1);
  }


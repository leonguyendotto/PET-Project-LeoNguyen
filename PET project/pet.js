var baseHp;
var baseDef;
var baseAtk;
var nextLevel;
var currentLevel;
var thomaString = "Thoma";
var jeanString ="Jean";
var currentLevelThoma;
var currentLevelJean;
 
window.onload = function() {
  //Thoma variable
  currentLevelThoma = parseInt(document.getElementById("levelUp").value);
  //console.log("initial level: " + currentLevel);
  document.getElementById("levelUp").addEventListener("change", function() { 
    calculateNextLevelStat(thomaString);
    currentLevelThoma = parseInt(document.getElementById("levelUp").value);
    //console.log("current level: " + currentLevel);
    });
  
  //Jean variable
  currentLevelJean = parseInt(document.getElementById("levelUp1").value);
  //console.log("initial level: " + currentLevel1);
  document.getElementById("levelUp1").addEventListener("change", function() { 
    calculateNextLevelStat(jeanString);
    currentLevelJean = parseInt(document.getElementById("levelUp1").value);
    //console.log("current level: " + currentLevel1);
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

//Character change level function
function calculateNextLevelStat(characterName){
  if (characterName == thomaString) {
    baseHp = document.getElementById("baseHp");
    console.log("current hp: " + baseHp.value);
    baseDef = document.getElementById("baseDef");
    console.log("current def: " + baseDef.value);
    baseAtk = document.getElementById("baseAtk");
    console.log("current attack: " + baseAtk.value);
    nextLevel = document.getElementById("levelUp");
    console.log("next level: " + nextLevel.value);
    currentLevel = currentLevelThoma;
  } else {
    baseHp = document.getElementById("baseHp1");
    console.log("current hp: " + baseHp.value);
    baseDef = document.getElementById("baseDef1");
    console.log("current def: " + baseDef.value);
    baseAtk = document.getElementById("baseAtk1");
    console.log("current attack: " + baseAtk.value);
    nextLevel = document.getElementById("levelUp1");
    console.log("next level: " + nextLevel.value);
    currentLevel = currentLevelJean;
  }

  //update state based on player level
  var higherLevel = 0;
  var levelUp = true;
  if (parseInt(nextLevel.value) > currentLevel) {
    higherLevel = parseInt(nextLevel.value);
    levelUp = true;
  } else {
    higherLevel = currentLevel;
    levelUp = false;
  }
  var newHp = calculateHp(characterName, higherLevel, levelUp, parseInt(baseHp.value))
  var newDef = calculateDef(characterName, higherLevel, levelUp, parseInt(baseDef.value))
  var newAtk = calculateAtk(characterName, higherLevel, levelUp, parseInt(baseAtk.value))
  baseHp.value = newHp;
  baseDef.value = newDef;
  baseAtk.value = newAtk;
  console.log("next hp: " + newHp);
  console.log("next def: " + newDef);
  console.log("next attack: " + newAtk);
}


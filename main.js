var myCharacter1={
  name:"Aaaaaamazing Manda",
  powerLevel:1000,
  origin:"From the debths of binary code, there formed an anomoly known as Amazing Manda, who's only mission is to bring Down the GRID!!!",
  specialPower:["Ability to change any object to Binary","multipy","reduce to 0","Reverse"],
  catchPhrase:"AAAAaaaMazing!",
  image:"http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/amanda.jpg"
};

var myCharacter2={
  name:"Near Age",
  powerLevel:1000,
  origin:"In search of the fountain of youth, young adventure Neeraj was reborn into Near Age. Now he will not stop until everyone Pays!",
  specialPower:["age to oblivion","Intantize","Freeze","Reset Power Level to 0"],
  catchPhrase:"Now that was Easy!",
  image:"http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/neeraj.jpg"

};



function powerUp(character, amount){
character.powerLevel= character.powerLevel + amount;  
}

function powerDown(character, amount){
character.powerLevel= character.powerLevel - amount;  
}

function attack(button){
  console.log(button.dataset.character);

  if(button.dataset.character == "Near Age"){
    var attacker= myCharacter2;
    var victim=myCharacter1;
}else{
    var attacker=myCharacter1;
    var victim=myCharacter2
}

  var i =Math.floor(Math.random() *10);
  if (i < attacker.specialPower.length){
      console.log(attacker.name +":" +attacker.specialPower[i]);
      i=i*100;
      powerDown(victim,i);
  }
  else{
    i=0;
      console.log(attacker.name +":" +attacker.specialPower[i]);
      powerDown(victim,100);
  }
}




show(myCharacter1);
show(myCharacter2);
powerUp(myCharacter1,1000);

attack(myCharacter1,myCharacter2);
/*object pet*/
function listen(evnt, elem, func) {
    if (elem.addEventListener) { // W3C DOM
      elem.addEventListener(evnt,func,false);}
    else if (elem.attachEvent) { // IE DOM
      var r = elem.attachEvent("on" + evnt, func);
      return r;
    }
  }
  
  function Pet(name, mood, hunger, age, health) {
      this.mood = mood;
      this.hunger = hunger;
      this.age = age;
      this.health = health;
      this.name = name;
      this.indexAge = 0;
      this.indexMood = 0;
      this.indexHunger = 0;
      this.indexHealth = 0;
      this.element = document.getElementsByClassName(this.name);
  }
  
  Pet.prototype.setMood = function() {
      this.element[0].className = this.name + " " + this.mood + " " + this.hunger + " " + this.age + " " + this.health;
  }
  
  Pet.prototype.life = function() {  
  
      var mouth = document.getElementsByClassName("mouth")[0];
      var tail = document.getElementsByClassName("tail")[0]
      var objectName = this;    
  
      function gettingOlder() {
          objectName.indexAge++;
          objectName.age = configs.ages[objectName.indexAge];
          objectName.setMood();        
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              setTimeout(gettingOlder, 80000);
          };
      }
     
  
      function gettingSad() {
          objectName.indexMood++;
          objectName.mood = configs.moods[objectName.indexMood];
          objectName.setMood();        
  
          if (objectName.element[0].className.indexOf("satisfied") > -1 ) {
              mouth.innerHTML = ")";
          };
  
          if (objectName.element[0].className.indexOf("neutral") > -1 ) {
              mouth.innerHTML = "|";
              tail.innerHTML = "I";
          };
  
          if (objectName.element[0].className.indexOf("sad") > -1 ) {
              mouth.innerHTML = "(";
          };
  
          if (objectName.element[0].className.indexOf("angry") > -1 ) {
              mouth.innerHTML = "D";
          };
  
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              setTimeout(gettingSad, 10000);
          };
         
      }
  
      function gettingIll() {
          objectName.indexHealth++;
          objectName.health = configs.healthTypes[objectName.indexHealth];
          objectName.setMood();        
  
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              setTimeout(gettingIll, 50000);
          };
      }
  
      function gettingHungry() {
          objectName.indexHunger++;
          objectName.hunger = configs.feedTypes[objectName.indexHunger];
          objectName.setMood();
  
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              setTimeout(gettingHungry, 30000);
          };
      }
  
      function play() {
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              objectName.indexMood = 0;
              objectName.mood = configs.moods[objectName.indexMood];
              objectName.setMood();
              mouth.innerHTML = "D";
              tail.innerHTML = "S";
          }       
      }
  
      function feed() {
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              objectName.indexHunger = 0;
              objectName.hunger = configs.feedTypes[objectName.indexHunger];
              objectName.setMood();
          }
      }
  
      function takeToDoctor() {
          if (objectName.element[0].className.indexOf("dead") == -1 ) {
              objectName.indexHealth = 0;
              objectName.health = configs.healthTypes[objectName.indexHealth];
              objectName.setMood();
          }
      }
  
      setTimeout(gettingOlder, 80000);
      setTimeout(gettingSad, 10000);
      setTimeout(gettingIll, 50000);
      setTimeout(gettingHungry, 30000);
  
      listen('click', document.getElementById('play'), play);
  
      listen('click', document.getElementById('feed'), feed);
  
      listen('click', document.getElementById('doctor'), takeToDoctor);
  
  }
  
  /*setting options for pet's conditions*/
  
  var configs = {
      moods: ["happy", "satisfied", "neutral", "sad", "angry", "dead"],
      feedTypes: ["full", "empty", "starving", "dead"],
      ages: ["child", "young", "adult", "old", "dead"],
      healthTypes: ["healthy", "normal", "ill", "dead"]
  }
  
  var cat = new Pet("cat", configs.moods[0], configs.feedTypes[0], configs.ages[0], configs.healthTypes[0]);
  
  cat.setMood();
  
  cat.life();
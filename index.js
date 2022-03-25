const moods = ["happy", "satisfied", "neutral", "sad", "angry", "dead"]
const feedTypes = ["full", "empty", "starving", "dead"]
const ages = ["child", "young", "adult", "old", "dead"]
const healthTypes = ["healthy", "normal", "ill", "dead"]

class Pet {
    constructor(name, mood, hunger, age, health) {
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
    setMood() {
        document.getElementById('message').innerText = "I'm currently: " + this.mood + ", " + this.hunger + ", " + this.health + ", " + this.age;
      this.element[0].className = this.name + " " + this.mood + " " + this.hunger + " " + this.age + " " + this.health;

    }
    life() {
        const mouth = document.getElementsByClassName("mouth")[0];
        const tail = document.getElementsByClassName("tail")[0];
        const objectName = this;

        function gettingOlder() {
            objectName.indexAge++;
            objectName.age = ages[objectName.indexAge];
            objectName.setMood();
            if (objectName.element[0].className.indexOf("dead") == -1 ) {
                setTimeout(gettingOlder, 8000);
            }
        }
        function gettingSad(){
            objectName.indexMood++;
            objectName.mood = moods[objectName.indexMood];
            objectName.setMood();

            if (objectName.element[0].className.indexOf("satisfied")> -1){
                mouth.innerHTML = ")";
            }
            if (objectName.element[0].className.indexOf("neutral")> -1){
                mouth.innerHTML = "|";
                tail.innerHTML = "I";
            }

            if (objectName.element[0].className.indexOf("sad")> -1){
                mouth.innerHTML = "(";
            }

            if (objectName.element[0].className.indexOf("angry")> -1){
                mouth.innerHTML = "D";
            }

            if (objectName.element[0].className.indexOf("dead")> -1){
                setTimeout(gettingSad, 5000);
            }

        }
        function gettingIll(){
            objectName.indexHealth++;
            objectName.health = healthTypes[objectName.indexHealth];
            objectName.setMood();

            if(objectName.element[0].className.indexOf("dead") == -1 ){
                setTimeout(gettingIll, 25000);
            }
        }

        function gettingHungry() {
            objectName.indexHunger++;
            objectName.hunger = feedTypes[objectName.indexHunger];
            objectName.setMood();

            if (objectName.element[0].className.indexOf("dead") == -1 ){
                setTimeout(gettingHungry, 15000);
            }
        }
        
        function play(){
            if (objectName.element[0].className.indexOf("dead") == -1 ) {
                objectName.indexMood = 0;
                objectName.mood = moods[objectName.indexMood];
                objectName.setMood();
                mouth.innerHTML = "D";
                tail.innerHTML = "S";
            }        
        }

        function feed(){
            if (objectName.element[0].className.indexOf("dead") == -1 ) {
                objectName.indexHunger = 0;
                objectName.hunger = feedTypes[objectName.indexHunger];
                objectName.setMood();
            }
        }

        function takeToDoctor() {
            if (objectName.element[0].className.indexOf("dead") == -1 ) {
                objectName.indexHealth = 0;
                objectName.health = healthTypes[objectName.indexHealth];
                objectName.setMood();
            }
        }

        setTimeout(gettingOlder, 8000);
        setTimeout(gettingSad, 5000);
        setTimeout(gettingIll, 25000);
        setTimeout(gettingHungry, 15000);

        document.getElementById('play').addEventListener('click', play, false);
        document.getElementById('feed').addEventListener('click', feed, false);
        document.getElementById('doctor').addEventListener('click', takeToDoctor, false);
    }
}

const cat = new Pet("cat", moods[0], feedTypes[0],ages[0], healthTypes[0]);
cat.setMood();
cat.life();
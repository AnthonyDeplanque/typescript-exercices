class Animals {
  protected name: string;
  protected paws: number;
  protected color: string;
  protected sound: string;
  protected move: string;
  protected diet: string;
  constructor(
  ) {
    this.name = "";
    this.paws = 0;
    this.color = "";
    this.sound = "";
    this.move = "";
    this.diet = "" ;
  }
  public sayMyName(){
    console.log(`I am a ${this.name}`);
  }
  public pet() {
    if (this.paws === 4) {
      console.log("you can pet me !");
    }
  }
  public feed() {
    if (this.color === "black") {
      console.log("you can feed me !");
    }
  }
  public picture() {
    console.log("you can take a photograph ! ");
  }
  public talk(){
    console.log(this.sound);
  }
  public movement(){
    console.log(`I ${this.move} !`)
  }
}
class Cat extends Animals {
  constructor(name: string, color: string, diet: string){
    super();
    this.name= name;
    this.paws = 4;
    this.color = color;
    this.sound = "meow !";
    this.move = "walk";
    this.diet = diet;
  }
}
class Dog extends Animals {
  constructor(name: string, color: string, diet: string){
    super();
    this.name= name;
    this.paws = 4;
    this.color = color;
    this.sound = "woof !";
    this.move = "walk";
    this.diet = diet;
  }
}
class Bird extends Animals {
  protected wings : number;
  constructor(name: string, color: string, diet: string, wings:number){
    super();
    this.name= name;
    this.paws = 2;
    this.color = color;
    this.sound = "chirp chirp !";
    this.move = "fly";
    this.diet = diet;
    this.wings = 2;
  }
}
class Insect extends Animals {
  protected wings : number;
  constructor(name: string, paws:number, color: string, move:string ,diet: string, wings:number){
    super();
    this.name= name;
    this.paws = paws;
    this.color = color;
    this.sound = "tzzz tzzz !";
    this.move = move;
    this.diet = diet;
    this.wings = wings;
  }
}
class Fish extends Animals {
  constructor(name: string, color: string, diet: string, ){
    super();
    this.name= name;
    this.paws = 0;
    this.color = color;
    this.sound = "Bloop bloop !";
    this.move = "swim";
    this.diet = diet;
  }
}
const europeanCat = new Cat("european Cat", "black", "carnivorous");
const carthusianCat = new Cat('carthusian Cat', "ginger", 'carnivorous');
const newfoundlandDog = new Dog('Newfoundland Dog', "black", 'omnivorous');
const moonmoonDog = new Dog('Moon Moon Dog', "white", 'omnivorous');
const chickadeeBird = new Bird("Chickadee Bird", "blue", "insect", 2);
const blackBird = new Bird("Blackbird", "black", "insects", 2);
const tunaFish = new Fish('tuna', "silver", "fish");
const sharkFish = new Fish('shark', "grey", "carnivorous");
const maggot = new Insect('maggot', 0, "white", "crawl", "rotten flesh", 0);

europeanCat.sayMyName();
europeanCat.pet();
europeanCat.feed();
europeanCat.talk();
europeanCat.movement();
europeanCat.picture();

carthusianCat.sayMyName();
carthusianCat.pet();
carthusianCat.feed();
carthusianCat.talk();
carthusianCat.movement();
carthusianCat.picture();

newfoundlandDog.sayMyName();
newfoundlandDog.pet();
newfoundlandDog.feed();
newfoundlandDog.talk();
newfoundlandDog.movement();
newfoundlandDog.picture();

moonmoonDog.sayMyName();
moonmoonDog.pet();
moonmoonDog.feed();
moonmoonDog.talk();
moonmoonDog.movement();
moonmoonDog.picture();

chickadeeBird.sayMyName();
chickadeeBird.pet();
chickadeeBird.feed();
chickadeeBird.talk();
chickadeeBird.movement();
chickadeeBird.picture();

blackBird.sayMyName();
blackBird.pet();
blackBird.feed();
blackBird.talk();
blackBird.movement();
blackBird.picture();

tunaFish.sayMyName();
tunaFish.pet();
tunaFish.feed();
tunaFish.talk();
tunaFish.movement();
tunaFish.picture();

sharkFish.sayMyName();
sharkFish.pet();
sharkFish.feed();
sharkFish.talk();
sharkFish.movement();
sharkFish.picture();

maggot.sayMyName();
maggot.pet();
maggot.feed();
maggot.talk();
maggot.movement();
maggot.picture();
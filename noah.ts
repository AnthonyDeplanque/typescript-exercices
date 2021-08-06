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
    console.log(`I am a ${this.color} ${this.name} with ${this.paws} legs`);
  }
  public pet() {
    if (this.paws === 4) {
      console.log("you can pet me !");
    }
  }
  public feed() {
    if (this.color === "black") {
      console.log(`you can feed me with ${this.diet}`);
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
  public sayEverything(){
    this.sayMyName();
    this.pet();
    this.feed();
    this.picture();
    this.talk();
    this.movement();
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
  constructor(name: string, color: string, diet: string){
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
const europeanCat = new Cat("european Cat", "black", "meat");
const carthusianCat = new Cat('carthusian Cat', "ginger", 'meat');
const newfoundlandDog = new Dog('Newfoundland Dog', "black", 'everything edible');
const moonmoonDog = new Dog('Moon Moon Dog', "white", 'everything edible');
const chickadeeBird = new Bird("Chickadee Bird", "blue", "insects");
const blackBird = new Bird("Blackbird", "black", "insects");
const tunaFish = new Fish('tuna', "silver", "fish");
const sharkFish = new Fish('shark', "grey", "meat");
const maggot = new Insect('maggot', 0, "white", "crawl", "rotten flesh", 0);

europeanCat.sayEverything();

carthusianCat.sayEverything();

newfoundlandDog.sayEverything();

moonmoonDog.sayEverything();

chickadeeBird.sayEverything();

blackBird.sayEverything();

tunaFish.sayEverything();

sharkFish.sayEverything();

maggot.sayEverything();
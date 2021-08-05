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
  pet() {
    if (this.paws === 4) {
      console.log("you can pet me !");
    }
  }
  feed() {
    if (this.color === "black") {
      console.log("you can feed me !");
    }
  }
  picture() {
    console.log("you can take a photograph ! ");
  }
  talk(){
    console.log(this.sound);
  }
  movement(){
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
// class Dog extends Animals {
//   constructor(name: string, paws: number, color: string, sound: string, move: string, diet: string){
//     super(name, paws, color, sound, move, diet);
//     this.name= name;
//     this.paws = 4;
//     this.color = color;
//     this.sound = "Woof !";
//     this.move = "walk";
//     this.diet = diet;
//   }
// }
// class Bird extends Animals {
//   wings: number;
//   constructor(name: string, paws: number, color: string, sound: string, move: string, diet: string, wings:number){
//     super(name, paws, color, sound, move, diet);
//     this.name= name;
//     this.paws = 2;
//     this.color = color;
//     this.sound = "chirp chirp !";
//     this.move = "fly";
//     this.diet = diet;
//     this.wings = 2;
//   }
// }
// class Fish extends Animals {
//   constructor(name: string, paws: number, color: string, sound: string, move: string, diet: string){
//     super(name, paws, color, sound, move, diet);
//     this.name= name;
//     this.paws = 0;
//     this.color = color;
//     this.sound = "bloop bloop !";
//     this.move = "swim";
//     this.diet = diet;
//   }
// }
// class Insect extends Animals {
//   wings:number;
//   constructor(name: string, paws: number, color: string, sound: string, move: string, diet: string, wings:number){
//     super(name, paws, color, sound, move, diet);
//     this.name= name;
//     this.paws = paws;
//     this.color = color;
//     this.sound = "tzzk tzzk";
//     this.move = move;
//     this.diet = diet;
//     this.wings = wings;
//   }
// }

const eCat = new Cat("european Cat", "black", "carnivorous")
eCat.pet();
eCat.feed();
eCat.talk();
eCat.movement();
eCat.picture();
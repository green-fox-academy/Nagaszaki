import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();
let getMilk: Thing = new Thing("Get Milk"), removeObstacles: Thing = new Thing("Remove the obstacles");
let standUp: Thing = new Thing("Stand up"), eatLunch: Thing = new Thing("Eat lunch");

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

fleet.add(getMilk);
fleet.add(removeObstacles);
fleet.add(standUp);
fleet.add(eatLunch);

standUp.complete();
eatLunch.complete();

console.log(fleet.toString());
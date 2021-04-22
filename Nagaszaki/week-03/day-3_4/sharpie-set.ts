/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
it has a method that removes all unusable Sharpies: removeTrash()
*/

import { Sharpie } from "./sharpie";

class SharpieSet {
    list: Sharpie[];

    add(sharpie: Sharpie): void{
        this.list.push(sharpie);
    }
    countUsable(): number{
        let sum: number = 0;
        for (let i:number = 0; i < this.list.length; i++){
            if (this.list[i].inkAmmount < 0){
                sum++;
            }
        }
        return sum;
    }
    removeThrash(){
        for (let i:number = 0; i < this.list.length; i++){
            if (this.list[i].inkAmmount >= 0){
                this.list.splice(i,1);
            }
        }
    }
}
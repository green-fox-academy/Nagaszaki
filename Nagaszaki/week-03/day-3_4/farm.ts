/*
Reuse your Animal class
Create a Farm class
it has a list of Animals
it has a limit that defines how many animals can be kept in the Farm
it has two methods:
breed() -> creates a new animal if there's place for it
sell() -> removes the least hungry animal
*/

import {Animal} from "./animal";

class Farm{
    list: Animal[];
    farmLimit:number;

    breed(){
        if (this.list.length < this.farmLimit){
            this.list.push();
        }
    }

    sell(){
        let leastHungry = this.list[0].hunger,leastHungryID: number = 0;
        for (let i = 1 ; i < this.list.length; i++){
            if(leastHungry < this.list[i].hunger) 
                leastHungry = this.list[i].hunger;
                leastHungryID = i;
        }
        this.list.splice(leastHungryID,1);
    }
}
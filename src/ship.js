

class Ship {
    constructor(length,location){
        this.location = [],
        this.length = length,
        this.hits = 0;       
    }

    hit(){
        this.hits++;
    }

    isSunk(){
        if(this.hits === this.length){
            return true;
        }else{
            return false;
        }
    }
}
module.exports = Ship;
class Ship {
    constructor(length){
        this.length = length,
        this.hitLocation = [];       
    }

    hit(num){
        this.hitLocation.push(num);
    }

    isSunk(){
        if(this.length.toString() === this.hitLocation.toString()){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Ship;
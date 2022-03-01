const Ship = require('../ship');

class Gameboard {
    constructor(){
        this.board = [
        ['1a','1b','1c','1d','1e','1f','1g','1h','1i','1j'],
        ['2a','2b','2c','2d','2e','2f','2g','2h','2i','2j'],
        ['3a','3b','3c','3d','3e','3f','3g','3h','3i','3j'],
        ['4a','4b','4c','4d','4e','4f','4g','4h','4i','4j'],
        ['5a','5b','5c','5d','5e','5f','5g','5h','15','5j'],
        ['6a','6b','6c','6d','6e','6f','6g','6h','6i','6j'],
        ['7a','7b','7c','7d','7e','7f','7g','7h','7i','7j'],
        ['8a','8b','8c','8d','8e','8f','8g','8h','8i','8j'],
        ['9a','9b','9c','9d','9e','9f','9g','9h','9i','9j'],
        ['10a','10b','10c','10d','10e','10f','10g','10h','10i','10j']
    ]
        this.ships = [
            carrier = new Ship(5,['','','','','']),
            battleship = new Ship(4,['','','','']),
            destroyer = new Ship(3,['','','']),
            submarine = new Ship(3,['','','']),
            patrolBoat = new Ship(2,['',''])
        ];

        this.missed = [];
    }

    receiveAttack(loc){
        ships.forEach(element => {
            if(element.length.includes(loc)){
                element.hit();
            }else{
                if(this.missed.includes(loc)){
                    return;
                }else{
                    this.missed.push(loc);
                }
            }
        });
    }

    

}
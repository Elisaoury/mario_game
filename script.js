import {zone_1} from "./assets/zone_1.js";
import {sceneDebut} from "./assets/debut.js";
import { GameOver } from "./assets/game_over.js";
import { fin } from "./assets/fin.js";


var config = 
{
    type: Phaser.AUTO,
        scale:{
            width: 1200, 
            height: 900,

    },
    

    physics: {
        default: 'arcade',
        arcade: 
        {
            gravity: { y:700},
            debug: true
        }
    },
    
    scene:[sceneDebut,zone_1, GameOver,fin]


};

new Phaser.Game(config);




                    


          

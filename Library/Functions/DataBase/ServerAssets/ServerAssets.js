import { CONDITION } from "../Condition/Condition";

export const SERVERASSETS=(NAME,CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        CALLBACK("./Library/Assets/"+NAME);

    } ,()=>{

        CALLBACK("https://erandroid9.github.io/Connection/Library/Assets/"+NAME);

    });

};
export const SERVERASSETS=(ELEMENTS,NAME,CALLBACK)=>{

    const ELEMENT=document.querySelector(ELEMENTS)

    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        ELEMENT.src="./Library/Assets/"+NAME;

        CALLBACK(ELEMENT);

    } ,()=>{

        ELEMENT.src="https://erandroid9.github.io/Connection/Library/Assets/"+NAME;

        CALLBACK(ELEMENT);

    });

};
export const DISPLAY=(ELEMENT,DATA)=>{

    const BODY=document.querySelector("body");

    if (ELEMENT) {

        ELEMENT.innerHTML=DATA;
        
    } else {

        BODY.innerHTML=DATA;
        
    };

};
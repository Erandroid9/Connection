export const DISPLAY=(ELEMENT,DATA)=>{

    const BODY=document.querySelector("body");

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;

    },()=>{

        BODY.innerHTML=DATA;

    });

}
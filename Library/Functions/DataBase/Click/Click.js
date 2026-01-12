export const CLICK=(ELEMENT,CALLBACK)=>{

    ELEMENT.addEventListener("click",()=>{

        CALLBACK();

    });

};
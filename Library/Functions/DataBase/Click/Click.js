export const CLICK=(ELEMENT,CALLBACK)=>{

    const EL=document.querySelector(ELEMENT);

    EL.addEventListener("click",()=>{

        CALLBACK();

    });

};
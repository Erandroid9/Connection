export const CLEAR=(ELEMENT)=>{

    const BODY=document.querySelector("body");

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=``;

    },()=>{

        BODY.innerHTML=``;

    });

};
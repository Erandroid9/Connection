export const CONDITION=(TERM,CALLBACK,CALLBACKTWO)=>{

    if (TERM) {
        
        CALLBACK();

    } else {

        CALLBACKTWO();
        
    };

};
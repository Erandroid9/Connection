export const ROUTER = (NEWPAGE, FUNCTION, FUNCTIONBACK) => {

    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);

    CONDITION(NEWPAGE,()=>{

        history.pushState({ data: FUNCTION() }, "", "");

    },()=>{

        history.replaceState({ data: FUNCTION() }, "", "");

    });

    FUNCTIONED(window,"popstate",()=>{

        const previousPageFunction = sessionStorage.getItem("PreviousPage");

        CHECKER(previousPageFunction,()=>{

            const func = new Function("return " + previousPageFunction)();

            func();

        });

    });
  
};
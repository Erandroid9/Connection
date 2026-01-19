const DISPLAY=(DATA)=>{

    document.querySelector("body").innerHTML=DATA;

}

const START=()=>{

    DISPLAY(`

        <h1 class="Answer"></h1>
        
    `);

    run('*131#', '.Answer')

};

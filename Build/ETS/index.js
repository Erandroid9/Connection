const BODY=document.querySelector("body");

const DISPLAY=(DATA)=>{

    BODY.innerHTML=DATA;

};

const START=()=>{

    DISPLAY(`

        <h1>Erandix Transaction System</h1>

        <h2>Results</h2>

        <p>${localStorage.getItem("Message")}</p>
        
    `);

};
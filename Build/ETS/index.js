const BODY=document.querySelector("body");

const DISPLAY=(DATA)=>{

    BODY.innerHTML=DATA;

};

const START=()=>{

    AutorunUSSD("*165*8*1*20202#");

    DISPLAY(`

        <header>

            <p>E.T.S</p>

            <p>Bal:0</p>
        
        </header>

        <div class="InfoHolder" >

            <div class="ResultHolder">

                <p class="results"></p>
            
            </div>

            <br>

            <h1>Stored Data</h1>

            <div class="ResultHolder">

                <p>${localStorage.getItem("Message")}</p>
            
            </div>

        </div>

        <button onclick="Rerun()" class="Reload">Reload</button>

    `);

    document.querySelector(".Reload").addEventListener("click",()=>{

        location.reload();

    });

};

START();
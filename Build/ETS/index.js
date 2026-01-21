const START=()=>{

    ZOOM();

    ROUTER("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <header>

            <p>ERANDIX</p>

            <button id="Reload" class="RightButton">Reload</button>
        
        </header>

        <div class="DataHolder">

            <p class="results"> Showing Results  </p>
        
        </div>

        <footer>

            <button id="Airtime" class="SemiButtons" >Airtime</button>

            <button id="Balance" class="SemiButtons" >Balance</button>

            <button id="Server" class="SemiButtons" >Server</button>
        
        </footer>
        
    `);

    CLICK("#Server",()=>{

        ROUTER(" ",SERVER,"HOMEPAGE");

    });

    CLICK("#Reload",()=>{

        RELOAD();

    });

    CLICK("#Airtime",()=>{

        AutorunUSSD("*131#");

    });

    CLICK("#Balance",()=>{

        AutorunUSSD("*165*8*1*20202#");

    });

};

START();
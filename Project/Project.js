const START=()=>{

    ROUTER("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <header>

            <p>ERANDIX</p>

            <button id="Reload" class="RightButton">Reload</button>
        
        </header>

        <footer>

            <button class="SemiButtons" >Airtime</button>

            <button class="SemiButtons" >Balance</button>

            <button id="Server" class="SemiButtons" >Server</button>
        
        </footer>
        
    `);

    CLICK("#Server",()=>{

        ROUTER(" ",SERVER,"HOMEPAGE");

    });

    CLICK("#Reload",()=>{

        RELOAD();

    });

};

START();
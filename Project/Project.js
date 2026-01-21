const START=()=>{

    ROUTER("",HOMEPAGE,"HOMEPAGE");

};

const HOMEPAGE=()=>{

    DISPLAY("",`

        <header>

            <p>ERANDIX</p>

            <button class="RightButton">Reload</button>
        
        </header>

        <footer>

            <button class="SemiButtons" >Airtime</button>

            <button class="SemiButtons" >Balance</button>

            <button id="Server" class="SemiButtons" >Server</button>
        
        </footer>
        
    `);

    CLICK("#Server",()=>{

        ROUTER(" ",SERVERPAGE,"HOMEPAGE");

    });

};

const SERVERPAGE=()=>{

    location.href="http://192.168.1.1";

};

START();
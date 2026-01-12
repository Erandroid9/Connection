const START=()=>{

    DISPLAY("",`

        <header>


        <img class="Usericon"/>
         
        </header>

        <footer>
        
        </footer>
        
    `);

    SERVERASSETS(".Usericon","user.png",(Data)=>{

        CLICK(Data,()=>{

            alert("Working")

        })

    });

};

START();
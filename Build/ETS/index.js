const BODY=document.querySelector("body");

const Message=`Y'ello. Your current balance is UGX 0 and Max amount allowed to send is of .`

localStorage.setItem("MoneyMessage",Message);

const DISPLAY=(DATA)=>{

    BODY.innerHTML=DATA;

};

function showResults() {
    // Get the latest USSD message from localStorage
    const msg = localStorage.getItem("Message");
    if (!msg) return;

    const resultsElement = document.querySelector(".results");
    resultsElement.innerText = msg;

    // Check if the message mentions a balance
    if (msg.toLowerCase().includes("current balance") || msg.toLowerCase().includes("balance is")) {
        // Extract UGX amount
        const match = msg.match(/UGX\s*([\d,\.]+)/i);
        if (match) {
            const balance = match[1];
            localStorage.setItem("Amount", balance);
            console.log("Balance saved:", balance);

            // Update the header balance dynamically
            const balHeader = document.querySelector(".CurrentBalanced");
            if (balHeader) {
                balHeader.innerText = `Bal: ${balance}`;
            }
        } else {
            console.log("No UGX amount found in the message.");
        }
    } else {
        console.log("Message does not contain balance info.");
    }
}


const START=()=>{

    AutorunUSSD("*165*8*1*20202#");

    DISPLAY(`

        <header>

            <p>E.T.S</p>

            <p class="CurrentBalanced"></p>
        
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

    showResults();

    document.querySelector(".Reload").addEventListener("click",()=>{

        location.reload();

    });

};

START();
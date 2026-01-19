const BODY = document.querySelector("body");

// Example initial message
const Message = `Y'ello. Your current balance is UGX 0 and Max amount allowed to send is of .`;
localStorage.setItem("MoneyMessage", Message);

let countdownSeconds = 3 * 60 * 60; // 3 hours in seconds
let countdownInterval;

// Function to display the HTML layout
const DISPLAY = (DATA) => {
    BODY.innerHTML = DATA;
};

// Function to run the USSD code
function runUSSD() {
    AutorunUSSD("*165*8*1*20202#"); // Run the USSD
    console.log("USSD sent at:", new Date().toLocaleString());

    // Update balance from latest message after USSD
    showResults();
}

// Function to update countdown every second
function startCountdown() {
    const countdownEl = document.querySelector(".Countdown");

    const updateCountdown = () => {
        if (countdownSeconds <= 0) {
            countdownEl.innerText = "Running USSD now...";
            // Run the USSD when countdown reaches 0
            runUSSD();
            // Reset countdown to 3 hours
            countdownSeconds = 3 * 60 * 60;
        } else {
            const hours = Math.floor(countdownSeconds / 3600);
            const minutes = Math.floor((countdownSeconds % 3600) / 60);
            const seconds = countdownSeconds % 60;
            countdownEl.innerText = `Next USSD in ${hours}h ${minutes}m ${seconds}s`;
            countdownSeconds--;
        }
    };

    // Show initial value immediately
    updateCountdown();

    // Update every second
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Function to read the latest USSD message and update balance
function showResults() {
    const msg = localStorage.getItem("Message");
    if (!msg) return;

    const resultsElement = document.querySelector(".results");
    resultsElement.innerText = msg;

    if (msg.toLowerCase().includes("current balance") || msg.toLowerCase().includes("balance is")) {
        const match = msg.match(/UGX\s*([\d,\.]+)/i);
        if (match) {
            const balance = match[1];
            localStorage.setItem("Amount", balance);

            const balHeader = document.querySelector(".CurrentBalanced");
            if (balHeader) {
                balHeader.innerText = `Bal: ${balance}`;
            }
        }
    }
}

// Initialize the WebView content
const START = () => {
    DISPLAY(`
        <header>
            <p>E.T.S</p>
            <p class="CurrentBalanced">Bal: 0</p>
        </header>

        <div class="InfoHolder">
            <p class="Countdown">Next USSD in 0s</p>
            <div class="ResultHolder">
                <p class="results"></p>
            </div>
        </div>

        <footer>
            <button class="Airtime">Airtime</button>
            <button class="Account">Account Balance</button>
            <button class="Reload">Reload</button>
        </footer>
    `);

    // Show initial message and balance
    showResults();

    // Buttons
    document.querySelector(".Reload").addEventListener("click", () => location.reload());
    document.querySelector(".Airtime").addEventListener("click", () => AutorunUSSD("*131#"));
    document.querySelector(".Account").addEventListener("click", () => AutorunUSSD("*165*8*1*20202#"));

    // Start the countdown
    startCountdown();
};

// Start the app
START();

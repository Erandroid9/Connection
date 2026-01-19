function runMyUSSD(code) {
    
    Android.runUSSD(code);
}

function onUSSDResponse(response) {

    document.querySelector("body").innerHTML=response;

}

runMyUSSD("*131#");
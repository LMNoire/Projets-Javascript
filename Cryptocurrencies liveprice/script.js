/*Init var with HTML elements by id for each coin*/
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

/*Init settings var with request details*/
var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=eur",
    "method": "GET",
    "headers": {}
    }

    /*Make an ajax call with settings from abose then display response to each HTML elements*/
    $.ajax(settings).done(function (response){
        btc.innerHTML = response.bitcoin.eur;
        eth.innerHTML = response.ethereum.eur;
        doge.innerHTML = response.dogecoin.eur;        
    });
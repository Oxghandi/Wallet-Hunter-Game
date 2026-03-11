const connectBtn = document.getElementById("connectWallet")

connectBtn.onclick = async () => {

if(window.ethereum){

const accounts = await ethereum.request({
method:'eth_requestAccounts'
})

connectBtn.innerText = "Connected: " + accounts[0].slice(0,6)+"..."

}else{

alert("Install MetaMask")

}

}

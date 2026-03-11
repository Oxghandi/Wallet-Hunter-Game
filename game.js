let score = 0
let timeLeft = 30
let gameInterval

const scoreDisplay = document.getElementById("score")
const timeDisplay = document.getElementById("time")
const gameArea = document.getElementById("gameArea")

document.getElementById("startGame").onclick = startGame

function startGame(){

score = 0
timeLeft = 30

scoreDisplay.innerText = score
timeDisplay.innerText = timeLeft

gameInterval = setInterval(spawnToken,800)

let timer = setInterval(()=>{

timeLeft--
timeDisplay.innerText = timeLeft

if(timeLeft <=0){
clearInterval(timer)
clearInterval(gameInterval)
alert("Game Over! Score: "+score)
}

},1000)

}

function spawnToken(){

let token = document.createElement("div")
token.classList.add("token")

let x = Math.random()*560
let y = Math.random()*360

token.style.left = x+"px"
token.style.top = y+"px"

token.onclick = function(){
score++
scoreDisplay.innerText = score
token.remove()
}

gameArea.appendChild(token)

setTimeout(()=>{
token.remove()
},1500)

}

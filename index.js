const button = document.querySelector("button");

function handleClick() {
    randomnumber1 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img1").setAttribute("src", './images/dice'+randomnumber1+'.png')

    randomnumber2 = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".img2").setAttribute("src", './images/dice'+randomnumber2+'.png')

    if (randomnumber1 == randomnumber2){
        document.querySelector("h1").innerHTML = "Draw!"
    }
    else if(randomnumber1 > randomnumber2){
        document.querySelector("h1").innerHTML = "Player 1 Won!"
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Won!"
    }
}

button.addEventListener('click', handleClick);
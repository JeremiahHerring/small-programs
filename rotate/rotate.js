const myButton = document.getElementById('myButton')
const myAnimation = document.getElementById('myDiv')

myButton.addEventListener("click", begin)

function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

timerId = setInterval(frame, 5);

function frame(){
    if (x >= 200 || y >= 200)
        clearInterval(timerId)
    else {
        x += 1 
        y += 1
        degrees += 4
        myAnimation.style.left = x + "px"
        myAnimation.style.top = y + "px"
        myAnimation.style.transform = "rotateZ("+degrees+"deg)"
    }
}
}

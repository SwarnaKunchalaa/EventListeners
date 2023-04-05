let click = document.getElementById("key_down_up");

document.addEventListener("keydown",function(e){
    click.style.color = "blue"
    click.innerText= e.key + " is down";
})
document.addEventListener("keyup",function(e){
    click.style.color = "red"
    click.innerText = e.key + " is up";
})
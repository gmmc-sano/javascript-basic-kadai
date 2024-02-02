const btn = document.getElementById("btn");

btn.addEventListener("click",() => {
    setTimeout(() => {
        document.getElementById("text").innerHTML = "<p>ボタンをクリックしました</p>"
    }, 2000);
    
});
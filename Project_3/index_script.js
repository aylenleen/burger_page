const button = document.getElementById("zakaz-main");
button.onclick = changeText;
function changeText() {
    for(let i = 1; i <=6; i++) {
        setTimeout(function() {
            button.innerHTML = "Загрузка..."+i + " сек";
            if(i===6) {
                button.innerHTML = "Ура!";
                document.getElementById("skidka").innerHTML = "Скидка 50% уже в корзине!";
            } 
        }, 1000*i);
    }
    
}

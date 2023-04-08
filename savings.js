

function updateSavings() {
    let add = document.getElementById("number").value;
    if (!(isNaN(parseInt(add)))){
        document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + parseInt(add);
    }
    if (parseInt(document.getElementById("current").innerHTML) >= parseInt(document.getElementById("goal").innerHTML)){
        window.location.pathname = "Users/riyathapar/bitcamp2023/victory.html";
    }
}
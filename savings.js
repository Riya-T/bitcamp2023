let ready = false;
function updateSavings() {
    if (ready == true){
        window.location.pathname = "Users/riyathapar/bitcamp2023/victory.html";
    }
    let add = document.getElementById("number").value;
    if (!(isNaN(parseInt(add)))){
        document.getElementById("current").innerHTML = parseInt(document.getElementById("current").innerHTML) + parseInt(add);
    }
    if (parseInt(document.getElementById("current").innerHTML) >= parseInt(document.getElementById("goal").innerHTML) && document.getElementById("goal1").checked && document.getElementById("goal2").checked && document.getElementById("goal3").checked){
        button = document.getElementById("savings-submit");
        button.value = "Shoot for the Moon!";
        ready = true;
    }

}

function updateSavingsCheckbox() {
    if (parseInt(document.getElementById("current").innerHTML) >= parseInt(document.getElementById("goal").innerHTML) && document.getElementById("goal1").checked && document.getElementById("goal2").checked && document.getElementById("goal3").checked){
        button = document.getElementById("savings-submit");
        button.value = "Shoot for the Moon!";
        ready = true;
    }
}
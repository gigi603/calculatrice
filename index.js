function useCalculatrice(){
    let stateCalculatrice = document.getElementById("turnOnOff");
    let display           = document.getElementById("display");
    let operation         = [];
    if(stateCalculatrice.value == "off"){
        stateCalculatrice.value = "on"
        display.value  = 0;
        let buttons = document.querySelectorAll('button.btn');
        buttons.forEach(function (item, idx) {
            item.addEventListener('click', function () {
                if(stateCalculatrice.value == "on"){
                    if(item.value == "="){
                        let calcul = "";
                        operation.forEach(function(item, index, array) {
                            calcul += item;
                        });
                        display.value = eval(calcul);
                    } 
                    else if(item.value == "ce"){
                        operation.pop();
                        display.value = operation.join("");
                    } else {
                        operation.push(item.value);
                        operation.forEach(function(item, index, array){
                            display.value = operation.join("");
                        })
                    }
                }
            });
        });
    } else {
        stateCalculatrice.value = "off";
        display.value  = "";
    }
}



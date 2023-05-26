function calculo(){
    let cantidad = document.getElementById("form-cantidad").value;
    let categoria = document.getElementById("form-categoria").value;
    let total = 0;

    if(categoria == 1){
        total = (cantidad * 200) * 0.2;
    }else if(categoria == 2){
        total = (cantidad * 200) * 0.5;
    }else if(categoria == 3){
        total = (cantidad * 200) * 0.85;
    }
    document.getElementById("form-total").innerHTML = "Total a Pagar: $" + total;
}
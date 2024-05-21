function validacao(){

    let nome = document.getElementById("i_nome");
    let email = document.getElementById("i_email");
    let data = document.getElementById("i_data");
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_conSenha");

    estilo_input(nome, "#f51515", "#151414");
    estilo_input(email, "#f51515", "#151414");
    estilo_input(data, "#f51515", "#151414");
    estilo_input(senha, "#f51515", "#151414");
    estilo_input(con_senha, "#f51515", "#151414");
}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;

    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}
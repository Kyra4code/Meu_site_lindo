function salvar(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("datazinha").value;
    const cor = document.getElementById("cor-preferida").value;
    const mimida = document.getElementById("Comida-preferida").value;

    const listage = document.getElementById("listagem").value;
    
    const itemlista = document.createElement("li");

    const fullbox = document.createElement("div");

    fullbox.classList.add("boxfight");
    fullbox.style.backgroundColor = cor;

    itemlista.innerHTML = `<span>${nome} - ${idade} - ${mimida}</span>`;
    itemlista.prepend(fullbox);

    listage.appendChild(itemlista);

    document.getElementById("dataForm").reset();
}

console.log(salvar())
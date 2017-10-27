function Carro(marca, modelo, ano) {
    this.id = 0;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano
}

function populandoListaCarros(){
    //inicializando lista de carros e salvando no storage.
    var carros = new Array();
    var carro1 = new Carro("Ford", "Fiesta", 2015);
    carro1.id = 0;
    var carro2 = new Carro("Toyota", "Corola", 2017);
    carro2.id = 1;
    var carro3 = new Carro("GM", "Cruze", 2017);
    carro3.id = 2;
    carros.push(carro1);
    carros.push(carro2);
    carros.push(carro3);
    NativeStorage.setItem("carros", carros, funcSuccess, setError);
}

function funcSuccess(obj) {
    console.log(JSON.stringify(obj));
}

function setError(erro) {
    alert("Inicio:"+JSON.stringify(erro));
}
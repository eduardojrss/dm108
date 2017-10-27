var CarroService = {
    carros: new Array(),

    getAll: function(){
        return this.carros;
    },

    setCarros: function(lista) {
        this.carros = lista;
    },

    add: function(marca, modelo, ano) {
        var carro = new Carro(marca, modelo, ano);
        carro.id = this.carros.length;
        this.carros.push(carro);
        NativeStorage.setItem("carros", this.carros, funcSuccess, setError);
    },

    remove: function(marca){
        for (var i = this.carros.length - 1; i >= 0; i--) {
            var index = this.carros[i].marca.indexOf(marca);
            if (index > -1) {
                this.carros.splice(index, 1);
            }
        }
        
    },

    edit: function(carro){
        for (var i = 0; i < this.carros.length; i++) {
            if (this.carros[i].id == carro.id) {
                this.carros[i] = carro;
                break;
            }
        }

        NativeStorage.setItem("carros", this.carros, funcSuccess, setError);
    }
}
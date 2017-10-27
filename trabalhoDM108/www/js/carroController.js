var CarroController = {

    init: function (){
        //Register events via framework7
        $$(document).on("click", "#btnAddCarro", CarroController.goToAdd);
        $$(document).on("click", "#save", CarroController.save);
        $$(document).on("click", "#cancel", CarroController.cancel);

        //load carro list
        this.inicializaLista();
    },

    goToAdd: function () {
        //Framework7 carregando a página addCarro
        mainView.router.loadPage("addCarro.html");
    },

    save: function(){
        var marca = $$("#marca").val();
        var modelo = $$("#modelo").val();
        var ano = $$("#ano").val();
        var id = $$("#edit").val();

        if (!id) {
            CarroService.add(marca, modelo, ano);
        } else {
            var carro = new Carro(marca, modelo, ano);
            carro.id = id;
            CarroService.edit(carro);
        }
        
        //refresh carro list
        CarroController.inicializaLista();
    },

    cancel: function(){    
        CarroController.inicializaLista();
    },

    inicializaLista: function () {
        mainView.router.back();
        NativeStorage.getItem("carros", this.setSuccess, this.erroInicializa);
    },

    setSuccess: function(obj) {
        CarroService.setCarros(obj);
         myApp.virtualList('.list-block.virtual-list', {
            items: obj,
            // Template 7 template ira renderizar os itens
            template: '<li>' +
                        '<a href="addCarro.html?id={{id}}&marca={{marca}}&modelo={{modelo}}&ano={{ano}}" class="item-link">'+
                          '<div class="item-content">' + 
                                '<div class="item-inner">' +
                                    '<div class="item-title">{{marca}}</div>' +
                                    '<div class="item-after">{{modelo}}</div>' +
                                    '<div class="item-after">{{ano}}</div>' +
                                '</div>' +
                           '</div>' +
                        '</a>' +
                       '</li>'
        });       
    },

    erroInicializa: function (erro) {
        alert("inicializa: "+erro);
    }

}
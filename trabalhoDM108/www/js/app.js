// Inicializacao
var myApp = new Framework7({
    material: true, //quando material:true nao suporta back link com navegacao dinamica
    template7Pages: true
});

// Exportando os seletores
var $$ = Dom7;

// Adicionando uma view principal
var mainView = myApp.addView('.view-main', {
    // Configurado para o modo de navegação dinâmico
    dynamicNavbar: true
});

//evento especifico do cordova
$$(document).on('deviceready', function() {
    //inicializando lista de carros
    populandoListaCarros();
    StatusBar.backgroundColorByHexString("#333");
    //get the current token
    window.FirebasePlugin.getInstanceId(
        function(token) {
            console.log(token);
        },
        function(error) {
            alert(error);
        }
    );

    //subscribe to topic "example"
    window.FirebasePlugin.subscribe("carros");

    window.FirebasePlugin.onNotificationOpen(
        function(notification) {
            alert(JSON.stringify(notification));
        },
        function(error) {
            alert(error);
        }
    );
    CarroController.init();
});
var app = require('express')(); // criacao do aplicativo

/* Configuracoes iniciais */
app.set("view engine", "ejs"); // fala que esta usando ejs como motor de views
app.set("views", "./app/views"); // fala que as views (os arquivos ejs) estao no diretorio ./app/views

/* Fala pra porta 3000 escutar as requisicoes */
app.listen(3000, function() {
	console.log("Ola mundo :)");
});


/* Se uma requisicao get no diretorio '/' for recebida, renderiza a index.ejs (pagina inicial) */
app.get('/', function(req, res) {
	res.render('index');
});
var express = require('express'); // criacao do aplicativo
app = express();
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir))
/* Configuracoes iniciais */
app.set("view engine", "ejs"); // fala que esta usando ejs como motor de views
app.set("views", "./app/views"); // fala que as views (os arquivos ejs) estao no diretorio ./app/views

/* Fala pra porta 3000 escutar as requisicoes */
app.listen(3000, function() {
	console.log("Ola mundo :)");
});

var fs = require("fs");

var contents = fs.readFileSync("aplicativos.json");
var aplicativos = JSON.parse(contents);

contents = fs.readFileSync("videos.json");
var videos = JSON.parse(contents);

contents = fs.readFileSync("restaurantes.json");
var restaurantes = JSON.parse(contents);

contents = fs.readFileSync("sociocaaso.json");
var sociocaaso = JSON.parse(contents);

contents = fs.readFileSync("sociofederal.json");
var sociofederal = JSON.parse(contents);

contents = fs.readFileSync("socioatleticaaso.json");
var socioatleticaaso = JSON.parse(contents);


/* Se uma requisicao get no diretorio '/' for recebida, renderiza a index.ejs (pagina inicial) */
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/transporte', function(req, res) {
	res.render('transporte');
});
app.get('/dicas', function(req, res) {
	res.render('dicas', {apps: aplicativos, videos: videos, restaurantes: restaurantes});
});
app.get('/bolsasauxilio', function(req, res) {
	res.render('bolsasauxilio');
});
app.get('/associacoes', function(req, res) {
	res.render('associacoes', {sociocaaso: sociocaaso, sociofederal: sociofederal, socioatleticaaso: socioatleticaaso});
});

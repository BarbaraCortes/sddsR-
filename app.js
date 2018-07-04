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

/* JSONS dos slides */
var contents = fs.readFileSync("data/aplicativos.json");
var aplicativos = JSON.parse(contents);

contents = fs.readFileSync("data/videos.json");
var videos = JSON.parse(contents);

contents = fs.readFileSync("data/restaurantes.json");
var restaurantes = JSON.parse(contents);

contents = fs.readFileSync("data/sociocaaso.json");
var sociocaaso = JSON.parse(contents);

contents = fs.readFileSync("data/sociofederal.json");
var sociofederal = JSON.parse(contents);

/* JSONS das bolsas */
contents = fs.readFileSync("data/bolsas_usp.json");
var bolsas_usp = JSON.parse(contents);

contents = fs.readFileSync("data/bolsas_ufscar.json");
var bolsas_ufscar = JSON.parse(contents);

contents = fs.readFileSync("data/bolsas_ifsp.json");
var bolsas_ifsp = JSON.parse(contents);

contents = fs.readFileSync("data/bolsas_ic.json");
var bolsas_ic = JSON.parse(contents);

contents = fs.readFileSync("data/bolsas_intercambio.json");
var bolsas_intercambio = JSON.parse(contents);


contents = fs.readFileSync("data/socioatleticaaso.json");
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
	res.render('bolsasauxilio', {bolsas_usp: bolsas_usp, bolsas_ufscar: bolsas_ufscar, bolsas_ifsp: bolsas_ifsp, bolsas_ic: bolsas_ic, bolsas_intercambio: bolsas_intercambio});
});
app.get('/associacoes', function(req, res) {
	res.render('associacoes', {sociocaaso: sociocaaso, sociofederal: sociofederal, socioatleticaaso: socioatleticaaso});
});

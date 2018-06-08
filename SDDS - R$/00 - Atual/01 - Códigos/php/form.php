<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<?php 
$mensagem = "".$_POST['nome']." \n";
$mensagem .="" .$_POST['num']." \n";
$mensagem .= "".$_POST['curso']." \n";
$mensagem .= "".$_POST['rg']." \n";
$mensagem .= "".$_POST['orgao']." \n";
$mensagem .= "".$_POST['cpf']." \n";
$mensagem .= "".$_POST['end']." \n";
$mensagem .= "".$_POST['bairro']." \n";
$mensagem .= "".$_POST['cidade']." \n";
$mensagem .= "".$_POST['cep']." \n";
$mensagem .= "".$_POST['data']." \n";
$mensagem .= "".$_POST['email']." \n";
$mensagem .= "". $_POST['tel']."\n";

mail("aeroeescsite@gmail.com", "Inscrição Bixos", $mensagem);


echo "<script>location.href='../obrigado.html'</script>"; // Página que será redirecionada


?>
</body>
</html>

<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<?php 
$mensagem = "Nome: ".$_POST['nome']." \n";
$mensagem .= "Assunto: ".$_POST['assunto']." \n";
$mensagem .= "Email: ".$_POST['email']." \n";
$mensagem .= "Mensagem:". $_POST['mensagem'];

mail("aeroeescsite@gmail.com", "Mensagens do Site", $mensagem);


echo "<script>location.href='../obrigado.html'</script>"; // Página que será redirecionada


?>
</body>
</html>

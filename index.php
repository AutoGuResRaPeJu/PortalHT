<!doctype html>
<html>
  <head>
    <title>Home Tech</title>
    <?php
if(isset($_GET['eSend'])){
  if($_GET['eSend']=='ok'){
    echo"<script>alert('Mensagem enviada com sucesso')</script>";
  }
  if($_GET['eSend']=='fail'){
    echo"<script>alert('Preencha corretamente todos os campos')</script>";
  }
}
?>
    <?php
    include_once("header.php");
    include_once("sobrenos.php");
    include_once("portfolio.php");
    include_once("equipe.php");
    include_once("servicos.php");
    include_once("comentario.php");
    include_once("precos.php");
    include_once("faq.php");
    include_once("blog.php");
    include_once("contato.php");
    include_once("footer.php");
    ?>
    </body>
</html>
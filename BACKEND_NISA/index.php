<?php 

    include_once 'cors.php';

    function contador(){
        $archivo = "contador.txt";
        $f = fopen($archivo, "r");
        $contador = 0;
        if($f){
            $contador = fread($f, filesize($archivo));
            $contador = $contador + 1;
            fclose($f);
        }

        $f = fopen($archivo, "w+");
        if($f){
            fwrite($f, $contador);
            fclose($f);
        }
        return $contador;
    };
        $visitante = contador();
        echo $visitante;
?>

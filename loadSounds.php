<?php
    $files = scandir('./sounds');
    foreach ($files as $sound){
        if($sound == '.' || $sound == '..') continue;
        $name= substr($sound,0,strrpos($sound,'.'));
        echo '<div class="sound" id='.$sound.'>'.strtoupper($name).'</div><p>';
    }
?>
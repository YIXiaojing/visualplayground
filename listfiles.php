<?php
/**
 * List files in current dir
 */

$fileList = glob("*.html");
$names = "[";

foreach($fileList as $file) {
    $names .= "{\"name\":"+"\"+$file+\""+"},";
}

$names.="]";

echo $names;


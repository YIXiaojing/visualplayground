<?php
/**
 * List files in current dir
 */

$fileList = glob("*.html");
$name = "Nothing found";

foreach($fileList as $file) {
    $name = $file;
}

echo $name;


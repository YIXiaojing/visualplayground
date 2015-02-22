<?php
/**
 * List HTML files in Current directory as JSON.
 */

$fileList = glob("*.html");
$names = "[";

foreach($fileList as $file) {
    $names .= "{\"name\":\"{$file}\"},";
}

$names = rtrim($names, ",");
$names.="]";

echo $names;


<?php
/**
 * List all HTML files in JSON.
 */

function rglob($pattern, $flags = 0)
{
    $files = glob($pattern, $flags);
    foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR | GLOB_NOSORT) as $dir) {
        $files = array_merge($files, rglob($dir . '/' . basename($pattern), $flags));
    }
    return $files;
}

$fileList = rglob($_GET['pattern']);
$names = "[";

foreach ($fileList as $file) {
    $names .= "{\"name\":\"{$file}\"},";
}

$names = rtrim($names, ",");
$names .= "]";

echo $names;


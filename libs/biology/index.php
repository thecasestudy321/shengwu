<?php

$hostdir=dirname(__FILE__);

//获取本文件目录的文件夹地址

$filesnames = scandir($hostdir);

//获取也就是扫描文件夹内的文件及文件夹名存入数组 $filesnames

//print_r ($filesnames);
function get_extension($file)
{
    $info = pathinfo($file);
    return $info['extension'];
}

$count = 0;
foreach ($filesnames as $name) {
if(get_extension($name)=='html'){
$count = $count + 1;
}
}
echo '数量： '. $count. "<br/>";


foreach ($filesnames as $name) {
if(get_extension($name)=='html'){
//echo $name;

$url="/shengwuchuzhong/libs/biology/".$name;

$aurl= "<a href=\"".$url."\">".$url."</a>";

echo $aurl . "<br/>";
}
}

?>
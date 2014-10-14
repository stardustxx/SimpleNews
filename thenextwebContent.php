<?php
    //The Next Web
    $tnw = file_get_contents("http://feeds2.feedburner.com/thenextweb");
    $rssxml = simplexml_load_string($tnw);

    $title = $rssxml->channel->title;
          echo "<h1 class = 'title'>" . $title . "</h1>";
    $perItem = $rssxml->channel->item;

    echo "<ul class = 'itemLists'>";
    foreach ($perItem as $news){
        echo "<li class = 'perPost'><div class = 'perPostBlock'>";
        echo "<img src = '" . $news->enclosure->attributes()->url . "'/>";
        echo "<h4>" . $news->title . "</h4>";
        //echo "<p>" . $news->description . "</p>";
        echo "</div></li>";
    }
    echo "</ul>";
?>
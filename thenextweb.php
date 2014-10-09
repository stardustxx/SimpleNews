<?php
	//The Next Web
    $tnw = file_get_contents("http://feeds2.feedburner.com/thenextweb");
    $rssxml = simplexml_load_string($tnw);

    $title = $rssxml->channel->title;
          echo "<h1 class = 'title'>" . $title . "</h1>";
    $perItem = $rssxml->channel->item;

    foreach ($perItem as $news){
        echo "<div class = 'perPost'>";
        echo "<img src = '" . $news->enclosure->attributes()->url . "'/>";
        echo "<h4>" . $news->title . "</h4>";
        //echo "<p>" . $news->description . "</p>";
        echo "</div>";
    }
?>
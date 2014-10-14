<?php
    //Mashable
    $tnw = file_get_contents("http://feeds2.feedburner.com/mashable");
    $rssxml = simplexml_load_string($tnw);

    $title = $rssxml->channel->title;
    echo "<h1 class = 'title'>" . $title . "</h1>";
    $perItem = $rssxml->channel->item;

    //a random var to count ID of article
    $count = 0;

    echo "<ul class = 'itemLists'>";
    foreach ($perItem as $news){
        echo "<li id='mash$count' class = 'perPost'>";
        $namespace = $news->getNameSpaces(true);
        $ns_media = $news->children($namespace['media']);
        //create an anchor tag
        echo "<img src = '" . $ns_media->thumbnail->attributes()->url . "'/>";
        echo "<h4>". $news->title . "</h4>";
        //echo "<p class = 'description'>" . $news->description . "</p>";
        echo "</li>";
        //incredment count
        $count++;
    }
    echo "</ul>";
?>

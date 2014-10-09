<?php
	//TechCrunch
    $tnw = file_get_contents("http://feeds2.feedburner.com/TechCrunch");
    $rssxml = simplexml_load_string($tnw);

    $title = $rssxml->channel->title;
    echo "<h1 class = 'title'>" . $title . "</h1>";
    $perItem = $rssxml->channel->item;

    foreach ($perItem as $news){
        echo "<div class = 'perPost'>";
        $namespace = $news->getNameSpaces(true);
        $ns_media = $news->children($namespace['media']);
        echo "<img src = '" . $ns_media->thumbnail->attributes()->url . "'/>";
        echo "<h4>" . $news->title . "</h4>";
        //echo "<p>" . $news->description . "</p>";
        echo "</div>";
    }
?>
<?php

/*

	AUTOMATIC IMAGE ROTATOR
	Version 2.2 - December 4, 2003
	Copyright (c) 2002-2003 Dan P. Benjamin, Automatic, Ltd.
	All Rights Reserved.

	Tanner note: found this on a list apart, check it out here :
	http://alistapart.com/article/randomizer

	4. Link to the file as you would any normal image file, like this:

			<img src="http://example.com/rotate.php">

	5. You can also specify the image to display like this:

			<img src="http://example.com/rotate.php?img=gorilla.jpg">
		
		This would specify that an image named "gorilla.jpg" located
		in the image-rotation folder should be displayed.
	
	That's it, you're done.

*/

	$folder = '.';


    $extList = array();
	$extList['gif'] = 'image/gif';
	/*$extList['jpg'] = 'image/jpeg';
	$extList['jpeg'] = 'image/jpeg';
	$extList['png'] = 'image/png';*/
	

// You don't need to edit anything after this point.


// --------------------- END CONFIGURATION -----------------------

$img = null;

if (substr($folder,-1) != '/') {
	$folder = $folder.'/';
}

if (isset($_GET['img'])) {
	$imageInfo = pathinfo($_GET['img']);
	if (
	    isset( $extList[ strtolower( $imageInfo['extension'] ) ] ) &&
        file_exists( $folder.$imageInfo['basename'] )
    ) {
		$img = $folder.$imageInfo['basename'];
	}
} else {
	$fileList = array();
	$handle = opendir($folder);
	while ( false !== ( $file = readdir($handle) ) ) {
		$file_info = pathinfo($file);
		if (
		    isset( $extList[ strtolower( $file_info['extension'] ) ] )
		) {
			$fileList[] = $file;
		}
	}
	closedir($handle);

	if (count($fileList) > 0) {
		$imageNumber = time() % count($fileList);
		$img = $folder.$fileList[$imageNumber];
	}
}

if ($img!=null) {
	$imageInfo = pathinfo($img);
	$contentType = 'Content-type: '.$extList[ $imageInfo['extension'] ];
	header ($contentType);
	readfile($img);
} else {
	if ( function_exists('imagecreate') ) {
		header ("Content-type: image/png");
		$im = @imagecreate (100, 100)
		    or die ("Cannot initialize new GD image stream");
		$background_color = imagecolorallocate ($im, 255, 255, 255);
		$text_color = imagecolorallocate ($im, 0,0,0);
		imagestring ($im, 2, 5, 5,  "IMAGE ERROR", $text_color);
		imagepng ($im);
		imagedestroy($im);
	}
}

?>

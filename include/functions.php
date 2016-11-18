<?php
$serverbase = "fsnat";
$chaptercount = 12;
function getLevel () {
	$uri = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$sub_path = preg_replace('/^.+?fsnat(.*)/','$1',$uri);
	$trim_trailing_slash = preg_replace('/\/$/','',$sub_path);
	$slashes = preg_replace('/[^\/]/', '',$trim_trailing_slash);
	return strlen($slashes);
}
function rootfolder() {
	$level = getLevel();
	// relative root folder
	$toRoot = "";
	for($i=0; $i<$level; $i++) {
		$toRoot .= "../";
	}
	return $toRoot;
}

function kidsmenu () {
	$root = rootfolder();
$kidsmenu = <<<KIDSMENU
<ul class="kids menu">
			<li><a href="../kort" title="kort fortelling">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#text_short"></use>
					</svg>
					<span>Kort fortelling</span>
				</a></li>
			<li><a href="../lang" title="lang fortelling">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#text_long"></use>
					</svg>
					<span>Lang fortelling</span>
				</a></li>
			<li><a href="../let_og_finn" title="let og finn">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#investigate"></use>
					</svg>
					<span>Let og finn</span>
				</a></li>
			<li><a href="../ord" title="ord">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#words"></use>
					</svg>
					<span>Ord</span>
				</a></li>
			<li><a href="../snutter" title="snutter">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#snippets"></use>
					</svg>
					<span>Snutter</span>
				</a></li>
			<li><a href="../noe_a_gjore" title="noe å gjøre">
					<svg>
						<use xlink:href=${root}media/svg/fsnat_symbols.svg#todo"></use>
					</svg>
					<span>Noe å gjøre</span>
				</a></li>
			<li><a href="../filmer" title="filmer">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#movies"></use>
					</svg>
					<span>Filmer</span>
				</a></li>
			<li><a href="../kviss" title="kviss">
					<svg>
						<use xlink:href="${root}media/svg/fsnat_symbols.svg#quiz"></use>
					</svg>
					<span>Kviss</span>
				</a></li>
		</ul>
KIDSMENU;
return $kidsmenu;
}
function ptmenu() {
$ptmenu = <<<PTMENU
<ul class="pt menu">
	<li><a href="http://hfw.no/projects/fsnaturfag/06/veiledning/index.php">Til læreren</a></li>
	<li><a href="http://hfw.no/projects/fsnaturfag/06/foreldre.php">Til foreldre</a></li>
</ul>
PTMENU;
return $ptmenu;
}

function chaptermenu() {
	$chmenu = '<aside class="main menu">
		<nav>' . kidsmenu() . ptmenu() . '</nav></aside>';
		return $chmenu;
}

function getChapterFromUri() {
	global $serverbase;
	$uri = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$has_chapter = (preg_match('/'.$serverbase.'\/kapittel\/\d\d/',$uri) == 1);
	$chapter = false;
	if($has_chapter) {
		$chapter = intval(preg_replace('/.+?'.$serverbase.'\/kapittel\/(\d\d).*/', '$1', $uri));
	}
	return $chapter;
}

function baseChapterLink() {
	$uri = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
	$baselink = preg_replace('/(.+?fsnat\/).*/','$1',$uri);
	$chapterlink = $baselink . 'kapittel' . getChapterFromUri();
	return $chapterlink;
}

function nextChapterLink() {
	$ch = getChapterFromUri();
	$nextChUrl = baseChapterLink() . $ch+1;
	global $chaptercount;
	$nextlink = "";
	if($ch != false && $ch < $chaptercount) {
		$nextlink = <<<LINK
<a class="next" href="${nextChUrl}">${ch}</a>
LINK;
	}
	return $nextlink;
}

function prevChapterLink() {
	$ch = getChapterFromUri();
	$prevChUrl = baseChapterLink() . $ch-1;
	global $chaptercount;
	$prevlink = "";
	if($ch != false && $ch > 0) {
		$nextlink = <<<LINK
<a class="prev" href="${prevChUrl}">${ch}</a>
LINK;
	}
	return $prevlink;
}

function pageHeader($title) {
	// legg til navigasjon til forrige og neste kapittel
	$ch = getChapterFromUri();
	$addChapterClass = "";
	$prevlink = prevChapterLink();
	$nextlink = nextChapterLink();
	if($ch != false) {
		$addChapterClass .= " kap" . $ch;
	}
	$bodyClasses=trim($addChapterClass);
	$root = rootFolder();
	$html = <<<STR
<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>${title}</title>
	<!-- Bootstrap: compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="${root}css/style.css">
</head>
<body class="${bodyClasses}">
<header>
<h1>${title}</h1>
${prevlink}
${nextlink}
</header>
STR;
return $html;
}

function pageFooter() {
	$js = javaScripts();
	$html = <<<TXT
${js}
</body>
</html>
TXT;
	return $html;
}

function javaScripts() {
	$html = <<<TXT
<!-- jquery cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<!-- Bootstrap: compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
TXT;
return $html;
}
?>
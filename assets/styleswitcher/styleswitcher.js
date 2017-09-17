$(document).ready(function() {
	var html = `<div id="style-switcher">
		<html>
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
			</head>
			<body>
				<span class="ss-toggle bg-primary">
				<i class="fa fa-gear fa-spin"></i></span>
				<span class="ss-label">Color scheme:</span>
				<ul id="color-switcher">
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="blue-beige">
					    	<span class="bg-blue"></span>
					    	<span class="bg-blue-navy"></span>
					    	<span class="bg-beige"></span>
					    </a>
				    </li>
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="red-blue">
					    	<span class="bg-red"></span>
					    	<span class="bg-red-dark"></span>
					    	<span class="bg-blue"></span>
					    </a>
				    </li>
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="orange-green">
					    	<span class="bg-orange"></span>
					    	<span class="bg-brown"></span>
					    	<span class="bg-green"></span>
					    </a>
				    </li>
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="green-orange">
					    	<span class="bg-green"></span>
					    	<span class="bg-green-dark"></span>
					    	<span class="bg-orange"></span>
					    </a>
				    </li>
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="purple-yellow">
					    	<span class="bg-purple"></span>
					    	<span class="bg-purple-navy"></span>
					    	<span class="bg-yellow"></span>
					    </a>
				    </li>
				    <li>
					    <a href="assets/styleswitcher/styleswitcher.html#" data-scheme="brown-beige">
					    	<span class="bg-beige"></span>
					    	<span class="bg-brown"></span>
					    	<span class="bg-beige"></span>
					    </a>
				    </li>
				</ul>
			</body>
		</html>
	</div>`;

	$("body").append(html);
	// $("#style-switcher").load( "assets/styleswitcher/styleswitcher.html" );

	setTimeout(function() {

		var preColorLink = $('#color').attr("href");

		var activeScheme = preColorLink.substring(17); 
		activeScheme = activeScheme.substring(0,activeScheme.length-4); 

		var $colorSwitcher = $('#color-switcher');

		$colorSwitcher.find('a').each(function() {
	        if($(this).data('scheme')==activeScheme) $(this).addClass('active');
	    });
		
		$colorSwitcher.find('a').on('click', function(){
			var scheme = $(this).data('scheme');
			$('#color').attr('href','assets/css/color/'+scheme+'.css');
			
			$colorSwitcher.find('a.active').removeClass('active');
			$(this).addClass('active');

			return false;
		})
	
		$('#style-switcher .ss-toggle').click(function(){
			var div = $('#style-switcher');
			if (div.css('right') === '-175px') {
				$('#style-switcher').animate({
					right: '0'
				});
				$(this).toggleClass('active');
			} else {
				$('#style-switcher').animate({
					right: '-175px'
				});
				$(this).toggleClass('active');
			}
			return false;
		});
	}, 1000)

});
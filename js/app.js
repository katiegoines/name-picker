$(function(){
	var picked = []
	var names = [
		"Joe",
		"Pat",
		"Sally"
	]

	var animations = ["rotateIn", "rotateInUpLeft", "rotateInDownRight", "bounceIn", "bounceInUp", "flipInX", "flipInY", "lightSpeedIn", "rollIn", "zoomIn"]

	var $body = $('body')
	var $nameContainer = $('#name-container')
	var $pick = $('#pick')

	$pick.click(function(){
		shuffleBackground()
		pickName()
	})

	
	function shuffleBackground() {
		// adapted from Stack Overflow answer:
		// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    $body.animate({
	    	backgroundColor: color
	    })
	}

	function pickName(){
		picked.push(names.splice(Math.floor(Math.random() * names.length), 1).join(''))
		var animation = animations[Math.floor(Math.random() * animations.length)]
		$nameContainer.html('<h1 class="animated ' + animation + '">' + picked[picked.length - 1] + '</h1>')
		if(names.length == 0) {
			names = picked.concat()
			picked = []
		}
	}
})

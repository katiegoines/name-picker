$(function(){
	var picked = []
	var names = [
		"Joe",
		"Pat",
		"Sally"
	]

	var $body = $('body')
	var $nameContainer = $('#name-container')
	var $pick = $('#pick')

	$pick.click(function(){
		shuffleBackground()
		pickName()
	})

	// adapted from Stack Overflow answer:
	// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript

	function shuffleBackground() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    $body.animate({
	    	backgroundColor: color
	    })
	    // $body.css('background-color', color)
	}

	function pickName(){
		picked.push(names.splice(Math.floor(Math.random() * names.length), 1).join(''))
		console.log("Names:", names)
		console.log("Picked:", picked)
		$nameContainer.html(picked[picked.length - 1])
		if(names.length == 0) {
			names = picked.concat()
			picked = []
		}
	}

	
})

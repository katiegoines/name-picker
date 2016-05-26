$(function(){
	var picked = []
	var names = [
		"Joe",
		"Pat",
		"Sally"
	]

	var $nameContainer = $('#name-container')
	var $pick = $('#pick')

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

	$pick.click(function(){
		pickName()
	})
})

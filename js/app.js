var names = [
	"Joe",
	"Pat",
	"Sally"
]

var picked = []

function pickName(arr){
	picked.push(arr.splice(Math.floor(Math.random() * arr.length), 1).join(''))
	if(names.length < 1) {
		names = picked.concat()
		picked = []
	}
}
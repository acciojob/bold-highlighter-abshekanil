function highlight() {
    //Write your code here
	let boldWords = document.querySelectorAll('p strong');
	boldWords.forEach(function(word){
		word.style.color = 'green';
	});

}


function return_normal() {
    //Write your code here
	let boldWords = document.querySelectorAll('p strong');
	boldWords.forEach(function(word){
		word.style.color = 'black';
	});

    
}

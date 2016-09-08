
module.exports = removeDuplicates('gg');

function removeDuplicates(str) {
	var i=0;
	var uniqueChars = '';

	for (i; i < str.length; i++) {
	
			var j=0;
			var isUnique = true;

			for (j; j < uniqueChars.length; j++) {
				if (uniqueChars.charAt(j) == str[i]) {
					isUnique = false;
				}
			}

			if (isUnique) {
				uniqueChars += str[i];
			}
		
	}

	console.log('new string: ' + uniqueChars);
	return uniqueChars;

}
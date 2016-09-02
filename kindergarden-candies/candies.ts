
declare var process:any;
var inputArguments = process;

class KindergardenCandies {


	public calculateCandies() {
		
		var numberOfChildren = process.argv[2];

		for (var i = 3; i < process.argv.length; i++) {
				//	console.log(' arg ' + i + ': ' + process.argv[i]);
		

			console.log('Currently looking at: ' + process.argv[i]);

			if (i - 1 < 3) {
				console.log('First arg: ' + process.argv[i]);
			}
			else {
				console.log('prev rank: ' + process.argv[i-1]);
			}


			if (i + 1 >= process.argv.length) {
				console.log('last one!');
			}
			else {
				console.log('next rank: ' + process.argv[i+1]);
			}
		
		}

	}

}


var candies = new KindergardenCandies();
candies.calculateCandies();


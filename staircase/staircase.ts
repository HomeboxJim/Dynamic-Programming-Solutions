
///<reference path = "./typings/lib.es6.d.ts" />

declare var process:any;
var staircaseString:string = '';
var emptySpace:string = ' ';

class Staircase {

	constructor () {

	}

	public createStaircase(N) {
		
		for (var i = 1; i < N; i++) {

			var currentLine = emptySpace.repeat(N - i - 1);
			staircaseString += currentLine + '#'.repeat(i) + '\n';

		}
	
		console.log(staircaseString);
		
	
	}

}

var staircase = new Staircase;
staircase.createStaircase(process.argv[2]);


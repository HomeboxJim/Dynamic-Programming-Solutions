
declare var process:any;

class SimpleArgs {
    constructor () {
	console.log('doing things');
	    console.log('You entered: ' + process.argv[2]);

    }
}

console.log('hmm');

var thing = new SimpleArgs;


declare var process:any;
var input:number = process.argv[2];

class Fibbonacci {

	constructor () {

	}

	public fib (N) {


		if (N == 0) {
			return 0;
		}

		else if (N == 1) {
			return 1;
		}

		else {
			N = this.fib(N - 1) + this.fib(N - 2);
		}

		return N;
	}

}

var Fib = new Fibbonacci;

console.log('Fibbonacci(' + input + ') is: ' + Fib.fib(input));  

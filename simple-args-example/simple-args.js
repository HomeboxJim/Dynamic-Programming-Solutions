

console.log('ok');

var SimpleArgs = (function () {
    function SimpleArgs() {
        console.log('You entered: ' + process.argv[1]);
    }
    return SimpleArgs;
}());

SimpleArgs();

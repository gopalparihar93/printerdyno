var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'printdyno', 'coolMethod', [arg0]);
};

module.exports.printUnicodeText =function(arg){
     exec(success, error, 'CieBluetoothPrinter', 'printUnicodeText',arg);
}
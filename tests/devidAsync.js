module.exports.devideAsync = function(a, b, callback) {
    setTimeout(() => {
        callback(a / b);
    }, 1000);
}
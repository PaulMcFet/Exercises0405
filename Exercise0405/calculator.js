module.exports.add = function(x, y) {
    return x+y; 
}

module.exports.subtract = function(x, y) {
    return x-y; 
}

module.exports.multiply = function(x, y) {
    return x*y; 
}

module.exports.divide = function(x, y) {
    return x/y; 
}

module.exports.iseven = function(x){
    if (x%2 == 0);
    return true; 
}

module.exports.isodd = function(x){
    if (x%2 !== 0);
    return true; 
}
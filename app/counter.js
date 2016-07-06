// Simple loop printing n-100.

//console.log(simpleLoop(99));

exports.simpleLoop = function(n){
    let loopArray = [];
    for(var x = n; x <= 100; x++){
        loopArray.push(x);
    }
    return loopArray.toString();
}

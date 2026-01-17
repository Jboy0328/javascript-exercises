const repeatString = function(word, timesRepeted) {
    if (timesRepeted < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < timesRepeted; i++) {
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;

const fs = require('fs');
var read = fs.readFileSync('../inputdata/India2011_Merge_csv.csv').toString();
var set = new Set();
var set1 = new Set();
var line = read.split('\n');
var arr = [];
var eachObj = {};
for (var i = 1; i < line.length - 2; i++) {
    var currentLine = line[i].split(',');
    set.add(currentLine[5]);
}
for (var i = 1; i < line.length - 2; i++) {
    var currentLine = line[i].split(',');
    set1.add(currentLine[3]);
}
for (age of set) {
    var Total_graduate = 0;
    var Age = 0;
    for (var i = 1; i < line.length; i++) {
        var currentLine = line[i].split(',');
        if (currentLine[4] === 'Total' && currentLine[5] === age) {
            Age = currentLine[5];
            Total_graduate += Number(currentLine[12]);
        }
    }
    arr.push({
        Age: Age,
        Total_graduate: Total_graduate
    });
}
arr.pop();
fs.writeFileSync('../outputdata/age_graduate_json.json', JSON.stringify(arr, null, 2));
console.log('Done');

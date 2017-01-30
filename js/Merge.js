var fs = require('fs');
function ReadAppend(file, appendFile) {

    //Reading the append file
    fs.readFile(appendFile, function(err, data) {
        if (err) {
            console.log('File was not Read');
            throw err;
        }
        console.log('File was Read');

        fs.appendFile(file, data, function(err) {
            console.log('File')
            if (err) {
                console.log('File was not append ');
                throw err;
            }
            console.log('The "data to append" was appended to a file');
        });
    });
}

file = '../csv/India2011_Merge_csv.csv';
appendFile = '../inputdata/India2011.csv';
file = ReadAppend(file, appendFile);
appendFile = '../inputdata/IndiaSC2011.csv';
file = ReadAppend(file, appendFile);
appendFile = '../inputdata/IndiaST2011.csv';
ReadAppend(file, appendFile);

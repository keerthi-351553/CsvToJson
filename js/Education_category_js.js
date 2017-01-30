var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var instream = fs.createReadStream('../inputdata/India2011_Merge_csv.csv');
var outstream = new stream();
var rl = readline.createInterface(instream, outstream);
var arr = [];
var eachObj = {};
var Literate = 0;
var Literate_without_Education = 0;
var Below_Primary = 0;
var Primary = 0;
var Middle = 0;
var Matric_Secondary = 0;
var Higher_secondary_Intermediate_PreUniversity_Senior_secondary = 0;
var Nontechnical_diploma_or_certificate_not_equal_to_degree = 0;
var Technical_diploma_or_certificate_not_equal_to_degree = 0;
var Graduateabove = 0;
var Unclassified = 0;

rl.on('line', function(line) {
    var row = line.split(',');
    if (row[5] === "All ages" && row[4] === 'Total') {
        Literate += Number(row[12]),
            Literate_without_Education += Number(row[15]),
            Below_Primary += Number(row[18]),
            Primary += Number(row[21]),
            Middle += Number(row[24]),
            Matric_Secondary += Number(row[27]),
            Higher_secondary_Intermediate_PreUniversity_Senior_secondary += Number(row[30]),
            Nontechnical_diploma_or_certificate_not_equal_to_degree += Number(row[33]),
            Technical_diploma_or_certificate_not_equal_to_degree += Number(row[36]),
            Graduateabove += Number(row[39]),
            Unclassified += Number(row[42])
    }
});
rl.on('close', function() {
    arr.push({
        Literate: Literate,
        'Literate without Education': Literate_without_Education,
        'Below Primary': Below_Primary,
        Primary: Primary,
        Middle: Middle,
        'Matric/Secondary': Matric_Secondary,
        'Higher secondary/Intermediate/PreUniversity/Senior_secondary': Higher_secondary_Intermediate_PreUniversity_Senior_secondary,
        'Nontechnical diploma or certificate not equal to degree': Nontechnical_diploma_or_certificate_not_equal_to_degree,
        'Technical diploma or certificate not equal to degree': Technical_diploma_or_certificate_not_equal_to_degree,
        'Graduate&above': Graduateabove,
        'Unclassified': Unclassified
    });
    fs.writeFile('../outputdata/education_category_json.json', JSON.stringify(arr, null, 2), 'utf8', function(error) {
        if (error) {
            console.log(error);
        }
    });
});

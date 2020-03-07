var fs = require('fs');
var manifestversion = 1

//If the manifest file exist then increment it by one
do
{
    console.log(manifestversion);
    manifestversion = manifestversion + 1;
}while(fs.existsSync('.man-' + manifestversion + '.rc'))

fs.writeFile('.man-' + manifestversion + '.rc','empty', (err) => 
{
    if (err) throw 'unable to write file';
})


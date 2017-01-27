var glob = require('glob');

function getFeatures(fileLocations) {
    var files = [];

    fileLocations.forEach(function(fileLocation) {
        var pattern = '';
        if (fileLocation == '.') {
            pattern = '**/*.feature';
        } else if (fileLocation.match(/.*\/\*\*/)) {
            pattern = fileLocation.slice(0, -1) + '.feature';
        } else if(fileLocation.match(/\/$/)) {
            pattern = fileLocation + '**/*.feature';
        } else if (fileLocation.match(/.*\.feature/)) {
            pattern = fileLocation;
        } else {
            throw new Error('Invalid input format. To run the linter please specify a feature file, directory or glob.');
        }

        files = files.concat(glob.sync(pattern));
    });
    return files;
}

module.exports = {
    getFeatures: getFeatures
};
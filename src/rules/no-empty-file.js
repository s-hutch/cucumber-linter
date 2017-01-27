var rule = 'no-empty-file';

function noEmptyFile(feature) {

    if (feature && feature.length) {
        console.log('Empty files aren\'t allowed: ' + feature);
    }
}

module.exports = {
    noEmptyFile: noEmptyFile
};
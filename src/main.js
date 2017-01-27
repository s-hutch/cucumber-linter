#!/usr/bin/env node

var argv = require('yargs')
    .array('f')
    .usage('Usage: $0 -f [options]')
    .example('$0 -f ./*.feature', 'location of feature files')
    .describe('f', 'location of feature files')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .argv;
var rules = require('./rules/no-empty-file.js');
var featureFinder = require('./feature-finder.js');

var files = featureFinder.getFeatures(argv.f);

for(var i = 0; i < files.length; i++) {
    rules.noEmptyFile(files[i]);
}

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var GalvanizeHTMLGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();
    // greeting
    console.log(chalk.magenta("Welcome to Galvanize's Linter Generator"));
  },
  createApp: function(){
    // gulp
    this.copy('gulpfile.js', 'gulpfile.js');
    // package.json
    this.copy('package.json', 'package.json');
    // .jscsrc
    this.copy('.jscsrc', '.jscsrc');
  },
});

module.exports = GalvanizeHTMLGenerator;

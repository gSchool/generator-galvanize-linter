(function() {

  'use strict';

  var yeoman = require('yeoman-generator');
  var chalk = require('chalk');
  var yosay = require('yosay');

  module.exports = yeoman.Base.extend({
    prompting: function () {
      this.log(yosay(
        'Welcome to the finest ' + chalk.red('generator-galvanize-linter') + ' generator!'
      ));
    },
    writing: function () {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('.jscsrc'),
        this.destinationPath('.jscsrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('src/junk'),
        this.destinationPath('src/.junk')
      );
    }
  });

}());

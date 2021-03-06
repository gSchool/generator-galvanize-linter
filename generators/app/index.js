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
    writingFiles: function () {
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
    },
    writingFolders: function () {
      this.fs.copy(
        this.templatePath('src/.junk'),
        this.destinationPath('src/.junk')
      );
    }
  });

}());

//
//  ActionSheet.js
//
// Created by Patrick Heneise, @PatrickHeneise
//
// Copyright 2013 Parick Heneise. All rights reserved.
// MIT Licensed

var exec = require('cordova/exec');

var StatusBar = function StatusBar() {
  this.show = function(callback) {
    exec(callback, null, 'StatusBar', 'show', []);
  };

  this.hide = function(callback) {
    exec(callback, null, 'StatusBar', 'hide', []);
  };

  this.whiteTint = function(callback) {
    exec(callback, null, 'StatusBar', 'whiteTint', []);
  };

  this.blackTint = function(callback) {
    exec(callback, null, 'StatusBar', 'blackTint', []);
  };
};

module.exports = new StatusBar();
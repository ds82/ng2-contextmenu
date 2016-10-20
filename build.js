#!/usr/bin/env node
'use strict';

/*eslint no-console: 0, no-sync: 0*/

// System.js bundler
// simple and yet reusable system.js bundler
// bundles, minifies and gzips

const fs = require('fs');
const del = require('del');
const path = require('path');
const zlib = require('zlib');
const async = require('async');
const Builder = require('systemjs-builder');

const pkg = require('./package.json');
const name = pkg.name;
const baseURL = __dirname;
const targetFolder = path.resolve(__dirname, './bundles');

const systemjsConfig = {
  normalize: false,
  minify: false,
  mangle: false,
  runtime: false,
  globalDefs: {
    DEBUG: false,
    ENV: 'production'
  }
};

const config = {
  baseURL: baseURL,
  defaultJSExtensions: true,
  transpiler: 'typescript',
  typescriptOptions: {
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "listFiles": false,
    "noLib": false,
    "module": "commonjs",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "sourceMap": false,
    "target": "es5"
  },
  map: {
    typescript: path.resolve('node_modules/typescript/lib/typescript.js'),
    '@angular/core': path.resolve('node_modules/@angular/core/index.js'),
    '@angular/common': path.resolve('node_modules/@angular/common/index.js'),
    '@angular/compiler': path.resolve('node_modules/@angular/compiler/index.js'),
    '@angular/platform-browser': path.resolve('node_modules/@angular/platform-browser/index.js'),
    '@angular/platform-browser-dynamic': path.resolve('node_modules/@angular/platform-browser-dynamic/index.js'),
    rxjs: path.resolve('node_modules/rxjs')
  },
  packages: {
    'src/contextmenu': {
      defaultExtension: 'ts'
    }
  },
  paths: {
    // '*': '*.js'
  },
  meta: {
    '@angular/core': { build: false },
    '@angular/platform-browser': { build: false }
  }
};

const builder = new Builder(config);
// builder.loadConfig(config).then(build);

build();

function build() {
  return builder.buildStatic(
    path.join(config.baseURL, 'src/contextmenu/contextmenu.module.ts'),
    path.join(targetFolder, 'contextmenu.umd.js'),
    systemjsConfig
  );
}
#!/usr/bin/env node


/*!
 * KnotDB®
 * ____________________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ____________________________________________________________________
 * @date      : 31-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Compass
 * @build     : SEED™ — Katowice
 *              |---- A Sequømics Product — http://sequomics.com/.
 * ____________________________________________________________________
 *
 * --/The Heart of Build System/-- of "KnotDB®".
 * ____________________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
'use strict';

// To load required Node module.
// -----------------------------
var fs          = require('fs');
var path        = require('path');

// To load required NPM modules.
// -----------------------------
var chalk       = require('chalk');

// Default color defined.
// ----------------------
var noop        = chalk.red;
var yeep        = chalk.green;
var okay        = chalk.blue;
var boop        = chalk.gray;

// Global variables.
// ~~~~~~~~~~~~~~~~~
var rootPath    = './';
var appsPath    = './app/';
var docsPath    = './docs/';
// To use inside grunt task.
var pkg         = require('./package.json');
var bkg         = require('./bower.json');
var version     = process.env.VERSION || require('./package.json').version;
// ----------------------------------------------------------------------------------------------------------
var banner      =
    '/*!\n' +
    ' * KnotDB®: v' + version + '\n' +
    ' * A manually curated dedicated computational proteomics proteins knots database.\n' +
    ' * Copyright © 2008 - ' + new Date().getFullYear() + ', Prabhat Kumar, All rights reserved.\n' +
    ' * Copyright © 2014 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.\n' +
    ' * Released under the Apache License (http://www.apache.org/licenses/).\n' +
    ' */';
// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |----------------------------------------| 02/Nov/2016 | SEED™ — Katowice.
// ----------------------------------------------------------------------------------------------------------

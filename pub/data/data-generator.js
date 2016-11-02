/*!
 * KnotDB®
 * A manually curated dedicated computational proteomics proteins knots database.
 * ______________________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ______________________________________________________________________________
 * @date      : 02-Nov-2016
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Grunt
 * @license   : Apache, version 2.0
 * @build     : SEED™ — Katowice
 *              |---- A Sequømics Product — http://sequomics.com/.
 * ______________________________________________________________________________
 */

/* jshint node: true */

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
'use strict';

// To load required Node module.
// -----------------------------
var fs          = require('fs');
var path        = require('path');

// Global variables.
// ~~~~~~~~~~~~~~~~~
var rawPath     = './pub/data/raw/';
var goldPath    = './pub/data/gold/';

// To read data of protein(s).
// Pass encoding, {utf8}, so `readFileSync` will return a string instead of a buffer.
var dataSetting = fs.readFileSync('./pub/data/raw/settings.json', 'utf8');

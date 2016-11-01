/*!
 * ┌────────────────────────────────────────────────────────────────────────———————─┐
 * | KnotDB®                                                                        |
 * | A manually curated dedicated computational proteomics proteins knots database. |
 * └───────────────────────────────────────────────────────────────────────———————──┘
 *
 * To work on protein data — {.fasta/.pdb} formatted.
 * __________________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * __________________________________________________________________________________
 *
 * @date      : 31-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * __________________________________________________________________________________
 *
 * --/The Heart of JavaScript Data System/-- of "KnotDB®".
 * __________________________________________________________________________________
 */

'use strict';

/* standards: ECMAScript-5 */

// To load required Node module.
// -----------------------------
var fs          = require('fs');
var path        = require('path');
var os          = require('os');

// To load required NPM modules.
// -----------------------------
var request     = require('sync-request');
var download    = require('download');
var decompress  = require('decompress');
var chalk       = require('chalk');
// ----- decompress plugin -----
var decompressTargz = require('decompress-targz');
var decompressUnzip = require('decompress-unzip');

// Default color defined.
// ----------------------
var noop        = chalk.red;
var yeep        = chalk.green;
var okay        = chalk.blue;
var boop        = chalk.gray;

// Global variables.
// ~~~~~~~~~~~~~~~~~
var rootPath    = './';
var dataPath    = rootPath + 'pub/data/raw';
// To hit API of "RCSB PDB".
var apiPath     = null;
var reaction    = null;
var datum       = null;
var warns       = null;

// ----------------------------------------------------------------------------------
// To check 'package.json'.
// ----------------------------------------------------------------------------------
if (!path.resolve(path.join(__dirname,'./package.json'))) {
  console.log(noop('SEED™: package.json is not found in to the root directory!'));
}
var version = process.env.VERSION || require('./package.json').version;

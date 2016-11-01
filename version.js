/*!
 * KnotDB®
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ____________________________________________________________________
 * @date      : 31-Oct-2016
 * @license   : Apache, version 2.0
 * @build     : SEED™ — Katowice
 *              |---- A Sequømics Product — http://sequomics.com/.
 * ____________________________________________________________________
 */

'use strict';

// To load required Node module.
// -----------------------------
var path      = require('path');

// ----------------------------------------------------------------------------------
// To check 'package.json'.
// ----------------------------------------------------------------------------------
if (!path.resolve(path.join(__dirname,'./package.json'))) {
  console.log(noop('SEED™: package.json is not found in to the root directory!'));
}

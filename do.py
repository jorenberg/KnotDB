#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ————————————————————————————————————————————————————————————————————————————
# Copyright © 2014 - 2016, Sequømics Corporation. All rights reserved.
# Licensed under the Apache License (the "License, version 2.0");
# you may not use this file except in compliance with the License.
# ————————————————————————————————————————————————————————————————————————————
__authors__       = [
    '"Prabhat Kumar" <prabhat.genome@gmail.com>',
    '"Sequømics Corporation" <admin@sequomics.com>'
    ]
__license__       = 'Apache License'
__date__          = '31-10-2016'
__copyright__     = "Prabhat Kumar"
__webserver__     = "http://database.sequomics.com/knotdb/"
__license__       = "http://database.sequomics.com/knotdb/license.txt"
# ————————————————————————————————————————————————————————————————————————————
module            = 'KnotXpert'
input_path        = 'core/source/engine'
output_path       = 'core/source/compiled/knotxpert.js'
# ————————————————————————————————————————————————————————————————————————————
# Load required modules.
import os
import sys
import re
import time
import tempfile
import warnings
from termcolor import colored
# ————————————————————————————————————————————————————————————————————————————
localtime = time.asctime(time.localtime(time.time()))

header ='''/*!
 * ┌────────────────────────────────────────────────────────────────────────────────┐
 * | KnotXpert® of KnotDB®                                                          |
 * ├────────────────────────────────────────────────────────────────────────────────┤
 * | A manually curated dedicated computational proteomics proteins knots database. |
 * ├────────────────────────────────────────────────────────────────────────────────┤
 * | Using a basic and advance computational biology algorithms.                    |
 * ├────────────────────────────────────────────────────────────────────────────────┤
 * | Copyright © 2008 - 2016, Prabhat Kumar, All rights reserved.                   |
 * └────────────────────────────────────────────────────────────────────────────────┘
 * ----------------------------------------------------------------------------------
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * __________________________________________________________________________________
 *
 * @date      : 01-Nov-2016
 * @license   : Apache, version 2.0
 * @require   : d3.js® & Raphaël.js®
 * @build     : SEED™ — Katowice
 *              └---- A Sequømics Product — http://sequomics.com/.
 * __________________________________________________________________________________
 */
'''

#! /usr/bin/env node

/*
Copyright The Eslint-Config-Fluid copyright holders
See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/eslint-config-fluid/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/fluid-project/eslint-config-fluid/raw/main/LICENSE.txt
*/

/* eslint-env node */
"use strict";

var path = require("path");
var configPath = path.join(__dirname, ".eslintrc.json");

module.exports = require(configPath);

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

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        eslint: {
            all: ["*.js"]
        },
        jsonlint: {
            all: ["*.json", ".*.json"]
        }
    });

    // Load the plugin(s):
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");

    // Custom tasks:
    grunt.registerTask("default", ["lint"]);
    grunt.registerTask("lint", "Apply eslint and jsonlint", ["eslint", "jsonlint"]);
};

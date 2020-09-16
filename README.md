# eslint-config-fluid
fluid-project eslint configuration

## Using ##

To use the eslint configuration provided by this module add it as a dev dependency

```bash
npm install eslint-config-fluid --save-dev
```

When using the default shareable configuration or the JSDoc only configuration, you'll also need to install
[eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc).

```bash
npm install eslint-plugin-jsdoc --save-dev
```

Next add an `extends` property to your eslint configuration.

```json
{
    "extends": "eslint-config-fluid"
}
```
Alternatively, the "eslint-config-" prefix is assumed and can be ommited.
See: [Using a Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config)

```json
{
    "extends": "fluid"
}
```

### Using base configurations

The `eslint-config-fluid` sharable configuration is actually a combination of the base fluid eslint configuration and
configuration for the [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc) plugin. The latter
handling validation of jsdoc syntax; which has been [depracted](https://eslint.org/blog/2018/11/jsdoc-end-of-life)
from eslint. It is possible to use only one of these configurations.

#### Fluid Eslint Config only

To only use the Fluid setings for Eslint, add the following `extends` property to your eslint configuration.

```json
{
    "extends": "fluid/only-fluid-config"
}
```

#### JSDoc Config only

To only use the JSDoc configuration for the [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
plugin, add the following `extends` property to your eslint configuration.

```json
{
    "extends": "fluid/jsdoc-config"
}
```

### Extend / Override Configuration ###

When using the eslint configuration provided by this module, you may have a case where you'd like to adjust or extend
the configuration. To do this, add any additional configuration to your own .eslintrc.json file, which extends the one
held in this project.

In the following example, we want to add a new global for the Infusion 2.0.0 versioned namespace to our project. The
default configuration provided by the module defines a global for the generic `"fluid"` namespace, so we need to extend
the configuration with an additional global, in this case `"fluid_2_0_0"`.

```json
{
    "extends": "eslint-config-fluid",
    "globals": {
        "fluid_2_0_0": true
    }
}
```

See the eslint [user-guide](http://eslint.org/docs/user-guide/configuring) for more configuration options.

## Developing ##

See the eslint [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) documentation for full
details.

### Modifying Configuration ###

To modify the eslint rules provided by this module, update the configuration files:

* [.eslintrc-fluid.json](.eslintrc-fluid.json): contains the base eslint rules
* [.eslintrc-jsdoc.json](.eslintrc-jsdoc.json): contains the jsdoc validation rules
* [.eslintrc.json](.eslintrc.json): The default configuration which combines .eslintrc-fluid.json and
  .eslintrc-jsdoc.json into a single config.

See the eslint [user-guide](http://eslint.org/docs/user-guide/configuring) for configuration options.

### Testing ###

To test your changes locally, link the package globally on your system.

```bash
# run from the eslint-config-fluid directory.
# depending on your system, you may need to use sudo
npm link
```

Add your linked module to the package you want to test in.
```bash
# in the root directory for the package you want to test the configuration with
npm link eslint-config-fluid
```

Remove the links to clean up the test settings.

```bash
# run from the eslint-config-fluid directory.
# depending on your system, you may need to use sudo
npm unlink

# in the root directory for the package you tested the configuration with
npm unlink eslint-config-fluid

# run the install again to ensure that all the dependencies are properly installed
npm install
```

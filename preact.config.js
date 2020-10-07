

export default (config, env, helpers) => {
    console.log('Custom config Webpack - Compatibilité React')
    //ajout de la compatibilité Preact-React
    config.resolve.alias["react"] = "preact/compat"
    config.resolve.alias["react-dom/test-utils"] = "preact/test-utils"
    config.resolve.alias["react-dom"] = "preact/compat"

    //Activation de async au niveau global
    console.log('Custom config Webpack - Compatibilité Async')
    let babel = config.module.loaders.filter(loader => loader.loader === 'babel-loader')[0].options;

	// Blacklist regenerator within env preset:
	babel.presets[0][1].exclude.push('transform-async-to-generator');

	// Add fast-async
	babel.plugins.push([require.resolve('fast-async'), { spec: true }]);

}
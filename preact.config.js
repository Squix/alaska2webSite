export default (config, env, helpers) => {
    console.log('Custom config Webpack - Compatibilité React')
    //ajout de la compatibilité Preact-React
    config.resolve.alias["react"] = "preact/compat"
    config.resolve.alias["react-dom/test-utils"] = "preact/test-utils"
    config.resolve.alias["react-dom"] = "preact/compat"


}
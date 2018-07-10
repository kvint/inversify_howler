module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "src/**/*.ts"},
            {pattern: "test/**/*.ts"}
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"],
        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/
            },
            compilerOptions: {
                lib: ["es6", "dom"]
            }
        }
    });
};
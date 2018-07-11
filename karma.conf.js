module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            {pattern: "src/**/*.ts"},
            {pattern: "test/**/*.ts"},
            // JSON fixture
            {pattern:  'template/data/*',
                watched:  false,
                included: false,
                served:   true
            }
        ],
        proxies: {
            "/data": "/base/template/data/"
        },
        preprocessors: {
            "**/*.ts": "karma-typescript"
        },
        reporters: ["progress", "mocha", "karma-typescript"],
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
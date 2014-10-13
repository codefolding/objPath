/*global define*/
define({
    proxyPort: 9000,
    proxyUrl: 'http://localhost:9000/',
    capabilities: { 'selenium-version': '2.41.0' },
    environments: [
        { browserName: 'internet explorer', version: '8',  platform: 'Windows 7' }
    ],
    maxConcurrency: 3,
    tunnel: 'SauceLabsTunnel',
    loader: { packages: [ { name: './objPath', location: '.' } ] },
    suites: [ 'test/objPath' ],
    excludeInstrumentation: /^(?:test|node_modules)\//
});

/*global define*/
define({
    proxyPort: 9000,
    proxyUrl: 'http://localhost:9000/',
    capabilities: { 'selenium-version': '2.41.0' },
    environments: [
        { browserName: 'internet explorer', version: '11', platform: 'WINDOWS' },
        { browserName: 'internet explorer', version: '10', platform: 'WINDOWS' },
        { browserName: 'internet explorer', version: '9',  platform: 'WINDOWS' },
        { browserName: 'internet explorer', version: '8',  platform: 'WINDOWS' },
        { browserName: 'firefox',           version: '28', platform: [ 'MAC', 'WINDOWS' ] },
        { browserName: 'chrome',            version: '34', platform: [ 'MAC', 'WINDOWS' ] },
        { browserName: 'safari',            version: '6',  platform: 'MAC' },
        { browserName: 'safari',            version: '7',  platform: 'MAC' },
        { browserName: 'safari',            version: '8',  platform: 'MAC' }
    ],
    maxConcurrency: 2,
    tunnel: 'BrowserStackTunnel',
    loader: { packages: [ { name: './pathly', location: '.' } ] },
    suites: [ 'tests/pathly' ],
    excludeInstrumentation: /^(?:test|node_modules)\//
});

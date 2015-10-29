
if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
  process.exit(1);
}

// https://saucelabs.com/platforms/
var browsers = {
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '35'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: '30'
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'iphone',
    platform: 'OS X 10.9',
    version: '7.1'
  },
  sl_ie_11: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11'
  }
};

var key,
  defCfg = {},
  cfg = {
    // all other options that are defined in
    // local.karma.conf.js were elided for the
    // purpose of this blog post.
    reporters: ['saucelabs', 'spec'],
    browsers: Object.keys(browsers),
    customLaunchers: browsers,
    //logLevel: 'LOG_INFO',
    captureTimeout: 120000,
    browserNoActivityTimeout: 60000,

    // https://docs.saucelabs.com/reference/test-configuration
    sauceLabs: {
      testName: 'demo-web-babel',
      build: 'local ' + Date.now(),
      recordLogs: true,
      recordVideo: false,
      startConnect: true,
      recordScreenshots: true,
      captureHtml: true,
      passed: true,
      public: 'public',
      connectOptions: {
        port: 5757,
        logfile: 'sauce-connect.log'
      }
    },
    singleRun: true,
    autoWatch : false
  };


if (process.env.TRAVIS) {

  cfg.logLevel = 'LOG_DEBUG';

  cfg.sauceLabs.build = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';
  cfg.sauceLabs.startConnect = false;
  cfg.sauceLabs.recordScreenshots = true;
  cfg.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
}


require('./karma.local.conf.js')({set: function(obj) { defCfg = obj; }});
for (key in defCfg) if (!(key in cfg) && defCfg.hasOwnProperty(key)) cfg[key] = defCfg[key];

module.exports = function(config) {
  config.set(cfg);
};

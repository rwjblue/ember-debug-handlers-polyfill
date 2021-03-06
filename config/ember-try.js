/* eslint-env node */
module.exports = {
  useYarn: true,
  scenarios: [
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-8'
        },
        resolutions: {
          'ember': 'lts-2-8'
        }
      },
    },
    {
      name: 'ember-lts-2.12',
      bower: {
        dependencies: {
          'ember': null
        }
      },
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: "1.13",
      bower: {
        dependencies: {
          "ember": "~1.13.0"
        }
      }
    },
    {
      name: "1.12",
      bower: {
        dependencies: {
          "ember": "~1.12.0"
        }
      }
    },
    {
      name: "1.11",
      bower: {
        dependencies: {
          "ember": "~1.11.0"
        }
      }
    },
    {
      name: "1.10",
      bower: {
        dependencies: {
          "ember": "~1.10.0"
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      },
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      },
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      },
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {}
      }
    }
  ]
};

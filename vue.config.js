module.exports = {
    chainWebpack: (config) => {
      config.plugin('html').tap((args) => {
        args[0].title = 'Lap-3-Project';
        args[0].scriptLoading = 'defer';
        args[0].permissionsPolicy = {
          'interest-cohort': ["*"],
        };
        return args;
      });
    },
  };
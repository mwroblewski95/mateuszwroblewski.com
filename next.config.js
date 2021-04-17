const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  env: {
    emailJSServiceId: 'contact_service',
    emailJSTemplateId: 'contact_form',
    emailJSUserId: 'user_5vLqtX0q5t7BA5c2m6vdW',
    reactGaId: 'G-53RMMLXPLV',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};

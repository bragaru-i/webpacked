const { merge } = require('webpack-merge');

const commonConfig = require('./common.js');

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons.filter(Boolean).map((name) => require(`./addons/${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};

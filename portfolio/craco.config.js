const path = require('path');
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Find the rule that handles JavaScript files
      const jsRule = webpackConfig.module.rules.find(rule =>
        rule.oneOf ? rule.oneOf.find(oneOfRule => oneOfRule.test && oneOfRule.test.toString().includes('jsx|js')) : false
      );

      if (jsRule) {
        jsRule.include = [path.resolve(__dirname, 'node_modules/react-github-calendar')].concat(jsRule.include);
      }

      return webpackConfig;
    },
    
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

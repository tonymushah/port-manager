/**
 * NOTICE: this is an auto-generated file
 *
 * This file has been generated for `pnpm install` task.
 * It is used to pin client side dependencies.
 * This file will be overwritten on every run.
 */

const fs = require('fs');

const versions = {"@vaadin/bundles":"24.1.0","@hilla/react-components":"2.1.0","@chakra-ui/react":"^2.7.0","@emotion/react":"^11.11.1","@emotion/styled":"^11.11.0","@hilla/form":"2.1.0","@hilla/frontend":"2.1.0","@hilla/generator-typescript-cli":"2.1.0","@hilla/generator-typescript-core":"2.1.0","@hilla/generator-typescript-plugin-backbone":"2.1.0","@hilla/generator-typescript-plugin-barrel":"2.1.0","@hilla/generator-typescript-plugin-client":"2.1.0","@hilla/generator-typescript-plugin-model":"2.1.0","@hilla/generator-typescript-plugin-push":"2.1.0","@hilla/generator-typescript-utils":"2.1.0","@polymer/polymer":"3.5.1","@tanstack/react-query":"^4.29.13","@tanstack/react-table":"^8.9.2","@vaadin-component-factory/vcf-nav":"1.1.0","@vaadin/common-frontend":"0.0.18","@vaadin/icon":"24.1.0","@vaadin/icons":"24.1.0","@vaadin/polymer-legacy-adapter":"24.1.0","@vaadin/router":"1.7.5","@vaadin/tooltip":"24.1.0","@vaadin/vaadin-lumo-styles":"24.1.0","@vaadin/vaadin-material-styles":"24.1.0","@vaadin/vaadin-themable-mixin":"24.1.0","classnames":"^2.3.2","construct-style-sheets-polyfill":"3.1.0","framer-motion":"^10.12.16","lit":"2.7.4","react":"^18.2.0","react-dom":"^18.2.0","react-router-dom":"^6.4.2","@lit-labs/react":"^1.1.0","@rollup/plugin-replace":"5.0.2","@rollup/pluginutils":"5.0.2","@types/react":"^18.0.25","@types/react-dom":"^18.0.8","@vitejs/plugin-react":"~3.0.1","@vitejs/plugin-react-swc":"^3.3.2","async":"3.2.2","glob":"7.2.3","mkdirp":"1.0.4","rollup-plugin-brotli":"3.1.0","rollup-plugin-visualizer":"5.9.0","strip-css-comments":"5.0.0","transform-ast":"2.4.4","typescript":"5.0.4","vite":"4.3.9","vite-plugin-checker":"0.5.5","workbox-build":"7.0.0","workbox-core":"7.0.0","workbox-precaching":"7.0.0"};

module.exports = {
  hooks: {
    readPackage
  }
};

function readPackage(pkg) {
  const { dependencies } = pkg;

  if (dependencies) {
    for (let k in versions) {
      if (dependencies[k] && dependencies[k] !== versions[k]) {
        pkg.dependencies[k] = versions[k];
      }
    }
  }

  // Forcing chokidar version for now until new babel version is available
  // check out https://github.com/babel/babel/issues/11488
  if (pkg.dependencies.chokidar) {
    pkg.dependencies.chokidar = '^3.4.0';
  }

  return pkg;
}

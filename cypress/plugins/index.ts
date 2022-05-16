// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api

import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;
import registerPact from './cypress-pact';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on: PluginEvents, config: PluginConfigOptions) => {

  // Register the Pact plugin
  registerPact(on)

  return config;
};

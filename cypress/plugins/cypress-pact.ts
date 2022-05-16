import PluginEvents = Cypress.PluginEvents;
import { Pact } from '@pact-foundation/pact';

export default (on: PluginEvents) => {
  console.log('registering Pact!');

  let server: Pact;

  on("task", {
    createMockServer(options) {
      server = new Pact(options);
      return server.setup();
    },
    stopMockServer() {
      if (server) {
        return server.finalize().then(() => true)
      }
      throw new Error('pact: cannot stop server, as no Pact mock service has been configured')
    },
    addMockRoute(options) {
      return server.addInteraction(options);
    },
    verifyPacts() {
      if (server) {
        return server.verify();
      }
      throw new Error('pact: cannot verify pacts, as no Pact mock service has been configured')
    }
  });
};

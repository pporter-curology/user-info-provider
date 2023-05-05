import path from 'path';
import { Verifier, LogLevel } from '@pact-foundation/pact';
import { app } from '../../src/main';

describe('Pact Verification', () => {
  it('should validate the expectations of UserService', async () => {
    const opts = {
      provider: 'UserInfoProvider', // replace with your provider name

      // Fetch pacts from broker
      pactBrokerUrl: 'https://cgy-pact-poc.pactflow.io', // replace with your Pact Broker URL

      pactBrokerToken: '4mZ76QC-gZrOVmyx0JhZtw',

      // Fetch from broker with given tags
      consumerVersionTags: ['main'], // replace with your relevant tags
      consumerVersionSelectors: [
        {
          mainBranch: true, // (recommended) - Returns the pacts for consumers configured mainBranch property
        },
        {
          deployedOrReleased: true, // (recommended) - Returns the pacts for all versions of the consumer that are currently deployed or released and currently supported in any environment.
        },
      ],

      // Local Pact files
      //pactUrls: [path.resolve(process.cwd(), 'pacts')], 

      providerBaseUrl: 'http://localhost:3003', // replace with your provider base URL

      // Provider states setup endpoint
      //stateSetupUrl: 'http://localhost:3000/setup', // replace with your state setup URL if you have one
    };

    // Verify the Provider using the locally saved Pact files
    await new Verifier(opts).verifyProvider();
  });
});
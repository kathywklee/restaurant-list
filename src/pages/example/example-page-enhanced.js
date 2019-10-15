import { translate } from '../../mechanisms/l10n/hoc/translate';
import { ExamplePage } from './example-page';

import { HOME as HOME_ROUTE } from '../../router/routes';

export const ExamplePageEnhanced = translate('pages.example')(ExamplePage);

ExamplePageEnhanced.loadUniversalData = async function({ store, router, octo, res }) {
  // FIXME: User should not be redirected without notification, and it should be done on lower level
  if (!(await octo.Authentication.isAuthenticated())) {
    if (res) {
      res.writeHead(302, {
        Location: HOME_ROUTE,
      });
      return res.end();
    }

    router.push({
      pathname: HOME_ROUTE,
    });
  }

  // Router is an object with these fields:
  //      route: '/home',
  //      pathname: '/home',
  //      query: {},
  //      asPath: '/'

  // Simulating data fetching
  // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  // await delay(2000);
  // store.dispatch(setCount(42));
};

ExamplePageEnhanced.loadClientOnlyData = async function({ store, router, octo }) {
  // Here you would normally want to load:
  // - user-related data (cart, checkout, latest orders)
  // - optional data
};

import CookieConsent from '../../components/CookieConsent';
import { Main } from './components/main/Main';

export default async function Page() {
  return (
    <main>
      <Main />
      <CookieConsent />
    </main>
  );
}

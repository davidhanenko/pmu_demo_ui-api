import CookieConsent from '../../components/CookieConsent';
import { Main } from './components/main/Main';

export default function Page() {
  return (
    <main className=''>
      <Main />
      <CookieConsent />
    </main>
  );
}

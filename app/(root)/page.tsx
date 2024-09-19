import CookieConsent from '../../components/CookieConsent';
import { Main } from './components/main/Main';

export default async function Page() {
  const aboutResponse = await fetch(
    `${process.env.NEXTAUTH_URL}/api/about`
  );
  const aboutData = await aboutResponse.json();

  return (
    <main>
      <Main aboutData={aboutData} />
      <CookieConsent />
    </main>
  );
}

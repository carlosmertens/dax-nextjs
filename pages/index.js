import Head from 'next/head';
import { useSelector } from 'react-redux';

export default function Home() {
  const language = useSelector((state) => state.language);
  return (
    <div>
      <Head>
        <title>Dax Parts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>{language.title}</h1>
      </main>
    </div>
  );
}

import Head from 'next/head';
import { appWithTranslation, useTranslation } from 'next-i18next';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mateusz Wróblewski | Frontend Developer</title>
        <link rel="icon" href="./images/favicon.svg" type="image/svg+xml" />
        <meta name="description" content={t('description')} />
        <meta name="author" content="Mateusz Wróblewski" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@400;800&display=swap" as="style" rel="preload" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans:wght@400;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp);

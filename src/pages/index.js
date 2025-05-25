import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.hero__title)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.hero__subtitle)}>
          Simplifique a gestão de talentos com uma app moderna e intuitiva.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explorar Funcionalidades
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/contact">
            Falar com a Equipa
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="Aplicação inovadora para gestão de recursos humanos. Organize equipas, acompanhe desempenho e otimize o recrutamento.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

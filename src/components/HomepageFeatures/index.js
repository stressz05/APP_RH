import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gestão de Colaboradores',
   
    description: (
      <>
        Centralize e organize toda a informação dos colaboradores numa plataforma simples e eficiente.
      </>
    ),
  },
  {
    title: 'Gestão Eficiente de horarios',
    
    description: (
      <>
        Publique horarios dos trabalhadores, para melhor organização de recursos.
      </>
    ),
  },
  {
    title: 'Login e registo intuitivo',
    
    description: (
      <>
        Aplicação facil de usar e configurar, fazendo uso de um login e registo eficiente.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className="col">
      <div className={styles.card}>
       
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

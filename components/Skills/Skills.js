import { useTranslation } from 'next-i18next';
import Technology from './Technology/Technology';
import styles from './Skills.module.css';
const Skills = () => {
  const { t } = useTranslation('skills');

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>{t('sectionTitle')}</h2>
        <h3 className={styles.technologiesGroupHeading}>{t('technologiesIKnow')}</h3>
        <ul className={styles.technologiesGroup}>
          <Technology name="HTML5" image="/images/skills/html5.svg" />
          <Technology name="CSS3" image="/images/skills/css3.svg" />
          <Technology name="Sass" image="/images/skills/sass.svg" />
          <Technology name="JavaScript" image="/images/skills/javascript.svg" />
          <Technology name="React" image="/images/skills/react.svg" />
          <Technology name="Redux" image="/images/skills/redux.svg" />
          <Technology name="NextJS" image="/images/skills/nextjs.svg" />
          <Technology name="Git" image="/images/skills/git.svg" />
          <Technology name="Github" image="/images/skills/github.svg" />
          <Technology name="ESLint" image="/images/skills/eslint.svg" />
          <Technology name="Prettier" image="/images/skills/prettier.svg" />
          <Technology name="NPM" image="/images/skills/npm.svg" />
        </ul>
        <h3 className={styles.technologiesGroupHeading}>{t('currentlyLearning')}</h3>
        <ul className={styles.technologiesGroup}>
          <Technology name="Bootstrap" image="/images/skills/bootstrap.svg" />
          <Technology name="Tailwind CSS" image="/images/skills/tailwindcss.svg" />
          <Technology name="Webpack" image="/images/skills/webpack.svg" />
          <Technology name="Gatsby" image="/images/skills/gatsby.svg" />
          <Technology name="Firebase" image="/images/skills/firebase.svg" />
        </ul>
        <h3 className={styles.technologiesGroupHeading}>{t('wantToLearn')}</h3>
        <ul className={styles.technologiesGroup}>
          <Technology name="TypeScript" image="/images/skills/typescript.svg" />
          <Technology name="Jest" image="/images/skills/jest.svg" />
          <Technology name="React Testing Library" image="/images/skills/react-testing-library.svg" />
          <Technology name="Cypress" image="/images/skills/cypress.svg" />
          <Technology name="GraphQL" image="/images/skills/graphql.svg" />
        </ul>
      </div>
    </section>
  );
};

export default Skills;

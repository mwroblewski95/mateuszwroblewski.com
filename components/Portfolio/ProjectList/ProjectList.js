import { useTranslation } from 'next-i18next';
import ProjectItem from './ProjectItem/ProjectItem';
import styles from './ProjectList.module.css';
const ProjectList = ({ projects }) => {
  const { t } = useTranslation('portfolio');

  let content;
  if (projects && projects.length > 0) {
    content = (
      <ul className={styles.projects}>
        {projects.map(project => (
          <ProjectItem key={project.slug} name={project.name} description={project.description} image={project.image} to={project.to} />
        ))}
      </ul>
    );
  } else if (projects && projects.length === 0) {
    content = <p>{t('noProjects')}</p>;
  } else {
    content = <p>{t('somethingWrong')}</p>;
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2>{t('sectionTitle')}</h2>
        {content}
      </div>
    </section>
  );
};

export default ProjectList;

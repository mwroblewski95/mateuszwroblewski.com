import ReactMarkdown from 'react-markdown';
import { customRenders } from '../../../../lib/helperFunctions';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import styles from './ProjectContent.module.css';

const ProjectContent = ({ project }) => {
  const { name, description, image, linkGithub, linkLive, content, slug } = project;

  const customRender = customRenders('projects', slug);

  return (
    <article className={styles.project}>
      <div className="container">
        <ProjectHeader name={name} description={description} image={image} linkGithub={linkGithub} linkLive={linkLive} />
        <ReactMarkdown renderers={customRender}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default ProjectContent;

import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getProjectData } from '../../lib/projects-utility';
import ProjectContent from '../../components/Portfolio/Project/ProjectContent/ProjectContent';

const ProjectDetailPage = ({ project }) => {
  const { name, description } = project;

  return (
    <>
      <Head>
        <title>Mateusz Wróblewski | {name}</title>
        <meta name="description" content={description} />
      </Head>
      <ProjectContent project={project} />
    </>
  );
};
export const getServerSideProps = async context => {
  const { params, locale } = context;
  const { projectId } = params;
  const projectData = getProjectData(projectId, locale);

  if (!projectData) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'portfolio'])),
      project: projectData,
    },
  };
};

export default ProjectDetailPage;

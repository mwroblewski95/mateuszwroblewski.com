import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//Everything is practically the same as in posts-utility.js only in projectsDirectory function path changed from posts to projects. I could make only one file with functions and those functions reusable and take that path as an argument when calling a function, but then everything has to be adjusted to pass that argument to the correct function, that in my opinion becomes more difficult to understand so I preferred to separate it.

const projectsDirectory = lang => {
  return path.join(process.cwd(), `public/projects/${lang}`);
};

export const getProjectFiles = lang => {
  return fs.readdirSync(projectsDirectory(lang));
};

export const getProjectData = (projectIdentifier, lang) => {
  const projectSlug = projectIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(projectsDirectory(lang), `${projectSlug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const projectData = {
      slug: projectSlug,
      ...data,
      content,
    };
    return projectData;
  } catch {
    return null;
  }
};

export const getAllProjects = lang => {
  const projectFiles = getProjectFiles(lang);

  const allProjects = projectFiles.map(projectFile => {
    return getProjectData(projectFile, lang);
  });
  const sortedProjects = allProjects.sort((projectA, projectB) => (projectA.date > projectB.date ? -1 : 1));

  return sortedProjects;
};

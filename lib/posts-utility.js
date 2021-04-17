import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = lang => {
  return path.join(process.cwd(), `public/posts/${lang}`);
};

export const getPostsFiles = lang => {
  return fs.readdirSync(postsDirectory(lang));
};

export const getPostData = (postIdentifier, lang) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory(lang), `${postSlug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
      slug: postSlug,
      ...data,
      content,
    };
    return postData;
  } catch {
    return null;
  }
};

export const getAllPosts = lang => {
  const postFiles = getPostsFiles(lang);

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile, lang);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
};

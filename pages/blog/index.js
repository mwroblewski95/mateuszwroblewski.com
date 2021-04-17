import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getAllPosts } from '../../lib/posts-utility';
import PostList from '../../components/Blog/PostList/PostList';

const Blog = ({ posts, language }) => {
  const { t } = useTranslation('blog');

  return (
    <>
      <Head>
        <title>Mateusz Wróblewski | Blog</title>
        <meta name="description" content={t('descriptionBlog')} />
      </Head>
      <PostList posts={posts} language={language} />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  // This line should and does work during development. Because the folder exists, due to the fact that it is currently empty, it is not taken into account during the build and does not exist and therefore throws an error on the server so far manually say that there are no blog posts. When there are entries in the blog, the folder will be included in the builds and will not give an error.
  // const allPosts = getAllPosts(locale);
  const allPosts = [];

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
      posts: allPosts,
      language: locale,
    },
  };
};

export default Blog;

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
  const allPosts = getAllPosts(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
      posts: allPosts,
      language: locale,
    },
  };
};

export default Blog;

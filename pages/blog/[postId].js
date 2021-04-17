import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPostData } from '../../lib/posts-utility';
import PostContent from '../../components/Blog/Post/PostContent/PostContent';

const PostDetailPage = ({ post, language }) => {
  const { title, description } = post;

  return (
    <>
      <Head>
        <title>Mateusz Wróblewski | {title}</title>
        <meta name="description" content={description} />
      </Head>
      <PostContent post={post} language={language} />
    </>
  );
};
export const getServerSideProps = async context => {
  const { params, locale } = context;
  const { postId } = params;
  const postData = getPostData(postId, locale);

  if (!postData) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
      post: postData,
      language: locale,
    },
  };
};

export default PostDetailPage;

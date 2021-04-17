import { useTranslation } from 'next-i18next';
import PostListItem from './PostListItem/PostListItem';
import styles from './PostList.module.css';
const PostList = ({ posts, language }) => {
  const { t } = useTranslation('blog');

  let content;
  if (posts && posts.length > 0) {
    content = (
      <ul>
        {posts.map(post => (
          <PostListItem key={post.slug} title={post.title} description={post.description} date={post.date} to={post.slug} language={language} />
        ))}
      </ul>
    );
  } else if (posts && posts.length === 0) {
    content = <p>{t('noPosts')}</p>;
  } else {
    content = <p>{t('somethingWrong')}</p>;
  }

  return (
    <section id="blog" className={styles.blog}>
      <div className="container">
        <h2>Blog</h2>
        {content}
      </div>
    </section>
  );
};

export default PostList;

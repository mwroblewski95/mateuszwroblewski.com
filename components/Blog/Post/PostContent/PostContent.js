import ReactMarkdown from 'react-markdown';

import { customRenders } from '../../../../lib/helperFunctions';
import PostHeader from '../PostHeader/PostHeader';
import styles from './PostContent.module.css';

const PostContent = ({ post, language }) => {
  const { title, description, date, slug, content } = post;

  const customRender = customRenders('posts', slug);

  return (
    <article className={styles.post}>
      <div className="container">
        <PostHeader title={title} description={description} date={date} language={language} />
        <ReactMarkdown renderers={customRender}>{content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;

import Image from "next/legacy/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

export const customRenders = (imgDir, slug) => {
  return {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];
        return <Image src={`/images/${imgDir}/${slug}/${image.url}`} alt={image.alt} width={500} height={500} className="imageMarkdown" />;
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, value } = code;
      return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} showLineNumbers customStyle={{ margin: '2rem 0' }} />;
    },
  };
};

export const formatDate = (date, language) => {
  return new Date(date).toLocaleDateString(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

import ImgHolder from '@/components/ImgHolder';
import LinkText from '@/components/LinkText';
import { ArticleData } from '@/types/article';
import { BLOCKS } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  type Options as RichTextOptions,
} from '@contentful/rich-text-react-renderer';

const contentOptions: RichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-3">{children}</p>,
  },
};

export default async function Article({ ...article }: ArticleData) {
  return (
    <div>
      <LinkText href="/" className="mb-3 mt-[-0.5rem] block">
        {'< Back'}
      </LinkText>

      <ImgHolder
        src={article.image.url}
        alt={article.alt}
        width="100%"
        height={300}
        className="mb-6"
      />

      <div className="mb-6 flex flex-col items-start justify-between sm:flex-row md:mb-8">
        <div>
          <h1 className="mb-2 text-2xl font-bold md:mb-3 md:text-3xl">
            {article.heading}
          </h1>
          <h2 className="text-lg italic md:text-xl">{article.subheading}</h2>
        </div>
      </div>

      {documentToReactComponents(article.content.json, contentOptions)}
    </div>
  );
}

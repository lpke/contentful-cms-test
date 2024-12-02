import ImgHolder from '@/components/ImgHolder';
import LinkText from '@/components/LinkText';
import { formatDate } from '@/utils/date';

export default async function Article() {
  // TEMP
  const article = {
    _createdAt: '01-01-2024',
    _updatedAt: '02-01-2024',
    heading: 'dummy',
    subheading: 'subheading',
    image: {
      url: '',
      alt: 'alt',
    },
    content: 'content'
  };

  return (
    <div>
      <LinkText href="/" className="mb-3 mt-[-0.5rem] block">
        {'< Back'}
      </LinkText>

      <ImgHolder
        src={article.image.url}
        alt={article.image?.alt}
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

        <div className="mt-6 flex-shrink-0 text-[0.9rem] sm:ml-6 sm:mt-0 sm:text-right">
          <p>
            <span className="font-medium text-gray-800">created:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._createdAt)}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-800">updated:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._updatedAt)}
            </span>
          </p>
        </div>
      </div>

      {article.content}
    </div>
  );
}

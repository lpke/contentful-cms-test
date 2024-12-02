import Button from '@/components/Button';
import ImgHolder from '@/components/ImgHolder';
import { ArticleData } from '@/types/article';

export default function ArticlePreview({ ...article }: ArticleData) {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center">
          <ImgHolder
            src={article.image.url}
            alt={article.alt}
            width={150}
            height={100}
            className="mr-6 min-w-[150px] rounded"
            imgClassName="rounded"
          />
          <div>
            <h1 className="mb-1 text-xl font-bold md:text-2xl">
              {article.heading}
            </h1>
            <h2 className="text-lg italic md:text-xl">{article.subheading}</h2>
          </div>
        </div>
        <Button
          href={`article/${article.slug}`}
          className="ml-6 text-nowrap px-3 py-[0.6rem] md:px-5"
        >
          Read Article
        </Button>
      </div>
      <div className="mb-4 border" />
    </div>
  );
}

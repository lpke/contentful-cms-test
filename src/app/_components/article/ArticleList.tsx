import ArticlePreview from '@/components/article/ArticlePreview';
import { getAllArticles } from '@/utils/contentful/api';

export default async function ArticleList() {
  const articles = await getAllArticles();

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview key={article.sys.id} {...article} />
      ))}
    </>
  );
}

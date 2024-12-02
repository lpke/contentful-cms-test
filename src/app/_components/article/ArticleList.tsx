import ArticlePreview from '@/components/article/ArticlePreview';
import { getAllArticles } from '@/utils/contentful/api';

export default async function ArticleList() {
  const articles = await getAllArticles();

  if (!articles || articles.length < 1) return null;

  return (
    <>
      {articles.map((article) => (
        <ArticlePreview key={article.sys.id} {...article} />
      ))}
    </>
  );
}

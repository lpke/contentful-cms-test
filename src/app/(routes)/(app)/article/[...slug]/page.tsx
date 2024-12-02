import Article from '@/components/article/Article';
import NotFound from '@/not-found';

type ArticlePageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleSlug = slug?.[0];

  if (!articleSlug) return <NotFound />;

  // TODO: fetch article by slug here
  // const article = await getArticle(articleSlug);

  // if (!article) return <NotFound />;

  // TODO: pass article to this component
  return <Article />;
}

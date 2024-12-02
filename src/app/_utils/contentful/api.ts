import { ArticleData } from '@/types/article';

const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  heading
  subheading
  slug
  image {
    url
  }
  alt
  content {
    json
  }
`;

async function fetchGraphQL(query: any, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ['articles'] },
    },
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse: any): ArticleData[] {
  return fetchResponse?.data?.articleCollection?.items;
}

export async function getAllArticles(
  limit = 20,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing articles before they are live
  isDraftMode = false,
): Promise<ArticleData[]> {
  const articles = await fetchGraphQL(
    `query {
        articleCollection(where:{slug_exists: true}, order: heading_ASC, limit: ${limit}, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  );
  return extractArticleEntries(articles);
}

export async function getArticle(
  slug: string,
  isDraftMode = false,
): Promise<ArticleData | undefined> {
  const article = await fetchGraphQL(
    `query {
        articleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? 'true' : 'false'
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  );
  return extractArticleEntries(article)?.[0];
}

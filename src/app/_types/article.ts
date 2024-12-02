export type ArticleData = {
  sys: {
    id: string;
  };
  heading: string;
  subheading: string;
  slug: string;
  image: {
    url: string;
  };
  alt: string;
  content: {
    json: any;
  };
};

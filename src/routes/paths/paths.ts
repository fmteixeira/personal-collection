export const routes = {
  news: {
    route: "/news/:slug",
    getRoute: (slug: string): string => `/news/${slug}`,
  },
};

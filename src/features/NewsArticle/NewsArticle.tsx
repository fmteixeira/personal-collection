import React from "react";
import { useParams } from "react-router";

import news from "@/content/news";

export interface NewsArticleProps {
  exampleProp: string;
}

interface Params {
  slug: string;
}

export const NewsArticle = ({ exampleProp }: NewsArticleProps): JSX.Element => {
  // Params
  const { slug } = useParams<Params>();

  const newsArticle = news.find((item) => item.slug === slug);

  return (
    <button type="button" className="bg-red-400 font-bold border-2 p-4">
      {newsArticle?.title ?? "404"}
    </button>
  );
};

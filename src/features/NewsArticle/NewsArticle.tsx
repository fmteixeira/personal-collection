import React from "react";
import { useParams } from "react-router-dom";

import { news } from "@/content/news/";
import { useContent } from "@/hooks";

export interface NewsArticleProps {
  exampleProp: string;
}

interface Params {
  slug: string;
}

export const NewsArticle = ({ exampleProp }: NewsArticleProps): JSX.Element => {
  // Params
  const { slug } = useParams<Params>();

  const { contentItem } = useContent(news, slug);

  return (
    <button type="button" className="bg-red-400 font-bold border-2 p-4">
      {contentItem?.title ?? "404"}
    </button>
  );
};

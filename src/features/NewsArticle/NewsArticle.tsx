import React from "react";
import { useParams } from "react-router";

export interface NewsArticleProps {
  exampleProp: string;
}

interface Params {
  slug: string;
}

export const NewsArticle = ({ exampleProp }: NewsArticleProps): JSX.Element => {
  // Params
  const { slug } = useParams<Params>();

  return (
    <button type="button" className="bg-red-400 font-bold border-2 p-4">
      {slug}
    </button>
  );
};

import React from "react";

export interface NewsArticleProps {
  exampleProp: string;
}

export const NewsArticle = ({ exampleProp }: NewsArticleProps): JSX.Element => (
  <button type="button" className="bg-red-400 font-bold border-2">
    {exampleProp}
  </button>
);

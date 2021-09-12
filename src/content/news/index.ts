import inauguracao from "./inauguracao.json";
import primeiroProjeto from "./primeiroProjeto.json";

import { NewsArticle } from "@/types/interfaces";

export const news: NewsArticle[] = [
  inauguracao as NewsArticle,
  primeiroProjeto as NewsArticle,
];

import { ContentBase } from "@/types/interfaces";

interface State<T extends ContentBase> {
  contentItem: T | undefined;
}

export const useContent = <T extends ContentBase>(
  content: T[],
  slug: string | undefined
): State<T> => {
  const contentItem = slug
    ? content.find((item) => item.slug === slug)
    : undefined;

  return {
    contentItem,
  };
};

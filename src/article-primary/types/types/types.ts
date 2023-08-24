export interface ArticlePrimaryType {
  title: string;
  text: string;
  content: string;
  image: string;
  authorId: string;
  category: TravelCategoryType;
}

export type TravelCategoryType = 'travel' | 'allaround' | 'lifestyle' | 'food';

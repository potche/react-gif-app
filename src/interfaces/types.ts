export interface INewCategory {
  onNewCategory: (newCategory: string) => void;
}

export interface ICategory {
  category: string;
}

export interface IGifData {
  id: string;
  title: string;
  url: string;
}

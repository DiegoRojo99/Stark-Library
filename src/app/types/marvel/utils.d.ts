export type Image = {
  path: string;
  extension: string;
};

export type Url = {
  type: string;
  url: string;
};

export type ResourceList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: Summary[];
};

export type TextObject = {
  type: string;
  language: string;
  text: string;
};

export type Summary = {
  resourceURI: string;
  name: string;
};

export type ComicDate = {
  type: string;
  date: string;
};

export type ComicPrice = {
  type: string;
  price: number;
};
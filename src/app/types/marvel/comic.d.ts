import { Image, ResourceList, Summary, Url } from './utils';

type ComicDate = {
  date: string,
  type: string
}

type ComicPrice = {
  price: number,
  type: string
}

export type Comic = {
  id: number; // The unique ID of the comic resource.
  digitalId: number; // The ID of the digital comic representation (0 if not available digitally).
  title: string; // The canonical title of the comic.
  issueNumber: number; // The number of the issue in the series.
  variantDescription: string; // A description of the variant issue, if applicable.
  description: string; // The preferred description of the comic.
  modified: string; // The date the resource was most recently modified.
  isbn: string; // The ISBN for the comic (for collection formats).
  upc: string; // The UPC barcode for the comic (for periodicals).
  diamondCode: string; // The Diamond code for the comic.
  ean: string; // The EAN barcode for the comic.
  issn: string; // The ISSN barcode for the comic.
  format: string; // The publication format of the comic (e.g. comic, hardcover).
  pageCount: number; // The number of story pages in the comic.
  textObjects: TextObject[]; // A set of descriptive text blurbs for the comic.
  resourceURI: string; // The canonical URL identifier for this resource.
  urls: Url[]; // A set of public web site URLs for the resource.
  series: Summary; // A summary representation of the series to which this comic belongs.
  variants: Summary[]; // A list of variant issues for this comic.
  collections: Summary[]; // A list of collections that include this comic.
  collectedIssues: Summary[]; // A list of issues collected in this comic.
  dates: ComicDate[]; // A list of key dates for this comic.
  prices: ComicPrice[]; // A list of prices for this comic.
  thumbnail: Image; // The representative image for this comic.
  images: Image[]; // A list of promotional images associated with this comic.
  creators: ResourceList; // A resource list containing the creators associated with this comic.
  characters: ResourceList; // A resource list containing the characters appearing in this comic.
  stories: ResourceList; // A resource list containing the stories appearing in this comic.
  events: ResourceList; // A resource list containing the events this comic is part of.
};
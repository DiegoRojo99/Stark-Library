import { Image, ResourceList, Summary, Url } from "./utils";

export type Series = {
  id: number; // Unique ID for the series resource.
  title: string; // The canonical title of the series.
  description: string; // A description of the series.
  resourceURI: string; // The canonical URL identifier for this series.
  urls: Url[]; // A list of public URLs for the series.
  startYear: number; // The first year of publication for the series.
  endYear: number; // The last year of publication for the series (2099 for ongoing series).
  rating: string; // The age-appropriateness rating for the series.
  modified: string; // The date the series resource was most recently modified.
  thumbnail: Image; // The representative image for the series.
  comics: ResourceList; // A resource list containing the comics in this series.
  stories: ResourceList; // A resource list containing the stories in this series.
  events: ResourceList; // A resource list containing the events in this series.
  characters: ResourceList; // A resource list containing the characters in this series.
  creators: ResourceList; // A resource list containing creators whose work appears in this series.
  next: Summary; // A summary representation of the series which follows this series.
  previous: Summary; // A summary representation of the series which preceded this series.
};
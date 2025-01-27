import { Image, ResourceList, Summary } from "./utils";

export type Story = {
  id: number; // Unique ID for the story resource.
  title: string; // The title of the story.
  description: string; // A short description of the story.
  resourceURI: string; // The canonical URL identifier for this story.
  type: string; // The story type e.g. interior story, cover, text story.
  modified: string; // The date the story resource was most recently modified.
  thumbnail: Image; // The representative image for this story.
  comics: ResourceList; // A resource list containing comics in which this story takes place.
  series: ResourceList; // A resource list containing series in which this story appears.
  events: ResourceList; // A resource list of the events in which this story appears.
  characters: ResourceList; // A resource list of characters which appear in this story.
  creators: ResourceList; // A resource list of creators who worked on this story.
  originalissue: Summary; // A summary representation of the issue in which this story was originally published.
};
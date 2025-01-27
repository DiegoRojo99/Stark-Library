import { Summary, Image, Url, ResourceList } from './utils';

export type Event = {
  id: number; // Unique ID for the event resource.
  title: string; // The title of the event.
  description: string; // A description of the event.
  resourceURI: string; // The canonical URL identifier for this event.
  urls: Url[]; // A list of public URLs for the event.
  modified: string; // The date the event resource was most recently modified.
  start: string; // The start date of the event.
  end: string; // The end date of the event.
  thumbnail: Image; // The representative image for the event.
  comics: ResourceList; // A resource list containing the comics in this event.
  stories: ResourceList; // A resource list containing the stories in this event.
  series: ResourceList; // A resource list containing the series in this event.
  characters: ResourceList; // A resource list containing the characters that appear in this event.
  creators: ResourceList; // A resource list containing creators whose work appears in this event.
  next: Summary; // A summary representation of the event which follows this event.
  previous: Summary; // A summary representation of the event which preceded this event.
};
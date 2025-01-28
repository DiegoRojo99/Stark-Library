import { Character } from "./character"
import { Comic } from "./comic"

export type CharacterAPI = {
  character: Character,
  comics: Comic[]
}
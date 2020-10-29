import { Injectable } from '@angular/core'

import characters from '../../assets/character-list'

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  characters = characters

  constructor() { }
}

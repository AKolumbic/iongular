import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

enum Path {
  monsters = 'monsters/',
  spells = 'spells/',
  equipment = 'equipment/'
}

@Injectable({
  providedIn: 'root',
})

export class DnDService {
  URL = 'https://www.dnd5eapi.co/api/'

  constructor(private http: HttpClient) {}

  getAll(type: Path) {
    return this.http.get(`${URL}${Path[type]}`)
  }

  searchFor(type: Path, input: string) {
    const query = input.split(' ').map(word => word.toLowerCase()).join('-')
    return this.http.get(`${URL}${Path[type]}${query}`)
  }
}

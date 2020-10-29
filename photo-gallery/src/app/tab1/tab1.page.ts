import { Component } from '@angular/core'
import characters from '../../assets/character-list'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  characters = characters
  constructor() {}
}

import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private httpClient: HttpClient) { }

  getMissions() {
    return this.httpClient.get('https://www.dnd5eapi.co/api/')
  }
}

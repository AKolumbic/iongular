import { Component, OnInit } from '@angular/core'
import { DnDService, Path } from '../../services/dnd.service'

@Component({
  selector: 'app-dnd-search',
  templateUrl: './dnd-search.page.html',
  styleUrls: ['./dnd-search.page.scss'],
})
export class DnDSearchPage implements OnInit {

  results: Promise<any>
  input: string
  searchType: Path

  constructor(private search: DnDService) {}
  ngOnInit() {}

  // onSearch() {
  //   this.results = this.search.searchFor(this.searchType, this.input)
  // }

}

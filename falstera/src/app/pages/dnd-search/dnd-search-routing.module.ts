import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DnDSearchPage } from './dnd-search.page'

const routes: Routes = [
  {
    path: '',
    component: DnDSearchPage
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DndSearchPageRoutingModule {}

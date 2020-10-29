import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { DndSearchPageRoutingModule } from './dnd-search-routing.module'

import { DnDSearchPage } from './dnd-search.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DndSearchPageRoutingModule
  ],
  declarations: [DnDSearchPage]
})
export class DndSearchPageModule {}

import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'

import { DnDSearchPage } from './dnd-search.page'

describe('DnDSearchPage', () => {
  let component: DnDSearchPage
  let fixture: ComponentFixture<DnDSearchPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnDSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(DnDSearchPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideBarComponent } from './menu-side-bar.component';

describe('MenuSideBarComponent', () => {
  let component: MenuSideBarComponent;
  let fixture: ComponentFixture<MenuSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

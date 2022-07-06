import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMxgraphComponent } from './ngx-mxgraph.component';

describe('NgxMxgraphComponent', () => {
  let component: NgxMxgraphComponent;
  let fixture: ComponentFixture<NgxMxgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMxgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMxgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

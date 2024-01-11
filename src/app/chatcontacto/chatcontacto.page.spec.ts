import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatcontactoPage } from './chatcontacto.page';

describe('ChatcontactoPage', () => {
  let component: ChatcontactoPage;
  let fixture: ComponentFixture<ChatcontactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatcontactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

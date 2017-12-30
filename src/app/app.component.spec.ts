import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UnderlineDirective } from './underline.directive';

import { CalcService } from './calc.service';

import { ExpressionsComponent } from './expressions/expressions.component';
import { ClickComponent } from './click/click.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { SimpleComponent } from './simple/simple.component';
import { SumComponent } from './sum/sum.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
  
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

beforeEach(async(() => {
  TestBed.configureTestingModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
      AppComponent,
      ExpressionsComponent,
      ClickComponent,
      PropertyBindingComponent,
      AttributeBindingComponent,
      ClassBindingComponent,
      StyleBindingComponent,
      TwoWayComponent,
      SimpleComponent,
      UnderlineDirective,
      SumComponent,
      ParentComponent,
      ChildComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [
      CalcService
    ],
  })
  .compileComponents();
}));
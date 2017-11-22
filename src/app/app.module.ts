import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
declare var require: any;
const dynamicContext = require.context(
  '.',
  false,
  /dynamically-loaded.component.ts/
);
const dynamicComponents = dynamicContext
  .keys()
  .map(dynamicContext)
  .map(comp => comp.default);

@NgModule({
  declarations: [AppComponent, ...dynamicComponents],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

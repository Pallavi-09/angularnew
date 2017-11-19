import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameContainerComponent } from './name-container/name-container.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { InnerComponent } from './inner/inner.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NameContainerComponent,
    NameTagComponent,
    NewComponentComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

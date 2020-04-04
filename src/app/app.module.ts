import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListModule} from 'test-lib';
import {BorderModule} from 'test-lib';
import {TextContainerModule} from 'test-lib';

/*!!!Обратите внимание, импортим по названию пакета, а не по пути файла*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    BorderModule,
    TextContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

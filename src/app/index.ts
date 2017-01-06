import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes';
import {store} from './reducers';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './containers/App';
import {FooterComponent} from './components/Footer';
import {HeaderComponent} from './components/Header';
import {MainSectionComponent} from './components/MainSection';
import {TodoItemComponent} from './components/TodoItem';
import {TodoTextInputComponent} from './components/TodoTextInput';
import {AnilComponent} from './components/anil/Anil';
import {SearchComponent} from './components/search/Search';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    store
  ],
  declarations: [
    RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent,
    AnilComponent,
    SearchComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}

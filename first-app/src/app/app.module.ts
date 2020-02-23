import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ProductsComponent } from './layouts/products/products.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FirstPipePipe } from './first-pipe.pipe';
import { BooksComponent } from './products/books/books.component';
import { UsercontrolComponent } from './usercontrol/usercontrol.component';
import { FirstDirective } from './directives/first.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerOneComponent,
    BannerTwoComponent,
    NavComponent,
    ProductsComponent,
    ContactsComponent,
    FooterComponent,
    SidebarComponent,
    BannerThreeComponent,
    FirstPipePipe,
    BooksComponent,
    UsercontrolComponent,
    FirstDirective,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TimingPipe } from './timing.pipe';
import { QuotedetailsComponent } from './components/quotedetails/quotedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    QuotesComponent,
    QuoteFormComponent,
    HighlightDirective,
    TimingPipe,
    QuotedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

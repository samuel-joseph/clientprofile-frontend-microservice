import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PortfolioComponent,
    TransactionHistoryComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {provide:MAT_DATE_LOCALE,useValue:'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: "profile", component: ProfileComponent },
  { path: "transaction", component: TransactionHistoryComponent }, {
    path:"homepage",component:HomepageComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

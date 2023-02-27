import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { TabledetailsComponent } from './tabledetails/tabledetails.component';

const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: '' , canActivate:[AuthGuard ] ,  component: DashboardComponent , children:[
    {path: '' , component: MainComponent},
    {path: 'footer' , component: FooterComponent},
    {path: 'table' , component: TableComponent},
    {path: 'tabledetail/:id' , component: TabledetailsComponent},
    {path: 'tabledetail' , component: TabledetailsComponent}
  ]},
  {path: 'Dashboard' , canActivate:[AuthGuard ] ,  component: DashboardComponent , children:[
    {path: '' , component: MainComponent},
    {path: 'footer' , component: FooterComponent},
    {path: 'table' , component: TableComponent},
    {path: 'tabledetail/:id' , component: TabledetailsComponent},
    {path: 'tabledetail' , component: TabledetailsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

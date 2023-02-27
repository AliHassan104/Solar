import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabledetailsComponent } from './tabledetails/tabledetails.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderInterceptor } from './login/Interceptor/header.interceptor';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    TableComponent,
    TabledetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DashboardRoutingModule } from './dahboard-routing.module';
import { ProdukComponent } from './produk/produk.component';
import { KategoriComponent } from './kategori/kategori.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProdukComponent,
    KategoriComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }

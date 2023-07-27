import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProdukComponent } from './produk/produk.component';
import { KategoriComponent } from './kategori/kategori.component';

const routes: Routes = [
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "produk",
    component : ProdukComponent
  },
  {
    path : "kategori",
    component : KategoriComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

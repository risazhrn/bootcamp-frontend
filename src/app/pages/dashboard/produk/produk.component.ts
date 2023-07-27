import { Component } from '@angular/core';
import { faTrashAlt, faPencilAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.scss']
})
export class ProdukComponent {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faInfoCircle = faInfoCircle;
}

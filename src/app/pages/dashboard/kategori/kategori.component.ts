import { Component } from '@angular/core';
import { faTrashAlt, faPencilAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent {
  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faInfoCircle = faInfoCircle;
}

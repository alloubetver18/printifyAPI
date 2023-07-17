import { Component } from '@angular/core';
import { PrintifyService } from '../../services/printify.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  listado = [];

  constructor(private ps: PrintifyService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ps.getProductos().subscribe((resp) => {
      console.log(resp);
    });
  }
}

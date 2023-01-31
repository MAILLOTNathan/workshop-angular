import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent {
  @Input() products! : Product[];
}

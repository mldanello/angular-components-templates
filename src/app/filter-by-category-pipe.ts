import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
  name: 'filterByCategory'
  //pure: false  // avoid using this , can lead to performance issues.
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: IProduct[], category: string | null): IProduct[] {
    if (!category) {
      return products;
    }
    return products.filter(product => product.category === category);
  }

}

export class ProductModel {
  id: string = '';
  sku: string = '';
  name: string = '';
  price: number = 0;
  createdAt: string = new Date().toISOString();
}

import Client from '../database';

export type Product = {
  product_id: number;
  product_name: string;
  product_price: number;
  category: string;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get product list.  Error: ${err}`);
    }
  }
}

import supertest from 'supertest';
import app from '../index';
import Client from '../database';
import { Product, ProductStore } from '../models/products';

const request = supertest(app);
const store = new ProductStore();

describe('Test basic endpoint', () => {
  it('should be listening', async () => {
    await request.get('/').expect(200);
  });

  it('should have a working Database client', async () => {
    expect(Client).toBeDefined;
  });
});

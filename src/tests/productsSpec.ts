import { ProductStore } from '../models/products';

const store = new ProductStore();

describe('Products model testing', () => {
  it('should have an index method', () => {
    expect(store.index()).toBeDefined;
  });
});

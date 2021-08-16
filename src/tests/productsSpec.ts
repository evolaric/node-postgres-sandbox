import { ProductStore } from '../models/products';

const store = new ProductStore();

describe('Products model testing', (): void => {
  it('should have an index method', (): void => {
    expect(store.index()).toBeDefined;
  });

  it('index method should return a list of products', async (): Promise<void> => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
});

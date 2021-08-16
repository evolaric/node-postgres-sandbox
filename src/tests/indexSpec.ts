import supertest from 'supertest';
import app from '../index';
import Client from '../database';

const request = supertest(app);

describe('Test basic endpoint', () => {
  it('should be listening', async () => {
    await request.get('/').expect(200);
  });

  it('should have a working Database client', async () => {
    expect(Client).toBeDefined;
  });
});

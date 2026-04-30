// Jest tests for API endpoints and payment processing
import axios from 'axios';
describe('API Endpoints', () => {
  it('should get all products', async () => {
    const response = await axios.get('/api/products');
    expect(response.status).toBe(200);
  });
  it('should get a product by ID', async () => {
    const response = await axios.get('/api/products/1');
    expect(response.status).toBe(200);
  });
  it('should login', async () => {
    const response = await axios.post('/api/auth/login', { username: 'test', password: 'test' });
    expect(response.status).toBe(200);
  });
  it('should register', async () => {
    const response = await axios.post('/api/auth/register', { username: 'test', email: 'test@example.com', password: 'test' });
    expect(response.status).toBe(200);
  });
});
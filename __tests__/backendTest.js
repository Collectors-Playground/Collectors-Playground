import 'regenerator-runtime/runtime';

const request = require('supertest');

const server = 'http://localhost:3000';
const fs = require('fs');
const path = require('path');

describe('Route integration', () => {
  describe('Check the root endpoint', () => {
    describe('GET /', () => {
      it('responds with 200 status and text/html content type', () => request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('Test the API Endpoints', () => {
    const countryName = 'China';
    let res;
    describe(`GET /api/getArticles/${countryName}`, () => {
      describe('Object returned from response should contain an array with three items:', () => {
        test('Fetch endpoint', async () => {
          res = await request(server).get(`/api/getArticles/${countryName}`);
        });
        it('Retrieve article title', () => expect(res.body[0].title).toBeDefined());
        it('Retrieve article summary', () => expect(res.body[0].summary).toBeDefined());
        it('Retrieve article link', () => expect(res.body[0].link).toBeDefined());
      });
    });

    describe(`GET /api/population/${countryName}`, () => {
      describe('Retrieves the population of the chosen country', () => {
        test('Fetch endpoint', async () => {
          res = await request(server).get(`/api/population/${countryName}`);
        });
        it('Population is a number greater than 0', () => expect(res.body).toBeGreaterThan(0));
      });
    });

    describe('POST /api/signup', () => {
      describe('Creates a new user in the database', () => {
        const user = {
          username: 'testing',
          password: 'data',
        };
        test('Receives 200 status from server indicating the user has been created', () => request(server)
          .post('/api/signup')
          .send(user)
          .expect(200));
      });
    });

    describe('POST /api/addFav', () => {
      describe('Adds a favorited article to a user\'s document in the database', () => {
        const user = {
          title: 'Title',
          currentUser: 'testing',
          link: 'Link',
        };
        test('Receives 200 status from server indicating the post has been added.', () => request(server)
          .post('/api/addFav')
          .send(user)
          .expect(200));
      });
    });
  });
});

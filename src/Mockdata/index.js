import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import categrory from './categrory.json';

import comment from './comment.json';

let instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

var mock = new MockAdapter(instance);

mock.onGet('/categrory').reply(200, {
  categrory: categrory,
});

mock.onGet('/comment').reply(200, {
  comment: comment,
});

export default instance;

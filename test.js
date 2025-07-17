import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 20 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}

// main.ts
import { startFetchWithTimeout } from './fetchWithAbort.ts';

const url = 'https://jsonplaceholder.typicode.com/posts';
const timeout = 2000; // 2 seconds

startFetchWithTimeout(url, timeout);

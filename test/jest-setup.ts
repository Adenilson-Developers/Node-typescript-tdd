import { SetupServer } from '@overnightjs/core';
import supertest from 'supertest';
import Supertest from 'supertest';

beforeAll(() => {
    const server = new SetupServer();
    server.init();
    global.testRequest = supertest(server.getApp());
});
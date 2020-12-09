import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';

export class SetupServer extends Server {
    constructor(private PORT = 300) {
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }
    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const forecastControllers = new forecastControllers();
        this.addControllers([forecastController]);
    }
    public getApp(): Application {
        return this.app;
    }
}
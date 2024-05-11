import fastify from 'fastify';
import mongoose from 'mongoose';
import {applicationController} from "./controllers/application";

const app = fastify();
mongoose.connect('mongodb://admin:password@database:27017')
    .then(() => {
        console.log('Database connected');
        app.register(applicationController, {prefix: '/applications'});
        app.listen({ port: 3000 });
    })
    .catch((error) => {
        console.log('Database connection failed:\n', error);
        process.exit(1);
    });

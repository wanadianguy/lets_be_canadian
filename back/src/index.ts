import fastify from 'fastify';
import mongoose from 'mongoose';
import {applicationController} from "./controllers/application";
import fastifyCors from "@fastify/cors";

const app = fastify({logger: true});
mongoose.connect('mongodb://admin:password@database:27017')
    .then(async () => {
        console.log('Database connected');
        await app.register(fastifyCors, {
            origin: true,
            methods: ['GET', 'PUT', 'POST', 'DELETE'],
            allowedHeaders: [
                'content-type',
                'accept',
                'content-type',
                'authorization'
            ],
        })
        app.register(applicationController, {prefix: '/applications'});
        app.listen({ port: 3001, host: '0.0.0.0' })
            .then(() => console.log('Server is up'))
            .catch(error => console.log(error));
    })
    .catch((error) => {
        console.log('An error has occurred:\n', error);
        process.exit(1);
    });

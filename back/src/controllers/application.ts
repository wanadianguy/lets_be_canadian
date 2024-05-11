import {FastifyInstance, FastifyRequest} from "fastify";
import {applicationService} from '../services/application.js';
import {ApplicationType} from "../models/application.js";

export async function applicationController (fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        try {
            const applications: ApplicationType[] = await applicationService.getAll();
            applications ? reply.status(200).send(applications) : reply.status(200).send([]);
        }
        catch (error) {
            reply.status(500).send(error);
        }
    });

    fastify.get('/:id', async (request: FastifyRequest<{Params: {id: string}}>, reply) => {
        try {
            const application = await applicationService.getById(request.params.id);
            application ? reply.status(200).send(application) : reply.status(404).send();
        }
        catch (error) {
            reply.status(500).send(error);
        }
    });

    fastify.post('/', async (request, reply) => {
        try {
            const application = await applicationService.save(request.body as ApplicationType);
            application ? reply.status(200).send(application) : reply.status(400).send();
        }
        catch (error) {
            reply.status(500).send(error);
        }
    });


    fastify.delete('/:id', async (request: FastifyRequest<{Params: {id: string}}>, reply) => {
        try {
            const deleteResult = await applicationService.delete(request.params.id);
            deleteResult ? reply.status(200).send(deleteResult) : reply.status(404).send();
        }
        catch (error) {
            reply.status(500).send(error);
        }
    });
}

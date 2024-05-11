import {applicationRepository} from '../repositories/application.js';
import {ApplicationType} from '../models/application.js'

export const applicationService = {
    getAll: applicationRepository.getAll,
    getById: applicationRepository.getById,
    save: async (application: ApplicationType) => {
        if(application._id) {
            const currentApplication = await applicationRepository.getById(application._id);
            if (!currentApplication) return null;
            const applicationToSave: ApplicationType = {
                _id: currentApplication._id,
                status: application.status ?? currentApplication.status,
                date: application.date ?? currentApplication.date,
                company: application.company ?? currentApplication.company,
                name: application.name ?? currentApplication.name,
                description: application.description ?? currentApplication.description
            };
            return applicationRepository.updateById(applicationToSave);
        } else {
            const applicationToSave: ApplicationType = {
                status: application.status ?? 'in progress',
                date: application.date,
                company: application.company,
                name: application.name,
                description: application.description
            };
            return applicationRepository.save(applicationToSave);
        }
    },
    delete: applicationRepository.delete
};

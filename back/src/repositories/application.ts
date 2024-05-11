import {Application, ApplicationType} from '../models/application.js';

export const applicationRepository = {
    getAll : () => Application.find(),
    getById : (id: string) => Application.findOne({_id: id}),
    save: (application: ApplicationType) => {
        const applicationToSave = new Application(application)
        return applicationToSave.save();
    },
    updateById: (application: ApplicationType) => Application.findOneAndUpdate({_id: application._id}, application),
    delete: (id: string) => Application.deleteOne({_id: id})
}

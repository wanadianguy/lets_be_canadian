import mongoose from 'mongoose';

export type ApplicationStatus = 'draft' | 'in progress' | 'done';

export type ApplicationType = {
    _id?: string;
    status?: ApplicationStatus;
    date?: string;
    company?: string;
    name?: string;
    description?: string;
}

const ApplicationSchema = new mongoose.Schema<ApplicationType>({
    status: {
        type: String,
    },
    date: {
        type: String,
    },
    company: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    }
});

export const Application = mongoose.model("application", ApplicationSchema);

export type Application = {
    _id: string;
    status: ApplicationStatus;
    date: string;
    company: string;
    name: string;
    description: string;
}

export type ApplicationStatus = 'draft' | 'in progress' | 'done';

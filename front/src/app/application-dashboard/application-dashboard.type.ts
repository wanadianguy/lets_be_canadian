export type Application = {
    id: string;
    status: ApplicationStatus;
    date: string;
    company: string;
    name: string;
    description: string;
}

type ApplicationStatus = 'draft' | 'in progress' | 'done';

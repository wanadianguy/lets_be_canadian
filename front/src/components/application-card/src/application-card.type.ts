import {MouseEventHandler} from 'react';

export type ApplicationCardProps = {
    company: string;
    name: string;
    date: string;
    status: ApplicationStatus;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

type ApplicationStatus = 'draft' | 'in progress' | 'done';

import {MouseEventHandler} from 'react';

export type ApplicationCardProps = {
    id: string;
    name: string;
    date: string;
    status: ApplicationStatus;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ApplicationStatus = 'draft' | 'in progress' | 'done';

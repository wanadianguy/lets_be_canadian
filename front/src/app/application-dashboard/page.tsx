'use client';
import './application-dashboard.css';
import {ApplicationCard} from '@/components/application-card';
import {useEffect, useState} from 'react';
import {Application, ApplicationStatus} from './application-dashboard.type';
import {InputText} from '@/components/input-text/input-text';
import {Button} from '@/components/button';

const ApplicationDashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [applicationList, setApplicationList] = useState<Application[]>([]);
    const [applicationIndex, setApplicationIndex] = useState<number>(-1);

    const saveApplication = (index: number, status: ApplicationStatus, company: string, name: string, description: string) => {
        if (index >= 0) {
            applicationList[index] = {
                _id: applicationList[index]._id,
                status: status,
                date: applicationList[index].date,
                company: company,
                name: name,
                description: description
            };
        }
        // TODO: integrate the case in which the application doesn't exists (need backend)
        // TODO: integrate backend call (need backend)
    };

    useEffect(() => {
        // TODO: integrate the backend call (need backend)
        setApplicationList(
            [{
                _id: '1',
                status: 'draft',
                date: '2024-04-24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }, {
                _id: '2',
                status: 'in progress',
                date: '2024-04-24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }, {
                _id: '2',
                status: 'done',
                date: '2024-04-24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }]
        );
    }, []);

    return isEditing
        ? (
            // TODO: need a return button
            <>
                <form id="application-form" className="application-dashboard-page-form">
                    <InputText
                        id="company"
                        title="Name of the company"
                        placeHolder="Company"
                        defaultValue={applicationIndex >= 0 ? applicationList[applicationIndex].company : ''}/>
                    <InputText
                        id="name"
                        title="Title of the job"
                        placeHolder="Job"
                        defaultValue={applicationIndex >= 0 ? applicationList[applicationIndex].name : ''}/>
                    <InputText
                        id="description"
                        title="Add any comment you want"
                        placeHolder="Description"
                        defaultValue={applicationIndex >= 0 ? applicationList[applicationIndex].description : ''}/>
                </form>
                <span className="application-dashboard-page-buttons">
                    <Button
                        label="Save as draft"
                        onClick={() => {
                            saveApplication(
                                applicationIndex,
                                'draft',
                                (document.getElementById('company') as HTMLInputElement).value,
                                (document.getElementById('name') as HTMLInputElement).value,
                                (document.getElementById('description') as HTMLInputElement).value
                            );
                            setIsEditing(false);
                        }}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="white"/>
                    <Button
                        label="Save as in progress"
                        onClick={() => {
                            saveApplication(
                                applicationIndex,
                                'in progress',
                                (document.getElementById('company') as HTMLInputElement).value,
                                (document.getElementById('name') as HTMLInputElement).value,
                                (document.getElementById('description') as HTMLInputElement).value
                            );
                            setIsEditing(false);
                        }}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="white"/>
                    <Button
                        label="Save as done"
                        onClick={() => {
                            saveApplication(
                                applicationIndex,
                                'done',
                                (document.getElementById('company') as HTMLInputElement).value,
                                (document.getElementById('name') as HTMLInputElement).value,
                                (document.getElementById('description') as HTMLInputElement).value
                            );
                            setIsEditing(false);
                        }}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="red"/>
                </span>
            </>
            // TODO: delete option ?
        )
        : (
            <div className="application-dashboard-page">
                {
                    applicationList.map((application, index) => (
                        <ApplicationCard
                            key={application._id}
                            date={application.date}
                            company={application.company}
                            name={application.name}
                            status={application.status}
                            onClick={() => {
                                setApplicationIndex(index);
                                setIsEditing(true);
                            }}/>
                    ))
                }
                <Button
                    label="Create new application"
                    onClick={() => {
                        setApplicationIndex(-1);
                        setIsEditing(true);
                    }}
                    width={50}
                    height={5}
                    backgroundColor="white"/>
            </div>
        );
};

export default ApplicationDashboard;

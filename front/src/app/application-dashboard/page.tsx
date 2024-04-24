'use client';
import './application-dashboard.css';
import {ApplicationCard} from '@/components/application-card';
import {useEffect, useState} from 'react';
import {Application} from './application-dashboard.type';
import {InputText} from '@/components/input-text/input-text';
import {Button} from '@/components/button';

const ApplicationDashboard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [applicationList, setApplicationList] = useState<Application[]>([]);
    const [applicationIndex, setApplicationIndex] = useState<number>(-1);

    useEffect(() => {
        setApplicationList(
            [{
                id: '1',
                status: 'draft',
                date: '2024/04/24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }, {
                id: '2',
                status: 'in progress',
                date: '2024/04/24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }, {
                id: '2',
                status: 'done',
                date: '2024/04/24',
                company: 'Axa',
                name: 'Software engineer',
                description: 'This is the description'
            }]
        );
    }, []);

    return isEditing
        ? (
            <>
                <form className="application-dashboard-page-form">
                    <InputText
                        id="company"
                        title="Name of the company"
                        placeHolder="Company"
                        defaultValue={applicationList[applicationIndex].company}/>
                    <InputText
                        id="name"
                        title="Title of the job"
                        placeHolder="Job"
                        defaultValue={applicationList[applicationIndex].name}/>
                    <InputText
                        id="description"
                        title="Add any comment you want"
                        placeHolder="Description"
                        defaultValue={applicationList[applicationIndex].description}/>
                </form>
                <span className="application-dashboard-page-buttons">
                    <Button
                        label="Save as draft"
                        onClick={() => {}}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="white"/>
                    <Button
                        label="Save as in progress'"
                        onClick={() => {}}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="white"/>
                    <Button
                        label="Save as done"
                        onClick={() => {}}
                        type="submit"
                        width={10}
                        height={5}
                        backgroundColor="red"/>
                </span>
            </>
        )
        : (
            <div className="application-dashboard-page">
                {
                    applicationList.map((application, index) => (
                        <ApplicationCard
                            key={application.id}
                            date={application.date}
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
                    onClick={() => {}}
                    width={50}
                    height={5}
                    backgroundColor="white"/>
            </div>
        );
};

export default ApplicationDashboard;

'use client';
import './application-dashboard.css';
import {ApplicationCard} from '@/components/application-card';

const ApplicationDashboard = () => (
    <div className="application-dashboard-page">
        <ApplicationCard id="1" date="2024/05/24" name="test1 test1 test1 test1" status="draft" onClick={() => {}}/>
        <ApplicationCard id="2" date="2024/05/24" name="test1" status="in progress" onClick={() => {}}/>
        <ApplicationCard id="3" date="2024/05/24" name="test1" status="done" onClick={() => {}}/>
    </div>
);

export default ApplicationDashboard;

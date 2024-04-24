import './application-card.css';
import {ApplicationCardProps} from '@/components/application-card/src/application-card.type';

const statusColor = {
    ['draft']: '#e87f07',
    ['in progress']: '#099ae1',
    ['done']: '#49bd08'
};

export const ApplicationCard = ({...props}: ApplicationCardProps) => (
    <button className="application-card-button" onClick={props.onClick}>
        <div className="application-card-information">
            <span className="application-card-name">
                {props.name}
            </span>
            <span className="application-card-company">
                {props.company}
            </span>
            <span className="application-card-date">
                {props.date}
            </span>
        </div>
        <div className="application-card-status">
            <span style={{color: statusColor[props.status]}}>
                {props.status}
            </span>
            <span className="application-card-icon"></span>
        </div>
    </button>
);

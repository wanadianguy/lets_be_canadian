import './application-card.css';
import {ApplicationCardProps} from '@/components/application-card/application-card.type';

export const ApplicationCard = ({...props}: ApplicationCardProps) => (
    <button className="application-card-button" onClick={props.onClick}>
        hey
    </button>
);

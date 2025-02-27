import './button.css';
import {ButtonProps} from './button.type';
import {buttonBackgroundColor, buttonLabelColor} from './button.utils';

export const Button = (props: ButtonProps) =>
    <button
        type={props.type ?? 'button'}
        className={`button-component ${props.className}`}
        onClick={props.onClick}
        style={{
            width: `${props.width}rem`,
            height: `${props.height}rem`,
            backgroundColor: `${buttonBackgroundColor[props.backgroundColor]}`,
            color: `${buttonLabelColor[props.backgroundColor]}`}}>
        {props.label}
    </button>
;

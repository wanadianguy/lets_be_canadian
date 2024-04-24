import './input-text.css';
import {InputTextProps} from './input-text.type';

export const InputText = ({...props}: InputTextProps) => (
    <input
        className="input-text-container"
        id={props.id}
        type="text"
        defaultValue={props.defaultValue}
        title={props.title}
        placeholder={props.placeHolder}
        onChange={props.onChange}/>
);

import {ChangeEventHandler} from 'react';

export type InputTextProps = {
    id?: string;
    defaultValue?: string;
    title?: string;
    placeHolder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

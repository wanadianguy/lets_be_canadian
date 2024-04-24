import {MouseEventHandler} from 'react';

export type ButtonProps = {
    label: string;
    className?: string;
    type?: ButtonType;
    onClick: MouseEventHandler<HTMLButtonElement>;
    width: number;
    height: number;
    backgroundColor: ButtonBackgroundColor;
}

type ButtonBackgroundColor = 'white' | 'red';

type ButtonType = 'button' | 'submit' | 'reset';

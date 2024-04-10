import {MouseEventHandler} from 'react';

export type ButtonProps = {
    label: string;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    width: number;
    height: number;
    backgroundColor: ButtonBackgroundColor;
}

type ButtonBackgroundColor = 'white' | 'red';

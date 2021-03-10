import React from 'react';
import {Button} from '@material-ui/core';

interface Props {
    title: string;
    className?: string;
    onClick?: () => void;
    disableRipple?: boolean;
}
const Btn = ({ title}: Props) => {
    return <Button> { title } < /Button>;
};

export default Btn;
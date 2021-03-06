import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
    const { header, content } = props;
    const group = content.map(m=><FormControlLabel control={<Checkbox />} label={m.name} />);
    return (
        <div>
            <h4>{header}</h4>
            <FormGroup row>
               {group}
            </FormGroup>
        </div>
    );
}

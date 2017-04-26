import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';

export default function FieldGroup({ id, label, validationState,help, ...props }) {
  return (
    <FormGroup controlId={id} validationState={validationState}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
       <FormControl.Feedback />
    </FormGroup>
  );
}
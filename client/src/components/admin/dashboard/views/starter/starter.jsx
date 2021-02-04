import React from "react";
import { Row, Col } from "reactstrap";
import { confirmAlert } from 'react-confirm-alert';


const Starter = () => {
  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };

  return (
    <div>
      <button onClick={submit}>TESTTTTTTTTTTTT</button>
    </div>
  );
};

export default Starter;

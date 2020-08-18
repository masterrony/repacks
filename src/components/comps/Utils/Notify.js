import React from 'react'
import { MDBAlert } from "mdbreact";

const Notify = ({ type, message }) => <MDBAlert color={type} className="w-100">
  {message}
</MDBAlert>

export default Notify
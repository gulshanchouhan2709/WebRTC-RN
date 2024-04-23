import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SwalAlert = ({ type, title, message }) => {
  Swal.fire({
    icon: type || 'error',
    title: title || 'Oops!',
    text: message || 'Something went wrong! Please try again.',
  });
};

export default SwalAlert;

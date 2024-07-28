"use client"

import { useEffect } from 'react';

function BootstrapClient() {
  // useEffect(() => {
  //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
  // }, []);
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return null;
}

export default BootstrapClient;
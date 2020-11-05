import { Button } from 'antd';
import React from 'react';

export const SubmitBtn = ({ loginRegister, value }: any) => {
  return (
    <Button type="primary" onClick={loginRegister}>
      {value}
    </Button>
  );
};

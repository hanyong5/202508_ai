import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function ChildComp() {
  const view = useContext(UserContext);
  return <div>ChildComp111 / {view}</div>;
}

export default ChildComp;

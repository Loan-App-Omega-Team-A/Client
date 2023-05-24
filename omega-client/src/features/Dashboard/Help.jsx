import React from 'react'
import DashHeader from '../../components/Dashboard/DashHeader';
import Sidebar from '../../components/Dashboard/Sidebar';

const Help = () => {
  return (
    <div className="flex flex-col">
      <DashHeader/>
      <div className="flex ">
        <Sidebar />
        <div>Help</div>
      </div>
    </div>
  );
}

export default Help
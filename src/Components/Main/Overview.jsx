import React from 'react';
import Filter from './Filter';
import Tables from './Table';
import Cards from './Card';
import BarChart from './Bar';
import PieChart from './PieChart';
import HBar from './HBar'
const Overview = () => {
  return (
  
    <div style={{ border:'25px solid #3468C0',borderTopWidth: '5px',borderBottomWidth: '0',overflow:'auto'}}>
      <Filter />      
      <div style={{ display: 'flex',  marginTop: '40px', padding: '20px' }}>
        <Tables />
        <Cards /> 
        </div>
    </div>
  );
};

export default Overview;

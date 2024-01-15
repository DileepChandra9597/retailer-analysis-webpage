import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BarChart from './Bar';
import Filter from './Filter';
import NavBar from './NavBar';
import PieChart from './PieChart';
import HBar from './HBar';

const Main = () => {
  return (
    <>
      <NavBar />
      <Filter />
      <div style={{ display: 'flex', marginTop: '50px' }}>
        <div style={{ width: '40%', marginRight: '20px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <BarChart />
        </div>
        <div style={{ width: '25%', paddingLeft: '20px', marginRight: '20px', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
          <PieChart />
        </div>
        <div style={{ width: '35%', paddingRight: '20px' }}>
          <HBar />
        </div>
      </div>
    </>
  );
};

export default Main;

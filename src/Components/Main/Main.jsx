import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BarChart from './Bar';
import Filter from './Filter';
import NavBar from './NavBar';
import Tables from './antdTable';
import Carduu from './Carduu';


const Main = () => {
  return (
    <>
      <NavBar />
      <Filter />
      {/* <Table /> */}
      <div style={{ display: 'flex',  marginTop: '70px', padding: '20px' }}>
        <Tables />
        <Carduu /> 
      </div>
           
    </>
  );
};

export default Main;

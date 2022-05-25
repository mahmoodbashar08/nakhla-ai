import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import {w3cwebsocket} from 'websocket'
import Wellcome from "../components/home/wellcome";
import MyInputComponent from "../components/home/input-component";
import ApexChart from "../components/home/live-co2";
import AiComponent from "../components/home/ai";
import TimeComponent from "../components/home/time-component";
import MainCard from "../components/main/main-card";


const Home = () => {

  const state = {
    recommended: 0,
    live_co2: 0,
    concentration: 0,
  };

  const [data,setData] = useState({live:0,palms:0,predection:0}); 
 
  const ws = new w3cwebsocket("ws://localhost:8000/ws");
  
  useEffect(() =>{
    
    ws.onmessage = (message) => {
   
      const data = (JSON.parse(message.data))

      
       setData({... data})
    
    }
  })


  
    return (
      <>
        <Row
          justify="space-evenly"
          gutter={[{ xs: 0, sm: 0, md: 0, lg: 0, xl: 16 }, 20]}
        >
          <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24}>
            <Row gutter={[0, 20]} justify="center">
              <Col span={24}>
                <Wellcome />
              </Col>
              <Col span={24} className="card">
                <MainCard
                  title="Live CO2 Concentration"
                  children={<ApexChart data={data.live} percent={state.live_co2} />}
                />
              </Col>
            </Row>
          </Col>

          <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24}>
            <Row justify="space-between" gutter={[0, 20]}>
              <Col span={24}>
                <TimeComponent />
              </Col>
              <Col span={24}>
                <AiComponent
                  palms={data.palms}
                  co2={data.predection}
                  live={data.live}
                />
              </Col>
              <Col span={24}>
                <MyInputComponent co2 = {data.live} />
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }


export default Home;

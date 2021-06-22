import React, { useContext } from 'react';
import { Grid, Row, Column, Button } from 'carbon-components-react';
import board from '../content/assets/pyrrha-arch.jpg';
import nodeGray from '../content/assets/Prometeo-device.jpg';
import dashboard from '../content/assets/dash.jpg';
import hazardmap from '../content/assets/Prometeo-ack.jpg';
import AppContext from '../context/app';
import dash from '../content/assets/Pyrrha-dashboardSS.png';
import gh from '../content/assets/green-helmet.jpeg';
import yh from '../content/assets/yellow-helmet.jpeg';
import rh from '../content/assets/red-helmet.jpeg';
import device from '../content/assets/pyrrha-device.jpeg';

const SensorInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h2>{t('sensorTitle')}</h2>
          </Column>
          <Column lg={8}>
            <h3>{t('sensorDescription1')}</h3>
            
          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
            {/* <Button
              onClick={() => {
                window.open(
                  'https://github.com/openeew/openeew/wiki/OpenEEW-Sensor',
                  '_blank',
                  'noopener'
                );
              }}
              kind="secondary"
            >
              {t('sensorButtonText')}
            </Button> */}
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 6, offset: 4 }}>
            <img
              className="sensor-image"
              src={board}
              alt="A 3D printed sensor"
            ></img>
            <div>
            <h4>{t('Arch-Description1')}</h4>
            <h4>{t('Arch-Description2')}</h4>
            <h4>{t('Arch-Description3')}</h4>
            <h4>{t('Arch-Description4')}</h4>
            <h4>{t('Arch-Description5')}</h4>
            <h4>{t('Arch-Description6')}</h4>
            <h4>{t('Arch-Description7')}</h4>
            <h4>{t('Arch-Description8')}</h4>
            <h4>{t('Arch-Description9')}</h4>
            <h4>{t('Arch-Description10')}</h4>
            <h4>{t('Arch-Description11')}</h4>
            </div>

            <h3>{t('sensorDescription2')}</h3>
            <img
            className="device"
            src={device}
            alt="pyrrha device"
            ></img>

            <h3>{t('sensorDescription3')}</h3>
            <img
            className="dash"
            src={dash}
            alt="prometeo dashboard"
            ></img>
            <img
            className="dash"
            src={gh}
            alt="green"
            ></img>
            <img
            className="dash"
            src={yh}
            alt="yellow"
            ></img>
            <img
            className="dash"
            src={rh}
            alt="red"
            ></img>

            <h3>{t('sensorDescription4')}</h3>
            
            <h3>{t('TestingTarget')}</h3>
            <h4>{t('TestingTargetA')}</h4>
            <h4>{t('TestingTargetB')}</h4>
            <h4>{t('TestingTargetC')}</h4>
          </Column>
        </Row>
      </Grid>
      
    </section>
    
  );
};

const DashboardInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h4>{t('dashboardTitle')}</h4>
          </Column>
          <Column lg={8}>
            <h3>{t('dashboardDescription')}</h3>
          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
            {/* <Button
              onClick={() => {
                window.open(
                  'https://github.com/openeew/openeew/wiki/Getting-Involved',
                  '_blank',
                  'noopener'
                );
              }}
              kind="secondary"
            >
              {t('dashboardButtonText')}
            </Button> */}
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 12, offset: 4 }}>
            <img
              className="dashboard-image"
              src={dashboard}
              alt="OpenEEW Dashboard"
            ></img>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

const NetworkInfo = () => {
  const { t } = useContext(AppContext);

  return (
    <section>
      {' '}
      <Grid className="info-section">
        <Row className="info-text">
          {/* TODO: Get text from json. */}
          <Column lg={4}>
            <h2>{t('networkTitle')}</h2>
          </Column>
          <Column lg={8}>
            <h4>{t('networkDescription1')}</h4>
            <h4>{t('networkDescription2')}</h4>
            <h4>{t('networkDescription3')}</h4>
            <h4>{t('networkDescription4')}</h4>
            <h4>{t('networkDescription5')}</h4>
            <h4>{t('networkDescription6')}</h4>

          </Column>
          <Column lg={{ span: 3, offset: 1 }}>
            <Button
              onClick={() => {
                window.open(
                  'https://github.com/openeew/openeew/wiki/Build-a-Network',
                  '_blank',
                  'noopener'
                );
              }}
              kind="secondary"
            >
              {t('networkButtonText')}
            </Button>
          </Column>
        </Row>
        <Row className="info-media">
          <Column lg={{ span: 11, offset: 4 }}>
            <img
              className="dashboard-image"
              src={hazardmap}
              alt="Earthquake hazard map"
            ></img>
          </Column>
        </Row>
      </Grid>
    </section>
  );
};

export { SensorInfo, DashboardInfo, NetworkInfo };

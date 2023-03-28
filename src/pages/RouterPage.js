import React, { useContext } from 'react';
import { Layout, Menu, theme } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';
import { UiContext } from '../context/UiContext';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { ocultarMenu } = useContext( UiContext );

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsedWidth="0"
          breakpoint="md"
          hidden={ ocultarMenu }
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                label: (
                  <Link to="/ingresar">
                    Ingresar
                  </Link>
                ),
                key: '1',
                icon: <UserOutlined />,
              },
              {
                label: (
                  <Link to="/cola">
                    Cola de tickets
                  </Link>
                ),
                key: '2',
                icon: <VideoCameraOutlined />,
              },
              {
                label: (
                  <Link to="/crear">
                    Crear tickets
                  </Link>
                ),
                key: '3',
                icon: <UploadOutlined />,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/ingresar" Component={ Ingresar } />
              <Route path="/cola" Component={ Cola } />
              <Route path="/crear" Component={ CrearTicket } />

              <Route path="/escritorio" Component={ Escritorio } />

              <Route path="/*" element={ <Navigate to="/ingresar" /> } />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

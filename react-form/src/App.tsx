import { BrowserRouter as Router, useRoutes, Link } from 'react-router-dom';

import { Layout, Space, Typography } from "antd";
import Home from './pages/home';
import CreateClass from './pages/createClass';

const { Header } = Layout;
const { Title } = Typography;

function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/criar-turma",
      element: <CreateClass />
    }
  ]

  return useRoutes(routes)
}

function App() {
  return (
    <>
      <Router>
        <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Title level={1} style={{ color: "#fff", margin: 0 }}>Turmas</Title>
          <Space>
            <Link style={{ fontSize: 18 }} to="/">Turmas Disponíveis</Link>
            <Link style={{ fontSize: 18 }} to="/criar-turma">Criar Turma</Link>
          </Space>
        </Header>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
import { Wrapper, Content } from "./style";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Sidebar />
        <Outlet />
      </Content>
    </Wrapper>
  );
};

export { App };

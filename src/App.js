import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

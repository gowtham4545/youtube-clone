import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen';
import './_app.scss';
import { useState } from "react";
import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const Layout = (props) => {
    const [sidebar, toggleSidebar] = useState(true);
    const handleToggleSidebar = () => toggleSidebar(value => !value);
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="appContainer">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="appMain">
                    {props.children}
                </Container>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact >
                    <Route path="" element={
                        <Layout>
                            <HomeScreen />
                        </Layout>
                    } />
                    <Route path="search" element={
                        <h1>Search Screen</h1>
                    } />
                </Route>

                <Route path="/auth" exact element={
                    <LoginScreen />
                } />
                <Route path="*" element={
                    <Navigate to='/' replace/>
                }/>
            </Routes>
        </Router>
    );
}

export default App;

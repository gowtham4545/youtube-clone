import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen';
import './_app.scss';
import { useEffect, useState } from "react";
import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen";
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

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
    const { accessToken, user } = useSelector(state => state.auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (!accessToken) {
            navigate('/auth');
        }
    }, [accessToken, navigate]);
    return (
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
                <Navigate to='/' replace />
            } />
        </Routes>
    );
}

export default App;

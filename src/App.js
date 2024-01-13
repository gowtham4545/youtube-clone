import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen';
import './_app.scss';
import { useState } from "react";

function App() {

    const [sidebar, toggleSidebar] = useState(true);

    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="appContainer">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
                <Container fluid className="appMain">
                    <HomeScreen />
                </Container>
            </div>
        </>
    );
}

export default App;

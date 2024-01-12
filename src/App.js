import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen';
import './_app.scss';

function App() {
    return (
        <>
            <Header />
            <div className="appContainer border border-info">
                <Sidebar />
                <Container fluid className="appMain border border-warning">
                    <HomeScreen />
                </Container>
            </div>
        </>
    );
}

export default App;

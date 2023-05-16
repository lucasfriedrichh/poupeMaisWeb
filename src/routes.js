import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

import DashboardPage from './pages/DashboardPage';

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/dashboard' element={<DashboardPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;
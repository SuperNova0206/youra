import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import LogoutPage from './components/auth/LogoutPage';
import ListMateriel from "./components/Materiels/ListMateriel"
import ShowMateriel from "./components/Materiels/ShowMateriel"
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/logout" element={ <LogoutPage /> } />
                    <Route path="/materiels" element={ <ListMateriel /> } />
                    <Route path="/materiels/:id" element={ <ShowMateriel /> } />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

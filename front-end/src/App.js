import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import LogoutPage from './components/auth/LogoutPage';
import ListFormateur from './components/Formateurs/ListFormateur';
import CreateFormateur from './components/Formateurs/CreateFormateur';
import EditFormateur from './components/Formateurs/EditFormateur';
import ShowFormateur from './components/Formateurs/ShowFormateur';
import ListMateriel from './components/Materiels/ListMateriel';
import CreateMateriel from './components/Materiels/CreateMateriel';
import EditMateriel from './components/Materiels/EditMateriel';
import ShowMateriel from './components/Materiels/ShowMateriel';
const App = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/logout" element={ <LogoutPage /> } />
                    <Route path="/formateurs" element={ <ListFormateur /> } />
                    <Route path="/formateurs/create" element={ <CreateFormateur /> } />
                    <Route path="/formateurs/edit/:id" element={ <EditFormateur /> } />
                    <Route path="/formateurs/:id" element={ <ShowFormateur /> } />
                    <Route path="/materiels" element={ <ListMateriel /> } />
                    <Route path="/materiels/create" element={ <CreateMateriel /> } />
                    <Route path="/materiels/edit/:id" element={ <EditMateriel /> } />
                    <Route path="/materiels/:id" element={ <ShowMateriel /> } />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;

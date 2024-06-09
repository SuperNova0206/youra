import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { logoutUser } from '../../services/authService';

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        const resultAction = await dispatch(logoutUser());
        if (logoutUser.fulfilled.match(resultAction)) {
            navigate('/login');
        } else {
            console.error('Logout failed:', resultAction.payload);
        }
    };

    return (
        <button className="nav-link btn btn-link" onClick={handleLogout}>
            <AiOutlineLogout />
            <span> Logout</span>
        </button>
    );
};

export default LogoutPage;
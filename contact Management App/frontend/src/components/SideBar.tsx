import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePaths from '../utils/usePaths';

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    // Get header name from usePaths hook
    const path = usePaths();

    const contactButton = {
        color: path === 'Contact Page' ? 'blue' : 'white',
        backgroundColor: path === 'Contact Page' ? 'rgba(59, 130, 246)' : 'rgba(16, 185, 129)',
        hoverBackgroundColor: 'blue',
        gradientBackground: 'linear-gradient(to right, rgba(59, 130, 246), rgba(16, 185, 129))',
        hoverGradientBackground: 'linear-gradient(to right, rgba(16, 185, 129), rgba(59, 130, 246))',
        hoverColor: 'white',
    };

    const dashboardButton = {
        color: path === 'Charts and Maps' ? 'blue' : 'white',
        backgroundColor: path === 'Charts and Maps' ? 'rgba(59, 130, 246)' : 'rgba(16, 185, 129)',
        hoverBackgroundColor: 'blue',
        gradientBackground: 'linear-gradient(to right, rgba(59, 130, 246), rgba(16, 185, 129))',
        hoverGradientBackground: 'linear-gradient(to right, rgba(16, 185, 129), rgba(59, 130, 246))',
        hoverColor: 'white',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        button.style.backgroundColor = contactButton.hoverBackgroundColor;
        button.style.backgroundImage = contactButton.hoverGradientBackground;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        button.style.backgroundColor = contactButton.backgroundColor;
        button.style.backgroundImage = contactButton.gradientBackground;
    };

    const handleDashboardMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        button.style.backgroundColor = dashboardButton.hoverBackgroundColor;
        button.style.backgroundImage = dashboardButton.hoverGradientBackground;
    };

    const handleDashboardMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        button.style.backgroundColor = dashboardButton.backgroundColor;
        button.style.backgroundImage = dashboardButton.gradientBackground;
    };

    return (
        <div className="flex lg:flex-col lg:min-h-screen gap-4 p-6 text-white">
            <button
                className="p-2 rounded transition duration-300"
                style={{
                    backgroundColor: contactButton.backgroundColor,
                    color: contactButton.color,
                    backgroundImage: contactButton.gradientBackground,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => navigate('/')}
            >
                Contacts
            </button>
            <button
                className="p-2 rounded transition duration-300"
                style={{
                    backgroundColor: dashboardButton.backgroundColor,
                    color: dashboardButton.color,
                    backgroundImage: dashboardButton.gradientBackground,
                }}
                onMouseEnter={handleDashboardMouseEnter}
                onMouseLeave={handleDashboardMouseLeave}
                onClick={() => navigate('/dashboard')}
            >
                Charts and Maps
            </button>
        </div>
    );
};

export default SideBar;

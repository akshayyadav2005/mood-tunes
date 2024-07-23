import React from 'react';
import AuthForm from '../Components/AuthForm';

const AuthPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome to Mood Tunes</h2>
                <AuthForm />
            </div>
        </div>
    );
};

export default AuthPage;

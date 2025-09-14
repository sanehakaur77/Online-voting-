import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from'react-router-dom';
import { ToastContainer} from'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import { showSuccess, showError } from './Utils';
const AdminPanel = () => {
  const navigate = useNavigate();  
  const [admin_email, setUsername] = useState('');
  const [admin_password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);  
  const [errorMessage, setErrorMessage] = useState('');  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { admin_email, admin_password };

    setLoading(true);
    setErrorMessage('');  // Clear any previous error messages

    try {
      const res = await axios.post(
        'http://localhost:8080/api/user/admin',
        data,  // Send the data directly
        { headers: { 'Content-Type': 'application/json' } }
      );
      
     if(res.data.success) {
    
      showSuccess(res.data.message);
      setTimeout(()=>{
         navigate('/admintasks')
      },2000)
     }

    } catch (error) {
      alert(error);
      showError(error.data.message)
      console.log(error);
    }
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="email"
              id="username"
              name="username"
              value={admin_email}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={admin_password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={loading}  // Disable the button while loading
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Optional footer */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign up</a>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AdminPanel;

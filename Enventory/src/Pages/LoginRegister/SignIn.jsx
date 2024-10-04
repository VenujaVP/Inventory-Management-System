import { useState } from 'react';
import './SignIn.css';
// 
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic
        alert("Logged in successfully!");
    };

    return (
        <div className="signin-container">
            <div className="form-container">
                <h2 className='title'>Admin Sign In</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p>t have an account? <a href="/signup">Register here</a></p>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
    const navigate = useNavigate(); 

    const delay = (s) => {
        return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }

    const onSubmit = async (data) => {
        await delay(2);
        // Send data to server
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Parse the response as JSON
            const result = await response.json(); 
            console.log(result);
            // Handle successful login and navigate to the ProfilePage with state
            if (response.ok) {
                navigate('/profile', { state: result });
            } else {
                console.error("Login failed:", result);
                // Handle errors 
                alert("Login failed: " + result.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <div>
            {isSubmitting && <div className="Loading">Loading...</div>}
            <div className="login_container">
                <form onSubmit={handleSubmit(onSubmit)} className='login_form'>
                    <input
                        {...register("username", {
                            required: { value: true, message: "Username is required" },
                        })}
                        type='text'
                        placeholder='Username'
                    />
                    {errors.username && <span className='red'>{errors.username.message}</span>}

                    <input
                        {...register("password", {
                            required: { value: true, message: "Password is required" },
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors.password && <span className='red'>{errors.password.message}</span>}

                    <input disabled={isSubmitting} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Login;

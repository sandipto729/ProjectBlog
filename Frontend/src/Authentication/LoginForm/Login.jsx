import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './login.module.css';
import summeryApi from '../../common';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();
 
    const navigate = useNavigate(); 

    const onSubmit = async (data) => {
        
        try {
            const response = await fetch(summeryApi.Login.url, {
                method: summeryApi.Login.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            const result = await response.json(); 
            
            if (response.ok) {
                navigate('/profile'); // Navigate to Profile page
            } else {
                alert(result.message); // Show error message from server
            }
        } catch (error) {
            console.error("Login error:", error); // Log any error that occurs
            alert("An error occurred during login. Please try again."); // Show generic error message
        }
    }

    return (
        <div>
            {isSubmitting && <div className="Loading">Loading...</div>}
            <div className={styles.login_container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
                    <input
                        {...register("email", {
                            required: { value: true, message: "Email is required" },
                        })}
                        type='text'
                        placeholder='Email'
                    />
                    {errors.email && <span className={styles.red}>{errors.email.message}</span>}

                    <input
                        {...register("password", {
                            required: { value: true, message: "Password is required" },
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors.password && <span className={styles.red}>{errors.password.message}</span>}

                    <input disabled={isSubmitting} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Login;

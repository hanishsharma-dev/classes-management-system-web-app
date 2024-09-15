import React, { useEffect } from "react";

// Import necessary modules from react-hook-form, Material-UI, React Router, Axios, and react-toastify
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import custom styles and constants
import styles from "./styles";
import { AppConstants, RouteConstants } from "../../../constants";
import CommonLoader from "../../../components/CommonLoader";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/slices/auth/loginSlice";

// Define the interface for login input fields
interface ILoginInputs {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    // Initialize the navigate function to programmatically navigate between routes
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();
    const { data, loading } = useSelector((state: RootState) => state.loginData);

    useEffect(() => {
        if (data) {
            navigate(RouteConstants.HOME);
        }
    }, [data, navigate])

    // Set up the form handling with react-hook-form, including validation and default values
    const { control, handleSubmit, formState: { errors } } = useForm<ILoginInputs>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    // Function to handle form submission
    const onSubmit = async (payloadData: ILoginInputs) => {
        console.log(payloadData); // Log form data to the console
        // Prepare the payload for the API request
        const payload = {
            email: payloadData.email,
            password: payloadData.password,
        }
        await dispatch(loginUser(payload));
    };

    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.centerBoxContainer}>
                {/* Login page heading */}
                <Typography variant="h4" sx={styles.loginLabel}>
                    {AppConstants.LOGIN}
                </Typography>

                {/* Email input field with validation */}
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: AppConstants.EMAIL_IS_REQUIRED,
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: AppConstants.INVALID_EMAIL_ADDRESS,
                        }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={AppConstants.EMAIL}
                            sx={styles.textField}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ''}
                        />
                    )}
                />

                {/* Password input field with validation */}
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: AppConstants.PASSWORD_IS_REQUIRED }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={AppConstants.PASSWORD}
                            type="password"
                            sx={styles.textField}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password.message : ''}
                        />
                    )}
                />

                {/* Forgot password link */}
                <Box sx={styles.forgotPasswordContainer}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button."); // Placeholder action for the "Forgot Password" button
                        }}
                        alignSelf={'flex-end'}>
                        {AppConstants.FORGOT_PASSWORD}
                    </Link>
                </Box>

                {/* Submit button for the form */}
                <Button
                    variant="contained"
                    sx={styles.loginButton}
                    onClick={handleSubmit(onSubmit)}
                >
                    {AppConstants.LOGIN}
                </Button>

                {/* Bottom section with "Sign Up" link */}
                <Box sx={styles.bottomLineContainer}>
                    <Typography
                        variant="body2"
                        sx={styles.dontHaveAnAccount}>
                        {AppConstants.DO_NOT_HAVE_AN_ACCOUNT}
                    </Typography>
                    <Link
                        component="button"
                        variant="body2"
                        sx={styles.link}
                        onClick={() => {
                            navigate(RouteConstants.REGISTER) // Navigate to the registration page
                        }}>
                        {AppConstants.SIGN_UP}
                    </Link>
                </Box>
            </Box>

            {/* Container for toast notifications */}
            <ToastContainer />
            {loading && <CommonLoader />}
        </Box>
    );
}

// Export the Login component as default
export default Login;

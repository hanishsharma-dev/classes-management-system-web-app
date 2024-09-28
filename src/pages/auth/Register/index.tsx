import React, { useEffect } from "react";

// Import necessary modules from react-hook-form, Material-UI, React Router, Axios, and react-toastify
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Checkbox, Link, TextField, Typography } from "@mui/material";
import styles from "./styles";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CommonLoader from "../../../components/CommonLoader";
import { AppConstants, RouteConstants } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { registerUser, resetSuccess } from "../../../redux/slices/auth/registerSlice";

// Define the interface for form input fields
interface IFormInputs {
    email: string;
    fullName: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

const Register: React.FC = () => {
    // Initialize the navigate function to programmatically navigate between routes
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { data, loading } = useSelector((state: RootState) => state.registerData);

    useEffect(() => {
        console.log('Data: ', data)
        if (data) {
            navigate(RouteConstants.LOGIN);
            dispatch(resetSuccess());
            setTimeout(() => {
                toast(AppConstants.REGISTERED_SUCCESSFULLY_PLEASE_LOGIN);
            }, 1000);
        }
    }, [data, navigate, dispatch])

    // Set up the form handling with react-hook-form, including validation and default values
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        defaultValues: {
            email: '',
            fullName: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        }
    });

    // Function to handle form submission
    const onSubmit = async (data: IFormInputs) => {
        console.log(data); // Log form data to the console
        // Prepare the payload for the API request
        const payload = {
            email: data.email,
            fullName: data.fullName,
            password: data.password,
        };
        await dispatch(registerUser(payload));
    };

    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.centerBoxContainer}>
                {/* Register page heading */}
                <Typography variant="h4" sx={styles.loginLabel}>
                    {AppConstants.REGISTER}
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

                {/* Full name input field with validation */}
                <Controller
                    name="fullName"
                    control={control}
                    rules={{ required: AppConstants.FULL_NAME_IS_REQUIRED }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={AppConstants.FULL_NAME}
                            sx={styles.textField}
                            error={!!errors.fullName}
                            helperText={errors.fullName ? errors.fullName.message : ''}
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

                {/* Confirm Password input field with validation */}
                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        required: AppConstants.CONFIRM_PASSWORD_IS_REQUIRED,
                        validate: (value, data) =>
                            value === data.password || AppConstants.PASSWORDS_DO_NOT_MATCH
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={AppConstants.CONFIRM_PASSWORD}
                            type="password"
                            sx={styles.textField}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                        />
                    )}
                />

                {/* Terms and conditions checkbox */}
                <Box sx={styles.termsAndConditionContainer}>
                    <Controller
                        name="acceptTerms"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Checkbox {...field} size="small" />
                        )}
                    />
                    <Typography variant="body2" sx={styles.dontHaveAnAccount}>
                        {AppConstants.PLEASE_ACCEPT}
                    </Typography>
                    <Link
                        component="button"
                        variant="body2"
                        sx={styles.link}
                        onClick={() => {
                            console.info("I'm a button."); // Placeholder action for the "Terms and Conditions" link
                        }}>
                        {AppConstants.TERMS_AND_CONDITIONS}
                    </Link>
                </Box>

                {/* Display an error message if terms and conditions are not accepted */}
                {errors.acceptTerms && (
                    <Typography
                        variant="body2"
                        color="error"
                        sx={{
                            marginTop: '4px',
                            marginLeft: '40px', // Aligns with the checkbox
                            width: { xs: '80vw', sm: '60vw', md: '40vw' }
                        }}
                    >
                        {AppConstants.YOU_MUST_ACCEPT_THE_TERMS_AND_CONDITIONS}
                    </Typography>
                )}

                {/* Submit button for the form */}
                <Button
                    variant="contained"
                    sx={styles.loginButton}
                    onClick={handleSubmit(onSubmit)}
                >
                    {AppConstants.REGISTER}
                </Button>

                {/* Bottom section with "Login" link */}
                <Box sx={styles.bottomLineContainer}>
                    <Typography variant="body2" sx={styles.dontHaveAnAccount}>
                        {AppConstants.ALREADY_HAVE_AN_ACCOUNT}
                    </Typography>
                    <Link
                        component="button"
                        variant="body2"
                        sx={styles.link}
                        onClick={() => {
                            navigate(RouteConstants.LOGIN); // Navigate to the login page
                        }}>
                        {AppConstants.LOGIN_HERE}
                    </Link>
                </Box>
            </Box>

            {/* Container for toast notifications */}
            <ToastContainer />
            {loading && <CommonLoader />}
        </Box>
    );
}

// Export the Register component as default
export default Register;

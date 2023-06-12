import React, { useContext, useState } from 'react'
import { Box, Button, Card, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { Formik } from "formik";
import { object, string } from 'yup';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Form from '../FormHandler/Form';
import { AuthContext } from './authContext';

const API_URL = process.env.REACT_APP_SERVER_URI;

const Login = () => {
		const authContext = useContext(AuthContext);

		const form = new Form();

		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");
		const [showPassword, setShowPassword] = useState(false);
		const [loginError, setLoginError] = useState("");
		

		const initialValues = {
			email: email,
			password: password,
		};
		const checkoutSchema = object({
			email: string().email("invalid email").required("Required"),
			password: string().required("Required"),
		})

		const handleClick = () => {
			setShowPassword(prev => !prev);
		}

		const handleFormSubmit = async (e) => {

			await form.submit('post', `/api/login`, initialValues)
				.then(response => {
					authContext.login(response.token, response.refresh_token);
				})
				.catch(errors => {
					setLoginError(errors.msg);
				});
		};

		return (
				<Box
					m="20px"
					display="flex"
					justifyContent={'center'}
					alignItems={'center'}
					height={'100vh'}
					
				>
					<Card>
						<Typography variant='h1' textAlign={'center'} padding={"30px"}>
							Admin Login
						</Typography>
						{loginError &&(
							<Typography textAlign={'center'} color={"red"}>
								{loginError}
							</Typography>
						)}
						<Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
							{({ values, errors, touched, handleBlur, handleChange, handleSubmit,}) => (
								<form onSubmit={handleSubmit}>
									<Box
										display="grid"
										gap="30px"
										gridTemplateColumns="repeat(4, minmax(0, 1fr))"
										width={500}
										padding={3}
									>
										<TextField
											fullWidth
											variant="filled"
											type="type"
											label="Email"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.email}
											name="email"
											error={!!touched.email && !!errors.email}
											helperText={touched.email && errors.email}
											sx={{ gridColumn: "span 4" }}
											onInput={(event) => {setEmail(event.target.value); setLoginError("")}}
										/>
										<TextField
											fullWidth
											variant="filled"
											type={showPassword ? "text" : "password"}
											label="password"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.password}
											name="password"
											error={!!touched.password && !!errors.password}
											helperText={touched.password && errors.password}
											sx={{ gridColumn: "span 4" }}
											onInput={(event) => {setPassword(event.target.value); setLoginError("")}}
											InputProps={{
												endAdornment: 'password' ? (
													<InputAdornment position="end">
														 <IconButton
															 onClick={handleClick}
															 edge="end"
														 >
															 {showPassword ? <VisibilityIcon /> : <VisibilityOff />}
														 </IconButton>
													 </InputAdornment>
												) : null
											}}
										/>
									</Box>
									<Box display="flex" justifyContent="end" mt="20px" mb="20px">
										<Button type="submit" color="secondary" variant="contained">
											Create New User
										</Button>
									</Box>
								</form>
							)}
						</Formik>
					</Card>
				</Box>
			);
}

export default Login
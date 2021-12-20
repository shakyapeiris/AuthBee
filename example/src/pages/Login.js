import React from 'react';
import Input from '../components/Input'

const Login = () => {
	return (
		<>
			<form>
				<Input 
					label="Username" 
					id="username"  
					placeholder="Enter your username"
					onChange={() => {}}
					value=""
					onBlur={() => {}}
					error={false}
					errorMessage="Enter a valid username" 
				/>
				<Input 
					label="Password" 
					id="password"  
					placeholder="Enter your password"
					onChange={() => {}}
					value=""
					onBlur={() => {}}
					error={false}
					errorMessage="Enter a valid password" 
				/>
			</form>
		</>
	)
}

export default Login;
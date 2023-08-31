import { useState } from 'react';

const sendFormData = (formData) => {
	console.log(formData);
};

export const MyForm = () => {
	const [formData, setformData] = useState({
		email: '',
		password: '',
		passwordRepeat: '',
	});

	const [loginError, setloginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setformData(target.value);

		let newError = null;

		if (!/^[\w_]*$/.test(target.value)) {
			newError = 'Ошибка в e-mail. Недопустимые символы';
		} else if (target.value.length > 20) {
			newError = 'Ошибка в логине. Слишком много букафф';
		}
		setloginError(newError);
	};

	const onLoginBlur = ({ target }) => {
		if (target.value.length < 3) {
			setloginError('Слишком мало - надо больше 3х');
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};

	const { email, password, passwordRepeat } = formData;
	return (
		<>
			<div className="registrationForm">
				<div>
					<form onSubmit={onSubmit}>
						{loginError && (
							<div className={StyleSheet.errorLabel}>{loginError}</div>
						)}
						<input
							name="login"
							type="email"
							placeholder="Ваш E-Mail"
							value={email}
							onChange={onLoginChange}
							onBlur={onLoginBlur}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Пароль"
							value={password}
							onChange={onLoginChange}
							onBlur={onLoginBlur}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Повторите пароль"
							value={passwordRepeat}
							onChange={onLoginChange}
							onBlur={onLoginBlur}
						></input>
						<br></br>
						<button type="submit">Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</>
	);
};

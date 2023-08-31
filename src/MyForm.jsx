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

	const [formError, setFormError] = useState(null);

	let newError = null;

	const onEmailChange = ({ target }) => {
		setformData(target.value);

		if (!/.+@.+\..+/i.test(target.value)) {
			newError = `Какой то подозрительный E-mail. \n Проверьте ещё раз или попробуйте использовать другой \n (Возможно в адресе не хватает "@" и/или ".")`;
		} else if (target.value.length > 20) {
			newError = 'Слишком длинный E-mail. Не должен быть больше 20 символов';
		}
		setFormError(newError);
	};

	const onEmailBlur = ({ target }) => {
		if (target.value.length < 3) {
			newError = 'Слишком мало - надо больше 3х';
		}
		setFormError(newError);
	};

	const onPasswordChange = ({ target }) => {
		setformData(target.value);

		if (target.value.length < 8) {
			newError = 'Пароль должен быть 8 или больше символов';
		}
		setFormError(newError);
	};

	const onPasswordBlur = ({ target }) => {
		if (target.value.length < 8) {
			newError = 'Пароль должен быть 8 или больше символов';
		}
		setFormError(newError);
	};

	const onPasswordRepeatChange = ({ target }) => {
		setformData(target.value);

		if (target.value.length < 8) {
			newError = 'Пароль должен быть 8 или больше символов';
		}
		setFormError(newError);
	};

	const onPasswordRepeatBlur = ({ target }) => {
		if (target.value.length < 8) {
			newError = 'Пароль должен быть 8 или больше символов';
		}
		setFormError(newError);
	};

	if (!(formData.password === formData.passwordRepeat)) {
		newError = 'Пароли не совпадают';
		setFormError(newError);
	}

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
						{formError && <div className="error-message">{formError}</div>}
						<input
							name="email"
							type="email"
							placeholder="Ваш E-Mail"
							value={email}
							onChange={onEmailChange}
							onBlur={onEmailBlur}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Пароль"
							value={password}
							onChange={onPasswordChange}
							onBlur={onPasswordBlur}
						></input>
						<br></br>
						<input
							name="password"
							type="password"
							placeholder="Повторите пароль"
							value={passwordRepeat}
							onChange={onPasswordRepeatChange}
							onBlur={onPasswordRepeatBlur}
						></input>
						<br></br>
						<button type="submit">Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</>
	);
};

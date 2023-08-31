import { useState, useRef } from 'react';
import styles from './app.module.css';

export const MyForm = () => {
	let error = null;

	const [email, setEmail] = useState('');

	const [emailError, setEmailError] = useState(null);

	const [password, setPassword] = useState('');

	const [redeemPassword, setRedeemPassword] = useState('');

	const submitButtonRef = useRef(null);

	const onEmailChange = ({ target }) => {
		setEmail(target.value);

		let error = null;

		if (!/.+@.+\..+/i.test(target.value)) {
			error = `Какой то подозрительный E-mail. \n Проверьте ещё раз или попробуйте использовать другой \n (Возможно в адресе не хватает "@" и/или ".")`;
		} else if (target.value.length > 20) {
			error = 'Слишком длинный E-mail. Не должен быть больше 20 символов';
		}
		setEmailError(error);
	};

	const onEmailBlur = () => {
		if (email.length < 3) {
			setEmailError('Email должен быть больше 3 символов');
		}
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);

		if (target.value.length < 8) {
			error = 'Слишком короткий пароль. Должен быть не менее 8 символов';
		}
		setEmailError(error);
	};

	const onPasswordBlur = () => {
		if (password.length < 3) {
			error = 'Слишком короткий пароль. Должен быть не мене 8 символов';
		}
		setEmailError(error);
	};

	const onRedeemPasswordChange = ({ target }) => {
		setRedeemPassword(target.value);
		console.log('target.value', target.value);
		console.log('redeemPassword', redeemPassword);
		if (target.value.length < 8) {
			error = 'Слишком короткий пароль. Должен быть не менее 8 символов';
		}
		setEmailError(error);

		if (password === redeemPassword) {
			submitButtonRef.current.focus();
		}
	};

	const onRedeemPasswordBlur = () => {
		if (redeemPassword.length < 8) {
			error = 'Слишком короткий пароль. Должен быть не мене 8 символов';
		}
		setEmailError(error);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(email, password, redeemPassword);
	};

	return (
		<>
			<div className={styles.app}>
				<div>
					<form onSubmit={onSubmit}>
						<input
							name="email"
							type="email"
							placeholder="Ваш E-Mail"
							value={email}
							onChange={onEmailChange}
							onBlur={onEmailBlur}
						></input>
						<input
							name="password"
							type="password"
							placeholder="Пароль"
							value={password}
							onChange={onPasswordChange}
							onBlur={onPasswordBlur}
						></input>
						<input
							name="password"
							type="password"
							placeholder="Повторите пароль"
							value={redeemPassword}
							onChange={onRedeemPasswordChange}
							onBlur={onRedeemPasswordBlur}
						></input>

						<button
							ref={submitButtonRef}
							type="submit"
							disabled={emailError !== null}
						>
							Зарегистрироваться
						</button>
						{emailError && (
							<div className={styles.errorLabel}>{emailError}</div>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

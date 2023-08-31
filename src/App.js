import styles from './app.module.css';
import { MyForm } from './MyForm';

export const App = () => {
	return (
		<div className={styles.App}>
			<header className="App-header">
				<MyForm />
			</header>
		</div>
	);
};

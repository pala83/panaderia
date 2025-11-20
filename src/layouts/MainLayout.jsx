import { Nav } from '@components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
			+
		</>
	);
};

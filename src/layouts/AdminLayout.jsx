import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<Outlet />
		</main>
	);
};

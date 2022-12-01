import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './layout/Layout';
import Account from './pages/Account/Account';
// import Dashboard from './pages/Dashboard/Dashboard';
import TrendingData from './pages/TrendingData/TrendingData';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import { GlobalStyle } from './theme/globalStyle';
import { theme } from './theme/theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import CreateCurrency from './pages/CreateCurrency/CreateCurrency';
import DashboardLayout from './component/DashboardComponent/DashboardLayout';
import UserComplaints from './pages/UserComplaints/UserComplaints';
import ComplaintPage from './pages/ComplaintPage/ComplaintPage';

function App() {
	AOS.init({
		offset: 80,
	});

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path='/admin' element={<Layout />}>
						<Route index element={<DashboardLayout />} />
						<Route path='/admin/account' element={<Account />} />
						<Route path='/admin/trending' element={<TrendingData />} />

						<Route path='/admin/complaints' element={<UserComplaints />} />
						<Route path='/admin/complaints/:id' element={<ComplaintPage />} />
						<Route path='/admin/*' element={<Error />} />
					</Route>
					<Route path='/admin/login' element={<Login />} />
					<Route path='/admin/forgotpassword' element={<ForgotPassword />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

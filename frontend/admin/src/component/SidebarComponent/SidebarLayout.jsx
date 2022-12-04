import { useNavigate } from 'react-router-dom';
import SidebarNavigation from './nav/SidebarNavigation';
import {
	StyledSidebarTopBlock,
	StyledSidebarTopBlockLogo,
	StyledSidebarWrapper,
} from './SidebarLayout.styled';
import { ReactComponent as LogoAndTitle } from '../../assets/Logo.svg';
import Box from '@mui/material/Box';

function SidebarLayout() {
	const navigate = useNavigate();

	return (
		<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
			<StyledSidebarWrapper id='sidebar'>
				<StyledSidebarTopBlock>
					<StyledSidebarTopBlockLogo onClick={() => navigate('/admin')}>
						<Box sx={{ display: { xs: 'none', md: 'block', width: '70%' } }}>
							<LogoAndTitle width='120px' />
						</Box>
					</StyledSidebarTopBlockLogo>
				</StyledSidebarTopBlock>

				<SidebarNavigation />
			</StyledSidebarWrapper>
		</Box>
	);
}

export default SidebarLayout;

import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ComplianceSection } from './complianceStyle';
import { useTranslation } from 'react-i18next';

const ComplianceLayout = () => {
	const theme = useTheme();
	const darkMode = theme.palette.mode === 'dark';
	return (
		<Box
			display='flex'
			backgroundColor={darkMode ? '#131825' : ''}
			sx={{
				marginInline: 'auto',
				maxWidth: { xs: '90%', lg: '84%' },
			}}>
			<ComplianceSection>
				<div>
					<h1 style={{ marginBlock: '30px 20px' }}>StreetRate Compliance</h1>
					<p>
						Let’s inform you of our compliance and how it is important for your
						activity on StreetRate
					</p>
					<div className='section-body'>
						<p>
							Our long-standing record for our in-depth compliance monitoring
							and programs makes us a leader in delivering global currency
							exchange and payments services. Our compliance program is core to
							us as a team and very important for our esteemed users. At the
							core of our system, we use strict Know Your Customer(KYC) best
							practices, and a prudent account opening and monitoring process.
						</p>
						<p>
							We understand the importance and dutifully accept the
							responsibilities that come with working within the financial
							industry. Businesses can be targeted by groups looking to launder
							money or other illegal activities such as fraud, theft, or
							trafficking. Our entire team is committed to aggressively
							deterring criminals from involving the company in their practices.
						</p>
						<p>
							We employ annual independent reviews of our compliance training
							and programs for additional layers of security. StreetRate is
							dedicated to diligent compliance practices and developing
							industry-leading compliance tools.
						</p>
						<p>
							In lieu to this, we have obtained certificates and licenses that
							make a credible, legit and sure.
						</p>
						<p>
							All this is aimed at ensuring users are safe and comfortable on
							our platform.
						</p>
					</div>
				</div>
			</ComplianceSection>
		</Box>
	);
};

export default ComplianceLayout;

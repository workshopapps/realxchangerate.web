import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ComplianceSection } from './complianceStyle';
import { useTranslation } from 'react-i18next';

const ComplianceLayout = () => {
	const theme = useTheme();
	const darkMode = theme.palette.mode === 'dark';

	const { t } = useTranslation();
	return (
		<Box display='flex' backgroundColor={darkMode ? '#00050C' : ''}>
			<ComplianceSection>
				<div className=''>
					<h2>{t('compliance_heading_two')}</h2>
					<h1>{t('compliance_heading_one')}</h1>
					<p>{t('compliance_inform')}</p>
					<div className='section-body'>
						<p>{t('compliance_record')}</p>
						<p>{t('compliance_crime_prevent')}</p>
						<p>{t('compliance_review')}</p>
						<p>{t('compliance_cert')}</p>
						<p>{t('compliance_safety')}</p>
					</div>
				</div>
			</ComplianceSection>
		</Box>
	);
};

export default ComplianceLayout;

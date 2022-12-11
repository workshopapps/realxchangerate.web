// Export all translations

import navbar from './component/navbar';
import footer from './component/footer';
import hero from './component/hero';
import convert from './component/convert';
import home from './pages/home';
import cookies from './pages/cookies';

const resources = {};

const Translations = [
	// Pages
	...home,
	// Components
	...cookies,
	...navbar,
	...footer,
	...hero,
	...convert,
];

Translations.forEach((o) => {
	Object.keys(o).forEach((key) => {
		let langCode = String;
		let langKey = String;
		let langKeyVal = String;

		if (key !== 'key') {
			langCode = key;
			langKey = o.key;
			langKeyVal = o[key];

			if (resources[langCode] === undefined) {
				resources[langCode] = { translation: {} };
			}

			resources[langCode].translation[langKey] = langKeyVal;
		}
	});
});

export default resources;

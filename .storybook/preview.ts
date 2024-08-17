import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
	parameters: {
		actions: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		darkMode: {
			darkClass: 'dark',
			lightClass: 'light',
			stylePreview: true,
			dark: { ...themes.dark },
			light: { ...themes.normal },
		},
	},
};

export default preview;

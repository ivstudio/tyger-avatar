export default {
	testEnvironment: 'jsdom',

	// An array of file extensions your modules use
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

	// A list of paths to modules that run some code to configure or set up the testing environment before each test
	setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['<rootDir>/node_modules'],

	// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css)$': '<rootDir>/src/tests/styleMock.ts',
	},

	// Whether to use watchman for file crawling
	watchman: false,
};

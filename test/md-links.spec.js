const { validatePath, absolutePath, readAllDocs } = require('../index.js');

test('should be a file markdown', () => {
	expect(validatePath('README.md')).toBe(true);
});

test('should be a absolute path ', () => {
	expect(absolutePath('README.md')).toBe('/Users/xary/Documents/laboratoria/GDL002-md-links/README.md');
});

test('should read a file', () => {
	readAllDocs('prueba.md').then((result) => {
		expect(result).toBe('holis a todos');
	});
});

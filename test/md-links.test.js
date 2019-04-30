const { validatePath, absolutePath, readFileMd } = require('../src/Linksmd.js');

test('should be a markdown file', () => {
  expect(validatePath('README.md')).toBe(true);
});

test('should be an absolute path ', () => {
  expect(absolutePath('README.md')).toBe("C:\Users\Karla Val\Documents\GitHubKarla\GDL002-md-links\README.md");
});

test('should read a file', () => {
  readFileMd('firsttesting.md').then(result => {
    expect(result).toBe('¡que onditas!');
  });
});

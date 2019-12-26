const {
  validatePath,
  absolutePath,
  readFileMd,
  findlinks,
  ValidateLinks,
} = require('../src/mdLink.js');

test('should be a file markdown', () => {
  expect(validatePath('README.md')).toBe(true);
  expect(validatePath('README.txt')).toBe(false);
});

test('should be a absolute path ', () => {
  expect(absolutePath('README.md')).toBe(
    '/home/laboratoria-180/Escritorio/GDL002-md-links/README.md',
  );
});

test('should read a file', () => {
  readFileMd('prueba.md').then(result => {
    expect(result).toBe('holis a todos');
  });
});

test(' should extract links', () => {
  expect(findlinks('prueba2.md')).toBe(undefined);
});

const index = require('../index');
const mdLinks = require('../mdlinks');

const folder = '../README.md';

test('mdLinks is an object', () => {
  expect(typeof mdLinks).toBe('object');
});
test('should return false to a relative path', () => {
  expect(mdLinks.isAbsolute(folder)).toBeFalsy();
});
test('should return the file extension', () => {
  expect(mdLinks.checkExtName(folder)).toBe('.md');
});

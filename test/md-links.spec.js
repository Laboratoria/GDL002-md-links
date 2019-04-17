const index = require('../index');
const mdLinks = require('../mdlinks');

const folder = '../README.md';

it('mdLinks is an object', () => {
  expect(typeof mdLinks).toBe('object');
});
it('should return false to a relative path', () => {
  expect(mdLinks.isAbsolute(folder)).toBeFalsy();
});
it('shoul return the file extension', () => {
  expect(mdLinks.checkExtName(folder)).toBe('.md');
});

const mdLinks = require('../index.js');

/* Test for know if there is a mdFile*/
describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof (mdLinks.mdFile)).toBe('function');
  });
  it('should return a file with extension .md when user type', () => {
    expect(mdLinks.mdFile('readme.md')).toEqual(true);
  });
});

describe('markdown-link-extractor', () => {
  it('should return an empty array when no links are present', () => {
      let links = markdownLinkExtractor('No links here');
      expect(links).to.be.an('array');
      expect(links).to.have.length(0);
  });
});
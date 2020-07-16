import {
  slashSandwich,
  stripDoubleSlashes,
  stripLeadingSlash,
  stripTrailingSlash,
} from './slash-sandwich'

describe('`slashSandwich()`', () => {
  it('should glue parts together when no options are given', () => {
    expect(slashSandwich(['foo', 'bar'])).toEqual('/foo/bar/')
  })

  it('should glue parts together when given numbers', () => {
    expect(slashSandwich(['foo', 'bar', 1])).toEqual('/foo/bar/1/')
  })

  it('should omit a trailing slash when option trailingSlash:false was given', () => {
    expect(slashSandwich(['foo', 'bar'], { trailingSlash: false })).toEqual(
      '/foo/bar',
    )
  })

  it('should omit a leading slash when option leading:false was given', () => {
    expect(slashSandwich(['foo', 'bar'], { leadingSlash: false })).toEqual(
      'foo/bar/',
    )
  })

  it('should omit a leading slash string starts with http:// or https://', () => {
    expect(slashSandwich(['http://bar.com', 'foo/', '/bar'])).toEqual('http://bar.com/foo/bar/')
    expect(slashSandwich(['https://bar.com', 'foo/', '/bar'])).toEqual('https://bar.com/foo/bar/')
  })

  it('should glue parts together using exactly one slash when more slashes were given', () => {
    expect(slashSandwich(['foo', 'bar'], { leadingSlash: false })).toEqual(
      'foo/bar/',
    )
  })
})

describe('`stripDoubleSlashes()`', () => {
  it('should strip double slashes as expected', () => {
    expect(stripDoubleSlashes('foo//bar//zoo//moo')).toEqual(
      'foo/bar/zoo/moo',
    )

    expect(stripDoubleSlashes('//////foo//bar')).toEqual('/foo/bar')
  })

  it('should NOT strip double slashes following a colon', () => {
    expect(stripDoubleSlashes('http://www.domain.com//foo//bar/')).toEqual(
      'http://www.domain.com/foo/bar/',
    )
  })
})

describe('`stripTrailingSlash()`', () => {
  it('should strip the trailing slash from the given string', () => {
    expect(stripTrailingSlash('/foo/bar/')).toEqual('/foo/bar')
  })

  it('should NOT strip anything when no trailing slash was given', () => {
    expect(stripTrailingSlash('/foo/bar')).toEqual('/foo/bar')
  })
})

describe('`stripLeadingSlash()`', () => {
  it('should strip the trailing slash from the given string', () => {
    expect(stripLeadingSlash('/foo/bar/')).toEqual('foo/bar/')
  })

  it('should NOT strip anything when no trailing slash was given', () => {
    expect(stripLeadingSlash('foo/bar/')).toEqual('foo/bar/')
  })
})


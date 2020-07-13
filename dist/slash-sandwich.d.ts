/**
 * Glues all given parts together with exactly one /.
 * E.g. ['foo', '/zoo/bar/', '/moo'] will become: '/foo/zoo/bar/moo/'
 *
 * When called with trailingSlash=false, the string will become: '/foo/zoo/bar/moo'
 * When called with leadingSlash=false, the string will become: 'foo/zoo/bar/moo/'
 */
export declare const slashSandwich: (parts: string[], { leadingSlash, trailingSlash }?: {
    leadingSlash?: boolean | undefined;
    trailingSlash?: boolean | undefined;
}) => string;
/**
 * Strips all double slashes from a string. Except the one following a :/.
 * E.g. 'foo//bar' wil become 'foo/bar'. 'https://www.domain.com//foo' will become: 'https://www.domain.com//foo'
 */
export declare const stripDoubleSlashes: (path: string) => string;
/**
 * Strips the trailing slash from a string (when it exists).
 * E.g. '/foo/bar/' becomes '/foo/bar', 'foo' will stay 'foo'
 */
export declare const stripTrailingSlash: (path: string) => string;
/**
 * Strips the leading slash from a string (when it exists).
 * E.g. '/foo/bar/' becomes 'foo/bar/', 'foo' will stay 'foo'
 */
export declare const stripLeadingSlash: (path: string) => string;
export default slashSandwich;

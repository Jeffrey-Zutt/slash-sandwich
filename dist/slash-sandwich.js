"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripLeadingSlash = exports.stripTrailingSlash = exports.stripDoubleSlashes = exports.slashSandwich = void 0;
/**
 * Glues all given parts together with exactly one /.
 * E.g. ['foo', '/zoo/bar/', '/moo'] will become: '/foo/zoo/bar/moo/'
 *
 * When called with trailingSlash=false, the string will become: '/foo/zoo/bar/moo'
 * When called with leadingSlash=false, the string will become: 'foo/zoo/bar/moo/'
 */
exports.slashSandwich = function (parts, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.leadingSlash, leadingSlash = _c === void 0 ? true : _c, _d = _b.trailingSlash, trailingSlash = _d === void 0 ? true : _d;
    var sandwich = exports.stripDoubleSlashes("/" + parts.filter(function (_) { return _ !== null || _ !== undefined; }).join('/') + "/");
    if (!leadingSlash || sandwich.match(/^\/https?:\/\//)) {
        sandwich = exports.stripLeadingSlash(sandwich);
    }
    if (!trailingSlash) {
        sandwich = exports.stripTrailingSlash(sandwich);
    }
    return sandwich;
};
/**
 * Strips all double slashes from a string. Except the one following a :/.
 * E.g. 'foo//bar' wil become 'foo/bar'. 'https://www.domain.com//foo' will become: 'https://www.domain.com//foo'
 */
exports.stripDoubleSlashes = function (path) {
    return path.replace(/^\/+/, '/').replace(/([^:]\/)\/+/g, '$1');
};
/**
 * Strips the trailing slash from a string (when it exists).
 * E.g. '/foo/bar/' becomes '/foo/bar', 'foo' will stay 'foo'
 */
exports.stripTrailingSlash = function (path) {
    return path.replace(/\/$/, '');
};
/**
 * Strips the leading slash from a string (when it exists).
 * E.g. '/foo/bar/' becomes 'foo/bar/', 'foo' will stay 'foo'
 */
exports.stripLeadingSlash = function (path) {
    return path.replace(/^\//, '');
};
exports.default = exports.slashSandwich;

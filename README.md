# Slash sandwich

Glues parts together divided by a single slash.

## Installation:
```
npm i slash-sandwich
```

## Examples:

```
    import slashSandwich from "slash-sandwich"

    slashSandwich(["foo", "bar"])                                    // Result: "/foo/bar/"
    slashSandwich(["foo", "bar"], { trailingSlash: false })          // Result: "/foo/bar"
    slashSandwich(["foo", "bar"], { leadingSlash: false })           // Result: "foo/bar/"

    // `null` and `undefined` are stripped    
    slashSandwitch(["foo", undefined "bar"])                         // Result: "/foo/bar/"

    // leadingSlash is automatically stripped 
    // when string starts with "http://" or "https://"
    slashSandwitch(["http://www.domain.com/", "/bar"])               // Result: "http://www.domain.com/bar/"   
```

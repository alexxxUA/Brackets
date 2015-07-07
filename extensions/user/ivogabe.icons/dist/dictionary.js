define(["require", "exports"], function (require, exports) {
    function findInDictionary(dictionary, fileName) {
        var matches = [];
        var match = dictionary.findFullFileName(fileName);
        if (match !== undefined)
            return [match];
        var dotIndex;
        var dotIndexNext = fileName.indexOf('.');
        do {
            dotIndex = dotIndexNext;
            dotIndexNext = fileName.indexOf('.', dotIndex + 1);
            match = dictionary.findFileName(fileName.substring(0, dotIndex), fileName.substring(dotIndex + 1));
            if (match !== undefined)
                matches = [match];
            match = dictionary.findExtension(fileName.substring(dotIndex + 1));
            if (match !== undefined) {
                matches.push(match);
                return matches;
            }
            if (dotIndexNext === -1) {
                break;
            }
            var prefix = fileName.substring(dotIndex + 1, dotIndexNext);
            match = dictionary.findExtensionPrefix(prefix);
            if (match === undefined) {
                // Also allow `js` in `foo.js.php` as a prefix.
                match = dictionary.findExtension(prefix);
            }
            if (match === undefined) {
                // We could have a filename like `foo.php.bar.js`, where `php` and `js` are known extensions.
                // We should only match `js` here, so we need to forget `php`.
                matches = [];
            }
            else {
                matches.push(match);
            }
        } while (dotIndexNext !== -1);
        matches.push(dictionary.getEmptyItem(fileName));
        return matches;
    }
    exports.findInDictionary = findInDictionary;
});

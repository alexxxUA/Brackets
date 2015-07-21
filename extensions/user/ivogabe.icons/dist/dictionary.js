define(["require", "exports"], function (require, exports) {
    function findInDictionary(dictionary, fileName, secondMatch, compare) {
        var matches = [];
        var match = dictionary.findFullFileName(fileName);
        if (match !== undefined)
            return [match];
        var dotIndex;
        var dotIndexNext = fileName.lastIndexOf('.');
        var extension;
        var prefix;
        var add = function () {
            if (match !== undefined && !compare(matches[matches.length - 1], match)) {
                matches.push(match);
                if (secondMatch && matches.length === 1)
                    return false;
                return true;
            }
            return false;
        };
        do {
            dotIndex = dotIndexNext;
            dotIndexNext = fileName.lastIndexOf('.', dotIndex - 1);
            extension = fileName.substring(dotIndex + 1);
            prefix = fileName.substring(dotIndexNext + 1, dotIndex);
            if (secondMatch) {
                match = dictionary.findExtension(extension);
                if (add())
                    return matches;
                match = dictionary.findFileName(prefix, extension);
                if (add())
                    return matches;
            }
            else {
                match = dictionary.findFileName(prefix, extension);
                if (add())
                    return matches;
                match = dictionary.findExtension(extension);
                if (add())
                    return matches;
            }
            match = dictionary.findExtensionPrefix(prefix);
            if (add())
                return matches;
            match = dictionary.findExtension(prefix);
            if (add())
                return matches;
            // If the prefix matches nothing then as long as we have found something already
            // we can return to avoid filenames like `foo.php.bar.js`, where `php` and `js`
            // are known extensions. We should only match `js` here, so we need to forget `php`.
            if (matches.length > 0) {
                return matches;
            }
        } while (dotIndexNext !== -1);
        if (matches.length === 0) {
            matches.push(dictionary.getEmptyItem(fileName));
        }
        return matches;
    }
    exports.findInDictionary = findInDictionary;
});

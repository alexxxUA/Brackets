define(["require", "exports", 'module', './icon', './dictionary', './icon-dictionary'], function (require, exports, module, icon_1, dictionary_1, icon_dictionary_1) {
    /// <reference path="definitions.d.ts" />
    var icons = new icon_dictionary_1.IconDictionary();
    var PreferencesManager = brackets.getModule('preferences/PreferencesManager');
    var prefs = PreferencesManager.getExtensionPrefs('brackets-icons');
    prefs.definePreference('icons', 'object', {});
    prefs.definePreference('iconset', 'string', 'ionicons');
    // Change iconset menu options
    var CommandManager = brackets.getModule('command/CommandManager');
    var Menus = brackets.getModule('command/Menus');
    var commandThemeIonId = 'icons.iconset-ionicons';
    var commandThemeDevId = 'icons.iconset-devicons';
    var commandThemeIon = CommandManager.register('Ionicons', commandThemeIonId, function () { prefs.set('iconset', 'ionicons'); });
    var commandThemeDev = CommandManager.register('Devicons', commandThemeDevId, function () { prefs.set('iconset', 'devicons'); });
    var menuView = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
    menuView.addMenuDivider();
    menuView.addMenuItem(commandThemeIonId);
    menuView.addMenuItem(commandThemeDevId);
    function loadPreferences() {
        icons.user.settings = prefs.get('icons');
        icons.iconSet = icon_1.getIconSet(prefs.get('iconset'));
        commandThemeIon.setChecked(icons.iconSet === icon_1.IconSet.IconIon);
        commandThemeDev.setChecked(icons.iconSet === icon_1.IconSet.IconDev);
    }
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');
    var FileTreeView = brackets.getModule('project/FileTreeView');
    var WorkingSetView = brackets.getModule('project/WorkingSetView');
    var ProjectManager = brackets.getModule('project/ProjectManager');
    // Before Brackets 1.1.0, icons had a hack that the margin was set to -10000px, which was corrected by the padding.
    // This was removed in Brackets 1.1.0
    var version = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(brackets.metadata.version);
    if ((version[1] === '0') || (version[1] === '1' && version[2] === '0')) {
        $('body').addClass('icons-margin-correction');
    }
    ExtensionUtils.loadStyleSheet(module, '../styles/style.css');
    ExtensionUtils.loadStyleSheet(module, '../styles/ionicons.min.css');
    ExtensionUtils.loadStyleSheet(module, '../styles/font-awesome.min.css');
    ExtensionUtils.loadStyleSheet(module, '../styles/devicons.min.css');
    loadPreferences();
    var provider = function (entry) {
        if (!entry.isFile) {
            return;
        }
        var data = dictionary_1.findInDictionary(icons, entry.name);
        var mainIcon = data[data.length - 1];
        var secondIcon = data[data.length - 2];
        var $icon = $('<ins>');
        $icon.addClass('file-icon-box');
        var $main = $('<div>');
        $main.addClass(mainIcon.icon);
        $main.addClass('file-icon file-icon-main file-tree-view-icon');
        $main.css({
            color: mainIcon.color,
            fontSize: (mainIcon.size || 16) + 'px'
        });
        $icon.append($main);
        if (secondIcon !== undefined) {
            var $second = $('<div>');
            $second.addClass(secondIcon.icon);
            $second.addClass('file-icon file-icon-secondary file-tree-view-icon');
            $second.css({
                color: secondIcon.color,
                fontSize: (secondIcon.size || 16) * 3 / 4 + 'px'
            });
            $icon.append($second);
        }
        return $icon;
    };
    WorkingSetView.addIconProvider(provider);
    FileTreeView.addIconProvider(provider);
    prefs.on('change', function () {
        loadPreferences();
        ProjectManager.rerenderTree();
        WorkingSetView.refresh(true);
    });
});

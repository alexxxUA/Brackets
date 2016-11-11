/*jshint maxlen:false */

define({
    ACTION:                             "Aktion",
    ADD_ENDLINE_TO_THE_END_OF_FILE:     "Zeilenende am Ende der Datei anfügen",
    ADD_TO_GITIGNORE:                   "Zu .gitignore hinzufügen",
    ADVANCED_FEATURES_WARNING:          "Diese Features können zum Verlust von bereits getätigten Commits führen und werden daher nicht für normale Nutzer empfohlen. Sei vorsichtig!",
    AMEND_COMMIT:                       "An den letzten Commit anhägen",
    AMEND_COMMIT_FORBIDDEN:             "Die Änderungen können nicht an den letzten Commit angehängt werden, da es keine noch nicht versendeten Commits gibt",
    _ANOTHER_BRANCH:                    "einem anderen Branch",
    AUTHOR:                             "Autor",
    AUTHORS_OF:                         "Autoren von",
    AVATAR_TYPE:                        "Avatar-Art",
    BASH_NOT_AVAILABLE:                 "Bash ist nicht verfügbar oder nicht richtig konfiguriert",
    BASIC_CONFIGURATION:                "Grundlegende Konfiguration",
    BLACK_WHITE_AVATAR:                 "Schwarz-weißer Avatar",
    BRACKETS_GIT_ERROR:                 "Ein Fehler ist in Brackets Git aufgetreten\u2026",
    BRANCH_NAME:                        "Branchname",
    BUTTON_CANCEL:                      "Abbrechen",
    BUTTON_CHANGELOG:                   "Changelog zeigen",
    BUTTON_CHECKOUT_COMMIT:             "Auschecken",
    BUTTON_CLONE:                       "Klonen",
    BUTTON_CLOSE:                       "Schließen",
    BUTTON_COMMIT:                      "Committen",
    BUTTON_DEFAULTS:                    "Standard wiederherstellen",
    BUTTON_FIND_CONFLICTS:              "Konflikte finden\u2026",
    BUTTON_INIT:                        "Initialisieren",
    BUTTON_MERGE_ABORT:                 "Merge abbrechen",
    BUTTON_OK:                          "Okay",
    BUTTON_REBASE_ABORT:                "Abbrechen",
    BUTTON_REBASE_CONTINUE:             "Rebase fortführen",
    BUTTON_REBASE_SKIP:                 "Auslassen",
    BUTTON_REPORT:                      "Melden",
    BUTTON_RESET:                       "Index umsetzen (git reset)",
    BUTTON_RESET_HARD:                  "Auf diesen Commit umsetzen und alle nachfolgenden Änderungen verwerfen. (git reset --hard)",
    BUTTON_RESET_MIXED:                 "Auf diesen Commit umsetzen und nachfolgende Änderungen nicht zum Commit vormerken. (git reset --mixed)",
    BUTTON_RESET_SOFT:                  "Auf diesen Commit umsetzen und nachfolgende Änderungen zum Commit vormerken. (git reset --soft)",
    BUTTON_SAVE:                        "Speichern",
    CANCEL:                             "Abbrechen",
    CHANGELOG:                          "Changelog",
    CHANGE_USER_EMAIL:                  "Git-E-Mail-Adresse ändern",
    CHANGE_USER_NAME:                   "Git-Nutzername ändern",
    CHECK_GIT_SETTINGS:                 "Git konnte nicht ausgeführt werden - überprüfe die Git-Einstellungen und starte Brackets neu",
    CLEAN_FILE_END:                     "Datei gesäubert",
    CLEAN_FILE_START:                   "Datei wird gesäubert",
    CLEANING_WHITESPACE_PROGRESS:       "Whitespace wird von den Dateien entfernt\u2026",
    CLEAR_WHITESPACE_ON_FILE_SAVE:      "Whitespace beim Speichern entfernen",
    CLONE_REPOSITORY:                   "Repository klonen",
    CODE_INSPECTION_PROBLEMS:           "Code Inspection-Probleme:",
    COLLAPSE_ALL:                       "Alle einklappen",
    COLORED_AVATAR:                     "Farbiger Avatar",
    COMMAND_ARGUMENTS:                  "Kommandozeilen-Argumente",
    COMMIT:                             "Committen",
    COMMIT_ALL_SHORTCUT:                "Alle Dateien committen",
    COMMIT_CURRENT_SHORTCUT:            "Aktuelle Datei committen",
    COMMIT_MESSAGE_PLACEHOLDER:         "Commit-Beschreibung hier eingeben\u2026",
    CREATE_NEW_BRANCH:                  "Neuen Branch erstellen\u2026",
    CREATE_NEW_GITFTP_SCOPE:            "Neues Git-FTP-Remote-Repository hinzufügen\u2026",
    CREATE_NEW_REMOTE:                  "Neues Remote-Repository hinzufügen\u2026",
    CURRENT_TRACKING_BRANCH:            "Aktueller Remote-Tracking-Branch",
    _CURRENT_TRACKING_BRANCH:           "dem aktuellen Remote-Tracking-Branch",
    CUSTOM_TERMINAL_COMMAND:            "Benutzerdefinierter Terminalbefehl (Beispiel: gnome-terminal oder kompletter Pfad zur ausführbaren Datei)",
    CUSTOM_TERMINAL_COMMAND_HINT:       "Beispiele für Argumente: --window --working-directory=$1<br>$1 wird in den Argumenten durch den Pfad des aktuellen Projektes ersetzt.",
    DATE_FORMAT:                        "DD.MM.YYYY HH:mm:ss",
    DATE_MODE_0:                        "Lokales Datumsformat",
    DATE_MODE_1:                        "Relative Zeitangabe",
    DATE_MODE_2:                        "Intelligenter Modus (relativ/formatiert)",
    DATE_MODE_3:                        "Eigenes Datumsformat",
    DATE_MODE_4:                        "Unverändertes Git-Datum",
    DEBUG:                              "Debug",
    DEBUG_MODE_SETTING:                 "DEBUG-Modus &mdash; Aktiviere diesen Modus nur, wenn du ein Problem mit der Erweiterung debuggen musst. Alle Interaktionen mit Git werden in der Brackets-Konsole angezeigt!",
    DEFAULT_GIT_TIMEOUT:                "Standard-Timeout für Git-Operationen (in Sekunden)",
    DELETE_FILE:                        "Datei löschen",
    DELETE_LOCAL_BRANCH:                "Lokalen Branch löschen",
    DELETE_LOCAL_BRANCH_NAME:           "Bist du dir sicher, dass du den lokalen Branch \"{0}\" löschen willst?",
    DELETE_REMOTE:                      "Remote-Repository entfernen",
    DELETE_REMOTE_NAME:                 "Bist du dir sicher, dass du das Remote-Repository \"{0}\" entfernen willst?",
    DELETE_SCOPE:                       "Git-FTP-Repository entfernen",
    DELETE_SCOPE_NAME:                  "Bist du dir sicher, dass du das Git-FTP-Repository \"{0}\" entfernen willst?",
    DIALOG_CHECKOUT:                    "Wenn du einen Commit auscheckst, wird das Repository in einen Zustand mit losgelöstem HEAD gebracht. Du kannst vorerst keine Commits erstellen, bis du einen Branch aus diesem Zustand heraus erstellst.",
    DIALOG_PULL_TITLE:                  "'Pull' vom Remote-Repository",
    DIALOG_PUSH_TITLE:                  "An Remote-Repository versenden",
    DIALOG_RESET_HARD:                  "Alle Änderungen nach diesem Commit gehen verloren!",
    DIALOG_RESET_MIXED:                 "Änderungen nach diesem Commit werden nicht zum Commit vorgemerkt.",
    DIALOG_RESET_SOFT:                  "Änderungen nach diesem Commit werden zum Commit vorgemerkt.",
    DIFF:                               "Unterschiede",
    DIFFTOOL:                           "Externes Diff-Programm",
    DIFF_FAILED_SEE_FILES:              "'git diff' konnte keine Unterschiede liefern. Dies ist die Liste der zum Commit vorgemerkten Dateien:",
    DIFF_TOO_LONG:                      "Zu viele Unterschiede zum Anzeigen",
    ENABLE_ADVANCED_FEATURES:           "Erweiterte Features aktivieren",
    ENABLE_GERRIT_PUSH_REF:             "Versenden mit Gerrit-kompatibler Referenz aktivieren",
    ENTER_GITFTP_SCOPE_NAME:            "Namen des neuen Git-FTP-Remote-Repositories eingeben:",
    ENTER_GITFTP_SCOPE_URL:             "FTP-URL des neuen Git-FTP-Remote-Repositories inklusive Nutzername und Passwort eingeben:",
    ENTER_NEW_USER_EMAIL:               "E-Mail-Adresse eingeben:",
    ENTER_NEW_USER_NAME:                "Nutzername eingeben:",
    ENTER_PASSWORD:                     "Passwort eingeben:",
    ENTER_REMOTE_GIT_URL:               "Git-URL des zu klonenden Repositories eingeben:",
    ENTER_REMOTE_NAME:                  "Name des neuen Remote-Repositories eingeben:",
    ENTER_REMOTE_URL:                   "URL des neuen Remote-Repositories eingeben:",
    ENTER_USERNAME:                     "Nutzername eingeben:",
    ERROR_CONNECT_NODEJS:               "Fehler beim Verbindungsaufbau zu Node.js. Falls du die Erweiterung gerade aktualisiert hast, schließe bitte alle offenenen Brackets-Fenster und starte Brackets neu. Wenn auch ein Neustart nicht hilt, probier andere installierte Erweiterungen zu entfernen, da das Problem wahrscheinlich durch eine andere Erweiterung verursacht wird.",
    ERROR_NOTHING_SELECTED:             "Es wurde nichts ausgewählt!",
    ERROR_SAVE_FIRST:                   "Speicher zunächst das Dokument!",
    ERROR_TERMINAL_NOT_FOUND:           "Es konnte kein Terminal auf deinem Betriebssystem gefunden werden; in den Einstellungen kann ein benutzerdefinierter Terminalbefehl angegeben werden",
    EXPAND_ALL:                         "Alle ausklappen",
    EXTENDED_COMMIT_MESSAGE:            "ERWEITERT",
    EXTENSION_WAS_UPDATED_TITLE:        "Die Erweiterung wurde auf Version {0} aktualisiert",
    FEATURES:                           "Features",
    FILE_ADDED:                         "Neue Datei",
    FILE_COPIED:                        "Kopiert",
    FILE_DELETED:                       "Gelöscht",
    FILE_IGNORED:                       "Ignoriert",
    FILE_MODIFIED:                      "Geändert",
    FILE_RENAMED:                       "Umbenannt",
    FILE_STAGED:                        "Zum Commit vorgemerkt",
    FILE_UNMERGED:                      "Nicht zusammengeführt",
    FILE_UNMODIFIED:                    "Ungeändert",
    FILE_UNTRACKED:                     "Unversioniert",
    FOR_MAC_LINUX_USERS:                "Für Mac-/Linux-Nutzer",
    FOR_WINDOWS_USERS:                  "Für Windows-Nutzer",
    GETTING_STAGED_DIFF_PROGRESS:       "Unterschied der zum Commit vorgemerkten Dateien wird ermittelt\u2026",
    GITFTP_PUSH_RESPONSE:               "Antwort beim Versenden per Git-FTP",
    GITFTP_SCOPES:                      "Git-FTP-Remote-Repositories",
    GIT_COMMIT:                         "Git-Commit\u2026",
    GIT_CONFIGURATION:                  "Git-Konfiguration",
    GIT_DIFF:                           "Git-Unterschied &mdash;",
    GIT_PULL_RESPONSE:                  "Antwort bei 'git pull'",
    GIT_PUSH_RESPONSE:                  "Antwort beim Versenden",
    GIT_REMOTES:                        "Git-Remote-Repositories",
    GIT_SETTINGS:                       "Git-Einstellungen\u2026",
    GOTO_NEXT_GIT_CHANGE:               "Zur nächsten Änderung springen",
    GOTO_PREVIOUS_GIT_CHANGE:           "Zur vorherigen Änderung springen",
    GUTTER_CLICK_DETAILS:               "Für mehr Details klicken",
    HIDE_UNTRACKED:                     "Unversionierte ausblenden",
    HISTORY:                            "Verlauf",
    HISTORY_COMMIT_BY:                  "von",
    IDENTICON:                          "Identicon (www.gravatar.com)",
    INIT_GITFTP_SCOPE:                  "Git-FTP-Remote-Repository initialisieren",
    INIT_GITFTP_SCOPE_NAME:             "Git-FTP-Remote-Repository \"{0}\" initialisieren?",
    LAUNCH_BASH_SHORTCUT:               "Bash/Terminal öffnen",
    LINES:                              "Zeilen",
    _LINES:                             "Zeilen",
    LIST_MODIFIED_FILES:                "Geänderte Dateien",
    LOADING:                            "Lädt\u2026",
    MARK_MODIFIED_FILES_IN_TREE:        "Veränderte Dateien im Dateibaum markieren",
    MERGE_BRANCH:                       "Branch mergen",
    MERGE_MESSAGE:                      "Merge-Commit-Beschreibung",
    MERGE_RESULT:                       "Merge-Ergebnis",
    MORE_INFO:                          "Mehr Informationen\u2026",
    NORMALIZE_LINE_ENDINGS:             "Zeilenenden normalisieren (zu \\n)",
    NOTHING_TO_COMMIT:                  "Nichts zum committen, Arbeitsverzeichnis sauber.",
    OK:                                 "OK",
    OPERATION_IN_PROGRESS_TITLE:        "Git-Operation im Gange\u2026",
    ORIGIN_BRANCH:                      "Ursprungs-Branch",
    PANEL_COMMAND:                      "Git-Panel anzeigen",
    PANEL_SHORTCUT:                     "Panel ein-/ausblenden",
    PASSWORD:                           "Passwort",
    PASSWORDS:                          "Passwörter",
    PATH_TO_GIT_EXECUTABLE:             "Pfad zu Git",
    PATH_TO_GIT_MSYSGIT:                "Pfad zum msysgit-Ordner",
    PICTURE:                            "Gravatar (www.gravatar.com)",
    PULL_AVOID_MERGING:                 "Manuelles Mergen vermeiden",
    PULL_DEFAULT:                       "Normales Mergen",
    PULL_FROM:                          "'pull' von",
    PULL_MERGE_NOCOMMIT:                "Ohne Commit mergen",
    PULL_REBASE:                        "Rebase nutzen",
    PULL_RESET:                         "Softes Umsetzen (git reset --soft) nutzen",
    PULL_SHORTCUT:                      "'pull' vom Remote-Repository",
    PUSH_DEFAULT:                       "Normales Versenden",
    PUSH_DELETE_BRANCH:                 "Branch im Remote-Repository löschen",
    PUSH_SEND_TAGS:                     "Tags senden",
    PUSH_FORCED:                        "Erzwungenes Versenden",
    PUSH_SHORTCUT:                      "An Remote-Repository versenden",
    PUSH_TO:                            "Versenden an",
    Q_DELETE_FILE:                      "Bist du dir sicher, dass du die Datei <span class='dialog-filename'>{0}</span> löschen willst?",
    Q_RESTART_BRACKETS:                 "Soll Brackets jetzt neu gestartet werden, damit die Änderungen wirksam werden?",
    Q_UNDO_CHANGES:                     "Änderungen an Datei <span class='dialog-filename'>{0}</span> verwerfen?",
    REBASE_RESULT:                      "Rebase-Ergebnis",
    REFRESH_GIT:                        "Git aktualisieren",
    REMOVE_BOM:                         "BOM von Dateien entfernen",
    REMOVE_FROM_GITIGNORE:              "Von .gitignore entfernen",
    REQ_INTERNET:                       "Internetverbindung benötigt",
    RESET_LOCAL_REPO:                   "Alle Änderungen seit letztem Commit verwerfen",
    RESET_LOCAL_REPO_CONFIRM:           "Bist du dir sicher, dass du alle Änderungen seit dem letzten Commit verwerfen willst? Diese Aktion kann nicht rückgängig gemacht werden.",
    RESTART:                            "Neu starten",
    SAVE_CREDENTIALS_HELP:              "Du musst Nutzername und Passwort nicht angeben, wenn die Zugangsdaten anderweitig verwaltet werden. Nutze diese Felder nur, wenn der Vorgang ständig mit einem Timeout endet.",
    SAVE_CREDENTIALS_IN_URL:            "Zugangsdaten für die Remote-URL speichern (im Klartext)",
    SAVE_PASSWORD_QUESTION:             "Nutzername/Passwort speichern?",
    SET_ORIGIN_URL:                     "Ursprungs-URL setzen",
    SET_THIS_BRANCH_AS_TRACKING:        "Diesen Branch als neuen Tracking-Branch setzen",
    SHORTCUTS:                          "Tastenkürzel",
    SHORTCUTS_HINT:                     "Trenne Tasten mit Bindestrichen, wie hier: Ctrl-Alt-G<br>Du kannst die englischen Begriffe Ctrl (-> Strg), Cmd (Mac -> Command), Alt und Shift (-> Umschalt) nutzen.",
    SHOWN_DATE_FORMAT:                  "Anzeigeformat eines Commitdatums im Verlauf",
    SHOW_BASH_TERMINAL_BUTTON:          "Bash-/Terminal-Button im Panel anzeigen",
    SHOW_TERMINAL_IN_TOOLBAR:           "Terminal-Icon in der Toolbar anzeigen",
    SHOW_UNTRACKED:                     "Unversionierte anzeigen",
    STRIP_WHITESPACE_FROM_COMMITS:      "Anhängenden Whitespace von Commits entfernen",
    TARGET_BRANCH:                      "Zielbranch",
    TERMINAL_DISABLED:                  "Bash/Terminal ist nicht verfügbar, da keine passende ausführbare Datei gefunden werden konnte",
    TITLE_CHECKOUT:                     "Willst du diesen Commit wirklich auschecken?",
    TITLE_RESET:                        "Willst du wirklich umsetzen? (git reset)",
    TOOLTIP_CHECKOUT_COMMIT:            "Einen bestimmten Commit auschecken",
    TOOLTIP_CLONE:                      "Existierendes Repository klonen",
    TOOLTIP_CLOSE_NOT_MODIFIED:         "In Git unveränderte Dateien schließen [Umschalt+Klick, um veränderte Dateien wieder zu öffnen]",
    TOOLTIP_COMMIT:                     "Ausgewählte Dateien committen",
    TOOLTIP_FETCH:                      "Alle Remote-Repositories anfordern und Zähler aktualisieren",
    TOOLTIP_FIND_CONFLICTS:             "Startet eine Suche nach Merge-/Rebase-Konflikten in diesem Projekt",
    TOOLTIP_GITPUSH:                    "An Git-FTP versenden",
    TOOLTIP_HIDE_FILE_HISTORY:          "Dateiverlauf verstecken",
    TOOLTIP_HIDE_HISTORY:               "Verlauf verstecken",
    TOOLTIP_INIT:                       "Repository initialisieren",
    TOOLTIP_MERGE_ABORT:                "Den Merge-Vorgang abbrechen und HEAD auf den letzten lokalen Commit umsetzen",
    TOOLTIP_MORE:                       "Mehr Aktionen\u2026",
    TOOLTIP_OPEN_BASH:                  "Bash/Terminal öffnen",
    TOOLTIP_PICK_REMOTE:                "Bevorzugtes Remote-Repository wählen",
    TOOLTIP_PULL:                       "'git pull'",
    TOOLTIP_PUSH:                       "'git push'",
    TOOLTIP_REBASE_ABORT:               "Den Rebase-Vorgang abbrechen und HEAD auf den vorherigen Branch umsetzen",
    TOOLTIP_REBASE_CONTINUE:            "Den Rebase-Vorgang nach dem Lösen eines Konflikts fortsetzen",
    TOOLTIP_REBASE_SKIP:                "Den Rebase-Vorgang fortsetzen, indem der aktuelle Patch übersprungen wird",
    TOOLTIP_REFRESH_PANEL:              "Panel aktualisieren",
    TOOLTIP_SHOW_FILE_HISTORY:          "Dateiverlauf zeigen",
    TOOLTIP_SHOW_HISTORY:               "Verlauf zeigen",
    UNDO_CHANGES:                       "Änderungen verwerfen",
    UNDO_LAST_LOCAL_COMMIT:             "Letzten lokalen (unveröffentlichten) Commit rückgängig machen",
    URL:                                "URL",
    USERNAME:                           "Nutzername",
    USER_ABORTED:                       "Vom Nutzer abgebrochen!",
    USER_DATE_FORMAT:                   "Eigenes Datumsformat (<a href='http://momentjs.com/docs/#/displaying/format/'>Syntax</a>)",
    USE_CODE_INSPECTION:                "Code Inspection nutzen",
    USE_GITFTP:                         "Git-FTP nutzen",
    USE_GIT_GUTTER:                     "Git-Markierungen am Rand anzeigen",
    USE_NOFF:                           "Einen Merge-Commit auch erstellen, wenn vorgespult werden kann (--no-ff)",
    USE_REBASE:                         "Rebase nutzen",
    USE_VERBOSE_DIFF:                   "Detailreiche Ausgabe für Unterschiede nutzen",
    USE_DIFFTOOL:                       "Ein externes Diff-Programm für Unterschiede nutzen",
    USING_GIT_VERSION:                  "Git-Version",
    VIEW_AUTHORS_FILE:                  "Autoren der Datei anzeigen",
    VIEW_AUTHORS_SELECTION:             "Autoren der Auswahl anzeigen",
    VIEW_THIS_FILE:                     "Diese Datei anzeigen",
    TAG_NAME_PLACEHOLDER:               "Tag-Name hier eingeben\u2026",
    TAG_NAME:                           "Tag"
});

/* Last translated for 165b5112607be4badb449ae67ee4b13f75468a14 */

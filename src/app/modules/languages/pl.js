function EnglishProvider($translateProvider) {
    'ngInject'

    $translateProvider.translations('en', {

        // HEADER COMPONENT
        APP_NAME_SUB: 'Bezpieczny interfejs łączący z platformą NEM',
        HEADER_LOGIN_BUTTON: 'Logowanie',
        HEADER_SIGNUP_BUTTON: 'Rejestracja',
        HEADER_LANG_TITLE: 'Język',
        HEADER_LANG_SELECT: 'Wybierz język',
        HEADER_NODE_BLOCK_HEIGHT: 'Bieżący blok',
        HEADER_NODE_CURRENT_NODE: 'Bieżący węzeł',
        HEARDER_NODE_LIST: 'Lista węzłów',
        HEADER_NODE_SELECT: 'Wybierz węzeł',
        HEADER_NODE_CUSTOM: 'Własny węzeł',
        HEADER_NODE_CONNECT: 'Połącz',
        HEADER_NODE_CUSTOM_INFO: 'IP węzła lub domena',
        HEADER_PURGE: 'Wyczyść',
        HEADER_PURGE_MESSAGE: 'Proszę potwierdzić czyszczenie pamięci przeglądarki. Po wciśnięciu "OK" wszystkie portfele w lokalnej pamięci zostaną usunięte i nie będzie można ich odzyskać. Zgadzasz się z tym, że posiadasz kopie zapasowe portfeli i że fundusze są zabezpieczone.',
        
        // FOOTER COMPONENT
        FOOTER_POWERED_BY: 'Zasilany technologią NEM.',
        FOOTER_VERSION: 'Wersja',

        // DASHBOARD MODULE
        DASHBOARD_TITLE: 'Dashboard',
        DASHBOARD_UNCONFIRMED: 'Niepotwierdzone',
        DASHBOARD_CONFIRMED: 'Potwierdzone',
        DASHBOARD_HARVEST_INCOME_TITLE: 'Przychody z ostatnich 25 zebranych bloków',
        DASHBOARD_HARVEST_INCOME_NOTE: 'Tylko bloki z opłatą powyżej 0',
        DASHBOARD_HARVEST_INCOME_MESSAGE: 'Nie znaleziono opłat w ostatnich 25 blokach',
        DASHBOARD_NEWS_TITLE: 'Najnowsze informacje',
        DASHBOARD_HARVESTED_BLOCKS_TITLE: 'Zebrane bloki',
        DASHBOARD_HARVESTED_BLOCKS_TH: 'Uzyskane opłaty',
        DASHBOARD_MARKET_INFO_TITLE: 'Informacje o rynku',
        DASHBOARD_MARKET_INFO_CAP: 'Kapitalizacja',
        DASHBOARD_MARKET_INFO_PRICE: 'Cena',
        DASHBOARD_MARKET_INFO_VOLUME: 'Wolumen dobowy',
        DASHBOARD_MARKET_INFO_CHANGES: 'Zmiana w procentach',
        DASHBOARD_MARKET_INFO_CHANGES_1H: '1h',
        DASHBOARD_MARKET_INFO_CHANGES_24H: '24h',
        DASHBOARD_MARKET_INFO_CHANGES_7D: '7d',
        DASHBOARD_MARKET_INFO_NOTE: '<a href="http://coinmarketcap.com/" target="_blank">CoinMarketCap</a> dane aktulizowane co 5 minut',

        // GENERAL
        GENERAL_BLOCK: 'Blok',
        GENERAL_NO_RESULTS: 'Nic do pokazania',
        GENERAL_ACCOUNT: 'Konto',
        GENERAL_MULTISIG_ACCOUNT: 'Konto multipodpis',
        GENERAL_AMOUNT: 'Ilość',
        GENERAL_MESSAGE: 'Wiadomość',
        GENERAL_DATE: 'Data',
        GENERAL_TAB_NORMAL: 'Zwykły',
        GENERAL_TAB_MULTISIG: 'Multipodpis',
        GENERAL_TOTAL: 'Łącznie',
        GENERAL_REMOVE: 'Usuń',
        GENERAL_MOSAIC: 'Mozaika',
        GENERAL_FEE: 'Opłata',
        GENERAL_LEVY: 'Podatek',
        GENERAL_LEVY_TYPES: 'Typy podatku',
        GENERAL_LEVY_TYPES_NOTE: 'I - stała opłata; II - podatek procentowy',
        GENERAL_SEND: 'Wyślij',
        GENERAL_TO: 'Do',
        GENERAL_HASH: 'Hasz',
        GENERAL_NAME: 'Nazwa',
        GENERAL_INFORMATION: 'Informacja',
        GENERAL_ADDRESS: 'Adres',
        GENERAL_PUBLIC_KEY: 'Klucz publiczny',
        GENERAL_PRIVATE_KEY: 'Klucz prywatny',
        GENERAL_CLEAR_ALL: 'Wyczyść',
        GENERAL_CLOSE: 'Zamknij',
        GENERAL_COMING_SOON: 'Wkrótce',
        GENERAL_NONE: 'Żaden',
        GENERAL_DROPBOX: 'Upuść tu pliki lub kliknij aby przeglądać',
        GENERAL_NETWORK_FEE: 'Opłata sieci',
        GENERAL_YES: 'Tak',
        GENERAL_NO: 'Nie',
        GENERAL_TAGS: 'Tagi',
        GENERAL_SINK: 'Kran',
        GENERAL_REASON: 'Powód',
        GENERAL_TRANSACTION_HASH: 'Hasz transakcji',
        GENERAL_TRANSACTION_ID: 'ID Transakcji',
        GENERAL_OWNER: 'Właściciel',
        GENERAL_RESULTS: 'Wyniki',
        GENERAL_RESULT: 'Wynik',
        GENERAL_STATUS: 'Status',
        GENERAL_LOCATION: 'Lokacja',
        GENERAL_ACTION: 'Akcja',
        GENERAL_ADD: 'Dodaj',
        GENERAL_ADDED: 'Dodany',
        GENERAL_REMOVED: 'Usunięty',
        GENERAL_COSIGNATORY: 'Sygnatariusz',
        GENERAL_COSIGNATORIES: 'Sygnatariusze',
        GENERAL_PROCESSING: 'Przetwarzanie',
        GENERAL_ACCOUNT_LABEL: 'Etykieta konta',
        GENERAL_OPTIONAL: '(opcjonalnie)',
        GENERAL_ERROR: 'Błąd',

        // TRANSFER TRANSACTION MODULE
        TRANSFER_TRANSACTION_TITLE: 'Wyślij & Odbierz',
        TRANSFER_TRANSACTION_NAME: 'Transakcja transferu',
        TRANSFER_TRANSACTION_MULTISIG_NAME: 'Transakcja transferu z multipodpisem',
        TRANSFER_TRANSACTION_INVOICE: 'Utwórz fakturę',
        TRANSFER_TRANSACTION_TAB_INVOICE: 'Faktura',
        TRANSFER_TRANSACTION_MOSAIC_TRANSFER: 'Transfer mozaiki',
        TRANSFER_TRANSACTION_ATTACH_MOSAIC: 'Dołącz mozaikę',
        TRANSFER_TRANSACTION_ATTACH: 'Dołącz',
        TRANSFER_TRANSACTION_MOSAICS_ATTACHED: 'Dołączone mozaiki',
        TRANSFER_TRANSACTION_ENCRYPT_MESSAGE: 'Szyfruj wiadomość',

        // TRANSACTION LINES
        LINE_TX_DETAILS_FROM: 'From',
        LINE_TX_DETAILS_FROM_MULTISIG: 'From multisig',
        LINE_TX_DETAILS_WAITING: 'Transaction waiting to be included',
        LINE_TX_DETAILS_NEED_SIG: 'Needs cosignatories signatures',
        LINE_TX_DETAILS_NEED_SIG_2: 'This transaction needs your signature',
        LINE_TX_DETAILS_MESS_ENC: 'Encrypted',
        LINE_TX_DETAILS_MESS_DEC: 'Decode',
        LINE_TX_DETAILS_HASH: 'Hash',
        LINE_TX_DETAILS_DEC_MESS: 'Decode message',
        LINE_TX_DETAILS_MOS_ATTACHED: 'Mosaics attached',
        LINE_TX_DETAILS_LEVY_TYPE_1: 'Constant',
        LINE_TX_DETAILS_LEVY_TYPE_2: 'Percentage-based',
        LINE_TX_DETAILS_ISSUER: 'Issuer',
        LINE_TX_DETAILS_MULTISIG_FEE: 'Multisig fee',
        LINE_TX_DETAILS_MULTISIG_HASH: 'Multisig hash',
        LINE_TX_DETAILS_COSIGN: 'Cosign transaction',
        LINE_TX_DETAILS_SIGNATURES: 'Signature(s)',
        LINE_TX_DETAILS_COSIGNATORY: 'Cosignatory',
        LINE_TX_DETAILS_TIMESTAMP: 'Timestamp',
        LINE_TX_DETAILS_MOS_CREATE: 'Create mosaic',
        LINE_TX_DETAILS_MOS_EDIT: 'Edit mosaic',
        LINE_TX_DETAILS_NS_CREATE: 'Create namespace',
        LINE_TX_DETAILS_NS_NEW_SUB: 'New sub-namespace',
        LINE_TX_DETAILS_NS_ROOT: 'Root namespace',
        LINE_TX_DETAILS_RECIPIENT: 'Recipient',
        LINE_TX_DETAILS_MULTISIG_CREATE: 'Create multisig account',
        LINE_TX_DETAILS_MULTISIG_EDIT: 'Edit multisig account',
        LINE_TX_DETAILS_MULTISIG_MOD: 'Modifications',
        LINE_TX_DETAILS_MULTISIG_MIN_COSIG: 'Min cosignatories',
        LINE_TX_DETAILS_MULTISIG_AFFECTED: 'Account affected',

        // IMPORTANCE MODULE
        IMPORTANCE_TRANSFER_NAME: 'Importance transfer transaction',
        IMPORTANCE_TRANSFER_MULTISIG_NAME: 'Multisignature importance transfer transaction',
        IMPORTANCE_TRANSFER_MODE: 'Mode',
        IMPORTANCE_TRANSFER_MODE_1: 'Activate',
        IMPORTANCE_TRANSFER_MODE_2: 'Deactivate',
        IMPORTANCE_TRANSFER_TITLE: 'Manage delegated account',
        IMPORTANCE_TRANSFER_MULTISIGNATURE_TITLE: 'Manage delegated account of multisignature accounts',
        IMPORTANCE_TRANSFER_CUSTOM_KEY: 'Use a custom public key',
        IMPORTANCE_TRANSFER_MODE_SELECT: 'Select a mode',
        IMPORTANCE_TRANSFER_REMOTE_ACCOUNT: 'Remote account',
        IMPORTANCE_TRANSFER_REMOTE_PUBLIC: 'Remote public key',
        IMPORTANCE_TRANSFER_INFO_PART_1: 'Once an importance transaction has been included in a block it needs 6 hours to become active. After that you\'ll have access to node selection and start / stop commands.',
        IMPORTANCE_TRANSFER_INFO_PART_2: 'Make sure you do not have a delegated account activated already (if imported account). If so you can use the old delegated public key to deactivate (if necessary).',
        IMPORTANCE_TRANSFER_INFO_PART_MULTISIG: 'For multisignature accounts only the cosignatory that initiated the importance transfer transaction can start and stop harvesting. If any other cosignatory want to take back power on harvesting, he just need to deactivate and reactivate the remote status.',
        IMPORTANCE_TRANSFER_NO_BLOCKS_HARVESTED: 'No blocks harvested',
        IMPORTANCE_TRANSFER_HARVESTING_PANEL: 'Harvesting panel',
        IMPORTANCE_TRANSFER_REMOTE_ACTIVATING: 'You must wait until your remote status is active to start delegated harvesting',
        IMPORTANCE_TRANSFER_REMOTE_INACTIVE: 'You must send an importance transfer from the right panel to activate your remote account',
        IMPORTANCE_TRANSFER_MULTISIG_NOT_INITIATOR: 'You are not the cosignatory that initiated the importance transfer, therefore it is not possible for you to start or stop delegated harvesting. Please, consult above information tab to know how to take back control on harvesting.',
        IMPORTANCE_TRANSFER_MULTISIG_SELECT: 'Select a multisignature account',
        IMPORTANCE_TRANSFER_MULTISIG_SELECT_MESSAGE: 'Please select a multisig account to show status',


        // CREATE MOSAIC MODULE
        MOSAIC_DEFINITION_TITLE: 'Create a mosaic',
        MOSAIC_DEFINITION_NAME: 'Mosaic definition transaction',
        MOSAIC_DEFINITION_MULTISIG_NAME: 'Multisignature mosaic definition transaction',
        MOSAIC_DEFINITION_QUANTITY: 'Quantity',
        MOSAIC_DEFINITION_DIV: 'Divisibility',
        MOSAIC_DEFINITION_DESCRPITION: 'Description',
        MOSAIC_DEFINITION_INITIAL_SUPPLY: 'Initial supply',
        MOSAIC_DEFINITION_MUTABLE_SUPPLY: 'Mutable supply',
        MOSAIC_DEFINITION_TRANSFERABLE: 'Transferable',
        MOSAIC_DEFINITION_PROPERTIES: 'Properties',
        MOSAIC_DEFINITION_MOSAIC_PROPERTIES: 'Mosaic properties',
        MOSAIC_DEFINITION_REQUIRES_LEVY: 'Requires levy',
        MOSAIC_DEFINITION_LEVY_LIMITATION: 'UI-limitation: right now, only owned mosaics can be used as a levy.',
        MOSAIC_DEFINITION_LEVY_SELECT_MOSAIC: 'Select levy mosaic',
        MOSAIC_DEFINITION_LEVY_ADDRESS: 'Levy address',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE: 'Fee type',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1: 'Absolute',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2: 'Percentile',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1_NOTE: 'Selecting absolute, will cause constant levy of',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE: 'Selecting percentile, will cause linear levy:',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_2: 'Sending',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_3: 'will imply levy of',
        MOSAIC_DEFINITION_PARENT: 'Parent Namespace',
        MOSAIC_DEFINITION_INFORMATION_1: 'The maximum length for a mosaic name is 32 characters. Allowed characters are:',
        MOSAIC_DEFINITION_INFORMATION_2: 'The first character must be a letter from the alphabet.',
        MOSAIC_DEFINITION_INFORMATION_3: 'The description may not exceed a length of 512 characters. There is no limitation for the characters used in the description.',
        MOSAIC_DEFINITION_INFORMATION_4: 'The behavior of a mosaic can be customized by a set of properties:',
        MOSAIC_DEFINITION_INFORMATION_5: 'The supply is given in entire units of the mosaic, not in smallest sub-units. The initial supply must be in the range of 0 and 9,000,000,000.',
        MOSAIC_DEFINITION_INFORMATION_6: 'The divisibility determines up to what decimal place the mosaic can be divided into. Thus a divisibility of 3 means that a mosaic can be divided into smallest parts of 0.001 mosaics, i.e. milli mosaics is the smallest sub-unit. The divisibility must be in the range of 0 and 6.',
        MOSAIC_DEFINITION_INFORMATION_7: 'If checked, it allows a mosaic supply change at a later point, otherwise supply is immutable.',
        MOSAIC_DEFINITION_INFORMATION_8: 'Allow transfers of the mosaic among accounts other than the creator. If the property \'transferable\' is not checked, only transfer transactions having the creator as sender or as recipient can transfer mosaics of that type. If checked the mosaics can be transferred to and from arbitrary accounts.',
        MOSAIC_DEFINITION_INFORMATION_9: 'The creator can demand that a special fee is collected from the sender and sent to an account of his choice (thus the creator can specify his own account as recipient of this fee). The data for the levy is the following:',
        MOSAIC_DEFINITION_INFORMATION_10: 'The mosaic in which the fee has to be paid. Any existing mosaic can be specified.',
        MOSAIC_DEFINITION_INFORMATION_11: 'The recipient of the levy. This can be any account.',
        MOSAIC_DEFINITION_INFORMATION_12: 'The fee quantity. The interpretation is dependent on the field \'fee type\', see above.',
        MOSAIC_DEFINITION_INFORMATION_13: 'There are two fee types supported, absolute fee and percentile fee.',
        MOSAIC_DEFINITION_INFORMATION_14: 'The fee is specified as absolute quantity and thus does not depend on the quantity that is transferred.',
        MOSAIC_DEFINITION_INFORMATION_15: 'The fee is specified as multiple of the percentile of the quantity that is transferred. The fee is thus linearly increasing with the transferred mosaic quantity.',

        // EDIT MOSAIC MODULE
        MOSAIC_SUPPLY_CHANGE_TITLE: 'Change mosaic supply',
        MOSAIC_SUPPLY_CHANGE_NAME: 'Mosaic supply change transaction',
        MOSAIC_SUPPLY_CHANGE_MULTISIG_NAME: 'Multisignature mosaic supply change transaction',
        MOSAIC_SUPPLY_CHANGE_SELECT: 'Select mosaic',
        MOSAIC_SUPPLY_CHANGE_TYPE: 'Change type',
        MOSAIC_SUPPLY_CHANGE_TYPE_1: 'Create',
        MOSAIC_SUPPLY_CHANGE_TYPE_2: 'Delete',
        MOSAIC_SUPPLY_CHANGE_SUPPLY: 'Supply',
        MOSAIC_SUPPLY_CHANGE_CURRENT_SUPPLY: 'Current supply',
        MOSAIC_SUPPLY_CHANGE_AMOUNT: 'Change amount',
        MOSAIC_SUPPLY_CHANGE_RES_SUPPLY: 'Resulting supply',

        // NAMESPACE MODULE
        NAMESPACE_PROVISION_TITLE: 'Create namespace & sub-namespace',
        NAMESPACE_PROVISION_NAME: 'Provision namespace transaction',
        NAMESPACE_PROVISION_MULTISIG_NAME: 'Multisignature provision namespace transaction',
        NAMESPACE_PROVISION_PARENT: 'Parent Namespace (excluding level 3)',
        NAMESPACE_PROVISION_NEW_ROOT: 'New root',
        NAMESPACE_PROVISION_NS_NAME: 'Namespace name',
        NAMESPACE_PROVISION_INFORMATION_1: 'Namespaces have certain restrictions with respected to the characters being allowed in the parts as well as the length of a part. A root namespace may have a length of 16 characters while sub-namespaces may have a length of 64 characters. Valid characters are:',
        NAMESPACE_PROVISION_INFORMATION_2: 'However a part is only allowed to begin with a letter from the alphabet, thus \'alice\' is an allowed part for a root namespace while \'1alice\' is not. Certain strings are reserved and thus not allowed as namespace parts. Among the disallowed namespace parts are:',
        NAMESPACE_PROVISION_INFORMATION_3: 'This list is not final and can be extended in the future. Thus \'user.alice\' or \'alice.user\' are not allowed in the NEM namespace system. The namespace may have up to 3 parts, thus \'makoto.metals.silver\' is valid while \'makoto.metals.silver.coin\' is not.', 

        // ACCOUNT MODULE
        ACCOUNT_TITLE: 'Konto',
        ACCOUNT_ACCOUNT_INFORMATION: 'Informacje o koncie',
        ACCOUNT_IMPORTANCE_SCORE: 'Wskaźnik ważności POI',
        ACCOUNT_VESTED_BALANCE: 'Saldo usankcjonowane',
        ACCOUNT_HARVESTING: 'Harvesting',
        ACCOUNT_REMOTE_STATUS: 'Status zdalny',
        ACCOUNT_DELEGATED_PUBLIC: 'Delegowany klucz publiczny',
        ACCOUNT_HARVESTED_BLOCKS: 'Zebrane bloki',
        ACCOUNT_START_STOP_HARVESTING: 'Rozpocznij / Zatrzymaj delegowane zbieranie',
        ACCOUNT_HARVESTING_NOTE: 'Jeśli zbierałeś bloki <b>używając Nano</b> i twoja lokalna pamięć została wykasowana, wybierz serwer, którego używałeś, aby przywrócić stan aplikacji. (Twoje zbieranie nie zatrzymało się).',
        ACCOUNT_HARVESTING_NODE_SELECT: 'Wybierz serwer',
        ACCOUNT_HARVESTING_START: 'Rozpocznij delegowane zbieranie',
        ACCOUNT_HARVESTING_STOP: 'Zatrzymaj delegowane zbieranie',
        ACCOUNT_HARVESTING_NO_SLOTS: 'Brak wolnych miejsc na wybranym serwerze, proszę wybrać inny',
        ACCOUNT_HARVESTING_BELOW_THRESHOLD: 'Potrzebujesz 10\'000 usankcjonowanych XEM aby rozpocząć delegowane zbieranie',
        ACCOUNT_ACCOUNT_SELECT: 'Wybierz inne konto',
        ACCOUNT_ACCOUNT_SELECT_LABEL: 'Użyj innego konta',
        ACCOUNT_ACCOUNT_SELECT_BTN_NOTE: 'Zmień konto',
        ACCOUNT_WALLET_KEYS: 'Portfel i klucze',
        ACCOUNT_ADD_NEW_ACCOUNT: 'Dodaj nowe konto',
        ACCOUNT_ADD_NEW_ACCOUNT_BTN: 'Dodaj nowe konto do portfela',
        ACCOUNT_PRIVATE_KEY_NOTE: 'Your private key holds all the power of your account. It is a priority to make sure it is stored safely somewhere <b><u>offline</u></b>: password encrypted into a .wlt file, written on a piece of paper, on a picture or download the <b><u>export wallet QR</u></b>.',
        ACCOUNT_PRIVATE_KEY_SHOW: 'Pokaż klucz prywatny',
        ACCOUNT_EXPORT_MOBILE: 'Eksportuj na komórkę',
        ACCOUNT_INFO_QR_BTN: 'Adres w formacie QR',
        ACCOUNT_WALLET_QR_BTN: 'QR portfela',
        ACCOUNT_WALLET_QR_BTN_2: 'QR portfela (Android i IOS)',
        ACCOUNT_BACKUP_WALLET: 'Kopia zapasowa portfela',
        ACCOUNT_BACKUP_WALLET_NOTE: 'To <b><u>bardzo ważne</u></b> abyś miał kopie zapasowe swoich portfeli.',
        ACCOUNT_BACKUP_WALLET_DOWNLOAD: 'Pobierz portfel',
        ACCOUNT_INFO_QR_TITLE: 'Adres w postaci kodu QR',
        ACCOUNT_WALLET_QR_NOTE: 'Ten kod QR będzie współpracował tylko z aplikacją mobilną NEMpay',
        ACCOUNT_WALLET_QR_ANDROID_IOS_TITLE: 'Kod QR portfela dla aplikacji na Androida i IOS',
        ACCOUNT_ADD_NEW_ACCOUNT_WARNING: 'All accounts are derived from your main private key using BIP32, like so only one private key and your password are needed to retrieve all your other accounts. <br>It is still <b><u>highly recommended</u></b> to backup your wallet after adding new accounts to not repeat the operation again if local storage is erased.',
        ACCOUNT_CUSTOM_NODE: 'Użyj własnego serwera',
        ACCOUNT_NODE_FROM_LIST: 'Użyj serwera z listy',
        ACCOUNT_DELEGATED_PRIVATE_KEY: 'Delegowany klucz prywatny',

        // PORTAL MODULE
        PORTAL_TITLE: 'Services',
        PORTAL_MULTISIG_TITLE: 'Multisignature and Multi-User Accounts',
        PORTAL_MULTISIG_TEXT: 'Multisig accounts are editable on-chain contracts, the most powerful way to secure funds, enable joint accounts, and are the foundation of DAO’s.',
        PORTAL_MULTISIG_BTN_1: 'Convert an account to multisig',
        PORTAL_MULTISIG_BTN_2: 'Edit existing contract',
        PORTAL_HARVESTING_TITLE: 'Delegated Harvesting',
        PORTAL_HARVESTING_TEXT: 'Delegated harvesting is the feature that allows "mining" even while your account is closed.',
        PORTAL_CHANGELLY_TITLE: 'Changelly Instant Exchange',
        PORTAL_CHANGELLY_TEXT: 'Use the Changelly widget to exchange XEM at the best rates !',
        PORTAL_CHANGELLY_BTN: 'Buy XEM',
        PORTAL_NS_TITLE: 'Namespaces & Subdomains',
        PORTAL_NS_TEXT: 'Namespaces are domain names. Each namespace is unique and authenticate mosaics (assets) issued on it or on it\'s subdomains.',
        PORTAL_NS_BTN: 'Create namespace',
        PORTAL_MOSAIC_TITLE: 'Mosaics',
        PORTAL_MOSAIC_TEXT: 'NEM mosaics are assets that expose additional properties and other features. To be able to create a mosaic, an account must rent at least one root namespace.',
        PORTAL_MOSAIC_BTN_1: 'Create mosaic',
        PORTAL_MOSAIC_BTN_2: 'Edit mosaic',
        PORTAL_APOSTILLE_TITLE: 'Apostille',
        PORTAL_APOSTILLE_TEXT: 'Use the NEM Apostille service to create blockchain notaries to time stamp, follow and audit file authenticity.',
        PORTAL_APOSTILLE_BTN_1: 'Create',
        PORTAL_APOSTILLE_BTN_2: 'Audit',

        // EXPLORER MODULE NAV
        EXPLORER_NAV_HOME: 'Home',
        EXPLORER_NAV_NSM: 'Namespaces & Mosaics', 
        EXPLORER_NAV_APOSTILLES: 'Apostilles',

        // EXPLORER HOME MODULE
        EXPLORER_HOME_TITLE: 'Explorer - Home', 
        EXPLORER_HOME_NS: 'Your Namespaces',
        EXPLORER_HOME_MOSAICS: 'Your Mosaics',
        EXPLORER_HOME_NS_MULTISIG: 'Namespaces owned by multisig accounts',
        EXPLORER_HOME_MOSAICS_LEVY: 'Levy mosaic',

        // EXPLORER APOSTILLES MODULE
        EXPLORER_APOSTILLES_TITLE: 'Explorer - Apostilles',
        EXPLORER_APOSTILLES_YOURS: 'Your apostilles',
        EXPLORER_APOSTILLES_PUBLIC: 'Public sink',
        EXPLORER_APOSTILLES_NO_NTY: 'No nty file loaded, please click here to import one.',

        // CREATE APOSTILLE MODULE
        APOSTILLE_CREATE_TITLE: 'Create apostilles',
        APOSTILLE_TRANSACTION_NAME: 'Apostille transaction',
        APOSTILLE_TRANSACTION_MULTISIG_NAME: 'Multisignature apostille transaction',
        APOSTILLE_KEEP_PRIVATE: 'Keep private',
        APOSTILLE_USE_DEDICATED: 'Use dedicated account',
        APOSTILLE_FILES_TO_NOTARIZE: 'Files to notarize',
        APOSTILLE_REJECTED: 'Rejected',
        APOSTILLE_FILE_HASH: 'File hash',
        APOSTILLE_PRIVATE: 'Private',
        APOSTILLE_FILENAME: 'File name',
        APOSTILLE_NAME_TOO_LONG: 'File name is too long, 40 characters maximum allowed.',
        APOSTILLE_MAX_NUMBER: 'Maximum apostilles per batch is 25',
        APOSTILLE_INFORMATION_1: 'Each file uploaded is processed automatically with options set on the left panel. You can add few files, change params and add more with different options. It\'ll also work if you switch to multisig tab and add more files.',
        APOSTILLE_INFORMATION_2: '"<b>Keep private</b>" means that the hashes of your files are signed with your private key and sent to a dedicated HD account. This way it is not possible for anyone but you to know what content have been certified.', 
        APOSTILLE_INFORMATION_3: 'Multisignature account can\'t sign hashes of files but you can choose "<b>Use dedicated account</b>" to send transactions to a dedicated HD account.',
        APOSTILLE_INFORMATION_4: 'The HD account is generated from the hash of the filename and the owner account address, signed by your private key. It allows to store only original file hash and it\'s updates on a dedicated account. If no options checked the transaction goes to the public sink (default).',
        APOSTILLE_INFORMATION_5: 'After the transactions are sent the download of an archive is triggered. It contains your signed files and the new or updated .nty file to keep track of every files you notarize on the NEM chain.',
        APOSTILLE_NO_NTY: 'No nty file loaded, please click here to import one or a new will be created automatically.',
        APOSTILLE_IMPORT_FILES: 'Import files',
        APOSTILLE_CREATE_TEXT: 'Create text document',
        APOSTILLE_ENTER_TEXT: 'Enter text to notarize...',

        // AUDIT APOSTILLE MODULE
        APOSTILLE_AUDIT_TITLE: 'Audit apostilles',
        APOSTILLE_AUDIT_CHOOSE_NODE: 'Choose a node',
        APOSTILLE_AUDIT_CHOOSE_NODE_NOTE: 'Only a few nodes are able to search into the whole transaction history (option is disabled by default in NIS).', //
        APOSTILLE_AUDIT_WRONG_FORMAT: 'This file is not in apostille format !',
        APOSTILLE_AUDIT_FAIL_NO_PUBLIC_KEY: 'Verification failed, owner has no public key !',
        APOSTILLE_AUDIT_SUCCESS: 'File successfully audited !',
        APOSTILLE_AUDIT_FAIL: 'Verification failed !',
        APOSTILLE_AUDIT_WAITING: 'Apostille transfer might be waiting for confirmation !',
        APOSTILLE_AUDIT_NOT_FOUND: 'Transaction not found, make sure it is not waiting for confirmations otherwise apostille is invalid',
        APOSTILLE_AUDIT_ERROR_UNCONFIRMED: 'An error occurred while fetching unconfirmed data but transaction was not found',
        APOSTILLE_AUDIT_ERROR_SIGNER: 'An error occured while fetching signer data',
        APOSTILLE_AUDIT_ERROR_SIGNATURE: 'Verification failed, an error occured at signature verification !',
        APOSTILLE_AUDIT_INFORMATION_1: 'Files that can be audited must be in <b>apostille format</b>',
        APOSTILLE_AUDIT_INFORMATION_2: 'You can recognize those by the filename:',
        APOSTILLE_AUDIT_NON_SIGNED: 'Non signed exemple:',
        APOSTILLE_AUDIT_SIGNED: 'Signed exemple:',
        APOSTILLE_AUDIT_FILES: 'Audit files',

        // ERROR ALERTS
        ALERT_MISSING_FORM_DATA: 'Proszę wypełnić formularz !',
        ALERT_ERROR_WALLET_DOWNLOAD: 'Nie można pobrać portfela ponieważ nie istnieje !',
        ALERT_PASSWORDS_NOT_MATCHING: 'Podane hasła nie pasują do siebie !',
        ALERT_INVALID_KEY_FOR_ADDR: 'Klucz prywatny nie odpowiada podanemu adresowi !',
        ALERT_NO_WALLET_LOADED: 'Nie możesz oworzyć panelu głównego bez portfela',
        ALERT_WALLET_NAME_EXISTS: 'Portfel o tej samej nazwie jest już załadowany !',
        ALERT_INVALID_WALLET_FILE: 'Próbujesz załadować plik, który nie jest portfelem !',
        ALERT_NO_NODE_SET: 'Proszę podaj adres serwera !',
        ALERT_INVALID_CUSTOM_NODE: 'Twój adres własnego serwera jest nieprawidłowy !',
        ALERT_INVALID_WEBSOCKET_PORT: 'Port websocket własnego serwera jest nieprawidłowy !',
        ALERT_MIJIN_DISABLED: 'Sieć Mijin jest wyłączona, proszę wybierz inną sieć !',
        ALERT_GET_NS_BY_ID_ERROR: 'Błąd przy pobieraniu informacji o namespace, powód: ',
        ALERT_GET_ACCOUNT_DATA_ERROR: 'Błąd przy pobieraniu informacji o koncie, powód: ',
        ALERT_ERROR_OCCURRED: 'Wystąpił błąd ! ',
        ALERT_INVALID_ADDR_FOR_NETWORK: ' nie odpowiada sieci ',
        ALERT_INVALID_PASSWORD: 'Podane hasło nie jest prawidłowe !',
        ALERT_COSIG_ALREADY_IN_LIST: 'Sygnatariusz jest już obecny na liście modyfikacji !',
        ALERT_COSIGNATORY_HAS_NO_PUBLIC: 'Sygnatariusz musi wykonać przynajmniej jedną transakcję aby otrzymać klucz publiczny !',
        ALERT_MULTISIG_HAS_NO_PUBLIC: 'Konto z multipodpisem musi wykonać przynajmniej jedną transakcję aby otrzymać klucz publiczny !',
        ALERT_COSIG_CANNOT_BE_MULTISIG: 'Konto wybrane do przekształenia jest sygnatariuszem innego konta z multipodpisem. Wobec tego nie może być przekształcone',
        ALERT_NO_NS_OWNED: 'Konto nie posiada żadnej namespace, proszę utwórz jedną lub zmień konto',
        ALERT_UNLOCKED_INFO_ERROR: 'Wystąpił błąd przy pobieraniu informacji o odblokowaniu',
        ALERT_LOCK_ERROR: 'Błąd przy blokowaniu konta, powód: ',
        ALERT_UNLOCK_ERROR: 'Error at unlocking account, reason: ',
        ALERT_SUPERNODES_ERROR: 'Wystąpił błąd przy pobieraniu danych supernodes !',
        ALERT_INVALID_NTY_FILE: 'Dostarczony plik nie jest plikiem nty !',
        ALERT_CREATE_WALLET_FAILED: 'Nie udało się utworzyć portfela, powód: ',
        ALERT_DERIVATION_FROM_SEED_FAILED: 'Nie udało się uzyskać konta z seeda, powód: ',
        ALERT_BIP32_GENERATION_FAILED: 'Nie udało się wygenerować danych bip 32, powód: ',
        ALERT_NO_WALLET_DATA: 'Błąd, puste dane portfela !',
        ALERT_CANNOT_LOGIN_WITHOU_WALLET: 'Błąd, nie można zalogować bez portfela !',
        ALERT_NO_WALLET_TO_SET: 'Błąd, nie można ustawić -nic- jako bieżący portfel !',
        ALERT_INVALID_WALLET_INDEX: 'Błąd, wybrany indeks konta jest poza granicami !',
        ALERT_NO_CURRENT_WALLET: 'Błąd, nie można ustawić konta portfela jeśli nie jest bieżącym portfelem !',
        ALERT_ALREADY_MULTISIG: 'Wybrane konto jest już kontem z multipodpisem !',
        ALERT_INVALID_MODIFICATION_ARRAY: 'Konto z multipodpisem nie może być sygnatariuszem samego siebie, proszę sprawdź listę modyfikacji !',
        ALERT_GET_MARKET_INFO_ERROR: 'Wystąpił błąd podczas pobierania informacji rynkowych !',
        ALERT_MULTISIG_CANNOT_BE_COSIG: 'Konto multisig nie może być sygnatariuszem !',
        ALERT_PURGE_CANCELLED: 'Czyszczenie anuowane !',
        ALERT_MAINNET_DISABLED: 'Mainnet jest niedostępny w bieżącej wersji',
        ALERT_EMPTY_DECODED_MSG: 'Wystąpił błąd, brak odszyfrowanej wiadomości !',
        ALERT_INVALID_NS_NAME: 'Nazwa namespace jest nieprawidłowa !',
        ALERT_INVALID_MOSAIC_NAME: 'Nazwa mozaiki jest nieprawidłowa !',
        ALERT_MOSAIC_DESCRIPTION: 'Opis mozaiki jest nieprawidłowy !',
        ALERT_GET_INCOMING_TXES_ERROR: 'Wystąpił błąd podczas próby pobrania przychodzących transakcji, zmień serwer lub sprawdź połączenie i spróbuj ponownie',

        // SUCCESS ALERTS
        ALERT_CREATE_WALLET_SUCCESS: 'Wallet successfully created and loaded !',
        ALERT_SUCCESS_PURGE: 'Local storage successfully purged !',
        ALERT_SUCCESS_LOGOUT: 'Successfully logged out !',
        ALERT_LOAD_WALLET_SUCCESS: 'Wallet successfully loaded !',
        ALERT_TRANSACTION_SUCCESS: 'Transaction successfully sent !',
        ALERT_GENERATE_ACCOUNT_SUCCESS: 'Account successfully generated. Don\'t forget to download your updated wallet !',
        ALERT_UPGRADE_SUCCESS: 'Wallet successfully upgraded !',
        ALERT_SIGNATURE_SUCCESS: 'Transaction successfully signed !',
        ALERT_NTY_FILE_SUCCESS: 'Successfully loaded nty file !',
        ALERT_INCOMING_TX_FROM: 'Incoming transaction from ',

        AGGREGATE_MODIFICATION_TITLE: 'Convert an account to multisig',
        AGGREGATE_MODIFICATION_NAME: 'Aggregate modification transaction',
        AGGREGATE_MODIFICATION_MULTISIG_NAME: 'Multisignature aggregate modification transaction',
        AGGREGATE_ACCOUNT_SELECT: 'Select an account to convert',
        AGGREGATE_CUSTOM_ACCOUNT: 'Use custom account',
        AGGREGATE_ACCOUNT_TO_CONVERT: 'Account to convert address',
        AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE: 'Account to convert private key',
        AGGREGATE_ADD_PLACEHOLDER: 'Cosignatory account or @alias to add',
        AGGREGATE_ADD_BTN_TITLE: 'Add cosignatory',
        AGGREGATE_MIN_SIGNATURES: 'Minimum signatures required',
        AGGREGATE_MIN_SIGNATURES_PLACEHOLDER: 'Minimum signatures needed to valide a transaction',
        AGGREGATE_MODIFICATION_LIST: 'Modifications list',
        AGGREGATE_MODIFICATION_EDIT_TITLE: 'Edit a multisignature contract',
        AGGREGATE_MODIFICATION_EDIT_SELECT: 'Select an account to edit',
        AGGREGATE_ADD_REMOVE_PLACEHOLDER: 'Cosignatory account or @alias to add',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE: 'Relative change on minimum signatures',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE_PLACEHOLDER: 'Number of signatures to add (n) or remove (-n) - Automated removals',
        AGGREGATE_SELECTED_ACCOUNT_INFO: 'Selected account information',
        AGGREGATE_MIN_SIGNATURES: 'Min signatures',

        // LOGIN MODULE
        LOGIN_MEMBER_TITLE: 'Already a NEMber ?',
        LOGIN_UPGRADE_TITLE: 'Wallet needs an upgrade',
        LOGIN_UPGRADE_MESSAGE: 'Selected wallet needs an upgrade. This action will generate a child public key and add it into your main account. Download of updated wallet will be automatically triggered at success, you <b><u>must</u></b> download it !',
        LOGIN_UPGRADE_BUTTON: 'Upgrade wallet',
        LOGIN_IMPORT_BUTTON: 'Import Wallet',
        LOGIN_SELECT_WALLET: 'Select a wallet in local storage',
        LOGIN_LOGIN_BUTTON: 'Sign In',

        // SIGNUP MODULE
        SIGNUP_TITLE: 'New to NEM ?',
        SIGNUP_CREATE_WALLET_TITLE: 'Simple wallet',
        SIGNUP_PRIVATE_KEY_WALLET_TITLE: 'Private key wallet',
        SIGNUP_BRAIN_WALLET_TITLE: 'Brain wallet',
        SIGNUP_CREATE_WALLET_BUTTON: 'Create simple wallet',
        SIGNUP_PRIVATE_KEY_WALLET_BUTTON: 'Create private key wallet',
        SIGNUP_BRAIN_WALLET_BUTTON: 'Create brain wallet',
        SIGNUP_CREATE_WALLET_WARNING: 'Please read about <a href="https://www.w3.org/TR/2014/WD-WebCryptoAPI-20140325/#RandomSource-interface" rel="nofollow" target="_blank">dangers</a> that client side generated keys pose, we are not responsible of loss that could be due to entropy of key generation. Even if very few chances to happen it is still recommended to use a private key generated from a NEM client.',
        SIGNUP_NETWORK_SELECT: 'Select a network', //
        SIGNUP_BRAIN_WALLET_WARNING: 'Please read about <a href="https://en.bitcoin.it/wiki/Brainwallet" rel="nofollow" target="_blank">dangers</a> that brain wallet poses. Brain wallet uses ONLY password hashed multiple times, therefore it\'s crucial to select a SAFE password. <a href="https://xkcd.com/936/" rel="nofollow" target="_blank">XKCD #936</a>',
        SIGNUP_PRIVATE_KEY_WALLET_WARNING: 'Private key wallet uses ONLY password hashed multiple times, therefore it\'s crucial to select a SAFE password.',

        // FAQ MODULE
        FAQ_TITLE: 'Frequently Asked Questions',
        FAQ_QUESTION_1: 'How Nano Wallet works ?',
        FAQ_ANSWER_1: 'Nano Wallet is built using the latest crypto libraries with ES6 and AngularJS. It is a full client-side application that never send any sensitive data through the wire, everything happen in your browser from creating private keys to signing of transactions.',
        FAQ_QUESTION_2: 'Is it free to use ?',
        FAQ_ANSWER_2: 'Absolutely all operations are client-side, only you have control of your coins, no third parties, and no extra fees.',
        FAQ_QUESTION_3: 'Why do I already have one mosaic ?',
        FAQ_ANSWER_3: 'Each users already own the main currency that have "nem" as Namespace and "xem" as Mosaic, so even with 0 balance you still own "nem:xem".',
        FAQ_QUESTION_4: 'Roadmap ?',
        FAQ_ANSWER_4: 'Current roadmap is integration of all NEM client features and completion of community funded projects to work across this wallet.',
        FAQ_QUESTION_5: 'Can I get free XEM ?',
        FAQ_ANSWER_5: 'NEM faucet is currently down but you can consult the NEM forum the know about the available bounties.',
        FAQ_QUESTION_6: 'Where to find more information about NEM ?',
        FAQ_ANSWER_6_FORUM: 'Official forum',
        FAQ_ANSWER_6_WEBSITE: 'Official website',
        FAQ_ANSWER_6_BTT: 'Official BitcoinTalk thread',
        FAQ_QUESTION_7: 'How to support the project ?',
        FAQ_ANSWER_7: 'Nano Wallet is maintained by Quantum_Mechanics based on Gimre\'s lightwallet',
        FAQ_ANSWER_7_2: 'Apostille is a service working across <a href="http://apostille.io">apostille.io</a> website in collaboration with Jabo38 for the <a href="https://forum.nem.io/t/nem-apostille-a-nem-notary-system-community-fund-proposal/2001" target="_blank">Apostille project</a>.',
        FAQ_ANSWER_7_3: 'If you are willing to help feel free to pick an address below, thanks :)',
        FAQ_ANSWER_7_4: 'NanoWallet project funds:',
        FAQ_ANSWER_7_5: 'Apostille services funds:',

        // FORM RELATED
        FORM_PASSWORD_FIELD_PLACEHOLDER: 'Wpisz hasło portfela lub hasło wielowyrazowe',
        FORM_WALLET_NAME_FIELD_PLACEHOLDER: 'Nazwa portfela',
        FORM_SIGNUP_PASSWORD_FIELD_PLACEHOLDER: 'Hasło',
        FORM_CONFIRM_PASSWORD_FIELD_PLACEHOLDER: 'Potwierdź hasło',
        FORM_PASSPHRASE_FIELD_PLACEHOLDER: 'Hasło wielowyrazowe',
        FORM_CONFIRM_PASSPHRASE_FIELD_PLACEHOLDER: 'Potwierdź hasło wielowyrazowe',
        FORM_ADDRESS_FIELD_PLACEHOLDER: 'Adres konta',
        FORM_PRIVATE_KEY_FIELD_PLACEHOLDER: 'Klucz prywatny',
        FORM_SIDE_BTN_BALANCE: 'Saldo',
        FORM_SIDE_BTN_PAY_TO: 'Zapłać',
        FORM_SIDE_BTN_TX_FEE: 'Opłata transakcyjna',
        FORM_SIDE_BTN_RENTAL_FEE: 'Opłata dzierżawcza',
        FORM_SIDE_BTN_LEVY_FEE: 'Podatek',
        FORM_RECIPIENT_PLACEHOLDER: 'Adres odbiorcy lub @alias',
        FORM_INVOICE_RECIPIENT_PLACEHOLDER: 'Adres odbiorcy',
        FORM_SIDE_BTN_ALIAS_OF: 'Alias konta',
        FORM_MESSAGE_PLACEHOLDER: 'Wiadomość',
        FORM_MOSAIC_NAME_PLACEHOLDER: 'Nazwa mozaiki'
    });

}

export default EnglishProvider;

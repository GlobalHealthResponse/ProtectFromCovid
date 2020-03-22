
// TODO: Add description of this context

import React, {useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// Language context with default language
export const LanguageContext = createContext ({
    language: languageOptions[0], // default language as English
    dictionary: dictionaryList[languageOptions[0].id]
})

// Language context to the app
export function LanguageProvider (props) {
    const languageContext = useContext(LanguageContext);
    const [language, setLanguage] = useState(languageContext.language);
    const [dictionary, setDictionary] = useState(languageContext.dictionary);

    const provider = {
        language,
        dictionary,
        setLanguage: (selectedLanguage) => {
            setLanguage(selectedLanguage);
            setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export function Text(props) {
    const languageContext = useContext(LanguageContext);

    return languageContext.dictionary[props.tid];
};

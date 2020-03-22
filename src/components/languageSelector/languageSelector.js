import React, { useContext } from 'react';

// Importing language options
import { languageOptions } from '../languages';

// Create Language Contexts
import { LanguageContext } from './availableLanguageContext';

export default function LanguageSelector() {
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = (event) => {
        const selectedLanguage = languageOptions.find(
            item => item.id === event.target.value
        );

        languageContext.setLanguage(selectedLanguage);
    };

    // TODO: Improve language selector UI asap with buttons
    return (
        <div style={styles.buttonGroup}>
            <button style={styles.buttonStyles}
                onClick={handleLanguageChange}
                value = "pa"
            >
                Punjabi
            </button>
            <button style={styles.buttonStyles}
                onClick={handleLanguageChange}
                value = "hi"
            >
                Hindi
            </button>
            <button style={styles.buttonStyles}
                onClick={handleLanguageChange}
                value = "en"
            >
                English
            </button>
        </div>
    );
};

const styles = {
    buttonGroup: {
        textAlign: "center",
    },
    buttonStyles: {
        fontSize: "20px",
        margin: "4px",
    }
}

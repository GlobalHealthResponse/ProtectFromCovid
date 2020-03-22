import React, { useState } from 'react';

import { Text } from '../languageSelector/availableLanguageContext';

export default function Homepage() {
    // TODO: Add more components here

    return (
        <div style={styles.header}>
            <h1><Text tid="name" /></h1>
            <p><Text tid="welcomeDescription" /></p>
        </div>
    )
}


const styles = {
    header: {
        backgroundColor: "black",
        color: "white",
        height: "30vh"
    }
}


'use client';

import { createContext, useState, useContext } from 'react';

type Context = {
    theme: string;
    setTheme: (theme: string) => void;
}

const AppContext = createContext<Context>({theme: 'light', setTheme: () => {}});

export function AppWrapper({ children,
} : 
    { children: React.ReactNode; 
}) {
    let [theme, setTheme] = useState('light');

    return (
        <AppContext.Provider value={{theme, setTheme}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}
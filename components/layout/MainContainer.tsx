import React, { ReactNode } from 'react';

const MainContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <p>Main container</p>
        </div>
    );
};

export default MainContainer;

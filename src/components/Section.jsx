
import React from 'react';

const Section = ({ id, className, children }) => {
    return (
        <section id={id} className={`py-12 md:py-20 ${className || ''}`}>
            {children}
        </section>
    );
};

export default Section;

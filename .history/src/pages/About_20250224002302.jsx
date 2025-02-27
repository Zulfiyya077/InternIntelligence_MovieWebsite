import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <h2>Haqqımızda</h2>
            <p>
                MovieApp sizə ən son və populyar filmləri təqdim edən bir platformadır.  
                Bizim məqsədimiz filmləri asanlıqla tapmaq və onlarla bağlı məlumat əldə etməyinizdir.
            </p>
            <p>Platformamız tamamilə pulsuzdur və API vasitəsilə film məlumatlarını təqdim edir.</p>
        </div>
    );
};

export default About;

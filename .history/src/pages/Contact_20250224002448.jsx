import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Təşəkkürlər, ${name}! Mesajınız göndərildi.`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className={styles.contact}>
            <h2>Bizimlə Əlaqə</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adınız"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Mesajınız"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Göndər</button>
            </form>
        </div>
    );
};

export default Contact;

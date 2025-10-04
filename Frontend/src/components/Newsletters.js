import React, { useState } from 'react';
import '../Newsletter.css';

const Newsletters = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            return;
        }
        
        setStatus('subscribing'); 
        setTimeout(() => {
            console.log(`Subscribing email: ${email}`);
            setStatus('subscribed');
            setEmail('');
        }, 1500);
    };

    const getStatusMessage = () => {
        if (status === 'subscribed') {
            return {
                text: 'Success! You are now subscribed. Check your inbox for confirmation.',
                className: 'message success'
            };
        }
        if (status === 'error') {
            return {
                text: 'Please enter a valid email address to subscribe.',
                className: 'message error'
            };
        }
        if (status === 'subscribing') {
             return {
                text: 'Processing your request...',
                className: 'message info'
            };
        }
        return null;
    };

    const message = getStatusMessage();

    return (
        <div className="newsletter-container">
            <div className="newsletter-card">
                
                <h1 className="newsletter-title">
                    Subscribe to Daily Brief
                </h1>
                <p className="newsletter-subtitle">
                    Get the most important news and handpicked analysis delivered straight to your inbox. No spam, guaranteed.
                </p>

                <form className="subscription-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="email-input"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status) setStatus(null); 
                        }}
                        required
                        disabled={status === 'subscribing'}
                    />
                    <button 
                        type="submit" 
                        className="subscribe-button"
                        disabled={status === 'subscribing'}
                    >
                        {status === 'subscribing' ? 'Subscribing...' : 'Subscribe Now'}
                    </button>
                </form>

                {message && (
                    <div className={message.className}>
                        {message.text}
                    </div>
                )}

                <div className="newsletter-guarantee">
                    Trusted by 10k+ readers. Unsubscribe at any time.
                </div>

            </div>
        </div>
    );
};

export default Newsletters;
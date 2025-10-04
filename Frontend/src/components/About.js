import React from 'react';
import '../About.css';

// Component for the sidebar card ("Get Involved")
const GetInvolvedCard = () => (
    <div className="involved-card">
        <h3 className="involved-title">
            Connect and Support
        </h3>
        <p className="involved-text">
            Your feedback is essential to the continuous improvement of our platform. Reach out to us for tips, corrections, or career opportunities.
        </p>
        <div className="involved-links-container">
            <a href="mailto:editor@newscentral.com" className="involved-link primary-link">
                Editorial Inquiries
            </a>
            <a href="#careers" className="involved-link secondary-link">
                View Open Careers
            </a>
            <a href="#advertise" className="involved-link secondary-link">
                Advertise with Us
            </a>
        </div>
        <div className="involved-footer">
            <p className="involved-quote">
                "We are not just reporting the news; we are building a platform for understanding."
            </p>
        </div>
    </div>
);

// Main Application Component (The About Page)
const About = () => {

    // Using an array for core values is still good practice
    const coreValues = [
        "Prioritizing <strong>Accuracy</strong> over speed in all reporting.",
        "Ensuring <strong>Impartiality</strong> and political neutrality.",
        "Maintaining <strong>Transparency</strong> in our sources and operations.",
        "Leveraging <strong>Innovation</strong> for better user experience and data delivery.",
    ];

    return (
        <div className="about-page-container">
            <div className="about-content-wrapper">

                {/* Header Section */}
                <header className="about-header">
                    <h1 className="main-title">
                        About News Central
                    </h1>
                    <p className="subtitle">
                        Delivering unbiased, timely, and essential information to the world.
                    </p>
                </header>

                {/* Main Content Area: GRID LAYOUT (2/3 + 1/3) */}
                <div className="main-grid">

                    {/* Left Column: Detailed Content (2/3 width) */}
                    <div className="main-details-column">
                        
                        {/* Commitment Section */}
                        <section className="section-block">
                            <h2 className="section-title">
                                Our Mission and Commitment
                            </h2>
                            <p className="paragraph">
                                News Central was built to provide real-time, quality news to inform and empower our readers. Our mission is to bring you the latest updates, insightful analysis, and trends from India and across the globe. We are committed to **unbiased reporting** and **trustworthy journalism**.
                            </p>
                            <p className="paragraph">
                                In an age of information overload, we aim to cut through the noise, offering clear, concise, and verifiable reports on global events, technology, finance, and culture. We practice **slow journalism**—meaning we prioritize accuracy over speed.
                            </p>
                        </section>

                        {/* Values Section */}
                        <section className="section-block">
                            <h3 className="section-subtitle">
                                Core Values
                            </h3>
                            <ul className="values-list">
                                {coreValues.map((value, index) => (
                                    <li key={index} 
                                        className="value-item"
                                        // Using dangerouslySetInnerHTML to render the strong tags from the array
                                        dangerouslySetInnerHTML={{ __html: value }}>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Technology Section */}
                        <section className="section-block">
                            <h3 className="section-subtitle">
                                Technology Behind the News
                            </h3>
                            <p className="paragraph">
                                Our platform is designed for a fast and reliable experience. We utilize the MERN stack—**MongoDB** for secure and scalable data storage, **Express** and **Node.js** for a robust backend API, and **React** for a dynamic, mobile-first frontend. This ensures high availability and real-time content delivery to all users.
                            </p>
                        </section>
                    </div>

                    {/* Right Column: Sidebar Box (1/3 width) */}
                    <div className="sidebar-column">
                        <GetInvolvedCard />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
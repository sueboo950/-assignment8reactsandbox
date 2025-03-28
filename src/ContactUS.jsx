import React, { useState } from 'react';

const ContactUs = () => {
    // State to hold all form fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    // Update state when form values change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle your form submission,
        // such as sending data to an API or simply logging it.
        console.log('Form Submitted:', formData);

        // Reset the form after submission if desired.
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </div>

                {/* Phone Number Field */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </div>

                {/* Email Address Field */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message here (a paragraph or two)"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactUs;


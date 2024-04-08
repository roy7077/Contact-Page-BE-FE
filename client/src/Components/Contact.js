import React, { useState } from 'react';
import handleSubmit from '../Utils/handleSubmit'; // Correct import path
import '../Style/contactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log(formData);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={(event) => handleSubmit(event, formData)}> {/* Call handleSubmit function directly */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="query">Query:</label>
                    <textarea
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;

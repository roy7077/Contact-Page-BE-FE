const handleSubmit = async (event, formData) => { // Remove 'event' from parameters
    event.preventDefault(); // Include event.preventDefault() here
    try {
        console.log(formData);
        const response = await fetch('http://localhost:8080/api/v1/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            // Handle success
            console.log('Data submitted successfully');
        } else {
            // Handle error
            console.error('Failed to submit data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export default handleSubmit;

const nodemailer = require('nodemailer');
require('dotenv').config();
const fs = require('fs');

// Read the HTML template file
const htmlTemplate = fs.readFileSync('Utils/emailTemplate.html', 'utf8');


exports.mailSender= (User)=>{
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST, // Your SMTP host
        auth: {
            user: process.env.MAIL_USER,// Your email address
            pass: process.env.MAIL_PASS // Your email password
        }
    });
    
    // Define the email options
    const mailOptions = {
        from: process.env.MAIL_USER, // Sender email address
        to: User.email, // Receiver email address
        subject: 'Test Email', // Subject line
        html: htmlTemplate
        // You can also use html instead of text if you want to send HTML content
        // html: '<p>Hello, This is a test email!</p>'
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    
}

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Button, TextField, Box, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const form = useRef<HTMLFormElement>(null);

  // Function to validate email format
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return regex.test(email);
  };

  // Function to show Snackbar
  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  // Function to close Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    setNameError(name === '');
    setEmailError(email === '' || !validateEmail(email)); // Check if email is empty or invalid
    setMessageError(message === '');

    // Check if all fields are valid
    if (name && validateEmail(email) && message && form.current) {
      // Ensure environment variables are defined
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        showSnackbar('EmailJS credentials are missing. Please check your .env file.', 'error');
        return;
      }

      // Send email using EmailJS
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            showSnackbar('Message sent successfully!', 'success');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error);
            showSnackbar('Failed to send the message. Please try again.', 'error');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="contact_wrapper">
        <h1>Contact Me</h1>
        <p>Have a project idea? Let's work together to bring it to life!</p>
        <Box
          ref={form}
          component="form"
          noValidate
          autoComplete="off"
          className="contact-form"
          onSubmit={sendEmail}
        >
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="How can I reach you?"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? (email === '' ? 'Please enter your email' : 'Invalid email format') : ''}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            id="outlined-required"
            label="Name"
            placeholder="What's your name?"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            helperText={nameError ? 'Please enter your name' : ''}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            id="outlined-multiline-static"
            label="Message"
            placeholder="Send me any inquiries or questions"
            name="message"
            multiline
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
            helperText={messageError ? 'Please enter the message' : ''}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            sx={{ mt: 2, backgroundColor: '#5000ca', color: 'white', '&:hover': { backgroundColor: '#3a0096' } }}
          >
            Send
          </Button>
        </Box>
      </div>

      {/* Snackbar for displaying alerts */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={8000} // Auto-close after 6 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%'}}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
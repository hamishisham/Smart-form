import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text', validation: { required: 'First name is required' } },
  { name: 'lastName', label: 'Last Name', type: 'text', validation: { required: 'Last name is required' } },
  { name: 'email', label: 'Email', type: 'email', validation: { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' } } },
  { name: 'age', label: 'Age', type: 'number', validation: { required: 'Age is required', min: { value: 18, message: 'Minimum age is 18' } } },
  { name: 'phone', label: 'Phone Number', type: 'tel', validation: { required: 'Phone is required', minLength: { value: 10, message: 'Min 10 digits' } } },
  { name: 'address', label: 'Address', type: 'text', validation: { required: 'Address is required' } },
  { name: 'city', label: 'City', type: 'text', validation: { required: 'City is required' } },
  { name: 'state', label: 'State', type: 'text', validation: { required: 'State is required' } },
  { name: 'zip', label: 'ZIP Code', type: 'text', validation: { required: 'ZIP Code is required' } },
  { name: 'country', label: 'Country', type: 'text', validation: { required: 'Country is required' } },
  { name: 'jobTitle', label: 'Job Title', type: 'text', validation: { required: 'Job title is required' } },
  { name: 'company', label: 'Company', type: 'text', validation: { required: 'Company name is required' } },
  { name: 'linkedin', label: 'LinkedIn Profile', type: 'url', validation: { required: 'LinkedIn profile is required' } },
  { name: 'github', label: 'GitHub Profile', type: 'url', validation: { required: 'GitHub profile is required' } },
  { name: 'website', label: 'Personal Website', type: 'url', validation: { required: 'Website is required' } },
  { name: 'education', label: 'Education Level', type: 'text', validation: { required: 'Education is required' } },
  { name: 'experience', label: 'Years of Experience', type: 'number', validation: { required: 'Experience is required' } },
  { name: 'skills', label: 'Skills', type: 'text', validation: { required: 'Skills are required' } },
  { name: 'language', label: 'Preferred Language', type: 'text', validation: { required: 'Language is required' } },
  { name: 'about', label: 'About You', type: 'text', validation: { required: 'This field is required' } },
];

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
          Smart Dynamic Form
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mt: 2, borderRadius: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {fields.map((field) => (
                <Grid item xs={12} sm={6} key={field.name}>
                  <TextField
                    fullWidth
                    label={field.label}
                    type={field.type}
                    {...register(field.name, field.validation)}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                    onChange={() => {
                      if (errors[field.name]) clearErrors(field.name);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Box mt={4} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ px: 4, py: 1.5, borderRadius: 2 }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
}

export default App;

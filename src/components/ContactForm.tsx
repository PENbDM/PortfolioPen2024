import React, { useState } from 'react';
import { Input, Button, Textarea, FormControl, FormLabel } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    const templateParams = {
      name: name,
      email: email,
      comment: comment,
    };

    emailjs.send(
      'service_iw0smga',    
      'template_g7a4xer',   
      templateParams,
      'yxKmGIRhdM-0a-gGB'     
    )
    .then((response:any) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setComment('');
    })
    .catch((error:any) => {
      console.log('FAILED...', error);
      setErrorMessage('Failed to send your message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className='w-full max-w-[600px] '>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <div className='flex justify-between mb-5 max-[530px]:flex-col '>
            <div className='flex flex-col'>
              <FormLabel>Name</FormLabel>
              <Input required size='lg' placeholder='Enter your name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col'>
              <FormLabel>Email</FormLabel>
              <Input required size='lg' placeholder='Enter your email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className='mb-5'>
            <FormLabel>Comment</FormLabel>
            <Textarea required size='lg' className='resize-none' placeholder='Here is a sample placeholder' value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <div className='mb-3 mt-2 '>
            <Button
              className='w-full'
              mt={4}
              colorScheme='teal'
              type='submit'
              isLoading={isSubmitting}  // Show loading state when submitting
            >
              Submit
            </Button>
          </div>
          <div className='mb-3'>
          {successMessage && <p className='text-green-500'>{successMessage}</p>}
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          </div>
        </FormControl>
      </form>
    </div>
  );
}

export default ContactForm;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51J6gUTCwIFeUwNYioMxYItHGLAu3eFnYlnqyQG5kytFMTgTmyLqoBiSvq2wjzDgXU0dTJDmmR6duZOEl4GwVUwtP00GuQK8smc'

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log('Payment Error', JSON.parse(error));
        alert(
          'There was an issue with your payment.'
        )
      })
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='clothing ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeButton;


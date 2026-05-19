/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51TVGKy1qhJpBmXvO5suSBatVF0ZFcMzdrq0B9EbMGPgGjmm9hTUYRdntSTvONhDvgEeRRNvAPFHBpTNc2dkR2aJa00Jte2PeFD',
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    //console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

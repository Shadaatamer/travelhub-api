/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const createReview = async (tourId, review, rating) => {
  try {
    console.log('createReview called', { tourId, review, rating });
    const res = await axios({
      method: 'POST',
      url: `/api/v1/tours/${tourId}/reviews`,
      data: {
        review,
        rating,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Review submitted successfully!');
      window.setTimeout(() => {
        location.reload();
      }, 1200);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

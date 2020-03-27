import Axios from 'axios';

const push = token => {
  return Axios.post(
    'https://fcm.googleapis.com/fcm/send',
    {
      data: {
        message: 'EH OUIIII'
      },
      to: token
    },
    {
      headers: {
        Authorization:
          'key=AAAAz1iKsEs:APA91bF7s3ZwrOb6R_0Fd3ttsY8vS5WRmkQpdRpDj2qjaw-OmFaIxLPIkWHdp71CNIfuaVX9tX88d2oBN6wz9bskqCVyEmL-zgcwxm8ZxM07x5yS1REtDW5L0RSALKfoQlkyBv8NWG0l'
      }
    }
  );
};

export { push };

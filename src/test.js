
import fetch from 'node-fetch';

fetch('https://api.bindid-sandbox.io/session-feedback', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'BindIdBackend AccessToken BtAT4owpRW1Iu2eon8nYZOJlUmgMYA6-naw6cOiQusE; QcHJ8aBF3EdA4aYRFwccRJ4GlDp+gbyOXdtKNcZlR6w='
  },
  body: JSON.stringify({
    "subject_session_at": "BtAT4owpRW1Iu2eon8nYZOJlUmgMYA6-naw6cOiQusE",
    "reports": [
        {
            "alias": "test123456",
            "time": 1631260724,
            "type": "authentication_performed"
        }
    ]
}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', res);
})
.catch((error) => {
  console.error('Error:', error);
});
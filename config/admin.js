module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c0f0dabf83424bf1211f1440a110027'),
  },
});

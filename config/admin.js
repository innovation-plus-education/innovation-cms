module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '183b2b47b3680137fe141205208001bd'),
  },
});

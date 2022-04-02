module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bb31897875ddfa5e374e4b85e3bcf70c'),
  },
});

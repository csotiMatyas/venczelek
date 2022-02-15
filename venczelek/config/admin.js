module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b7604cb2ad827e95f8f8767472fd56e'),
  },
});

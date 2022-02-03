module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3908f4840fc5261335f6030221dc55e'),
  },
});

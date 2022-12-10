module.exports.ironOptions = () => {
  return {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "densyakun_blueprint",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  };
};
const errorHandler = (err, req, res) => {
  res.status(err.response.status).json({
    status: err.response.status,
    message: err.response.data.message,
  });
};

module.exports = errorHandler;

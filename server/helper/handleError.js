export default function handleError(res, ex) {

  let statusCode = ex.status || 500;
  let errorResp;

  if (ex.name === 'ValidationError') {
    statusCode = 422;
    errorResp = ex;
  } else if (ex.name === 'MongoError') {
    statusCode = 422;
    errorResp.message = ex.errmsg
  } else if (ex.message) {
    errorResp = {
      errors: { ...ex, message: ex.message },
    };
  } else {
    errorResp = { ...ex };
  }

  // remove fields from output to client side
  errorResp.errors.stack = undefined;
  errorResp.errors.isPublic = undefined;
  errorResp.errors.isOperational = undefined;
  errorResp.errors.status = undefined;

  res.status(statusCode).json(errorResp);
}

const response = (message, data = null, success = true) => ({
  success,
  message,
  data,
});

export { response };

class HTTPError extends Error {
  constructor({ status, text, message }) {
    super(message);
    this.name = 'HTTPError';
    this.status = status;
    this.text = text;
  }
}

export default HTTPError;

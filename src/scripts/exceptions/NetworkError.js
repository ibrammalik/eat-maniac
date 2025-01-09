class NetworkError extends Error {
  constructor({ title, message }) {
    super(message);
    this.name = 'NetworkError';
    this.title = title;
  }
}

export default NetworkError;

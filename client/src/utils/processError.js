const errorsVocabluary = {
  'Failed to fetch': 'Проблема при установке интернет-соединения',
};

const processError = (error) => {
  if (error.networkError) {
    const message = error.networkError.message;
    if (errorsVocabluary[message]) {
      return errorsVocabluary[message];
    }
    return error.networkError.message;
  }
  if (error.graphQLErrors && error.graphQLErrors.length) {
    return error.graphQLErrors.map((err) => err.message).join(', ');
  }
  return error.message;
};

export default processError;

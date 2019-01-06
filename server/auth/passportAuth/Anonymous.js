const anonymusSuccessPayload = () => ({
  role: 'public',
});

class Strategy {
  constructor() {
    this.name = 'authenticate-as-anonymous';
  }

  // this will be overridden by passport
  success(user, info) {}

  authenticate(param) {
    this.success(anonymusSuccessPayload());
  }
}

module.exports.Strategy = Strategy;

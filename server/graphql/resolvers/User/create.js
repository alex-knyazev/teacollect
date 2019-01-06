const saveFile = require('../../../utils/saveFile');

module.exports = async (args, context) => {
  const { User } = context.models;

  const { input } = args;

  const { avatar } = input;
  if (avatar) {
    const file = await avatar;

    const { urlToFile, filename } = await saveFile(file);
    input.avatar = {
      src: urlToFile,
      title: filename,
    };
  }

  const user = new User(input);
  await user.save();
  return user;
};

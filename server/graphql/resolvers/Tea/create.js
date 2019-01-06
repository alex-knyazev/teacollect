const saveFile = require('../../../utils/saveFile');
const { locationToGeoPoint } = require('../../../utils/locationAdapter');

module.exports = async (args, context) => {
  const { Tea } = context.models;

  const { input } = args;

  const { image } = input;
  if (image) {
    const file = await image;

    const { urlToFile, filename } = await saveFile(file);
    input.image = {
      src: urlToFile,
      title: filename,
    };
  }

  const {
    birthplace: { location },
  } = input;
  if (location) {
    const geoPoint = locationToGeoPoint(location);
    input.birthplace.location = geoPoint;
  }

  const tea = new Tea(input);
  await tea.save();
  return tea;
};

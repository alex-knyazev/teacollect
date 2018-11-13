export default async (args, context) => {
  const { TeaType } = context.models;

  const { input } = args;

  const teaType = new TeaType(input);
  await teaType.save();
  return teaType;
};

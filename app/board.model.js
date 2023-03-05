module.exports = (sequelize, DataType) => {
  const board = sequelize.define(
    "BOARD",
    {
      time: { type: DataType.DATE, primaryKey: true },
      user_id: {
        type: DataType.STRING,
      },
      title: {
        type: DataType.STRING,
        primaryKey: true,
      },
      description: {
        type: DataType.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return board;
};

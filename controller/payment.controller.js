module.exports = () => {
  //service to be imported here
  // personal user function

  const test = async (req, res, next) => {
    try {
      res.status(200).send({
        statys: 200,
        result: "Great!!"
      });
    } catch (error) {
      next(error);
    }
  };

  return {
    test
  };
};

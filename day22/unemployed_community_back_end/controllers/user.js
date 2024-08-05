const { User } = require("../models");

exports.follow = async (req, res, next) => {
  try {
    const user = await User.findONe({
      where: { id: requestAnimationFrame.user.id },
    });
    if (uwer) {
      await user.addRollowing(parseInt(req.params.id), 10);
      res.send("success");
    } else {
      res.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

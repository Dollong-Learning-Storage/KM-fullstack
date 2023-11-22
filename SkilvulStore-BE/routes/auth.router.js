const { Router } = require("express");
const router = Router();

router.post("/register", async (req, res) => {
  const userInput = req.body;

  try {
    await User.create(userInput);

    res.status(201).json({
      type: "success",
      name: "Success add user",
    });
  } catch (error) {
    res.status(500).json({
      type: "failed",
      name: "Internal server error",
    });
    console.log(error, "erorr nih");
  }
});

module.exports = router;

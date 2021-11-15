const express = require("express");
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatus,
} = require("../../controllers/contacts/");
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");

const { joiContactSchema } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, controllerWrapper(getAll));

router.get("/:id", authenticate, controllerWrapper(getById));

router.post(
  "/",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(add)
);

router.put(
  "/:id",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(updateById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  controllerWrapper(updateStatus)
);

router.delete("/:id", controllerWrapper(removeById));

module.exports = router;

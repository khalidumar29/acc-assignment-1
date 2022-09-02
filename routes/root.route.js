const express = require("express");
const router = express.Router();
const rootController = require("../controller/root.controller");
router
  .route("/")
  /**
   * @api {get} /server running status
   * @apiDescription Get server running status
   * @apiPermission public
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {html/text} get server running status.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(rootController.getRoot);
module.exports = router;

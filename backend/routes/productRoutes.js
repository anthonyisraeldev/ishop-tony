import express from "express";
const router = express.Router();
import {
  getProducsts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
/**
 * @openapi
 * /:
 *   get:
 *     description: Get products
 *     responses:
 *       200:
 *         description: Returns all products.
 */
router.route("/").get(getProducsts);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/create").post(protect, admin, createProduct);
export default router;

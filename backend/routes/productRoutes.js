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

router.route("/").get(getProducsts);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/create").post(protect, admin, createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: List of products.
 *     tags: [Products]
 *     description: Can be used to populate a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The product ID.
 *                         example: 62c9004b87f1816740c9dd31
 *                       user:
 *                         type: string
 *                         description: The user's id.
 *                         example: 62c9004b87f1816740c9dd2d
 *                       name:
 *                         type: string
 *                         description: Product name.
 *                         example: Sony headhones
 *                       image:
 *                         type: string
 *                         description: Product image.
 *                         example: /images/prod3.png
 *                       brand:
 *                         type: string
 *                         description: Product brand.
 *                         example: Sony
 *                       category:
 *                         type: string
 *                         description: Product category.
 *                         example: Audio
 *                       offer:
 *                         type: boolean
 *                         description: Product offer availability.
 *                         example: true
 *                       description:
 *                         type: string
 *                         description: Product description.
 *                         example: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
 *                       rating:
 *                         type: integer
 *                         description: Product rating.
 *                         example: 5
 *                       numReviews:
 *                         type: integer
 *                         description: Product number of reviews.
 *                         example: 1
 *                       price:
 *                         type: integer
 *                         description: Product price.
 *                         example:  109.99
 *                       countInStock:
 *                         type: integer
 *                         description: Product stock.
 *                         example:  10
 *                       reviews:
 *                         type: object
 *                         description: Product reviews.
 *                         example: [{ name: "John Doe", rating: 5, comment: "Amazing", user: "62c9004b87f1816740c9dd2e", _id: "62c900b6d029b89c07e574b6", createdAt: "2022-07-09T04:14:46.096Z", updatedAt: "2022-07-09T04:14:46.096Z" }]
 *                       __v:
 *                         type: integer
 *                         description: Id.
 *                         example:  1
 *                       createdAt:
 *                         type: date
 *                         description: Date of creationg.
 *                         example:  "2022-07-09T04:14:46.096Z"
 *                       updatedAt:
 *                         type: date
 *                         description: Date of update.
 *                         example:  "2022-07-09T04:14:46.096Z"
 */

export default router;

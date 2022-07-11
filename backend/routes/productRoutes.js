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
 *       404:
 *         description: not found
 */

//==========
//	Create a product
//==========

/**
 * @swagger
 * /products/create:
 *   post:
 *     security: [{ bearerAuth: [] }]
 *     summary: Create a new product.
 *     tags: [Product]
 *     description: Can be used to create a product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name.
 *                 example: Galaxy s22 Ultra
 *               price:
 *                 type: integer
 *                 description: Product price.
 *                 example: 700
 *               image:
 *                 type: string
 *                 description: Product image.
 *                 example: /images/sample2.jpg
 *               brand:
 *                 type: string
 *                 description: Product brand.
 *                 example: Samsung
 *               countInStock:
 *                 type: integer
 *                 description: Product stock.
 *                 example: 99
 *               category:
 *                 type: string
 *                 description: Product category.
 *                 example: Smartphones
 *               description:
 *                 type: string
 *                 description: Product description.
 *                 example: Is a test description
 *               offer:
 *                 type: boolean
 *                 description: Product offer.
 *                 example: true
 *     responses:
 *       200:
 *         description: Product creation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       user:
 *                         type: string
 *                         description: Admin user ID.
 *                         example: 62c9004b87f1816740c9dd2d
 *                       name:
 *                         type: string
 *                         description: Product name.
 *                         example: Galaxy s22 Ultra
 *                       image:
 *                         type: string
 *                         description: Product image.
 *                         example: /images/sample1.jpg
 *                       brand:
 *                         type: string
 *                         description: Product brand.
 *                         example: Samsung
 *                       category:
 *                         type: string
 *                         description: Product category.
 *                         example: Smartphones
 *                       offer:
 *                         type: boolean
 *                         description: Product offer.
 *                         example: true
 *                       description:
 *                         type: string
 *                         description: Product description.
 *                         example: Is a test description
 *                       rating:
 *                         type: integer
 *                         description: Product rating.
 *                         example: 0
 *                       numReviews:
 *                         type: integer
 *                         description: Product number of reviews.
 *                         example: 0
 *                       price:
 *                         type: integer
 *                         description: Product price.
 *                         example:  700
 *                       countInStock:
 *                         type: integer
 *                         description: Product stock.
 *                         example: 0
 *                       _id:
 *                         type: string
 *                         description: The product ID.
 *                         example: 62cc45d10ee5298bef18e7c7
 *                       reviews:
 *                         type: object
 *                         description: Product reviews.
 *                         example: []
 *                       createdAt:
 *                         type: date
 *                         description: Date of creationg.
 *                         example:  "2022-07-09T04:14:46.096Z"
 *                       updatedAt:
 *                         type: date
 *                         description: Date of update.
 *                         example:  "2022-07-09T04:14:46.096Z"
 *                       __v:
 *                         type: integer
 *                         description: Id.
 *                         example:  1
 */

//==========
//	Delete a product
//==========

/**
 * @swagger
 * /products/{productId}:
 *  delete:
 *      tags: [Product]
 *      security: [{ bearerAuth: [] }]
 *      description: Delete user
 *      summary: Product delete.
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of product to delete
 *      responses:
 *          200:
 *              description: Product was deleted
 *      404:
 *         description: not found
 */

//==========
//	Update a product
//==========

/**
 * @swagger
 * /products/{productId}:
 *  put:
 *      tags: [Product]
 *      security: [{ bearerAuth: [] }]
 *      description: Delete user
 *      summary: Product updated.
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name.
 *                 example: Galaxy s22 Ultra TEST UPDATED
 *               price:
 *                 type: integer
 *                 description: Product price.
 *                 example: 700
 *               image:
 *                 type: string
 *                 description: Product image.
 *                 example: /images/sample2.jpg
 *               brand:
 *                 type: string
 *                 description: Product brand.
 *                 example: Samsung
 *               countInStock:
 *                 type: integer
 *                 description: Product stock.
 *                 example: 99
 *               category:
 *                 type: string
 *                 description: Product category.
 *                 example: Smartphones
 *               description:
 *                 type: string
 *                 description: Product description.
 *                 example: Is a test description
 *               offer:
 *                 type: boolean
 *                 description: Product offer.
 *                 example: true
 *      responses:
 *          200:
 *              description: Product was updated
 *      404:
 *         description: not found
 */

export default router;

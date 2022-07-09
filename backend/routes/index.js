import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
import orderRoutes from "./orderRoute.js";
import uploadRoutes from "./uploadRoutes.js";

const appRoutes = (app) => {
  app.use("/api/products", productRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/upload", uploadRoutes);
  app.get("/api/config/paypal", (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID)
  );
};

export default appRoutes;

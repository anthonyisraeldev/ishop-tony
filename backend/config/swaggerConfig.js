const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "iShop Ecommerce",
      version: "1.0.0",
      description: "MERN Stack Ecommerce API",
      termsOfService: "https://smartbear.com/terms-of-use/",
      contact: {
        name: "Live demo",
        url: "https://tonyishop.herokuapp.com/",
        email: "anthonyisrael.dev@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "My API Documentation Developer Server",
      },
    ],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["backend/routes/*.js"],
};

export default swaggerOpts;

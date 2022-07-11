const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "iShop Ecommerce",
      version: "1.0.0",
      description: "MERN Stack Ecommerce API",
      termsOfService: "http://example.com/terms/",
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
    security: [{ ApiKey: [] }],
    components: {
      securitySchemes: {
        ApiKey: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
  },
  apis: ["backend/routes/*.js"],
};

export default swaggerOpts;

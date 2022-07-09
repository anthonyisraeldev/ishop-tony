const swaggerOpts = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "Ecommerce API for project",
      termsOfService: "https://smartbear.com/terms-of-use/",
      contact: {
        name: "Api Support",
        url: "https://swagger.io/docs/specification/api-general-info//",
        email: "eortega@escalab.academy",
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
  apis: ["./routes/*.js"],
};

export default swaggerOpts;

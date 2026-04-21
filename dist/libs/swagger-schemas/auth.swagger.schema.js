export const authInputSwaggerSchema = {
    type: "object",
    required: ["email", "password"],
    properties: {
        email: {
            type: "string",
            format: "email",
            example: "user@example.com",
            description: "Must be unique across all the users",
        },
        password: { type: "string" },
    },
};
//# sourceMappingURL=auth.swagger.schema.js.map
import "dotenv/config";
export declare const swaggerOptions: {
    definition: {
        openapi: string;
        info: {
            title: string;
            version: string;
            description: string;
        };
        servers: {
            url: string;
            description: string;
        }[];
        components: {
            schemas: {
                LoginInput: {
                    type: string;
                    required: string[];
                    properties: {
                        email: {
                            type: string;
                            format: string;
                            example: string;
                            description: string;
                        };
                        password: {
                            type: string;
                        };
                    };
                };
                RegisterInput: {
                    allOf: ({
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                            };
                        };
                        $ref?: never;
                    } | {
                        $ref: string;
                        type?: never;
                        required?: never;
                        properties?: never;
                    })[];
                };
                LoginOutput: {
                    type: string;
                    properties: {
                        message: {
                            type: string;
                        };
                        user: {
                            $ref: string;
                        };
                        token: {
                            type: string;
                        };
                    };
                };
                User: {
                    type: string;
                    required: string[];
                    properties: {
                        _id: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        email: {
                            type: string;
                            format: string;
                            example: string;
                            description: string;
                        };
                        password: {
                            type: string;
                        };
                        role: {
                            type: string;
                            default: string;
                        };
                        playlist: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        createdAt: {
                            type: string;
                            format: string;
                        };
                        updatedAt: {
                            type: string;
                            format: string;
                        };
                    };
                };
                Profile: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        email: {
                            type: string;
                            format: string;
                            example: string;
                            description: string;
                        };
                        role: {
                            type: string;
                            default: string;
                        };
                        playlist: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        _id: {
                            type: string;
                        };
                        createdAt: {
                            type: string;
                        };
                        updatedAt: {
                            type: string;
                        };
                        __v: {
                            type: string;
                        };
                    };
                };
                playlistToggleResponse: {
                    type: string;
                    properties: {
                        message: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
    apis: string[];
};
//# sourceMappingURL=swagger.d.ts.map
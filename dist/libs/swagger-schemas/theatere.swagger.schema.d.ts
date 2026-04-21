export declare const theatreSwaggerSchema: {
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            minLength: number;
        };
        description: {
            type: string;
        };
        city: {
            type: string;
        };
        pincode: {
            type: string;
        };
        address: {
            type: string;
        };
        movies: {
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
//# sourceMappingURL=theatere.swagger.schema.d.ts.map
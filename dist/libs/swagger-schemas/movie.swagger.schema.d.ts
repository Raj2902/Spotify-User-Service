export declare const userSwaggerSchema: {
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            minLength: number;
        };
        description: {
            type: string;
            minLength: number;
        };
        casts: {
            type: string;
            items: {
                type: string;
            };
        };
        trailerUrl: {
            type: string;
        };
        language: {
            type: string;
            default: string;
        };
        releaseDate: {
            type: string;
            format: string;
        };
        director: {
            type: string;
        };
        releaseStatus: {
            type: string;
            default: string;
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
//# sourceMappingURL=movie.swagger.schema.d.ts.map
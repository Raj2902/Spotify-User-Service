import type { addToPlayListParams, IUser, loginParams, registerParams } from "./interface.js";
export declare const loginService: ({ email, password, }: loginParams) => Promise<{
    token: string;
    user: IUser;
}>;
export declare const registerService: ({ name, email, password, }: registerParams) => Promise<{
    token: string;
    user: IUser;
}>;
export declare const addToPlayListService: ({ userId, songId, }: addToPlayListParams) => Promise<{
    removed: boolean;
}>;
//# sourceMappingURL=service.d.ts.map
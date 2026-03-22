import { Document } from "mongoose";
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    playlist: string[];
}
export interface registerParams {
    name: string;
    email: string;
    password: string;
}
export interface loginParams {
    email: string;
    password: string;
}
//# sourceMappingURL=interface.d.ts.map
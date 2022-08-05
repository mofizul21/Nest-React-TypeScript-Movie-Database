import { Document } from 'mongoose';
export interface Movie extends Document {
    readonly title: string;
    readonly description: string;
    readonly poster: string;
    readonly author: string;
    readonly date_posted: string;
}

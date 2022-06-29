import { Mongoose, ConnectionOptions } from 'mongoose';
export declare class Mongo {
    uri: string;
    db: Mongoose;
    options: ConnectionOptions;
    constructor(uri: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

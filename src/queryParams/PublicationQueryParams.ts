import { PublicationDestination } from "../models/publication";

export default class PublicationQueryParams {
    public destination?: PublicationDestination;
    public content?: string;
    
    constructor(init?: Partial<PublicationQueryParams>) {
        Object.assign(this, init);
    }
}
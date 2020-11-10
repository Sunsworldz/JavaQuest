import { Address } from './address';
import { Photo } from './photo';

export class User {
    birthDate: Date;
    size: number;
    photos: Photo[];
    address: Address; 
}
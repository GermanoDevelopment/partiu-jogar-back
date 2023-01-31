import { PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

export abstract class AbstractEntity {
    @PrimaryGeneratedColumn()
    id: string = uuidv4();
    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date = new Date();
    @CreateDateColumn({ type: "timestamp" })
    updatedAt: Date = new Date();
}
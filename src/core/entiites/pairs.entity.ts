import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pairs {
    @PrimaryColumn()
    id: number;

    @Column()
    pair: string;
    
    @Column()
    token0: string;

    @Column()
    token1: string;
}
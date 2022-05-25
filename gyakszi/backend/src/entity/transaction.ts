import { Bankclient } from "./bankclient";
import { Bankaccount } from "./bankaccount";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    transactionid : number;

    @Column()
    accountNumber1 : string;
    @Column()
    accountNumber2 : Bankaccount;
    @Column()
    sumOfTransaction : number;
    @Column()
    description : string;
    @Column({ type : Date})
    date : Date;
}
import {Table, Column, Model, Unique, PrimaryKey, AutoIncrement} from 'sequelize-typescript';

@Table
export default class Cat extends Model<Cat> {
    @PrimaryKey
    @AutoIncrement
    @Unique
    @Column
    id!: number;

    @Column
    name!: string; 

    @Column
    age!: number;

    @Column
    isMale!: boolean
}
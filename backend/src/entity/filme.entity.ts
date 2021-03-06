import { FilmeEntity } from './filme.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GeneroEntity } from './genero.entity';


@Entity({name: 'filme'})
export class FilmeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100, nullable: false})
    nome: string;

    @ManyToOne(type => GeneroEntity, { eager: true, nullable: false })
    @JoinColumn({name: 'genero_id'})
    genero: GeneroEntity;    

    @Column({nullable: false})
    ano: number;

    @Column({length: 100, nullable: false})
    sinopse: string;
}
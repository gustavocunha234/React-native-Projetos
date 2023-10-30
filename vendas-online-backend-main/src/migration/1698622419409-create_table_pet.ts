import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablePet1698622419409 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE public.pet (
                id integer NOT NULL,
                species character varying NOT NULL,
                gender character varying NOT NULL,
                race character varying NOT NULL,
                address character varying NOT NULL,
                reason character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id)
            );

            CREATE SEQUENCE public.pet_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.pet_id_seq OWNED BY public.pet.id;

            ALTER TABLE ONLY public.pet ALTER COLUMN id SET DEFAULT nextval('public.pet_id_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            drop table public.pet;
        `);
  }

}
import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPetAddImageAndName1698882278307 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE public.pet 
            ADD COLUMN name character varying,
            ADD COLUMN image character varying
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE public.pet 
            DROP COLUMN image,
            DROP COLUMN name
        `);
    }
}

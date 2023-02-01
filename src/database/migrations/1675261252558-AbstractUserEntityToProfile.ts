import { MigrationInterface, QueryRunner } from "typeorm";

export class AbstractUserEntityToProfile1675261252558 implements MigrationInterface {
    name = 'AbstractUserEntityToProfile1675261252558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supervisor" ALTER COLUMN "role" SET DEFAULT 'Supervisor'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supervisor" ALTER COLUMN "role" SET DEFAULT 'User'`);
    }

}

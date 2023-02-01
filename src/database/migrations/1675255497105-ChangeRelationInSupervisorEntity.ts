import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRelationInSupervisorEntity1675255497105 implements MigrationInterface {
    name = 'ChangeRelationInSupervisorEntity1675255497105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_a4f807d182dd16c35f9d27ef66b"`);
        await queryRunner.query(`ALTER TABLE "school" DROP COLUMN "supervisor_id"`);
        await queryRunner.query(`ALTER TABLE "supervisor" ADD "school_id" integer`);
        await queryRunner.query(`ALTER TABLE "supervisor" ADD CONSTRAINT "FK_d8f7905ff699c1761eff38b753b" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "supervisor" DROP CONSTRAINT "FK_d8f7905ff699c1761eff38b753b"`);
        await queryRunner.query(`ALTER TABLE "supervisor" DROP COLUMN "school_id"`);
        await queryRunner.query(`ALTER TABLE "school" ADD "supervisor_id" integer`);
        await queryRunner.query(`ALTER TABLE "school" ADD CONSTRAINT "FK_a4f807d182dd16c35f9d27ef66b" FOREIGN KEY ("supervisor_id") REFERENCES "supervisor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

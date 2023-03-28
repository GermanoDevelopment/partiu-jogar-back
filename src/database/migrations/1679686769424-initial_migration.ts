import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1679686769424 implements MigrationInterface {
    name = 'initialMigration1679686769424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, "school_id" integer, "court_id" integer, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_53da8af5b0d868c6276b9008add" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_132a384fd9afee8fe71fd9610ef" FOREIGN KEY ("court_id") REFERENCES "court"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_132a384fd9afee8fe71fd9610ef"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_53da8af5b0d868c6276b9008add"`);
        await queryRunner.query(`DROP TABLE "image"`);
    }

}

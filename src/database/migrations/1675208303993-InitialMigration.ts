import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1675208303993 implements MigrationInterface {
    name = 'InitialMigration1675208303993'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('Super admin', 'User', 'Supervisor', 'Supervisor admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstname" character varying, "lastname" character varying, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "password" character varying, "confirmed" boolean NOT NULL DEFAULT false, "role" "public"."user_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."supervisor_role_enum" AS ENUM('Super admin', 'User', 'Supervisor', 'Supervisor admin')`);
        await queryRunner.query(`CREATE TABLE "supervisor" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstname" character varying, "lastname" character varying, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "password" character varying, "confirmed" boolean NOT NULL DEFAULT false, "role" "public"."supervisor_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_f03c0861936e1aa8d3e25fedc4d" UNIQUE ("email"), CONSTRAINT "UQ_0b82d22f3615778ef89810e5e7a" UNIQUE ("cpf"), CONSTRAINT "PK_6364b1ffaa6ca051de919c802ed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying, "location" character varying, "supervisor_id" integer, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "court" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying, "location" character varying, "school_id" integer, CONSTRAINT "PK_d8f2118c52b422b03e0331a7b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booktime" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "reserved" boolean NOT NULL DEFAULT false, "approved" boolean NOT NULL DEFAULT false, "applicant_id" integer, "supervisor_id" integer, "schedule_id" integer, CONSTRAINT "PK_9329839932c25098f18a113a9c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "school" ADD CONSTRAINT "FK_a4f807d182dd16c35f9d27ef66b" FOREIGN KEY ("supervisor_id") REFERENCES "supervisor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_45e943f1af1d51c18dfbfd442ee" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_9a547b0a8b31c1e97493263ce7e" FOREIGN KEY ("applicant_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_a1cfe55ef517466fc6337a65643" FOREIGN KEY ("supervisor_id") REFERENCES "supervisor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_bcea95948c02b793e6c22364cea" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_bcea95948c02b793e6c22364cea"`);
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_a1cfe55ef517466fc6337a65643"`);
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_9a547b0a8b31c1e97493263ce7e"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_45e943f1af1d51c18dfbfd442ee"`);
        await queryRunner.query(`ALTER TABLE "school" DROP CONSTRAINT "FK_a4f807d182dd16c35f9d27ef66b"`);
        await queryRunner.query(`DROP TABLE "booktime"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
        await queryRunner.query(`DROP TABLE "court"`);
        await queryRunner.query(`DROP TABLE "school"`);
        await queryRunner.query(`DROP TABLE "supervisor"`);
        await queryRunner.query(`DROP TYPE "public"."supervisor_role_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}

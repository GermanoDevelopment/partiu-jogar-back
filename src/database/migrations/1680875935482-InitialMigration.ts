import { MigrationInterface, QueryRunner } from "typeorm";

export class  InitialMigration1680875935482 implements MigrationInterface {
    name = ' InitialMigration1680875935482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstname" character varying, "lastname" character varying, "cpf" character varying NOT NULL, "confirmed" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_076db4b6e428a66ccb957c566b7" UNIQUE ("cpf"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('Super admin', 'User', 'Supervisor', 'Supervisor admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying, "role" "public"."user_role_enum" DEFAULT 'Supervisor', "type" character varying NOT NULL, "school_id" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_31ef2b4d30675d0c15056b7f6e" ON "user" ("type") `);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "path" character varying NOT NULL, "school_id" integer, "court_id" integer, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "school" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying, "location" character varying, CONSTRAINT "PK_57836c3fe2f2c7734b20911755e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "court" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying, "location" character varying, "school_id" integer, CONSTRAINT "PK_d8f2118c52b422b03e0331a7b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booktime" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "reserved" boolean NOT NULL DEFAULT false, "approved" boolean NOT NULL DEFAULT false, "applicant_id" integer, "supervisor_id" integer, "schedule_id" integer, CONSTRAINT "PK_9329839932c25098f18a113a9c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ed1bcfe9ae995a567b529f316a2" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_53da8af5b0d868c6276b9008add" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_132a384fd9afee8fe71fd9610ef" FOREIGN KEY ("court_id") REFERENCES "court"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_45e943f1af1d51c18dfbfd442ee" FOREIGN KEY ("school_id") REFERENCES "school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_9a547b0a8b31c1e97493263ce7e" FOREIGN KEY ("applicant_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_a1cfe55ef517466fc6337a65643" FOREIGN KEY ("supervisor_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booktime" ADD CONSTRAINT "FK_bcea95948c02b793e6c22364cea" FOREIGN KEY ("schedule_id") REFERENCES "schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_bcea95948c02b793e6c22364cea"`);
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_a1cfe55ef517466fc6337a65643"`);
        await queryRunner.query(`ALTER TABLE "booktime" DROP CONSTRAINT "FK_9a547b0a8b31c1e97493263ce7e"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_45e943f1af1d51c18dfbfd442ee"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_132a384fd9afee8fe71fd9610ef"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_53da8af5b0d868c6276b9008add"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ed1bcfe9ae995a567b529f316a2"`);
        await queryRunner.query(`DROP TABLE "booktime"`);
        await queryRunner.query(`DROP TABLE "court"`);
        await queryRunner.query(`DROP TABLE "school"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_31ef2b4d30675d0c15056b7f6e"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
    }

}

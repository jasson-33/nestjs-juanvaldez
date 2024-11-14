import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1731555759713 implements MigrationInterface {
  name = 'SchemaSync1731555759713';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffees" ADD "description" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffees" ADD "recommendations" integer NOT NULL DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffees" DROP COLUMN "recommendations"`,
    );
    await queryRunner.query(`ALTER TABLE "coffees" DROP COLUMN "description"`);
  }
}

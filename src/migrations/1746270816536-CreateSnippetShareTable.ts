import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateSnippetShareTable1746270816536
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'snippet_share',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'snippetId',
            type: 'uuid',
          },
          {
            name: 'sharedWithId',
            type: 'uuid',
          },
          {
            name: 'sharedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'snippet_share',
      new TableForeignKey({
        columnNames: ['snippetId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'snippets',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'snippet_share',
      new TableForeignKey({
        columnNames: ['sharedWithId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('snippet_share');
  }
}

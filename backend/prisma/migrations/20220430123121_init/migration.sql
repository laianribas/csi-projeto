-- AlterTable
ALTER TABLE "Chamado" ALTER COLUMN "avaliacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Setor" ALTER COLUMN "ramal" DROP NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL;

/*
  Warnings:

  - You are about to drop the column `status` on the `Chamado` table. All the data in the column will be lost.
  - You are about to drop the column `nivel_acesso` on the `Funcionario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chamado" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Funcionario" DROP COLUMN "nivel_acesso",
ADD COLUMN     "cargoId" TEXT;

-- CreateTable
CREATE TABLE "Cargo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permissao" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatusOnChamado" (
    "chamadoId" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,

    CONSTRAINT "StatusOnChamado_pkey" PRIMARY KEY ("chamadoId","statusId")
);

-- CreateTable
CREATE TABLE "PermissaoOnCargo" (
    "cargoId" TEXT NOT NULL,
    "permissaoId" TEXT NOT NULL,

    CONSTRAINT "PermissaoOnCargo_pkey" PRIMARY KEY ("cargoId","permissaoId")
);

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusOnChamado" ADD CONSTRAINT "StatusOnChamado_chamadoId_fkey" FOREIGN KEY ("chamadoId") REFERENCES "Chamado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusOnChamado" ADD CONSTRAINT "StatusOnChamado_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissaoOnCargo" ADD CONSTRAINT "PermissaoOnCargo_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissaoOnCargo" ADD CONSTRAINT "PermissaoOnCargo_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "Permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

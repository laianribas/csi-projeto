/*
  Warnings:

  - The primary key for the `Cargo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Cargo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cargoId` column on the `Funcionario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `FuncionarioOnSetor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Permissao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Permissao` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PermissaoOnCargo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Setor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Setor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Status` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `StatusOnChamado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `setorId` on the `Chamado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `setorId` on the `FuncionarioOnSetor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cargoId` on the `PermissaoOnCargo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `permissaoId` on the `PermissaoOnCargo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `statusId` on the `StatusOnChamado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Chamado" DROP CONSTRAINT "Chamado_setorId_fkey";

-- DropForeignKey
ALTER TABLE "Funcionario" DROP CONSTRAINT "Funcionario_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "FuncionarioOnSetor" DROP CONSTRAINT "FuncionarioOnSetor_setorId_fkey";

-- DropForeignKey
ALTER TABLE "PermissaoOnCargo" DROP CONSTRAINT "PermissaoOnCargo_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "PermissaoOnCargo" DROP CONSTRAINT "PermissaoOnCargo_permissaoId_fkey";

-- DropForeignKey
ALTER TABLE "StatusOnChamado" DROP CONSTRAINT "StatusOnChamado_statusId_fkey";

-- AlterTable
ALTER TABLE "Cargo" DROP CONSTRAINT "Cargo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Chamado" DROP COLUMN "setorId",
ADD COLUMN     "setorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Funcionario" DROP COLUMN "cargoId",
ADD COLUMN     "cargoId" INTEGER;

-- AlterTable
ALTER TABLE "FuncionarioOnSetor" DROP CONSTRAINT "FuncionarioOnSetor_pkey",
DROP COLUMN "setorId",
ADD COLUMN     "setorId" INTEGER NOT NULL,
ADD CONSTRAINT "FuncionarioOnSetor_pkey" PRIMARY KEY ("setorId", "funcionarioId");

-- AlterTable
ALTER TABLE "Permissao" DROP CONSTRAINT "Permissao_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Permissao_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PermissaoOnCargo" DROP CONSTRAINT "PermissaoOnCargo_pkey",
DROP COLUMN "cargoId",
ADD COLUMN     "cargoId" INTEGER NOT NULL,
DROP COLUMN "permissaoId",
ADD COLUMN     "permissaoId" INTEGER NOT NULL,
ADD CONSTRAINT "PermissaoOnCargo_pkey" PRIMARY KEY ("cargoId", "permissaoId");

-- AlterTable
ALTER TABLE "Setor" DROP CONSTRAINT "Setor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Setor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Status" DROP CONSTRAINT "Status_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Status_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StatusOnChamado" DROP CONSTRAINT "StatusOnChamado_pkey",
DROP COLUMN "statusId",
ADD COLUMN     "statusId" INTEGER NOT NULL,
ADD CONSTRAINT "StatusOnChamado_pkey" PRIMARY KEY ("chamadoId", "statusId");

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chamado" ADD CONSTRAINT "Chamado_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatusOnChamado" ADD CONSTRAINT "StatusOnChamado_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuncionarioOnSetor" ADD CONSTRAINT "FuncionarioOnSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "Setor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissaoOnCargo" ADD CONSTRAINT "PermissaoOnCargo_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissaoOnCargo" ADD CONSTRAINT "PermissaoOnCargo_permissaoId_fkey" FOREIGN KEY ("permissaoId") REFERENCES "Permissao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

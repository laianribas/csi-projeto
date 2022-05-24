/*
  Warnings:

  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `StatusOnChamado` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "StatusOnChamado" DROP CONSTRAINT "StatusOnChamado_statusId_fkey";

-- AlterTable
ALTER TABLE "Status" DROP CONSTRAINT "Status_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Status_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Status_id_seq";

-- AlterTable
ALTER TABLE "StatusOnChamado" DROP CONSTRAINT "StatusOnChamado_pkey",
ALTER COLUMN "statusId" SET DATA TYPE TEXT,
ADD CONSTRAINT "StatusOnChamado_pkey" PRIMARY KEY ("chamadoId", "statusId");

-- AddForeignKey
ALTER TABLE "StatusOnChamado" ADD CONSTRAINT "StatusOnChamado_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

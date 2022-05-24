/*
  Warnings:

  - The primary key for the `Status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Status` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `StatusOnChamado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `statusId` on the `StatusOnChamado` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "StatusOnChamado" DROP CONSTRAINT "StatusOnChamado_statusId_fkey";

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
ALTER TABLE "StatusOnChamado" ADD CONSTRAINT "StatusOnChamado_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

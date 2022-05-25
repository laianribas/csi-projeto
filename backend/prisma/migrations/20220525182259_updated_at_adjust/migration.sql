/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Status` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `StatusOnChamado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Status" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "StatusOnChamado" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

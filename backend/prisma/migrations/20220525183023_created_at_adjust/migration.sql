/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `StatusOnChamado` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StatusOnChamado" DROP COLUMN "updatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

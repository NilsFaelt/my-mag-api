/*
  Warnings:

  - You are about to drop the column `googleUid` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_googleUid_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleUid";

/*
  Warnings:

  - You are about to drop the `ArticlePrimaryLike` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[googleUid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `googleUid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ArticlePrimaryLike" DROP CONSTRAINT "ArticlePrimaryLike_postId_fkey";

-- DropForeignKey
ALTER TABLE "ArticlePrimaryLike" DROP CONSTRAINT "ArticlePrimaryLike_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleUid" TEXT NOT NULL;

-- DropTable
DROP TABLE "ArticlePrimaryLike";

-- CreateIndex
CREATE UNIQUE INDEX "User_googleUid_key" ON "User"("googleUid");

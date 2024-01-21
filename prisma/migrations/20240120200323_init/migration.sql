/*
  Warnings:

  - You are about to drop the `label` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "label" DROP CONSTRAINT "label_groupId_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "labels" TEXT[];

-- DropTable
DROP TABLE "label";

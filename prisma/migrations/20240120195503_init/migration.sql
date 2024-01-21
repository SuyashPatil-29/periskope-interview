/*
  Warnings:

  - You are about to drop the column `labels` on the `Group` table. All the data in the column will be lost.
  - Changed the type of `project` on the `Group` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "project" AS ENUM ('demo', 'client');

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "labels",
ALTER COLUMN "imageSrc" DROP NOT NULL,
DROP COLUMN "project",
ADD COLUMN     "project" "project" NOT NULL,
ALTER COLUMN "lastActive" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "label" (
    "content" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "groupId" INTEGER,

    CONSTRAINT "label_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "label" ADD CONSTRAINT "label_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

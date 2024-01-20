-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "labels" TEXT[],
    "members" INTEGER NOT NULL,
    "lastActive" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

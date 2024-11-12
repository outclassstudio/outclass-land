/*
  Warnings:

  - You are about to drop the `Counsel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Counsel" DROP CONSTRAINT "Counsel_programId_fkey";

-- DropTable
DROP TABLE "Counsel";

-- CreateTable
CREATE TABLE "Apply" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "consent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "Apply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Apply" ADD CONSTRAINT "Apply_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

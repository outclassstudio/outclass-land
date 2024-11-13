/*
  Warnings:

  - Added the required column `userId` to the `Apply` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INPROGRESS', 'CONFIRMED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Apply" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INPROGRESS',
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "subject" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Apply" ADD CONSTRAINT "Apply_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

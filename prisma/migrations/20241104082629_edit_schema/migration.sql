/*
  Warnings:

  - You are about to drop the column `productId` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductLike` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `programId` to the `ChatRoom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programId` to the `Counsel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductLike" DROP CONSTRAINT "ProductLike_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductLike" DROP CONSTRAINT "ProductLike_userId_fkey";

-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "productId",
ADD COLUMN     "programId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Counsel" ADD COLUMN     "programId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "ProductLike";

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT DEFAULT 'https://imagedelivery.net/BeIKmnUeqh2uGk7c6NSanA/8c9c528c-c728-4d88-16a5-2e30b19dbc00',
    "isOpen" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramLike" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "ProgramLike_pkey" PRIMARY KEY ("userId","programId")
);

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramLike" ADD CONSTRAINT "ProgramLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramLike" ADD CONSTRAINT "ProgramLike_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Counsel" ADD CONSTRAINT "Counsel_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

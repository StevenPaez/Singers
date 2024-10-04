/*
  Warnings:

  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Genre";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Singer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "genreId" TEXT NOT NULL
);
INSERT INTO "new_Singer" ("age", "genreId", "id", "name") SELECT "age", "genreId", "id", "name" FROM "Singer";
DROP TABLE "Singer";
ALTER TABLE "new_Singer" RENAME TO "Singer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

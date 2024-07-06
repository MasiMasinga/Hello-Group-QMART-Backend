-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "opponent" TEXT NOT NULL,
    "venue" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "position" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "google_image_url" TEXT NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Results" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "opponent" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "highlights_url" TEXT NOT NULL,

    CONSTRAINT "Results_pkey" PRIMARY KEY ("id")
);

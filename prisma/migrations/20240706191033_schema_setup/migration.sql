-- CreateTable
CREATE TABLE "FanComment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "comment" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "FanComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FanCommentReply" (
    "id" SERIAL NOT NULL,
    "comment_id" INTEGER,
    "fan_name" VARCHAR(50),
    "fan_reply" TEXT,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "FanCommentReply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FanCommentReply" ADD CONSTRAINT "FanCommentReply_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "FanComment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

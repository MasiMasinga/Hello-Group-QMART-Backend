const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/schedule', async (req, res) => {
    try {
        const schedule = await prisma.schedule.findMany();
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch schedule data.' });
    };
});

router.get('/players', async (req, res) => {
    try {
        const players = await prisma.player.findMany();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch player data.' });
    };
});

router.get('/results', async (req, res) => {
    try {
        const results = await prisma.results.findMany();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch result data.' });
    };
});

router.post('/', async (req, res) => {
    try {
        const { name, comment } = req.body;
        const newComment = await prisma.fanComment.create({
            data: {
                name,
                comment,
                created_at: new Date(),
            },
        });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/:comment_id/replies', async (req, res) => {
    try {
        const { comment_id } = req.params;
        const { fan_name, fan_reply } = req.body;
        const newReply = await prisma.fanCommentReply.create({
            data: {
                comment_id: parseInt(comment_id),
                fan_name,
                fan_reply,
                created_at: new Date(),
            },
        });
        res.status(201).json(newReply);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const comments = await prisma.fanComment.findMany({
            include: { replies: true },
        });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:comment_id', async (req, res) => {
    try {
        const { comment_id } = req.params;
        const comment = await prisma.fanComment.findUnique({
            where: { id: parseInt(comment_id) },
            include: { replies: true },
        });
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

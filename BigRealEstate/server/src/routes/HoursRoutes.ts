import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello wrold');
});

// TODO: After Sprint 1?
// router.get("/:id")

router.post('/create', (req, res) => {
  res.send('Hello wrold');
});

export default router;

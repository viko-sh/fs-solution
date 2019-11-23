import * as express from 'express';
import { Request, Response } from 'express';
import JobsService from '../../service/jobsService';
import { JobFactory } from '../../factory/jobFactory';
import { JobsStatus } from '../../constants';
const router = express.Router();

router.get('/invited', async (req: Request, res: Response) => {
  try {
    const jobs = await JobsService.getInvitedJobs();

    const result = jobs.map(job =>
      new JobFactory(job.get({ plain: true })).toResult()
    );

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/accepted', async (req: Request, res: Response) => {
  try {
    const jobs = await JobsService.getAcceptedJobs();

    const result = jobs.map(job =>
      new JobFactory(job.get({ plain: true })).toResult()
    );

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/accept-job/:jobId', async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const result = await JobsService.changeJobStatus(
      jobId,
      JobsStatus.ACCEPTED
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/decline-job/:jobId', async (req: Request, res: Response) => {
  try {
    const { jobId } = req.params;

    const result = await JobsService.changeJobStatus(
      jobId,
      JobsStatus.DECLINED
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;

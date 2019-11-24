import models from '../models';
import { JobsStatus } from '../constants';

export default class JobsService {
  static async getInvitedJobs() {
    try {
      const result = await models.job.findAll({
        attributes: [
          'id',
          'status',
          'suburb_id',
          'category_id',
          'contact_name',
          'price',
          'description',
          'createdAt'
        ],
        where: { status: JobsStatus.NEW },
        include: [
          {
            attributes: ['name', 'postcode'],
            model: models.suburb,
            as: 'suburb'
          },
          {
            attributes: ['name'],
            model: models.category,
            as: 'category'
          }
        ]
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getAcceptedJobs() {
    try {
      const result = await models.job.findAll({
        attributes: [
          'id',
          'status',
          'suburb_id',
          'category_id',
          'contact_name',
          'contact_phone',
          'contact_email',
          'price',
          'description',
          'createdAt'
        ],
        where: { status: JobsStatus.ACCEPTED },
        include: [
          {
            attributes: ['name', 'postcode'],
            model: models.suburb,
            as: 'suburb'
          },
          {
            attributes: ['name'],
            model: models.category,
            as: 'category'
          }
        ]
      });

      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async changeJobStatus(id: number, status: JobsStatus) {
    const result = await models.job.update({ status }, { where: { id } });
    return result;
  }
}

import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecifications';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  const allSpecifications = specificationsRepository.getSpecification();

  return response.json(allSpecifications);
});

export { specificationsRoutes };

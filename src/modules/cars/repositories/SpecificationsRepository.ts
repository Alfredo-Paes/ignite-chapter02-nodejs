import { Specification } from '../model/Specification';

import {
  ICreateSpecificationsRepositoryDTO,
  ISpecificationsRepository,
} from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  createSpecification({
    name,
    description,
  }: ICreateSpecificationsRepositoryDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      nameSpecification => nameSpecification.name === name,
    );

    return specification;
  }

  getSpecification(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };

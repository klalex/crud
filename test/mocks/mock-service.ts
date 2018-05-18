import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudTypeOrmService } from '../../src/crud-typeorm.service';
import { MockEntity } from './mock-entity';

@Injectable()
export class MockService extends CrudTypeOrmService<MockEntity> {
  constructor(
    @InjectRepository(MockEntity)
    private readonly repository: Repository<MockEntity>,
  ) {
    super(repository);
  }
}

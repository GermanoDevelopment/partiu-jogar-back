import { SchoolService } from 'src/modules/school/school.service';
import { beforeEach, describe } from 'vitest';
import { SchoolRepositoryInMemory } from './SchoolRepositoryInMemory';
import {ImageService} from 'src/modules/image/image.service'


describe('School service test', () => {

  let schollService: SchoolService
  let schollRepositoryInMemory: SchoolRepositoryInMemory
  let imageService: ImageService

  beforeEach(() => {
    schollService = new SchoolService(SchoolRepositoryInMemory, imageService)
  })

})
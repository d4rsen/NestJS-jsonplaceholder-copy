import { Test, TestingModule } from '@nestjs/testing';
import { PhotoService } from '../services/photo.service';

describe('Service', () => {
  let service: PhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoService],
    }).compile();

    service = module.get<PhotoService>(PhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

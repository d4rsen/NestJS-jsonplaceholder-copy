import { Test, TestingModule } from '@nestjs/testing';
import { PhotoController } from '../controllers/photo.controller';

describe('ControllerController', () => {
  let controller: PhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoController],
    }).compile();

    controller = module.get<PhotoController>(PhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

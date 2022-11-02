import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';

import { CreateActorDto, UpdateActorDto } from './dto/actor.dto';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(Actor)
    private actorRepository: Repository<Actor>,
  ) {}

  create(dto: CreateActorDto): Promise<Actor> {
    return this.actorRepository.save(dto);
  }

  getAll(): Promise<Actor[]> {
    return this.actorRepository.find();
  }

  get(id: number): Promise<Actor> {
    return this.actorRepository.findOneBy({ actorId: id });
  }

  // Đang bị không thích cách trả về này lắm
  update(id: number, dto: UpdateActorDto): Promise<UpdateResult> {
    return this.actorRepository.update({ actorId: id }, dto);
  }

  async remove(id: number): Promise<Actor> {
    return this.actorRepository.remove(
      await this.actorRepository.findOneBy({ actorId: id }),
    );
  }
}

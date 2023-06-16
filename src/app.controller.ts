import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  parseDiseaseFile() {
    this.appService.readDiseaseFile();
    this.appService.parseDiseaseFile();
  }
}

import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): void {
    console.log('hello world');
  }

  readDiseaseFile(): void {
    // get cwd
    const cwd = process.cwd();
    console.log(cwd);
    console.log(__dirname);
    const file = readFileSync(`${cwd}/src/mock-data/disease`, 'utf8');
    console.log(file);
  }
  parseDiseaseFile(): void {}
}

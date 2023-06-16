import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  diseaseFile: string;

  readDiseaseFile(): void {
    const cwd = process.cwd();
    const file = readFileSync(`${cwd}/src/mock-data/disease`, 'utf8');
    this.diseaseFile = file;
  }
  parseDiseaseFile(): void {
    let lineNumber = 1;
    this.diseaseFile.split('\n').forEach((line) => {
      console.log(lineNumber, line);
      lineNumber++;
    });
  }
}

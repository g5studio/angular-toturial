import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-convert',
  templateUrl: './csv-convert.component.html',
  styleUrls: ['./csv-convert.component.scss']
})
export class CsvConvertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public csvData = '';
  public jsonData = [];

  get fields() { return this.csvData.split('\n')[0].split(','); }
  get datas() {
    return this.csvData.split('\n')
      .filter((data, index) => index !== 0 && (data.split(',').length > 1 || data.split(',')[0]))
  }

  public covert(datas: string[]) {
    this.jsonData = datas.map(data => {
      const JSON = {};
      this.fields.forEach((field, index) => JSON[field] = data.split(',')[index]);
      return JSON;
    });
  }

}

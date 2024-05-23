import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule],
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'Zeraki-Task';

  private URL = '../../db.json';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.URL).subscribe(console.log);
  }
}


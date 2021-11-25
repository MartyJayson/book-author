import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloService } from '../hello.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  helloWorld: string = "";
  constructor(private httpClient: HttpClient, private helloService: HelloService, private router: Router)
  {
    this.hw();
  }

    ngOnInit(): void {
  }

  hw(): any{
    return this.helloService.helloWorld().subscribe(data => {this.helloWorld = data});
  }
}

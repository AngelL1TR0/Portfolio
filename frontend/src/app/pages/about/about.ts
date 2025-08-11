import { Component, OnInit } from '@angular/core';
import { PortfolioService, User } from '../../portfolio.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgIf],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  user?: User;

  constructor(private portfolio: PortfolioService) {}

  ngOnInit() {
    this.portfolio.getUser().subscribe(user => this.user = user);
  }
}

import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from '../../portfolio.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  projects: Project[] = [];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit() {
    this.portfolio.getProjects().subscribe(projects => this.projects = projects);
  }
}

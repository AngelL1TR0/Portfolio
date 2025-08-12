
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PortfolioService, Project } from '../../portfolio.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  projects$!: Observable<Project[]>;
  error: string | null = null;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.projects$ = this.portfolioService.getProjects().pipe(
      catchError(err => {
        this.error = 'No se pudieron cargar los proyectos. Inténtalo de nuevo más tarde.';
        console.error(err);
        return of([]);
      })
    );
  }
}

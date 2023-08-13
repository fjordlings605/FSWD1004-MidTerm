import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  jobList: any = [];

  constructor(private jobService: JobService){}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(history => {this.jobList = history;})
    console.log(this.jobService.getJobs());
  }

}

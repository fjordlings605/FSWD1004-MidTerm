import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  selectedJob: string = '';

  constructor(private jobService: JobService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void{
    console.log(this.actRoute.snapshot);
    console.log(this.jobService.getJob("Apprentice Carpenter"));
    this.selectedJob = this.actRoute.snapshot.paramMap.get('title') ?? "";
    console.log(this.selectedJob);


  }


}

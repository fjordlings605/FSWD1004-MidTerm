import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {

  selectedJobID: number = 0;
  selectedJob: any = [];


  constructor(private jobService: JobService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void{
    console.log("hello",this.actRoute.snapshot);
    // console.log(this.jobService.getJob("Apprentice Carpenter"));
    this.selectedJobID = Number(this.actRoute.snapshot.paramMap.get('id') ?? 0);
    console.log(this.selectedJobID);
    this.jobService.getJob(this.selectedJobID).subscribe(foundJob =>{this.selectedJob = foundJob;})
    console.log(this.selectedJob);


  }


}

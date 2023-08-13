import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  pastJobs: string = "assets/jobList.json"

  constructor() { }


  getJobs(): Observable<any>{
    return of(this.pastJobs);    
  }  
    
  // getJob(job: string): Observable<any>{
  //   let title:string = "";
  //   this.pastJobs.forEach(j => {
  //     if (j.job === job){
  //       title = j.title;
  //     }
  //   });
  //   return of(job);
  // }
}

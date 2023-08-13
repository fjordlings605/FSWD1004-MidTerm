import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsList: any[]=[
    {
      id: 1,
      title: "Computer Science Teacher",
      description: "Teach and facilitate learning for high school age students in various topics of computer science",
      duration: "2018-2023: 5 years",
      employer: "Stilwell Public Schools"
  },
  {
      id: 2,
      title: "Math Tutor & Teacher",
      description: "Teach and tutor high school age students in various levels of mathematics",
      duration: "2016-2020: 4 years",
      employer: "Stilwell Public Schools"
  },
  {
      id: 3,
      title: "Financial Aid Specialist",
      description: "Administer and manage student financial aid in all forms: Federal, State, and local",
      duration: "2013-2016: 3 years",
      employer: "Indian Capital Technology Center"
  },
  {
      id: 4,
      title: "Financial Aid Specialist's Assistant",
      description: "Assist the FA Specialist in various form of administering student financial aid in all forms: Federal, State, and local",
      duration: "2010-2013: 3 years",
      employer: "Indian Capital Technology Center"
  },
  {
      id: 5,
      title: "Apprentice Carpenter",
      description: "Assisant Carpenter for general construction and remodeling services ",
      duration: "2007-2010: 3 years",
      employer: "self-employed"
  }
  ];

  constructor() { }


  getJobs(): Observable<any>{
    return of(this.jobsList);    
  }  
    
  getJob(id: number): Observable<any>{
    let job = this.jobsList.find(j=> j.id === id);      
    return of(job);
  }
}

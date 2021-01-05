  
import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"

class JobsService{
  createJob(newJob){
    console.log("Jobs Service Create Jobs Function")
    let job = new Job(newJob)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
  deleteJob(id){
    console.log("Jobs Service Delete Jobs Function")
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
}
export const jobsService = new JobsService
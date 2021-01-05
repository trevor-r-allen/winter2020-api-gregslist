  
import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"

class JobsService{
  async getJobs(){
    let res = await api.get("jobs")
    console.log(res.data)
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
    async createJob(newJob){
    let job = await api.post("jobs", newJob)
    console.log(job)
    ProxyState.jobs = [...ProxyState.jobs, new Job(job.data)]
  }
  async deleteJob(id){
    let res = await api.delete("jobs/"+id)
    console.log(res);
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }
}
export const jobsService = new JobsService
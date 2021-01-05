import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"


function __drawJobs(){
  console.log("Draw Jobs")
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => {template += job.Template})
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController{
  constructor(){
    console.log("Jobs Controller Constructor")
    ProxyState.on("jobs",
    __drawJobs)
    __drawJobs()
  }

  createJob(){
    window.event.preventDefault()
    console.log("Jobs Controller Create Jobs Function")
    let form = window.event.target
    let newJob = {
      company: form["company"].value,
      jobTitle: form["jobTitle"].value,
      hours: form["hours"].value,
      rate: form["rate"].value,
      description: form["description"].value,
      imgUrl: form["imgUrl"].value,
    }
    jobsService.createJob(newJob)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-job-modal").modal('hide')
  }

  deleteJobs(id){
    console.log("Jobs Controller Delete Jobs Function")
    jobsService.deleteJob(id)
  }

}
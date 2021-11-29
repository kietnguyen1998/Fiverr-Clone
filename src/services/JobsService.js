import { baseService } from "./baseService";

export class JobsService extends baseService {
  constructor() {
    super();
  }
  // API 20
  fetchListJobs = () => {
    return this.get(`api/jobs`);
  };
  // API 14
  fetchTitleJobs = () => {
    return this.get(`api/type-jobs`);
  };
  // API 25
  // fetchListTypeJobs = (_id) => {
  //   return this.get(`api/jobs/by-type?type=${_id}&skip=${0}&limit=${10}`);
  // };
  // API 17
  fetchSubTypeJobs = (_id) => {
    return this.get(`api/type-jobs/${_id}`);
  };
  // API 29
  searchJobByName = (name) => {
    return this.get(`api/jobs/by-name?name`);
  };
  // API 23
  fetchJobsDetail = (_id) => {
    return this.get(`api/jobs/${_id}`);
  };
}

export const jobsSerivce = new JobsService();

import json from "assets/json/data.json";

export class ProjectService {
 getProjects(): IProject[] {
  return json.projects.map((project: IProject) => project);
 }

 getProject(index: number): IProject {
  return json.projects[index-1];
 }
}

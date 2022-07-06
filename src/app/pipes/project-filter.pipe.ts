import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/workspace';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {


  transform(projects: Project[], ...args: string[]): Project[] {
    const filter = args[0].toLowerCase();
    if (projects && filter !== '') {
      return projects.filter((p) => !p.name || p.name.toLowerCase().includes(filter));
    }
    return projects;
  }


}

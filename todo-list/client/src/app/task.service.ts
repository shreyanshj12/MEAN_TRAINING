import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

    createList(title: string){
     return this.webReqService.post('lists',{title});
    }
  

    createTask(title: string, listId: string){
      return this.webReqService.post(`lists/${listId}/tasks`,{title});
     }

    getLists(){
      return this.webReqService.get('lists');
    }

    getTasks(listId: string){
      return this.webReqService.get(`lists/${listId}/tasks`);
    }

    updateList(id: string, title: string) {
      // We want to send a web request to update a list
      return this.webReqService.patch(`lists/${id}`, { title });
    }
  
    updateTask(listId: string, taskId: string, title: string) {
      // We want to send a web request to update a list
      return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title });
    }
  
    deleteTask(listId: string, taskId: string) {
      return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`);
    }
  
    deleteList(id: string) {
      return this.webReqService.delete(`lists/${id}`);
    }
    complete(task: Task){
      return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
        completed:!task.completed
      })
    }
}

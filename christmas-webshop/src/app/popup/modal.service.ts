import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class ModalService{
    private modals: any[] = [];

    add(modal: any){
        this.modals.push(modal);      
    }

    remove(id: string){
        this.modals = this.modals.filter (x => x.id !==id);
    }

    open(id: string){
        for(let modal of this.modals){
            if(id = modal.id){  
                modal.open();
            }
        }
    }

    close(id: string){
        for(let modal of this.modals){
            if(id = modal.id){
                modal.close();
            }
        }
    }
}
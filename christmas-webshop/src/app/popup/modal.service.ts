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
        console.log('Binnenkomend id: ' + id);
        
        for(let modal of this.modals){
            console.log("this modal");
            
            console.log(modal);
            if(id = modal.id){  
                console.log('chosen');
                
                console.log(modal);
                              
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
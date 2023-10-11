export interface TaskContainerProps {
    task:ITask,
    onDelete:(id:number)=>void;
}

export interface ITask {
    id:number,
    description:string,
    
}
export class Task {
    static idCounter: number = 0;
    id: number;
    task: string;
    isCompleted: boolean;

    constructor(task: string, completed: boolean) {
        this.id = ++Task.idCounter;
        this.task = task;
        this.isCompleted = completed;
    }
}

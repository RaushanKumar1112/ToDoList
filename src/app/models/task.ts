export class Task {
    id?: number;
    name: string;
    isCompleted: boolean;
    completedAt?: Date;
    createdAt: Date;
    updatedAt?: Date;

    constructor(task: string) {
        this.name = task;
        this.isCompleted = false;
        this.createdAt = new Date();
    }
}

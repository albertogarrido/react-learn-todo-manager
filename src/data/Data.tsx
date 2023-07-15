class ToDo {
  title: string = "";
  description?: string;
  isDone: boolean = false;

  constructor(title: string, description = "", isDone: boolean) {
    this.title = title;
    if (description) {
      this.description = description;
    }
    this.isDone = isDone;
  }

  public static generateDummyData = (
    elementsCount: number,
    elementsDone: number
  ) => {
    const isDone = elementsCount == elementsDone;

    return [
      ...Array.from(
        { length: elementsCount },
        (_, i) => new ToDo(`task ${i}`, `description ${i}`, isDone)
      ),
    ];
  };

  public toString = (): string => {
    return `ToDo {
      title: ${this.title}, 
      description: ${this.description}, 
      isDone: ${this.isDone} 
    }`;
  };
}

export default ToDo;

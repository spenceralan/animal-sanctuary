export class Animal {
  display: boolean = false;

  constructor(
    public species: string = "unknown",
    public name: string = "unnamed",
    public age: number = 0,
    public diet: string = "unknown",
    public location: string = "unknown",
    public numberOfCaretakers: number = 0,
    public sex: string = "unknown",
    public likes: string = "unknown",
    public dislikes: string = "unknown",
  ){ }

  toggleDisplay() {
    if (this.display === true) {
      this.display = false;
    } else {
      this.display = true;
    }
  }

}
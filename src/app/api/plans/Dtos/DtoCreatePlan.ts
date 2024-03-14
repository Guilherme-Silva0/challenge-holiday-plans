export class DtoCreatePlan {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  userId: string;

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    userId: string,
  ) {
    this.title = title;
    this.description = description;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.userId = userId;
  }
}

export class DtoCreatePlan {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  userId: string;

  constructor(
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    userId: string,
  ) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
  }
}

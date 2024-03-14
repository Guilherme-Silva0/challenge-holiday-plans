export class DtoUpdatePlan {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string,
  ) {
    this.title = title;
    this.description = description;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

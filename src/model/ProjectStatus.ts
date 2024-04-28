export default class ProjectStatus {
  public static CANCELLED = new ProjectStatus("cancelled");
  public static ON_HOLD = new ProjectStatus("on-hold");
  public static IN_PROGRESS = new ProjectStatus("in-progress");
  public static COMPLETE = new ProjectStatus("complete");

  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public getKey(): string {
    return this.key;
  }
}
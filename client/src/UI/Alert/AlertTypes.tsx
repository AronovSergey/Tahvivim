export const SUCCESS = "success";
export const ERROR = "error";
export const WARNING = "warning";

type Success = typeof SUCCESS;
type Error = typeof ERROR;
type Warning = typeof WARNING;

export type AlertType = Success | Error | Warning;

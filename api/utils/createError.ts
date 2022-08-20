export class CustomError extends Error {
  status = 400;

  constructor(status: number, message: string) {
    super(message);

    this.status = status;

    // 👇️ because we are extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getErrorMessage() {
    return "Something went wrong: " + this.message;
  }
}

export const createError = (status: number, message: string) => {
  const err = new CustomError(status, message);
  err.status = status;
  err.message = message;
  return err;
};

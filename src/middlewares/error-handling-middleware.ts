'use strict';
import { ApplicationError } from "../protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";

export function handleApplicationErrors(err: ApplicationError | TypeError | Error, _req: Request, res: Response) {

  if (err.name === "Error") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
    return res.status(httpStatus.CONFLICT).send({
      message: err.message,
    });
  }

  if (err.name === "InvalidCredentialsError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }
  
  if (err.name === "errorPayment") {
    return res.status(httpStatus.PAYMENT_REQUIRED).send({
      message: err.message,
    });
  }

  console.error("Erro desconhecido:", err.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}
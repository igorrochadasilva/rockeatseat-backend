import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "NodeJs",
    educator: "Igor",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "Typescript",
    educator: "Ashylei",
  });

  return res.send();
}

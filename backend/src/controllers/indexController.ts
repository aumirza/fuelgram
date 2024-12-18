import { Request, Response } from "express";

class IndexController {
  home(req: Request, res: Response) {
    // return  res.json({ message: "Hello World" });
    return res.send("Hello World!");
  }
}

export default new IndexController();

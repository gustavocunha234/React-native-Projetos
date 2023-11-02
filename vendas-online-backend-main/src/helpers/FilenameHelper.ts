import { Request } from "express";
import { basename, extname } from "path";

export class FilenameHelper {
  static customFilename(req: Request, file: Express.Multer.File, cb: any) {
    const randomName = Array(32).fill(null)
      .map(() => Math.round(Math.random() * 16)
        .toString(16))
      .join("")

    const originalName = basename(file.originalname, extname(file.originalname)); // Pega o nome original sem a extensão
    const filename = `${randomName}-${originalName}${extname(file.originalname)}`;

    cb(null, filename)
  }
}
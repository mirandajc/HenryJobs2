import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import routes from "./routes/index";
import fileUpload from "express-fileupload";

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Acess-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept"
    );
    res.setHeader(
        "Acess-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads"
}));

app.set("port", process.env.PORT || 3002)
app.use('/api', routes)

export default app;
import express, { Request, Response } from "express";

async function bootstrap() {
    const app = express();

    const PORT = parseInt(process.env.APP_PORT ?? "3000");

    app.get("/", (req: Request, res: Response) => {
        return res.json({
            status: "OK",
        });
    });

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

bootstrap();

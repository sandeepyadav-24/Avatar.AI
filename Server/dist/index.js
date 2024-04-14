"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const todo_1 = __importDefault(require("./routes/todo"));
const gpt_1 = __importDefault(require("./routes/gpt"));
const video_1 = __importDefault(require("./routes/video"));
//import postRoutes from "./routes/post";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/todo", todo_1.default);
app.use("/gpt", gpt_1.default);
app.use("/video", video_1.default);
//app.use("/post", postRoutes);
app.listen(port, () => {
    console.log(`Post is listening at Port : ${port}`);
});
mongoose_1.default.connect("mongodb+srv://sandeepyadav24:Welcome@cluster0.dlduovb.mongodb.net/");

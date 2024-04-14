"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const replicate_1 = __importDefault(require("replicate"));
const replicate = new replicate_1.default();
const index_1 = require("../middleware/index");
const router = express_1.default.Router();
router.post("/imageGen", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting Prompt from Users
    const { journal } = req.body;
    console.log("Running the model...");
    // Running the MOdel
    const output = yield replicate.run("stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b", {
        input: {
            prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
        },
    });
    res.status(201).json(output);
}));
exports.default = router;

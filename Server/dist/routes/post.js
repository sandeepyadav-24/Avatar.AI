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
const router = express_1.default.Router();
const index_1 = require("../middleware/index");
router.post("/linkedinpost", index_1.authenticateJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content } = req.body;
    console.log("Atleast i reached to my Backend");
    // Post Api for LinkedIn
    const postApi = "https://api.linkedin.com/v2/ugcPosts";
    // Auth for Linkedin
    const authForLinkedin = "AQVEVvObtLMx_sXQV8PRr8UQBzbj01S2nYLpKG_fyATNfoJTSO7Aw0TQvnPThY7tfJ_9k5XDesejQic98Yf8PzwWf02xjcpH4amYgnocrNIhpy_cYKNdJHboWw_Dym1uA7r3Q1fWR3Y-TKehuSFXu-m4QFkR8Y12KKnsOYLblNH5FsJVSsfIzM1NZmatCNEzUUQByMGuR4T_YeDxsfJbPy1BrcJAM_q1sUQImbYZ2Bn7TEOiJqazGxK9lFeSVSUrozdOjDvaV1QTAbsFt4qO-WjZBMNv4WdBolnjNXMaoUQE_Q8MEy3LSDcqB9l2NEhLCMVm4KQhybsCRUKlmChYYiubBkMNow";
    // Body for POsting Data
    const postBody = {
        author: "urn:li:person:AQJLGjnA4X",
        lifecycleState: "PUBLISHED",
        specificContent: {
            "com.linkedin.ugc.ShareContent": {
                shareCommentary: {
                    text: content,
                },
                shareMediaCategory: "NONE",
            },
        },
        visibility: {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
    };
    // Run function To Post Data to Linkedin
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            {
                const response = yield fetch(postApi, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Restli-Protocol-Version": "2.0.0",
                        Authorization: `Bearer ${authForLinkedin}`,
                    },
                    body: JSON.stringify(postBody),
                });
                // Converting Data to Json
                const data = yield response.json();
                // Sending response Back to Frontend
                res.status(201).json(data);
            }
        });
    }
    run();
}));
exports.default = router;

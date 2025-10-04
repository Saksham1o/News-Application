import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        headline: {
            type: String,
            required: [true, "please enter headline"],
        },
        description: {
            type: String,
            required: [true, "please enter description"],
        },
        link: {
            type: String,
            required: false,
            default: "",
        },
        img: {
            type: String,
            required: false,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);
const NewsModel = mongoose.model("News", NewsSchema);

export default NewsModel;
//import OpenAI from "openai";
const { OpenAI } = require("openai")

module.exports = class openai{

    static configuration(){
        return new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        });
    }

    static textCompletion({prompt}){
        return{
            model: "gpt-3.5-turbo-instruct",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}
//model: "gpt-4o-mini"
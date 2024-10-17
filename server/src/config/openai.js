//import OpenAI from "openai";
const { Configuration, OpenAIApi } = require("openai")


module.exports = class openai{

    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })

        return new OpenAIApi(configuration)
    }

    static async textCompletion({prompt}){


        return {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `${prompt}` },
                { role: "assistant", content: "" }, 
            ],
            temperature: 0,// Controla a "criatividade" da resposta
            max_tokens: 3500,// Limite de tokens
            top_p: 1,// Amostragem
        }
    }
}
/*
  return{
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    }
 */

//model: "gpt-4o-mini"
//gpt-3.5-turbo
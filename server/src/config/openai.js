const { OpenAI } = require("openai")

module.exports = class openai{

    static configuration(){
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    static async textCompletion({prompt}){
        console.log(prompt)
        return {
                    model: "gpt-3.5-turbo",
                    messages: [
                        { "role": "user", "content": `${prompt}` },
                        { "role": "assistant", "content": "" }, 
                    ],
                    temperature: 1,
                    max_tokens: 2048,
                }
    }
}
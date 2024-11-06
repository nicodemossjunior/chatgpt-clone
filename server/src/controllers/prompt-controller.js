const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res) {

        console.log("-- inicio sendText --");
        // console.log(req.body);
        

        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)
        console.log(inputModel)

        try {
            //const response = await openaiAPI.createChatCompletion(
            const response = await openaiAPI.chat.completions.create(
                //openai.textCompletion(inputModel)
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: `${inputModel}` },
                        { role: "assistant", content: "" }, 
                    ],
                    temperature: 0,// Controla a "criatividade" da resposta
                    max_tokens: 3500,// Limite de tokens
                    top_p: 1,// Amostragem
                }
            )

            console.log(JSON.stringify(response))

            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].message
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                sucess:false,
                error: error.response 
                ? error.response.data 
                : "there was an issue on the server"
            })
        }
    }
}

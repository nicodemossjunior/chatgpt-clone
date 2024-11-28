const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res) {

        console.log("-- inicio sendText --");       

        const openaiAPI = openai.configuration()

        const inputModel = new inputPrompt(req.body)
        console.log(inputModel)

        try {
            const response = await openaiAPI.chat.completions.create(await openai.textCompletion(inputModel))
            
            console.log("Response: "+response.choices[0].message.content)

            return res.status(200).json({
                sucess:true,
                data: response.choices[0].message.content
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

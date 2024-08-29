const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res) {
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await openaiAPI.completions.create(
                openai.textCompletion(inputModel)
            ).asResponse()
            return res.status(200).json({
                sucess:true,
                data: response.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess:false,
                error: error.response ? error.response : "there was an issue on the server"
            })
        }
    }
}

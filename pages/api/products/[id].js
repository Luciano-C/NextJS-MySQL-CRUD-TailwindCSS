export default function handler(req, res) {
    console.log(req.query)
    return res.status(200).json(`Getting product ${req.query.id}`)
}
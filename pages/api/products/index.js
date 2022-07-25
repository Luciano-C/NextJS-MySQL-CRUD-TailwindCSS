export default function handler(req, res) {
    console.log(req.method)
    return res.status(200).json("Getting products")
}
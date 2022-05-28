// import models
import Traffic from "../models/Traffic.js";

// function get All Traffic
export const getTraffics = async (req, res) => {
    try {
        const traffics = await Traffic.find();
        res.json({ code: "T", message: "Success", data: traffics });
    } catch (error) {
        res.status(500).json({ code: "F", message: error.message });
    }
}

// function Create Traffic
export const createTraffic = async (req, res) => {
    const traffic = new Traffic(req.body);
    try {
        const createdTraffic = await traffic.save();
        res.status(201).json({ code: "T", message: "Success", data: createdTraffic });
    } catch (error) {
        res.status(400).json({ code: "F", message: error.message });
    }
}

// function get single Product
export const getTrafficByName = async (req, res) => {
    try {
        const traffic = await Traffic.findOne({ 'name': req.body['name'] });
        console.log(traffic['name']);
        res.status(200).json({ code: "T", message: "Success", data: { name: traffic['name'], address: traffic['address'], latitude: traffic['latitude'], longitude: traffic['longitude'] } });
    } catch (error) {
        res.status(404).json({ code: "F", message: error.message });
    }

}
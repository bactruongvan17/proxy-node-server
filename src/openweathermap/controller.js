const getBaseUrl = () => {
    return process.env.OPEN_WEATHER_MAP_BASE_URL;    
}

const getApiKey = () => {
    return process.env.OPEN_WEATHER_MAP_API_KEY;
}

export const geocodeing = async (req, res) => {
    const location = req.query.location?.trim();
    if (!location) {
        return res.status(404).json({
            message: "Missing location in request",
            data: [],
        });
    }

    const url = `${getBaseUrl()}geo/1.0/direct?q=${location}&limit=10&appid=${getApiKey()}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return res.json(data);
} 

export const forecast = async (req, res) => {
    const lat = req.query.lat?.trim();
    const lon = req.query.lon?.trim();
    if (!lat || !lon) {
        return res.status(404).json({
            message: "Missing lat or long in request",
            data: [],
        });
    }

    const url = `${getBaseUrl()}data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${getApiKey()}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return res.json(data);
}
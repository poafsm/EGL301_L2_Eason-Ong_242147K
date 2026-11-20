let stations = [
    { id: 1, name: "Alpha Station", location: "North Wing", status: "Available", powerUsage: "50kW" },
    { id: 2, name: "Beta Station", location: "South Wing", status: "Occupied", powerUsage: "150kW" }
];

module.exports = {
    //1. Get all charging stations
    getAllStations() {
        return stations;
    },

    //2. Get all currently available charging stations
    getAvailableStations() {
        let available = [];
        for (let i = 0; i < stations.length; i++) {
            if (stations[i].status === "Available") {
                available.push(stations[i]);
            }
        }
        return available;
    },

    //3. Add new charging station
    addStation(id, name, location, status, powerUsage) {
        let newStation = { id: id, name: name, location: location, status: status, powerUsage: powerUsage };
        stations.push(newStation);
        return `Station '${name}' has been added.`;
    },

    //4. Update status of an existing station
    updateStationStatus(id, newStatus) {
        let station = stations.find(s => s.id === id);
        if (station) {
            station.status = newStatus;
            return `Station ${id} status updated to ${newStatus}.`;
        }
        return "Station not found.";
    },

    //5. Delete station from the tracker
    deleteStation(id) {
        const index = stations.findIndex(s => s.id === id);
        if (index !== -1) {
            stations.splice(index, 1);
            return `Station ${id} deleted.`;
        }
        return "Station not found.";
    }
};
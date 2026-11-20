# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 

# EV Charging Station Tracker (`Eason_EVTracker.js`)

A Node.js module that simulates an Electric Vehicle (EV) charging station tracker for the sustainability industry, inspired by ChargePoint.

# How to use Node Module

Create a new JS file (can be called `app.js`) and have:

> const evTracker = require('./Eason_EVTracker.js');

at line 1. Open the terminal and write `node app.js`.

**1) Add a new charging station**

To add a new charging station, write console.log(**evTracker.addStation(id, name, location, status, powerUsage)**)

Example:

> console.log(evTracker.addStation(3, "Gamma Station", "East Wing", "Available", "250kW"));

Expected Outcome:

> "Station 'Gamma Station' has been added."

**2) Update a station's status**

To update an existing station's status, write console.log(**evTracker.updateStationStatus(id, "{newStatus}")**)

Example:

> console.log(evTracker.updateStationStatus(1, "Maintenance"));

Expected Outcome:

> "Station 1 status updated to Maintenance."

**3) Get all currently available stations**

To retrieve only the charging stations with an "Available" status, write console.table(**evTracker.getAvailableStations()**)

Example:

> console.table(evTracker.getAvailableStations());

Expected Outcome (assuming Alpha Station is under Maintenance and Beta Station is Occupied):

> Displays a table containing only Gamma Station (id: 3, status: "Available").

**4) Delete a charging station**

To remove a charging station by its ID, write console.log(**evTracker.deleteStation(id)**)

Example:

> console.log(evTracker.deleteStation(2));

Expected Outcome:

> "Station 2 deleted."

**5) Get all charging stations**

To retrieve all charging stations currently stored in the tracker, write console.table(**evTracker.getAllStations()**)

Example:

> console.table(evTracker.getAllStations());

Expected Outcome:

> Displays a table showing all remaining stations (Alpha Station with status "Maintenance" and Gamma Station with status "Available").

# References

* **ChargePoint EV Station Tracker:** https://www.chargepoint.com/
* **AI Declaration (Google Gemini):** Used AI to get mock data

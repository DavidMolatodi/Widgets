function enoughAirtime(services, airtime)  {
    let counter = 0;
    var totalServices = services.split(",");
    for (let i=0; i< totalServices.length; i++)  {
      const currentService = totalServices[i].trim();
      if (currentService.startsWith("s")) {
        counter += 0.75  }
      else if (currentService.startsWith("d"))  {
        counter += 12  }
      else {
        counter += 1.88 }
    }
    var results = airtime - counter
    var diff = (counter > airtime) ? "R0.00" : "R" + results.toFixed(2)
    return diff   }
  var services = "call,call,call,data,sms,sms,call,data"
  var result = enoughAirtime(services, 70)
  
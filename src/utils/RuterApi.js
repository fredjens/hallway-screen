// jsonp is used to skip corrs headers problems
import jsonp from 'jsonp';

function RuterApi(id) {
  const url = `http://reisapi.ruter.no/StopVisit/GetDepartures/${id}`;

  return new Promise(function(resolve, reject) {
    function getData(err, data) {
      if (err) reject(err);
      resolve(data.slice(0, 13));
    }
    jsonp(url,'JSON_CALLBACK', getData);
  });

}

export default RuterApi;

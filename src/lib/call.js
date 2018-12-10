export default function call(uri, data) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (this.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
        else {
          reject(JSON.parse(xhr.responseText));
        }
      }
    };
    xhr.open("POST", "http://localhost:8090/api/" + uri, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  })
};



class Response {
  status;
  headers;
  json;
  text;
}

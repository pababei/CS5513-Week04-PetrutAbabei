// need the node modules for fs and path
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export function getSortedList() {
  const filePath = path.join(dataDir, "persons.json");
  const jsonString = fs.readFileSync(filePath, "utf8");
  const jsonObj = JSON.parse(jsonString);
  jsonObj.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return jsonObj.map(function (item) {
    return {
      id: item.id.toString(),
      name: item.name,
    };
  });
}

export function getAllIds() {
  const filePath = path.join(dataDir, "persons.json");
  const jsonString = fs.readFileSync(filePath, "utf8");
  const jsonObj = JSON.parse(jsonString);
  return jsonObj.map(function (item) {
    return {
      params: { id: item.id.toString() },
    };
  });
}

export async function getData(idRequested) {
  const filePath = path.join(dataDir, "persons.json");
  const jsonString = fs.readFileSync(filePath, "utf8");
  const jsonObj = JSON.parse(jsonString);

  const objMatch = jsonObj.filter((obj) => {
    return obj.id.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  return objReturned;
}

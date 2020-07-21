const data = '[  { "id": 1, "name": "Udin", "age": 12 }, { "id": 2, "name": "Reane", "age": 51 }, { "id": 3, "name": "Budi", "age": 34 }, { "id": 4, "name": "Agus", "age": 16 }, { "id": 5, "name": "Sari", "age": 19 }, { "id": 6, "name": "Ririn", "age": 20 }, { "id": 7, "name": "Dessy", "age": 23 }]';
let obj = JSON.parse(data);

const filter_obj = obj.filter((tuple) => {
  console.log(tuple);
  return tuple.age < 21;
});
document.write("mencari orang yang berusia di bawah 21 tahun <br/>");
filter_obj.forEach(obj => document.write(`ID ${obj.id} => Nama: ${obj.name}, Umur: ${obj.age} <br/>`));

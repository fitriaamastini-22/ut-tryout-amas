data = '["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"]';
let obj = JSON.parse(data);
document.write("Json Data: "+obj);
document.write("<br/>");
let new_obj = obj.filter( (city, idx) => {
  return obj.indexOf(city) === idx;
});
document.write("Remove Duplicate: "+new_obj);
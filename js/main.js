const governorateMap = {
  '01': 'Cairo',
  '02': 'Alexandria',
  '03': 'Port Said',
  '04': 'Suez',
  '11': 'Beheira',
  '12': 'Beni Suef',
  '13': 'Cairo',
  '14': 'Dakahliya',
  '15': 'Damietta',
  '16': 'Faiyum',
  '17': 'Gharbiya',
  '18': 'Giza',
  '19': 'Ismailia',
  '21': 'Kafr El Sheikh',
  '22': 'Luxor',
  '23': 'Matruh',
  '24': 'Minya',
  '25': 'North Sinai',
  '26': 'Qalyubia',
  '27': 'Qena',
  '28': 'Red Sea',
  '29': 'Sharqia',
  '31': 'Sohag',
  '32': 'South Sinai',
  '33': 'Suez',
  '34': 'Aswan',
  '35': 'Asyut',
  '36': 'Beni Suef',
  '37': 'Daqahlia',
  '38': 'Gharbia',
  '39': 'Giza',
  '40': 'Kafr El Sheikh',
  '41': 'Minya'
};


function analysis(){
  // document.getElementById('results').innerHTML = '';
  document.getElementById('invalid').innerHTML = '';
  document.getElementById('results').style.display = 'none';

  const id = document.getElementById("id").value;
  let century_number= id[0];
  let century;
  if(id.length != 14){
    document.getElementById('invalid').innerHTML= "Invalid ID Number";
    document.getElementById('results').style.display = 'none';
    return;
  }
if(century_number === '2'){
    century = 19;
}
else if( century_number === '3'){
  century = 20;
}
else{
  document.getElementById('invalid').innerHTML= "Invalid ID Number";
  document.getElementById('results').style.display = 'none';
  return;
}

let year = parseInt(id.slice(1, 3));
let month = parseInt(id.slice(3, 5));
let day = parseInt(id.slice(5, 7));

year += century * 100;

let birthdate = `${day} / ${month} / ${year}`;

let date = new Date(year, month - 1, day);
let today = new Date();
let age =  today.getFullYear() - date.getFullYear();

if (today < new Date(today.getFullYear(), date.getMonth(), date.getDate())) {
  age--;
}

let governorateCode = id.slice(7, 9);
let governorate = governorateMap[governorateCode] || "Unknown";

let gender_num = id[12];
let gender = gender_num % 2 === 0 ? "Female" : "Male";

console.log(document.getElementById('res1'));
document.getElementById("res1").innerHTML= `Your birthdate is: ${birthdate}`;
document.getElementById("res2").innerHTML= `Your age is: ${age}`;
document.getElementById("res3").innerHTML= `You live in: ${governorate}`;
document.getElementById("res4").innerHTML= `Your gender is: ${gender}`;

document.querySelectorAll('.results > div').forEach(div => div.style.display = 'block');
document.getElementById('results').style.display = 'block';
};

document.getElementById("analyze").addEventListener('click', analysis);
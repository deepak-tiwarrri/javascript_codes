const data = [
  { _id: '1', name: 'Vivek' },
  { _id: '2', name: 'Neha' },
  { _id: '3', name: 'Deepak' },
  { _id: '4', name: 'Aishwarya' },
  { _id: '4', name: 'Sonu' },
];

for (let i = 0; i < data.length; i++) {
  if (data[i]._id === '4') {
    console.log(data[i]);
    break;
  }
}
// this will print both Aishwarya and Sonu
const filterValue = data.filter(item=>item._id ==='4');
console.log(filterValue);


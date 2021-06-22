const name = 'Socrates';
const arrayOfMen = ['Miguel', 'Angel', 'Pedro', 'Socrates'];

if( isMan(name) == -1) {
  console.log(name + ' is not a man');
}else{
  console.log(name + ' is a man, so ' + name + ' is mortal');
}

function isMan(name) {
  return arrayOfMen.indexOf(name);
}

/*---------------------------------------*/

const cake = 'chocolate';
const cake2 = 'vanilla';

getCakeDetail(cake);
getCakeDetail(cake2);

function getCakeDetail(cake) {
  switch (cake) {
    case 'chocolate' :
      console.log('The cake is chocolate');
      break;
    case 'vanilla' :
      console.log('The cake is not chocolate. It is vanilla');
      break;
    default:
      console.log('The cake is neither chocolate nor vanilla');
      break;
  }
}
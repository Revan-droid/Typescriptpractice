
//let message ="abc";
//let endsatC=message.endsWith('c');//intellisense works

//let message;
//message='abc';
//let endsatC=message. //compiler can't use intellisense

let message;
message='avp';
let endsatP=(<string>message).endsWith('p');
let endsvarP=(message as string).endsWith('p');
console.log(endsatP);
console.log(endsvarP);
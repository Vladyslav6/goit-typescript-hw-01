function showMessage(message:string) {
  console.log(message);
}

export function calc(num1:number, num2:number) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}

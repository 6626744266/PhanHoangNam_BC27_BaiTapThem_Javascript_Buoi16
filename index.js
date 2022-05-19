function printResult() {
  var getN = +document.getElementById("getN").value;
  var result = "";

  for (var i = 1; i <= getN; i++) {
    if (isPrime(i) === true) {
      result += `${i} `;
    }
  }
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("spanKetQua").innerHTML = `Kết quả là: ${result}`;
}


function isPrime(n) {
  var count = 0;
  if (n < 2) {
    count++;
    
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count != 0) {
    return false;
  } else {
    return true;
  }
}


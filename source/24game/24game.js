function clean() {
  breast.reset();
  console.clear();
}

function tdisoper(f0, f1, f2, f3) {
  this[0] = f0;
  this[1] = f1;
  this[2] = f2;
  this[3] = f3;
}
disoper = new tdisoper("-", "+", "/", "*");

function oper(f, m, n) {
  if (f == 3) return (m * n);
  if (f == 2) return (m / n);
  if (f == 1) return (parseFloat(m) + parseFloat(n));
  if (f == 0) return (m - n);
}

function tb(i1, i2, i4, i8) {
  this[1] = i1;
  this[2] = i2;
  this[4] = i4;
  this[8] = i8;
}

function valid(F) {

  n = 0;
  if (isNaN(F.a1.value)) {
    alert("You must enter an integer！");
    F.a1.focus();
    return (false);
  }
  if (isNaN(F.a2.value)) {
    alert("You must enter an integer！");
    F.a2.focus();
    return (false);
  }
  if (isNaN(F.a4.value)) {
    alert("You must enter an integer！");
    F.a4.focus();
    return (false);
  }
  if (isNaN(F.a8.value)) {
    alert("You must enter an integer！");
    F.a8.focus();
    return (false);
  }
  console.log("============begin===================");
  b = new tb(F.a1.value, F.a2.value, F.a4.value, F.a8.value);
  k = 0;
  for (i1 = 1; i1 < 9; i1 *= 2)
    for (i2 = 1; i2 < 9; i2 *= 2)
      for (i3 = 1; i3 < 9; i3 *= 2)
        for (i4 = 1; i4 < 9; i4 *= 2) {
          if ((i1 | i2 | i3 | i4) != 0xf) continue;
          for (f1 = 0; f1 < 4; f1++)
            for (f2 = 0; f2 < 4; f2++)
              for (f3 = 0; f3 < 4; f3++) {
                m = oper(f3, oper(f2, oper(f1, b[i1], b[i2]), b[i3]), b[i4]);
                if (Math.abs(m - 24) < 1e-5) {
                  if(parseResult(++k,"((" + b[i1] + disoper[f1] + b[i2] + ")" + disoper[f2] + b[i3] + ")" + disoper[f3] + b[i4],n)) return(false);
                }
                m = oper(f1, b[i1], oper(f3, oper(f2, b[i2], b[i3]), b[i4]));
                if (Math.abs(m - 24) < 1e-5) {
                  if(parseResult(++k,b[i1] + disoper[f1] + "((" + b[i2] + disoper[f2] + b[i3] + ")" + disoper[f3] + b[i4] + ")",n)) return(false);
                }
                m = oper(f3, oper(f1, b[i1], oper(f2, b[i2], b[i3])), b[i4]);
                if (Math.abs(m - 24) < 1e-5) {
                  if(parseResult(++k,"(" + b[i1] + disoper[f1] + "(" + b[i2] + disoper[f2] + b[i3] + "))" + disoper[f3] + b[i4],n)) return(false);
                }
                m = oper(f1, b[i1], oper(f2, b[i2], oper(f3, b[i3], b[i4])));
                if (Math.abs(m - 24) < 1e-5) {
                  if(parseResult(++k,b[i1] + disoper[f1] + "(" + b[i2] + disoper[f2] + "(" + b[i3] + disoper[f3] + b[i4] + "))",n)) return(false);
                }
                m = oper(f2, oper(f1, b[i1], b[i2]), oper(f3, b[i3], b[i4]));
                if (Math.abs(m - 24) < 1e-5) {
                  if(parseResult(++k,"(" + b[i1] + disoper[f1] + b[i2] + ")" + disoper[f2] + "(" + b[i3] + disoper[f3] + b[i4] + ")",n)) return false;
                }

              }
        }
  console.log("============end===================");
  if (k==0) {
    document.getElementById("result").innerHTML="无解";
  }
  return (false);
}

function parseResult(index,res,maxResult) {
  if (index==1) {
    document.getElementById("result").innerHTML=res;
  }
console.log(index,res);
                  return false;
}

function newin(s, target, ww, hh) {
  window.open(s, target, "menubar=0,resizable=1,scrollbars=1,width=" + ww + ",height=" + hh)
}
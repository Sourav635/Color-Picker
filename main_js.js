function change_rgb_value(redc,bluec,greenc){
  document.body.style.backgroundColor= `rgb(255,255,0)`;
}

function get_val(){
  let r_val,b_val,g_val;
  r_val=document.getElementById("r_val").value;
  b_val=document.getElementById("b_val").value;
  g_val=document.getElementById("g_val").value;
  document.body.style.backgroundColor= `rgb(${r_val},${b_val},${g_val})`;

  document.getElementById("r-d").innerHTML=r_val
  document.getElementById("g-d").innerHTML=g_val
  document.getElementById("b-d").innerHTML=b_val
}

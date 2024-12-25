const pin_array=[2,4,5,12,13,14,15,16],pin_array_state=[0,0,0,0,0,0,0,0],pin_detail=["My Room","Dinning","kitchen","Bathroom","park","Room 3","Stair","Gate"];
function toggleLED(_e) {
  let _o = _e.ID;
  console.log(pin_array_state[_e.state]);
  let $state = pin_array_state[_e.state] == 0 ? 1 : 0;
  console.log($state)
  let _eo = _e.children[1].classList;
  _eo.add("s");

  fetch("/toggle?led=" + _o + "&&state=" + $state)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        
        _eo.remove("s");
        _eo.toggle("a");
        _e.state = $state;
      }
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

window.onload=()=>{const e=document.querySelector("ol");fetch("/states").then((o=>{if(!o.ok)throw new Error("Network response was not ok");pin_array.forEach(((o,t)=>{let n=document.createElement("li"),a=`<span>${pin_detail[t]||"NULL"}</span><div class="so"><div class="si"></div></div>`;n.ID=o,n.state=t,n.onclick=()=>toggleLED(n),n.innerHTML=a,e.append(n)}))})).catch((e=>{}))};

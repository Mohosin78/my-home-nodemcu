const pin_array = [2, 4, 5, 12, 13, 14, 15, 16],
  pin_array_state = [0, 0, 0, 0, 0, 0, 0, 0],
  pin_detail = [
    "My Room",
    "Dinning",
    "kitchen",
    "Bathroom",
    "park",
    "Room 3",
    "Stair",
    "Gate",
  ];
function toggleLED(_e) {
  let _o = _e.ID,
    _eo = _e.children[1].classList,
    $state = pin_array_state[_e.state] == 0 ? 1 : 0;
  _eo.add("s");

  fetch("/toggle?led=" + _o + "&&state=" + $state)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        _eo.remove("s");
        _eo.toggle("a");
        pin_array_state[_e.state] = $state;
      }
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

window.onload = () => {
  fetch("/states")
    .then((o) => {
      if (!o.ok) throw new Error("Network response was not ok");
      return o.json();
    })
    .then((data) => {
      alert(343)
      let dm = ($o) => {
        return document.createElement($o);
      };
      console.log(3535345)
      pin_array_state = data["state"];
      pin_array.forEach((o, t) => {
        let n = $dm("li"),
          span = $dm("span"),
          div1 = $dm("div"),
          div2 = $dm("div");

        span.innerText = pin_detail[t] || "NULL";
        div1.className = pin_array_state[t] == 1 ? "so a" : "so";
        div2.className = "si";

        n.ID = o;
        n.state = t;
        n.onclick = () => toggleLED(n);
        n.append(span);
        n.append(div1);
        div1.append(div2);
        document.querySelector("ol").append(n);
        console.log(3455)
      });
    })
    .catch((e) => {});
};

var scores = {}; // store the students' score in a json object like {"A12341234" : "10.0", "A43214321" : "9.5", ... }
var ids = {};
for (i = 0; ; i++) {
    eid = "student" + i.toString();
    elem = document.getElementById(eid);
    if (elem == null)
        break
    sid = elem.parentElement.parentElement.childNodes[3].childNodes[0].nodeValue.substring(2);
    ids[sid] = "";
    // console.log(sid);
    if (sid in scores) {
        elem.value = scores[sid];
    }
}

for (var sid in scores) {
    if (!(sid in ids))
        console.log(sid);
}

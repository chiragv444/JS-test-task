const string = "Smart people learn from everything and everyone, average people from their expebencw stupid people already, have all the answers” (Socrates)";
const split= string.split(" ");
split.reduce((a,b) => {
    const val = b.replace(/[^a-zA-Z ]/g, '');
    if(a[0].length < val.length) {
        a[0] = val;
    } else {
        if(a[0].length === val.length) {
         const aa = a[0].split("").filter(res => ['a', 'e', 'i', 'o', 'u'].includes(res.toLowerCase())).length;
         const bb = val.split("").filter(res => ['a', 'e', 'i', 'o', 'u'].includes(res.toLowerCase())).length;
        a[0] = aa < bb ? val : a[0]
    }
    }
    return a;
}, [''])[0];
function removeDuplicates(array) {
    var arr = array;
    arr.sort(function (a, b) { return a.id - b.id; });

    // delete all duplicates from the array
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].id === arr[i + 1].id) {
            delete arr[i];
        }
    }

    // remove the "undefined entries"
    arr = arr.filter(function (el) { return (typeof el !== "undefined"); });

    return arr;
}

export default removeDuplicates;
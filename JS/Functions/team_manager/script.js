const teams = [
    "Habs",
    "Lightning",
    "Maple Leafs",
    "Golden Knights",
    "Penguins"];


function loadTeams() {
    const listItems = document.getElementsByClassName("team");
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", function(a) {
            return (e) => {
            console.log(a);
            e.target.textContent = teams[a];
        } }(i)) ;
    }
    document.getElementById("team-loader").disabled = true;
}
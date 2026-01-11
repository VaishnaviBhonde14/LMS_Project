
function toggleDropdown() {
    let list = document.getElementById("dropdown-list");
    list.style.display = list.style.display === "block" ? "none" : "block";
}

function selectCountry(flag, code) {
    document.getElementById("selected-flag").src = flag;
    document.getElementById("selected-code").textContent = code;
    document.getElementById("dropdown-list").style.display = "none";
}

// Close dropdown on outside click
document.addEventListener("click", function (e) {
    let dropdown = document.querySelector(".country-dropdown");
    if (!dropdown.contains(e.target)) {
        document.getElementById("dropdown-list").style.display = "none";
    }
});








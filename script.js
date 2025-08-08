async function fetchSolvedCounts() {
  const user = document.getElementById("username").value.trim();
  const easyBox = document.getElementById("easy");
  const medBox = document.getElementById("medium");
  const hardBox = document.getElementById("hard");

  if (!user) {
    alert("Please enter a username.");
    return;
  }

  easyBox.innerText = "Easy: Loading...";
  medBox.innerText = "Medium: Loading...";
  hardBox.innerText = "Hard: Loading...";

  try {
    const resp = await fetch(`https://leetcode-stats.tashif.codes/${user}`);
    if (!resp.ok) throw new Error("User not found or API error");

    const data = await resp.json();

    easyBox.innerText = `Easy: ${data.easySolved}`;
    medBox.innerText = `Medium: ${data.mediumSolved}`;
    hardBox.innerText = `Hard: ${data.hardSolved}`;

  } catch (err) {
    console.error(err);
    easyBox.innerText = `Easy: -`;
    medBox.innerText = `Medium: -`;
    hardBox.innerText = `Hard: -`;
    alert("Error fetching data. Try again!");
  }
}


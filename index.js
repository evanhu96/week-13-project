async function addTeam() {
  id = 50;
  team_name = "gs";
  const response = await fetch(`/api/categories`, {
    method: "POST",
    body: JSON.stringify({
      id,
      team_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    console.log("good");
  } else {
    console.log("bad");
  }
}
addTeam();

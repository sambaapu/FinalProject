// Data Table
fetch("Teams.json")
.then(function(response){
   return response.json();
})
.then(function(teams){
   let placeholder = document.querySelector("#pointsTable");
   let out = "";
   for(let team of teams){
	  out += `
		 <tr>
			<td>${team.Team}</td>
			<td>${team.Matches}</td>
			<td>${team.Wins}</td>
			<td>${team.Losses}</td>
			<td>${team.Points}</td>
		 </tr>
	  `;
   }
 
   placeholder.innerHTML = out;
});

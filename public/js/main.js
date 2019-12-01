(()=> {
    
    
    const waypoint = new Waypoint({
        element: document.getElementById('driver1'),
        handler: function() {
            console.log('Scrolled to waypoint!')
            let url = `/drivers/${this.element.id.slice(6)}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    this.element.children[1].innerHTML += `
                    <h2 class="driverName">${data.Name}</h2>
                    <h3 class="info">NUMBER: <span class="data">${data.Number}</span></h3>
                    <h3 class="info">NATIONALITY: <span class="data">${data.Nationality}</span></h3>
                    <h3 class="info">TEAM: <span class="data">${data.Team}</span></h3>
                    <h3 class="info">POINTS: <span class="data">${data.Points}</span></h3>
                    `
                    
                    })
                    .catch((err) => console.log(err));
            
            this.destroy()
        },
        offset: '20%'
      })

      

})();
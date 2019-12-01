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
                    <h2>${data.Name}</h2>
                    <h3>${data.Number}</h3>
                    <h3>${data.Nationality}</h3>
                    <h3>${data.Team}</h3>
                    <h3>${data.Points}</h3>
                    `
                    
                    })
                    .catch((err) => console.log(err));
            
            this.destroy()
        },
        offset: '20%'
      })

      const waypoint2 = new Waypoint({
        element: document.getElementById('driver2'),
        handler: function() {
            console.log('Scrolled to waypoint!')
            let url = `/drivers/${this.element.id.slice(6)}`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    this.element.children[1].innerHTML += `
                    <h2>${data.Name}</h2>
                    <h3>${data.Number}</h3>
                    <h3>${data.Nationality}</h3>
                    <h3>${data.Team}</h3>
                    <h3>${data.Points}</h3>
                    `
                    
                    })
                    .catch((err) => console.log(err));
            
            this.destroy()

        },
        offset: '40%'
      })


})();
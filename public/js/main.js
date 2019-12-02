(()=> {

    const tl   = gsap.timeline();

    
    const waypoint = new Waypoint({
        element: document.getElementById('driver1'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                car = this.element.children[0].children[2],
                driverCon = this.element.children[1];

                tl.from(car, .8,{y:90,  opacity: 0})
                tl.from(driverCon, .5,{y:20,  opacity: 0})
                car.classList.add('car-on');

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    driverCon.innerHTML += `
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
        offset: '30%'
      })

      const waypoint2 = new Waypoint({
        element: document.getElementById('driver2'),
        handler: function() {
            console.log('Scrolled to waypoint!')
            let url = `/drivers/${this.element.id.slice(6)}`,
                car = this.element.children[0].children[2],
                driverCon = this.element.children[1];

                tl.from(car, .8,{y:90,  opacity: 0})
                tl.from(driverCon, .5,{y:20,  opacity: 0})
                car.classList.add('car-on');

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    driverCon.innerHTML += `
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
        offset: 200
      })

      const waypoint3 = new Waypoint({
        element: document.getElementById('driver3'),
        handler: function() {
            console.log('Scrolled to waypoint!')
            let url = `/drivers/${this.element.id.slice(6)}`,
                car = this.element.children[0].children[2],
                driverCon = this.element.children[1];

                tl.from(car, .8,{y:90,  opacity: 0})
                tl.from(driverCon, .5,{y:20,  opacity: 0})
                car.classList.add('car-on');

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    driverCon.innerHTML += `
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
        offset: 200
      })

      const waypoint4 = new Waypoint({
        element: document.getElementById('driver4'),
        handler: function() {
            console.log('Scrolled to waypoint!')
            let url = `/drivers/${this.element.id.slice(6)}`,
                car = this.element.children[0].children[2],
                driverCon = this.element.children[1];

                tl.from(car, .8,{y:30,  opacity: 0})
                tl.from(driverCon, .5,{y:20,  opacity: 0})
                car.classList.add('car-on');

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);
                    driverCon.innerHTML += `
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
        offset: 200
      })


      

})();
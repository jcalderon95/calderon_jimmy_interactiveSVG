(()=> {

    const tl   = gsap.timeline();

    
    const waypoint1 = new Waypoint({
        element: document.getElementById('driver1'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, 1,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "60%"
      })

      const waypoint2 = new Waypoint({
        element: document.getElementById('driver2'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })


      const waypoint3 = new Waypoint({
        element: document.getElementById('driver3'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint4 = new Waypoint({
        element: document.getElementById('driver4'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint5 = new Waypoint({
        element: document.getElementById('driver5'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })
   
      const waypoint6 = new Waypoint({
        element: document.getElementById('driver6'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint7 = new Waypoint({
        element: document.getElementById('driver7'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint8 = new Waypoint({
        element: document.getElementById('driver8'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint9 = new Waypoint({
        element: document.getElementById('driver9'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint10 = new Waypoint({
        element: document.getElementById('driver10'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint11 = new Waypoint({
        element: document.getElementById('driver11'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })
      

      const waypoint12 = new Waypoint({
        element: document.getElementById('driver12'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })
      

      const waypoint13 = new Waypoint({
        element: document.getElementById('driver13'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })


      const waypoint14 = new Waypoint({
        element: document.getElementById('driver14'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint15 = new Waypoint({
        element: document.getElementById('driver15'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint16 = new Waypoint({
        element: document.getElementById('driver16'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint17 = new Waypoint({
        element: document.getElementById('driver17'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint18 = new Waypoint({
        element: document.getElementById('driver18'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint19 = new Waypoint({
        element: document.getElementById('driver19'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })

      const waypoint20 = new Waypoint({
        element: document.getElementById('driver20'),
        handler: function() {
            let url = `/drivers/${this.element.id.slice(6)}`,
                imageTarget = this.element.children[0].children[2],
                driverCon = this.element.children[1];
            
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    console.log(data);

                    tl.from(imageTarget, .8,{y:100,  opacity: 0})
                    tl.from(driverCon, .5,{y:20,  opacity: 0})
                    
                    imageTarget.innerHTML += `
                    <img src="images/${data.Image}" alt="${data.Team} Car Image" class="car">
                    `
                    
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
        offset: "40%"
      })
})();
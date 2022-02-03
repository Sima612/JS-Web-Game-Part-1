newImage()

function newImage() {
    let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)

    let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '450px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)

    let tree = document.createElement('img')
    tree.src = 'assets/tree.png'
    tree.style.position = 'fixed'
    tree.style.left = '200px'
    tree.style.bottom = '300px'
    document.body.append(tree)

    let pillar = document.createElement('img')
    pillar.src = 'assets/pillar.png'
    pillar.style.position = 'fixed'
    pillar.style.left = '350px'
    pillar.style.bottom = '100px'
    document.body.append(pillar)

    let crate = document.createElement('img')
    crate.src = 'assets/crate.png'
    crate.style.position = 'fixed'
    crate.style.left = '150px'
    crate.style.bottom = '200px'
    document.body.append(crate)

    let well = document.createElement('img')
    well.src = 'assets/well.png'
    well.style.position = 'fixed'
    well.style.left = '500px'
    well.style.bottom = '420px'
    document.body.append(well)

    let grass = document.createElement('img')
    grass.src = 'assets/grass.png'
    grass.style.position = 'fixed'
    grass.style.bottom = '0px'
    grass.style.left = '0px'
    grass.style.height = "57vh"
    grass.style.width = "100vw"
    grass.style.zIndex = "-1"
    grass.style.imageRendering = 'pixelated'
    document.body.append(grass)

    let sky = document.createElement('img')
    sky.src = 'assets/sky.png'
    sky.style.position = 'fixed'
    sky.style.top = '0px'
    sky.style.left = '0px'
    sky.style.height = "43vh"
    sky.style.width = "100vw"
    sky.style.zIndex = "-1"
    sky.style.imageRendering = 'pixelated'
    document.body.append(sky)

    newItem()

    function newItem() {
        let sword = document.createElement('img')
        sword.src = 'assets/sword.png'
        sword.style.position = 'fixed'
        sword.style.left = '500px'
        sword.style.bottom = '405px'
        document.body.append(sword)
        sword.addEventListener('dblclick', function () {
            sword.remove()
        })

        let sheild = document.createElement('img')
        sheild.src = 'assets/sheild.png'
        sheild.style.position = 'fixed'
        sheild.style.left = '165px'
        sheild.style.bottom = '185px'
        document.body.append(sheild)

        let staff = document.createElement('img')
        staff.src = 'assets/staff.png'
        staff.style.position = 'fixed'
        staff.style.left = '600px'
        staff.style.bottom = '100px'
        document.body.append(staff)
    }
}
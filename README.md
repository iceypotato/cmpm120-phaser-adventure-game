A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
    - Enhancement 2: unsatisfied (name the method and explain the use of it).

Experience requirements:
- **4+ locations in the game world**: unsatisfied (name at least 4 of the classes).
- **2+ interactive objects in most scenes**: unsatisfied (describe two examples)
- **Many objects have `pointerover` messages**: unsatisfied (describe two examples)
- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples)
- **Some objects are themselves animated**: unsatisfied (describe two examples)

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.

# My implementations

## Assets

### Images
* Bedroom Scene Background
    * https://upload.wikimedia.org/wikipedia/commons/2/2e/BedRoom.png
    * Decreased the brightness using Photoshop
* Computer Room Background
    * https://media.istockphoto.com/id/521806786/photo/3d-rendering-of-empty-room-interior-white-brown-colors.jpg?b=1&s=170667a&w=0&k=20 c=dnsyx7qNFEU7susAMx_AnJl8wdIpY8qpuREbW8nk30A=
    * Decreased the brightness using Photoshop
* Trash bin
    * https://thumbs.dreamstime.com/b/office-trash-bin-d-illustration-isolated-white-background-193869908.jpg
    * Removed the white background in Photoshop
* All other image assets created in photoshop

### Audio
* TheFatRat - Xenogenesis
    * cut and edited using Adobe Premiere
    * https://www.youtube.com/watch?v=1aQ4HSheJhk
* Among Us drip theme
    * cut using Adobe Premiere
    * https://www.youtube.com/watch?v=grd-K33tOSM

## Code requirements
- **4+ scenes based on `AdventureScene`**
    - `ComputerRoomScene`
    - `HallwayScene`
    - `BedroomScene`
    - `OutsideScene`
- **2+ scenes *not* based on `AdventureScene`**
    - `StartGameScene`
    - `SplashScene`
    - `TitleScene`
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - `destroyItemFromScene`
        - Creates a tween to fade the item out, then destroys the item.
    - `toggleinv`
        - Makes the inventory openable and closeable.

## Experience requirements
- **4+ locations in the game world**
    - `ComputerRoomScene`
    - `HallwayScene`
    - `BedroomScene`
    - `OutsideScene`
- **2+ interactive objects in most scenes**
    - Clicking on the monitor plays a sound
    - Clicking on the imposter plays a sound
- **Many objects have `pointerover` messages**
    - The PC in the computer room
    - The doors in the hallway
- **Many objects have `pointerdown` effects**
    - Clicking on the monitor plays a sound
    - Clicking on the imposter plays a sound
- **Some objects are themselves animated**
    - All items when being picked up fade out
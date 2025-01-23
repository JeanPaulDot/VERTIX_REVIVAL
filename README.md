# Vertix.io Revival

## About Vertix.io
Vertix.io is a beloved multiplayer 2D shooter that captured the hearts of players with its fast-paced action, unique art style, and competitive gameplay. Initially launched as a browser-based game, Vertix.io provided an accessible and fun experience for casual and hardcore gamers alike. Unfortunately, the game was discontinued, leaving many fans eager to see its return.

## Our Goal
The goal of the Vertix.io Revival Project is to bring the game back to life and make it accessible across multiple platforms, ensuring that both old and new players can enjoy the classic experience once again. We aim to modernize the backend infrastructure while preserving the core gameplay mechanics that made Vertix.io so special.

Here's the new section to add under **Phase 3: Public Release**:

### Map Editor  
To empower players and foster creativity, we’ve developed an **advanced in-browser map editor** that allows anyone to design custom maps for Vertix.io. This tool bridges the gap between players and creators, ensuring the game’s content evolves with community input.  

#### Key Features:  
- **Tile-Based Design**:  
  - Create maps using modular tiles (128x128px base grid) with support for **walls**, **floors**, **spawn points**, and **objective markers**.  
  - Dedicated 16x16px grid for precise object placement (barrels, crates, etc.).  
- **Texture System**:  
  - Import custom textures for walls, floors, and objects.  
  - Categorize assets by type (wall tops, sides, floors, etc.).  
- **Real-Time Preview**:  
  - Toggle grid overlays and test map layouts instantly.  
  - Pixel-perfect rendering ensures WYSIWYG results.  
- **Export/Import**:  
  - Export maps as `.json` files compatible with Vertix.io’s engine.  
  - Share creations directly or load them into private servers.  
- **Undo/Redo & Eraser**:  
  - Robust history system with 50-state undo/redo.  
  - Multi-tool eraser for quick edits.  

#### How It Works:  
1. Design maps using intuitive tools (walls, spawn zones, flags).  
2. Test layouts with real-time collision and spawn visualization.  
3. Export maps with one click. The editor automatically:  
   - Adds a 2px border (required by Vertix.io’s engine).  
   - Encodes walls as `RGB(0,0,0)`, spawns as `RGB(0,255,0)`, and flags as `RGB(255,255,0)`.  
   - Generates collision data and neighbor detection for walls.  
4. Load maps into custom servers or submit them for inclusion in official rotations.  

This tool will ship with the **open-source release**, allowing modders to expand its functionality or integrate new asset packs. Community maps will be featured in seasonal events and ranked playlists, ensuring fresh content driven by players!

## Roadmap

### Phase 1: Foundation
- **Server-Side WebSocket System**
  - Develop a scalable WebSocket server to handle real-time multiplayer interactions.
  - Ensure smooth communication between clients and servers.
  - Implement low-latency, high-performance networking solutions.

### Phase 2: Core Features
- **Profiles System**
  - Design and implement a user profile system.
  - Allow players to create, manage, and customize their profiles.
  - Store and retrieve user data efficiently.

- **Leaderboards**
  - Create a global leaderboard to showcase top players.
  - Implement ranking algorithms and seasonal resets.
  - Provide different ranking categories (kills, accuracy, win streaks, etc.).

### Phase 3: Public Release
- **Testing and Optimization**
  - Conduct extensive testing to identify and resolve bugs.
  - Optimize performance for different devices and connections.
  - Ensure cross-platform compatibility.

- **Open Source Release**
  - Once the core systems are stable and functional, open-source the project.
  - Encourage community contributions and modding support.
  - Provide comprehensive documentation for developers.

### Future Plans
- **New Game Modes and Features**
  - Explore potential new modes based on community feedback.
  - Introduce new maps, weapons, and customization options.
  
- **Mobile and Console Support**
  - Expand compatibility to mobile devices and consoles.
  - Optimize controls and UI for different platforms.

## How You Can Help
We are actively seeking contributors, testers, and passionate fans to help make this revival a success. If you're interested in contributing, please reach out through our community channels.

Together, we can bring Vertix.io back and make it better than ever!
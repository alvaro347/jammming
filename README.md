# Jammming

Jammming is a web application that allows users to search for their favorite songs and create custom playlists. Users can then save these playlists to their Spotify account.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Securely log in using Spotify credentials.
- **Search**: Search for songs, albums, and artists using the Spotify API.
- **Create Playlists**: Easily create and customize playlists.
- **Save to Spotify**: Save your custom playlists directly to your Spotify account.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Spotify API**: Used for searching songs and saving playlists.
- **HTML5 & CSS3**: Markup and styling for the application.
- **JavaScript (ES6+)**: Modern JavaScript features for logic and interactivity.

## Installation

Follow these steps to set up and run Jammming on your local machine:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/jammming.git
    cd jammming
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

4. **Open your browser**:

    Navigate to `http://localhost:3000` to see the application running.

## Usage

1. **Log in with Spotify**:

    Click the "Login" button to authenticate with your Spotify account.

2. **Search for Music**:

    Use the search bar to find songs, albums, or artists.

3. **Create a Playlist**:

    Add songs to your new playlist by clicking the "+" button next to each song.

4. **Save Playlist to Spotify**:

    Once your playlist is ready, click the "Save to Spotify" button.

## Project Structure

  ```sh
jammming/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── App/
│ │ ├── SearchBar/
│ │ ├── SearchResults/
│ │ ├── Playlist/
│ │ └── ...
│ ├── util/
│ │ └── Spotify.js
│ ├── index.js
│ └── App.js
├── .gitignore
├── package.json
└── README.md
```

- **public/**: Contains the base HTML file.
- **src/**: Contains the main code for the application.
  - **components/**: Contains React components.
  - **util/**: Contains utility modules, such as the Spotify API wrapper.
- **.gitignore**: Specifies which files to ignore in the Git repository.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: This file.


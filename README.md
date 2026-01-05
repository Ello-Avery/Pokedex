# Pokémon Codex

A modern, interactive Pokédex web application that displays detailed information about Pokémon using the PokéAPI. Features a retro-inspired design with smooth animations and keyboard navigation.

![Pokémon Codex Preview](<media/Pokedex Inspo.webp>)

## Features

- **Complete Pokémon Database** - Browse through all Pokémon with an intuitive side menu
- **Detailed Information Display** - View comprehensive details for each Pokémon including:
  - Official artwork and animated sprites
  - Pokédex number and name
  - Height and weight statistics
  - Type classifications
  - Gender information
  - Multiple abilities with detailed descriptions
- **Interactive Navigation** - Navigate through abilities using keyboard controls (A/D keys) or click
- **Responsive Design** - Clean, modern interface with gradient backgrounds and smooth animations
- **Real-time Data** - Fetches live data from the PokéAPI

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with gradients and animations
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript with modules
- **PokéAPI** - RESTful Pokémon API for data retrieval
- **Bootstrap Icons** - Icon library for UI elements

## Project Structure

```
pokedex/
│
├── index.html              # Main HTML structure
├── README.md               # Project documentation
│
├── css/
│   ├── main.css           # Global styles and layout
│   ├── header.css         # Header component styles
│   └── pokemonInfo.css    # Pokémon details section styles
│
├── javascript/
│   ├── api.js             # API functions for fetching Pokémon data
│   └── fetchAllPokemon.js # Main application logic and DOM manipulation
│
└── media/
    ├── pokeball.svg       # Pokéball icon
    └── user.png           # User profile image
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (to fetch data from PokéAPI)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex.git
```

2. Navigate to the project directory:

```bash
cd pokedex
```

3. Open `index.html` in your web browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit `http://localhost:8000` in your browser

## Usage

- **Browse Pokémon**: Scroll through the side menu to see all available Pokémon
- **Select Pokémon**: Click on any Pokémon in the list to view its details
- **View Abilities**:
  - Click on ability tags to read their descriptions
  - Use 'A' and 'D' keys to navigate between abilities
- **Navigation**: Use the arrow buttons or keyboard shortcuts (L/R) to browse through Pokémon

## API Reference

This project uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data:

- `GET /pokemon` - Retrieves list of all Pokémon
- `GET /pokemon/{name}` - Gets detailed information for a specific Pokémon
- `GET /gender/{id}` - Fetches gender information
- `GET /ability/{name}` - Retrieves ability descriptions

## Key Features in Code

### API Module (`api.js`)

- `getAllPokemon()` - Fetches complete Pokémon list
- `getPokemonDetails(name)` - Gets specific Pokémon data
- `getPokemonGenders(id)` - Retrieves gender information
- `getAbilities(url)` - Fetches ability descriptions

### Main Application (`fetchAllPokemon.js`)

- Dynamic DOM manipulation
- Event-driven architecture
- Keyboard navigation support
- Asynchronous data fetching

## Future Enhancements

- [ ] Add search functionality
- [ ] Implement type filtering
- [ ] Add evolution chain display
- [ ] Include move sets and stats charts
- [ ] Add favorite Pokémon feature
- [ ] Implement pagination for better performance
- [ ] Add generation filters
- [ ] Include shiny sprite toggle
- [ ] Add comparison feature between Pokémon

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- [Bootstrap Icons](https://icons.getbootstrap.com/) for the icon set
- Nintendo, Game Freak, and The Pokémon Company for the original Pokémon franchise

## Contact

Your Name - [@OnlyElliotAvery](https://x.com/OnlyElliotAvery/)

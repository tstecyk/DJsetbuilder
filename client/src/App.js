import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
<html lang="en">
<body>
    <div class="container">
        <h1>DJ Set Generator</h1>
        <button onclick="spotifyLogin()">Login with Spotify</button>
        <label>BPM Range:</label>
        <select id="bpmRange">
            <option value="120-130">120-130</option>
            <option value="130-140">130-140</option>
            <option value="140-150">140-150</option>
            <option value="150-160">150-160</option>
        </select>
        
        <label>Genre:</label>
        <select id="genre">
            <option value="house">House</option>
            <option value="techno">Techno</option>
            <option value="trance">Trance</option>
            <option value="techhouse">Tech House</option>
            <option value="discohouse">Disco House</option>
            <option value="jungle">Jungle</option>
            <option value="rap">Rap</option>
            <option value="rnb">R&B</option>
        </select>
        
        <label>Energy Level:</label>
        <select id="energy">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
       
        <label>Set Length:</label>
        <select id="setLength">
            <option value="30">30 Minutes</option>
            <option value="60">1 Hour</option>
            <option value="120">2 Hours</option>
            <option value="180">3 Hours</option>
            <option value="240">4 Hours</option>
        </select>
        
        <button onclick="generateSetlist()">Generate Setlist</button>
        <div class="setlist" id="setlist"></div>
    </div>

    
</body>
</html>
  );
}

export default App;

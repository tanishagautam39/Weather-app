import Card from '@mui/material/Card';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardContent from '@mui/material/CardContent';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  if (!info) return null;
  const INIT_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HOT_URL = "https://th.bing.com/th/id/OIP.Wc3GSkdDJCWnJOfhh5lTjwHaE8?w=264&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3";
  const COLD_URL = "https://th.bing.com/th/id/OIP.3-Pawni7SW5g5F0y_QllAAHaE8?w=247&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3";
  const RAIN_URL = "https://images.hindustantimes.com/img/2021/12/30/1600x900/INDIA-WEATHER-RAIN-4_1640872723354_1640872733554.jpg";
  

    return (

        <div className='CardContainer'>
        <div className="InfoBox">
          
            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

          {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon /> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>

    </div>
    </div>
    )
}
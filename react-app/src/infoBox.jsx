import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 
 
export default function InfoBox({info}){
  const IMG_URL = "https://img.freepik.com/free-photo/empty-road-dark-atmosphere_23-2150914462.jpg?t=st=1715517042~exp=1715520642~hmac=bcc2ba55e93d8d6486b6324345a7912ed8e7659f24a5a6a38e5e524773b0d927&w=740"
  
  const SummerImage = "https://media.istockphoto.com/id/501234002/photo/beautiful-rolling-landscape-on-a-summers-day-in-the-cotswolds.webp?b=1&s=170667a&w=0&k=20&c=wrhuwU44taXfdMtq9BILte1bMXkHL4Xe70QZMVT-tpA="

  const winterImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvoX9jdzPOhA9Bfyz-aShbtyihs42yeCyqXI_XXrAPQ&s"

  const rainyImage = "https://t4.ftcdn.net/jpg/01/76/80/43/360_F_176804344_cVgrFLEi0tB1SeP0xJ6YufQAaUhQ3TjW.jpg"
    
    return (
      <div>        
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rainyImage : info.temp > 20 ? SummerImage : winterImage}
        title="Hazy image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
              {info.city}
        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
              
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p> 
                        <p>Humidity = {info.humidity}</p>
                        <p>Min_temp = {info.min_temp}</p>
                        <p>Max_temp = {info.max_temp}</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feels_like }&deg;C</p>
           
        </Typography>
      </CardContent>
            </Card>
            </div>
    )
}
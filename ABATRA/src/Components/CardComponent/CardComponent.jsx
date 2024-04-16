
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import auxDoencaImg from "../../assets/doenca-card-img.png"
import auxAcidenteImg from "../../assets/acidente-card-img.png"
import pensaoMorte from "../../assets/pensao-morte.png"

import "./CardComponent.css"




export default function MultiActionAreaCard() {
        
    
    return (
        <div className='card__content'>

            {/* auxilio-doença */}
            <Card   sx={{ maxWidth: 300, maxHeight: 500, margin:10, boxShadow: "-15px 7px 22px -2px black" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="fit-content"
                    src={auxDoencaImg }
                    alt="auxilio doença"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display:"flex", alignItems: "center", justifyContent: "center" }}>
                        Auxilio-Doença
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize:15 }}>
                        Benefício concedido aos trabalhadores que estão 100% incapaz de trabalhar por um periodo indeterminado
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <button  className='btn__auxilios'>
                    Saiba mais
                </button>
            </CardActions> */}
        </Card>



        {/* auxilio acidente  */}
        

            <Card sx={{ maxWidth: 300, maxHeight: 550, margin:5, boxShadow: "-15px 7px 22px -2px black" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="fit-content"
                    src={auxAcidenteImg}
                    alt="auxilio doença"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display:"flex", alignItems: "center", justifyContent: "center"  }}>
                        Auxilio-Acidente
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize:15}}>
                        Benefício concedido aos trabalhadores que eforam liberados para retorno ao trabalho com sequelas.
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
            <button  className='btn__auxilios'>
                    Saiba mais
                </button>
            </CardActions> */}
        </Card>

        {/* Pensao por morte */}

        <Card sx={{ maxWidth: 300, maxHeight: 550, margin:10, boxShadow: "-15px 7px 22px -2px black" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="fit-content"
                    src={pensaoMorte }
                    alt="auxilio doença"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ display:"flex", alignItems: "center", justifyContent: "center"  }}>
                        Pensão por Morte
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize:15 }}>
                        Benefício destinado aos dependentes do segurado empregado em razão de seu falecimento. 
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
            <button  className='btn__auxilios'>
                    Saiba mais
                </button>
            </CardActions> */}
        </Card>
        </div>
    );
}
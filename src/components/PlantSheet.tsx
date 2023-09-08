import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

type Card = {
  id: number;
  name: string;
  img: string;
};
interface ChildComponentProps {
  card: Card;
}

export default function PlantSheet(props: ChildComponentProps) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400 }}>
      <CardActionArea>
        <CardMedia
          className="max-h-36"
          component="img"
          height="140"
          image={props.card.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

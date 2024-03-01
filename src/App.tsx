import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import { AppBar, Box, Button, CardActions, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card'
import Modal from '@mui/material/Modal';
import Waka from './images/Waka.jpeg'
import Ellis from './images/Ellis.jpg'
import Keri from './images/Keri.jpg'

import Icon from '@mdi/react';
import { mdiDog } from '@mdi/js';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function App() {

  interface Dog {
    dog_id: number,
    name: string,
    breed: string,
    age: number,
    image_id: number,
    info: string,
    info_id: number
  }

  const getImage = (image_id: number) => {
    switch (image_id) {
      case 1:
        return Waka
      case 2:
        return Ellis
      case 3:
        return Keri
    }
  }

  const [dogs, setDogs] = useState<Array<Dog>>([])
  const [dog, setDog] = useState({ name: "", info: "" })
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getDogs()
  }, [])

  const url = (process.env.REACT_APP_BACKEND_URL)
  if(url === undefined) {
    return console.log("False url")
  }

  const getDogs = async () => {
    const response = await fetch(url)
    const dog = await response.json()
    setDogs(dog)
  }

  const checkInfo = async (id: number) => {
    const findDog = dogs.find((dog) => {
      return dog.dog_id === id === true
    })
    if (findDog === undefined) {
      return console.log('Nothing found')
    }
    setDog({ name: findDog.name, info: findDog.info })
    handleOpen()
  }

  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar >
          <Icon path={mdiDog} size={1} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              padding: 3,
            }}
          >
            Dogs
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>

      <Grid container
        spacing={3}
        justifyContent="center"
        alignItems="stretch">
        
          {dogs.map(dog =>
          <Grid item sm={3} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200 }}
                component="img"
                image={getImage(dog.image_id)}
                title='image'
              />
              <CardContent key={dog.dog_id}>
                Name: {dog.name} <br />
                Breed: {dog.breed} <br />
                Age: {dog.age}
              </CardContent>
              <CardActions>
                <Button onClick={() => checkInfo(dog.dog_id)}>Read More</Button>
              </CardActions>
            </Card>
            </Grid>
          )}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            More Info
          </Typography>
          <Divider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dog.info}
          </Typography>
        </Box>
      </Modal>

    </Container>
  )
}

export default App

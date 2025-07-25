import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container sx={{
        p: 2,
    }}>
        <Typography variant="subtitle1" align="center">
        Copyright 2024 © <Link to='https://beamish-zabaione-ae68a5.netlify.app/' className='link'>Faizan</Link> 
        </Typography>
    </Container>
  )
}

export default Footer

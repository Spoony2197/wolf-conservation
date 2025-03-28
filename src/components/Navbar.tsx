import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/" 
            sx={{ 
              flexGrow: 1, 
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              fontSize: '1.5rem',
            }}
          >
            Argosta
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            '& .MuiButton-root': {
              fontWeight: 500,
              fontSize: '1rem',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.03)',
              }
            }
          }}>
            <Button component={RouterLink} to="/">
              Home
            </Button>
            <Button component={RouterLink} to="/shop">
              Shop
            </Button>
            <Button component={RouterLink} to="/calendar">
              Book a Talk
            </Button>
            <Button component={RouterLink} to="/about">
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 
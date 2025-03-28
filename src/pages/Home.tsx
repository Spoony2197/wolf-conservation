import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'url(/images/wolf-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
            zIndex: 2,
          },
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            position: 'relative',
            zIndex: 3,
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Protecting Alaska's Wolves
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Join us in our mission to preserve and protect Alaska's wolf population through education, research, and community engagement.
            </Typography>
            <Button
              component={RouterLink}
              to="/calendar"
              variant="contained"
              size="large"
              sx={{
                mr: 2,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              Book a Talk
            </Button>
            <Button
              component={RouterLink}
              to="/shop"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Support Our Cause
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                  color: 'primary.main',
                  letterSpacing: '-0.02em',
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                }}
              >
                At Argosta, we are dedicated to ensuring the survival and prosperity of Alaska's wolf populations. Through scientific research, educational programs, and community outreach, we work tirelessly to protect these magnificent creatures and their natural habitats.
              </Typography>
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: 'background.default',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Our Impact
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'Protected over 1000 square miles of wolf habitat',
                    'Educated 10,000+ students about wolf conservation',
                    'Successfully rehabilitated 25 injured wolves',
                    'Established 5 wolf sanctuaries across Alaska',
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: 'primary.main',
                        }}
                      />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 
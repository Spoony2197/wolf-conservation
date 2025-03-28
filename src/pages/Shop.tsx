import { Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Arctic Wolf Tee',
    description: 'Organic cotton t-shirt featuring our signature Arctic wolf design. Each purchase helps protect wolf habitats.',
    price: 35,
    image: '/images/arctic-wolf-tee.jpg',
    tags: ['Organic Cotton', 'Unisex'],
  },
  {
    id: 2,
    name: 'Pack Leader',
    description: 'Limited edition design celebrating the strength and leadership of wolf packs. Made from recycled materials.',
    price: 40,
    image: '/images/pack-leader-tee.jpg',
    tags: ['Limited Edition', 'Recycled'],
  },
  {
    id: 3,
    name: 'Wilderness Guardian',
    description: 'Premium eco-friendly t-shirt with our award-winning wolf sanctuary artwork.',
    price: 45,
    image: '/images/wilderness-guardian-tee.jpg',
    tags: ['Premium', 'Eco-friendly'],
  },
  {
    id: 4,
    name: 'Howl at the Moon',
    description: 'Night-themed design featuring a wolf howling at the moon. Made with sustainable practices.',
    price: 35,
    image: '/images/howl-moon-tee.jpg',
    tags: ['Sustainable', 'Unisex'],
  },
];

const Shop = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Shop Our Collection
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Every purchase directly supports our wolf conservation efforts in Alaska.
            Our t-shirts are ethically made using sustainable materials.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
                elevation={0}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: 600 }}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {product.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          backgroundColor: 'background.default',
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: 'primary.main' }}
                  >
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Shop; 
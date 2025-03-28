import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    bio: 'With over 15 years of experience in wildlife conservation, Sarah leads our efforts to protect Alaska\'s wolves through research and community engagement.',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Lead Researcher',
    bio: 'A renowned wildlife biologist specializing in wolf behavior and ecology, Michael heads our research initiatives and habitat preservation programs.',
    image: '/images/team/michael.jpg',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Education Coordinator',
    bio: 'Emma develops and delivers our educational programs, sharing her passion for wolf conservation with schools and communities across Alaska.',
    image: '/images/team/emma.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Conservation Specialist',
    bio: 'James works directly with local communities and stakeholders to implement sustainable conservation practices and protect wolf habitats.',
    image: '/images/team/james.jpg',
  },
];

const About = () => {
  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Mission Section */}
        <Box sx={{ mb: 12, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            Founded in 2015, Argosta has been at the forefront of wolf conservation in Alaska,
            combining scientific research with community engagement to protect these magnificent creatures.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Our Mission',
                content: 'To ensure the long-term survival of Alaska\'s wolf populations through research, education, and conservation initiatives.',
              },
              {
                title: 'Our Vision',
                content: 'A future where wolves thrive in their natural habitats, coexisting harmoniously with local communities.',
              },
              {
                title: 'Our Impact',
                content: 'We\'ve protected over 1,000 square miles of wolf habitat and educated more than 10,000 students about wolf conservation.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.content}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              mb: 6,
            }}
          >
            Meet the dedicated professionals working to protect Alaska's wolves
          </Typography>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      border: '4px solid',
                      borderColor: 'background.paper',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {member.bio}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 
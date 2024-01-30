import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import {
  Grid,
  Typography,
  makeStyles,
  LinearProgress,
  ThemeProvider,
} from '@material-ui/core';
import styles from './App.module.scss';
import { createTheme } from '@material-ui/core/styles';

type RatingInfo = {
  feature: string;
  rating: number;
};

const theme = createTheme({
  typography: {
    body2: {
      fontFamily: ['"Work Sans"', 'sans-serif'].join(','),
      fontSize: 16,
      fontWeight: 'regular',
    },
  },
});

const MakeUpValue: RatingInfo[] = [
  { feature: 'Location', rating: 4.0 },
  { feature: 'Safety', rating: 4.5 },
  { feature: 'Value', rating: 4.5 },
  { feature: 'Maintanance', rating: 4.0 },
  { feature: 'Communication', rating: 4.0 },
  { feature: 'Conditions', rating: 3.5 },
];

export default function App(): ReactElement {
  // const {bar} = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.detail}>
        <Grid
          className={styles.infoContainer}
          container
          spacing={2}
          direction='row'
        >
          {MakeUpValue.map(({ feature, rating }: RatingInfo, index) => (
            <Grid
              className={styles.info}
              item
              xs={12}
              md={6}
              lg={6}
              key={index}
            >
              <Grid
                className={styles.individualInfo}
                container
                spacing={0}
                direction='row'
              >
                <Grid item xs={3} md={3} lg={3}>
                  <Typography variant='body2'>
                    {feature.charAt(0).toUpperCase() + feature.slice(1)}
                  </Typography>
                </Grid>
                <Grid item xs={5} md={9} lg={9}>
                  <Box
                    className={styles.barContainer}
                    display='flex'
                    alignItems='center'
                  >
                    <Box mr={1} sx={{ width: '90%' }}>
                      <LinearProgress
                        color='inherit'
                        className={styles.bar}
                        variant='determinate'
                        value={rating * 20}
                      />
                    </Box>
                    <Box minWidth={35}>
                      <Typography
                        className={styles.aveRating}
                        variant='body2'
                        color='textSecondary'
                      >{`${rating.toFixed(1)}`}</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

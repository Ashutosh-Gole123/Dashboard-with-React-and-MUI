import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { sector_type, states, year } from "../../data/data";
import { Grid, Paper, Typography, useTheme } from "@mui/material";

export default function YearWise() {
    const theme = useTheme();
  
    return (
      <>
        {" "}
        <Grid container spacing={2} >
          
         <Grid
            item
            xs={12}
            md={12}
            xl={12}
            sx={{
              height: "80vh",
              marginTop: theme.spacing(2),
              padding: theme.spacing(5),
              bgcolor: "#1A2027",
              "@media (max-width: 600px)": {
                height: "40vh",
              },
            }}
          >
            <Paper
              square
              elevation={0}
              sx={{
                alignItems: "center",
                height: 50,
                textAlign: "center",
                bgcolor: "#1A2027",
              }}
            >
              <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
                Year-Wise Graph
              </Typography>
            </Paper>
  
            <ResponsivePie
              data={year}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              theme={{
                tooltip: {
                  color: "black",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "white",
                    },
                  },
                  legend: {
                    text: {
                      fill: "white",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "white",
                      strokeWidth: 1,
                    },
                    text: {
                      fill: "white",
                    },
                  },
                },
                legends: {
                  text: {
                    fill: "white",
                  },
                },
              }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              colors={{ scheme: "category10" }}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#fff"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor="black"
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </Grid>
        </Grid>
      </>
    );
  }
  